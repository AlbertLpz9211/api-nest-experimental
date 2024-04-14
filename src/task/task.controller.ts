import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('api/v1/task')
export class TaskController {
  @Post()
  public method(@Body() body: any) {
    return body;
  }
}
