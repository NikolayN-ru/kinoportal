require('dotenv').config({ path: `.env.local` });
import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { AppModule } from '../app.module';
import { ClientProxy, ClientsModule, Transport } from '@nestjs/microservices';
import * as fs from 'fs';
import * as path from 'path';

describe('Photo Servise', () => {
    let app: INestApplication;
    let clientPhoto: ClientProxy;
    let countBefore, countAfter
    let idAddActor;
    let fileStream;

    beforeAll(async () => {

        fs.readFile(path.resolve(__dirname,'test1.jpg'), (err,data)=>{
          fileStream = {
            buffer: {
              data: data
            }
          }
        })

        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [
                AppModule,
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
          }).compile();
      
          app = moduleFixture.createNestApplication();
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
        
          clientPhoto = app.get('Photo');
          await clientPhoto.connect();
    });

    it(`Запуск сервера`, async () => {
        expect(app).toBeDefined();
    });

    it(`Добавление файла`, async () => {  
        
        let data = {
          assenceTable: 'actor',
          assenceId: 3212,
          files: [{
            originalname: 'test.jpg',
            ...fileStream
          }]
        }
        
        const response = await clientPhoto.send('add.file', data).toPromise();
        const filesAfter = await clientPhoto.send('get.files', {assenceTable: 'actor', arrActors: [3212],}).toPromise();
        expect(response).toBe('Добавлено');
        expect(filesAfter.length).not.toBe(0);
    })


    it(`Удаление файла`, async () => {  
        
      let data = {
        assenceTable: 'actor',
        assenceId: 3212
      }
      
      const response = await clientPhoto.send('delete.files', data).toPromise();
      const filesAfter = await clientPhoto.send('get.files', {assenceTable: 'actor', arrActors: [3212],}).toPromise();
      expect(response).toBe('Удалено');
      expect(filesAfter.length).toBe(0);
  })
    

    afterAll(async () => {
        await app.close();
        await clientPhoto.close();
    });

})
