import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeadcountService } from './headcount.service';
import { HeadcountController } from './headcount.controller';
import { Headcount } from '../../entities/headcount.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Headcount])],
  providers: [HeadcountService],
  controllers: [HeadcountController],
})
export class HeadcountModule {}