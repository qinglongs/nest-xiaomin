import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotePadController } from './note-pad/note-pad.controller';

@Module({
  imports: [],
  controllers: [AppController, NotePadController],
  providers: [AppService],
})
export class AppModule {}
