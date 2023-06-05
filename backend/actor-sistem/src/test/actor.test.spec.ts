require('dotenv').config({ path: `.env.local` });
import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { json } from 'stream/consumers';
import { AddActorDto, AddActorWithImageDto } from 'src/dto/add.actor.dto';
import { PhotoController } from './mock.files.controller';


describe('Actor Servise', () => {
    let app: INestApplication;
    let clientActor: ClientProxy;
    let clientPhoto: ClientProxy;
    let countBefore, countAfter
    let idAddActor;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                AppModule,
                ClientsModule.register([
                  {
                    name: 'Actor',
                    transport: Transport.RMQ,
                    options: {
                      urls: ['amqp://localhost:5672'],
                      queue: 'actor-queue',
                      queueOptions: {
                        durable: false
                      },
                    },
                  },
                ]),
                ClientsModule.register([
                  {
                    name: 'Photo',
                    transport: Transport.RMQ,
                    options: {
                      urls: ['amqp://localhost:5672'],
                      queue: 'photo-queue',
                      queueOptions: {
                        durable: false
                      },
                    },
                  },
                ])
            ],
          controllers: [PhotoController]
          }).compile();
      
          app = moduleFixture.createNestApplication();
      
          app.connectMicroservice({
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://localhost:5672'],
              queue: 'actor-queue',
              queueOptions: {
                durable: false
              }
            }
          });

          app.connectMicroservice({
            transport: Transport.RMQ,
            options: {
              urls: ['amqp://localhost:5672'],
              queue: 'photo-queue',
              queueOptions: {
                durable: false
              }
            }
          });
      
          await app.startAllMicroservices();
          await app.init();
        

          clientActor = app.get('Actor');
          await clientActor.connect();

          clientPhoto = app.get('Photo');
          await clientPhoto.connect();
    });

    it(`Запуск сервера`, async () => {
        countBefore = await clientActor.send('get.all.actor', '').toPromise();
        expect(app).toBeDefined();
    });

    it(`Добавление актера`, async () => {
        let testActer: AddActorWithImageDto= {
            actorDto: {
                firstName: 'test',
                lastName: 'test',
                story: 'test',
                biography: 'test'
            },
            image: []
        }
        
        const response = await clientActor.send('post.actor', testActer).toPromise();
        countAfter = await clientActor.send('get.all.actor', '').toPromise();
        idAddActor = countAfter[countAfter.length-1].actorId
        expect(response).toBe('Добавлен');
        expect(countAfter.length).toBe(countBefore.length+1);
    })

    it(`Добавление актера без имени или фамилии`, async () => {

        let testActer: AddActorWithImageDto= {
            actorDto: {
                firstName: undefined,
                lastName: 'test',
                story: 'test',
                biography: 'test'
            },
            image: []
        }

        const response = await clientActor.send('post.actor', testActer).toPromise();
        expect(response).toStrictEqual({message: "Введите имя и фамилию", status: 400});
    })

    it(`Вывод всех актеров`, async () => {
        const response = await clientActor.send('get.all.actor', '').toPromise();
        expect(response.length).toBe(countBefore.length+1);
    })


    it(`изменение актера `, async () => {

      let actor = {
        actorId: idAddActor,
        firstName: 'test1',
        lastName: 'test2',
        story: 'test3',
        biography: 'test4'
      }

      const response = await clientActor.send('put.actor', actor).toPromise();
      let actorAfter = await clientActor.send('get.actor', idAddActor).toPromise();
      expect(response).toBe('Изменен');
      expect(actorAfter.lastName).toBe('test2');
    })

    it(`изменение актера без фамилии или имени `, async () => {

      let actor = {
        actorId: idAddActor,
        firstName: undefined,
        lastName: 'test',
        story: 'test',
        biography: 'test'
      }

      const response = await clientActor.send('put.actor', actor).toPromise();
      expect(response).toStrictEqual({message: "Введите имя и фамилию", status: 400});
    })

    it(`изменение актера c id которого нет`, async () => {

      let actor = {
        actorId: 3044,
        firstName: 'test',
        lastName: 'test',
        story: 'test',
        biography: 'test'
      }

      const response = await clientActor.send('put.actor', actor).toPromise();
      expect(response).toStrictEqual({message: "Нет актера с таким id", status: 404});
    })

    it(`изменение актера не указав id`, async () => {

      let actor = {
        actorId: undefined,
        firstName: 'test',
        lastName: 'test',
        story: 'test',
        biography: 'test'
      }

      const response = await clientActor.send('put.actor', actor).toPromise();
      expect(response).toStrictEqual({message: "Введите id актера", status: 400});
    })

    it(`удаление актера не указав id`, async () => {

      let actor = {
        actorId: undefined,
      }

      const response = await clientActor.send('delete.actor', actor).toPromise();
      expect(response).toStrictEqual({message: "Введите id актера", status: 400});
    })

    it(`удаление актера id которого не существует`, async () => {

      let actor = {
        actorId: 5432,
      }

      const response = await clientActor.send('delete.actor', actor).toPromise();
      expect(response).toStrictEqual({message: "Нет актера с таким id", status: 404});
    })

    it(`удаление актера`, async () => {

      let actor = {
        actorId: idAddActor,
      }

      const response = await clientActor.send('delete.actor', actor).toPromise();
      let actorAfter = await clientActor.send('get.actor', idAddActor).toPromise();
      console.log(idAddActor);
      expect(response).toBe('Удален');
      expect(actorAfter).toStrictEqual({message: "Нет актера с таким id", status: 404});
    })

    afterAll(async () => {
        await app.close();
        await clientActor.close();
        await clientPhoto.close();
    });

})
