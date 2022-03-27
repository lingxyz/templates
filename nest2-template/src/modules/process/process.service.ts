import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { Process } from '../../entities/process.entity';
import { Headcount } from '../../entities/headcount.entity';
import { Library } from '../../entities/library.entity';
import { CreateProcessDto } from './create-process.dto'

@Injectable()
export class ProcessService {
  constructor(
    @InjectRepository(Process)
    private processRepository: Repository<Process>,
  ) {}
  // 获取候选人列表
  async getProcess(): Promise<any> {
    return await createQueryBuilder(Library)
      .leftJoinAndSelect(Headcount, 'headcount', 'headcount.id = library.hcId')
      .leftJoinAndSelect(Process, 'process', 'process.candidateId = library.id')
      .select(`
        any_value(library.createAt) as createAt,
        any_value(library.hcId) as hcId,
        any_value(library.id) as id,
        any_value(library.name) as name,
        any_value(library.result) as result,
        any_value(library.evaluate) as evaluate,
        any_value(headcount.head) as head,
        any_value(headcount.level) as level,
        any_value(headcount.post) as post,
        any_value(headcount.priority) as priority,
        any_value(headcount.project) as project,
        max(process.process) as process,
        any_value(process.evaluate) as evaluate
      `)
      .groupBy('process.candidateId')
      .getRawMany();
  }
  // 保存/修改1条记录
  async saveProcess(createProcessDto: CreateProcessDto) {
    const process = new Process();
    process.candidateId = createProcessDto.id;
    process.process = createProcessDto.process;
    process.evaluate = createProcessDto.evaluate;

    const data = await this.processRepository.find({candidateId: process.candidateId, process: process.process});

    try {
      if (data.length) {
        await this.processRepository.update(process.candidateId, process)
        return '修改成功';
      } else {
        await this.processRepository.save(process);
        return '保存成功';
      }
    } catch (error) {
      // throw new httpException: todo
    }
  }
}
