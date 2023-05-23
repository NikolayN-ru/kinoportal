require('dotenv').config();
import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../app.module';
import { check } from 'prettier';
import { ActorService } from './actor.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ActorEntity } from './actor.entity';
const fs = require('fs').promises;

describe('ActorService', () => {
    let service: ActorService
    const mockActorRepository = {
        save: jest.fn().mockImplementation(dto => dto),

    }

    const actor = {
        actorId: 99999999,
        firstName:'testing',
        lastName:'testing',
        story:'testing',
        biography:'testing'
    }




    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ActorService,{
                provide: getRepositoryToken(ActorEntity),
                useValue: mockActorRepository
            }],
        }).compile();
    
        service = module.get<ActorService>(ActorService);

        let file = await fs.readFile('E:/kartinki/_NJRQJlHjuQ.jpg');
        console.log(file);
    
    });



    it(`Create actor without file`, () => {
    });


});