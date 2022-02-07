import {
  Get, Controller, Res, Render,
} from '@nestjs/common';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { Response } from 'express';
import AppService from './app.service';

@ApiTags('App')
@Controller('hello')
export default class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOkResponse({ description: 'Displays hello message' })
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello' };
  }
}
