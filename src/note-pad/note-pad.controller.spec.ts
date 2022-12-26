import { Test, TestingModule } from '@nestjs/testing';
import { NotePadController } from './note-pad.controller';

describe('NotePadController', () => {
  let controller: NotePadController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotePadController],
    }).compile();

    controller = module.get<NotePadController>(NotePadController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
