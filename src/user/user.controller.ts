import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  @Post('/login')
  login(): string {
    throw new HttpException('error', HttpStatus.BAD_REQUEST);
  }

  @Post('/info')
  info(): string {
    return '用户信息';
  }

  @Post('/register')
  register(): string {
    return '注册';
  }

  @Put('reset-password')
  resetPassword() {
    return '重置密码';
  }
}
