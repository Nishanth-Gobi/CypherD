import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { CovalentController } from './covalent.controller';
import { CovalentService } from './covalent.service';

describe('CovalentController', () => {
  let controller: CovalentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CovalentController],
      providers: [CovalentService, ConfigService],
    }).compile();

    controller = module.get<CovalentController>(CovalentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
