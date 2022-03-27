import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessService } from './process.service';
import { ProcessController } from './process.controller';
import { Process } from '../../entities/process.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Process])],
  providers: [ProcessService],
  controllers: [ProcessController],
})
export class ProcessModule {}