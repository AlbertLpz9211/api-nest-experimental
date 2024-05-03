import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @UsePipes()
  public createTask(@Body() taskDTO: TaskDTO) {

    
    
    // throw new BadRequestException('Error en la peticion');

    // throw new HttpException('error en la peticion', HttpStatus.BAD_REQUEST)

    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     reject('error en la peticion');
    //   }, 2000);
    // });

    // return this.taskService.create(taskDTO);
  }

  @Get()
  public findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  public findById(@Param('id') id: string) {
    return this.taskService.findById(id);
  }

  @Put(':id')
  public updateById(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
    return this.taskService.update(id, taskDTO);
  }

  @Delete(':id')
  public deleteById(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
