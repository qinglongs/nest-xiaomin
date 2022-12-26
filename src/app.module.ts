import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotePadController } from './note-pad/note-pad.controller';
import { UserController } from './user/user.controller';
import { LoginMiddleware } from './user/user.middleware';

@Module({
  imports: [],
  controllers: [AppController, NotePadController, UserController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoginMiddleware)
      .forRoutes({ path: 'user/login', method: RequestMethod.POST });
  }
}
