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
  constructor(private readonly taskService: TaskService) {}

  @Post()
  public createTaskService(@Body() taskDTO: TaskDTO) {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('something was worng!'), 180000);
    });
    // return this.taskService.createTask(taskDTO);
  }

  @Get()
  findAllService() {
    return this.taskService.findAll();
  }

  @Get(':id')
  findByIdService(@Param('id') id: string) {
    return this.taskService.findById(id);
  }

  @Put(':id')
  updateByIdService(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
    return this.taskService.update(id, taskDTO);
  }
}
