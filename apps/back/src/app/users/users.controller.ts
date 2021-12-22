import {Body, Controller, Get, HttpCode, HttpStatus, Post} from '@nestjs/common';

import { UserDto, usersResourcePath } from '@velio/velio-model';
import { AuthService } from '../auth/auth.service';
import { UsersService } from './users.service';
//comparer users controller & bike controller
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  @Post('signIn')
  @HttpCode(HttpStatus.OK)
  findByEmailAndPassword(@Body() user: UserDto) {
    console.log(user);
    return this.authService.signIn(user);
  }

  @Post('signUp')
  @HttpCode(HttpStatus.OK)
  findAll(@Body()user:UserDto) {
    return this.authService.signUp(user);
  }
}
