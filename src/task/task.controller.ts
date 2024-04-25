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
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {

  constructor (private readonly taskService: TaskService){}

  @Post()
  public create(@Body() taskDTO:TaskDTO) {
    return this.taskService.create(taskDTO);
  }

  @Get()
  findAll(){
    return this.taskService.findAll();
  }
}
