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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {

  constructor (private readonly taskService: TaskService){}

  @Post()
  @UsePipes()
  public create(@Body() taskDTO:TaskDTO) {
    return this.taskService.create(taskDTO);
  }

  @Get()
  findAll(){
    return this.taskService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string){
    return this.taskService.findById(id);
  }

  @Put(':id')
  updateById(@Param('id') id: string, @Body() taskDTO: TaskDTO){
    return this.taskService.update(id, taskDTO)
  }

  @Delete(':id')
  deleteById(@Param('id') id:string){
    return this.taskService.delete(id);
  }
}
