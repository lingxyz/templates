import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Headcount } from '../../entities/headcount.entity';
import { CreateHeadcountDto } from './create-headcount.dto'

@Injectable()
export class HeadcountService {
  constructor(
    @InjectRepository(Headcount)
    private headcountRepository: Repository<Headcount>
  ) {}
  // 获取招聘需求列表
  getHeadcount(): Promise<Headcount[]> {
    return this.headcountRepository.find();
  }
  // 保存/修改1条需求
  async saveHeadcount(createHeadcountDto: CreateHeadcountDto) {
    const headcount = new Headcount();
    headcount.post = createHeadcountDto.post;
    headcount.level = createHeadcountDto.level;
    headcount.project = createHeadcountDto.project;
    try {
      if (createHeadcountDto.id) {
        console.log(1111, createHeadcountDto.id)
        await this.headcountRepository.update(createHeadcountDto.id, headcount)
        return '修改成功';
      } else {
        await this.headcountRepository.save(headcount);
        return '保存成功';
      }
    } catch (error) {
      // throw new httpException: todo
    }
  }

  // 删除1条需求
  async deleteHeadcount(createHeadcountDto: CreateHeadcountDto) {
    const headcount = new Headcount();
    headcount.id = createHeadcountDto.id;
    try {
        await this.headcountRepository.delete(headcount)
        return '删除成功';
    } catch (error) {
      // throw new httpException: todo
    }
  }
}
