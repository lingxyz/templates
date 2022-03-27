import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibraryService } from './library.service';
import { LibraryController } from './library.controller';
import { Library } from '../../entities/library.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Library])],
  providers: [LibraryService],
  controllers: [LibraryController],
})
export class LibraryModule {}