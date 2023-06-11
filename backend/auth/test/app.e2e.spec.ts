import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import {ClientProxy, ClientsModule, Transport} from "@nestjs/microservices";

describe('AppController (e2e)', () => {
    let app: INestApplication;
    let client: ClientProxy;
    const user1 = {
        username: 'Innocent',
        email: 'innocent@gmail.com',
        password: '1234'
    };
    const user2 = {
        username: 'Anatoly',
        email: 'anatoly@gmail.com',
        password: '1234'
    }

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                AppModule,
                ClientsModule.register([
                    {
                        name: 'Auth',
                        transport: Transport.RMQ,
                        options: {
                            urls: [process.env.rabbitMq],
                            queue: 'auth-queue',
                            queueOptions: {
                                durable: false
                            },
                        },
                    },
                ])
            ],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();

        app.connectMicroservice({
            transport: Transport.RMQ,
            options: {
                urls: [process.env.rabbitMq],
                queue: 'auth-queue',
                queueOptions: {
                    durable: false
                }
            }
        });

        await app.startAllMicroservices();
        await app.init();

        client = app.get('Auth');
        await client.connect();

       await client.send('delete.user', {email: user1.email}).toPromise();
       await client.send('delete.user', {email: user2.email}).toPromise();
    })

    afterAll(async () => {
        await client.close();
        await app.close();
    })

    it('auth/registration (POST) should return 201 when all data',async () => {
        const response = await client.send('registration', user1).toPromise();

        expect(response.token).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/);
    });

    it('незарегистрированный пользователь', async () => {
        const response = await client.send('login', user2).toPromise();

        expect(response.message).toStrictEqual( "Незарегистрированный пользоваетель")
    });

    it('неверный пароль', async () => {
        user1.password = '123456';

        const response = await client.send('login', user1).toPromise();

        expect(response.message).toStrictEqual( "Неверный пароль");
    });

    it('пользователь уже сущетсвует', async () => {
        const response = await client.send('registration', user1).toPromise();

        expect(response.message).toStrictEqual( "Пользователь существует");
    });
});
