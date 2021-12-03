import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

import { UserDto, usersResourcePath } from '@velio/velio-model';
import { AuthService } from '../auth/auth.service';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  @Get('')
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.authService.findAll();
  }
}
