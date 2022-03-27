import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProcessService } from './process.service';
import { CreateProcessDto } from './create-process.dto'

@Controller('process')
export class ProcessController {
  constructor(private readonly processService: ProcessService) {}

  @Get()
  async getProcess() {
    return await this.processService.getProcess();
  }
  @Post('/save')
  async setProcess(@Body() createProcessDto: CreateProcessDto) {
    return await this.processService.saveProcess(createProcessDto);
  }
}
