import { Controller, Get, Post, Body } from '@nestjs/common';
import { HeadcountService } from './headcount.service';
import { CreateHeadcountDto } from './create-headcount.dto'

@Controller('headcount')
export class HeadcountController {
  constructor(private readonly headcountService: HeadcountService) {}

  @Get()
  getHeadcount() {
    return this.headcountService.getHeadcount();
  }
  @Post('/save')
  async setHeadcount(@Body() createHeadcountDto: CreateHeadcountDto) {
    return await this.headcountService.saveHeadcount(createHeadcountDto);
  }
  @Post('/delete')
  async deleteHeadcount(@Body() createHeadcountDto: CreateHeadcountDto) {
    return await this.headcountService.deleteHeadcount(createHeadcountDto);
  }
}
