// 面试记录

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Process {
  @PrimaryGeneratedColumn()
  id: number;
  // 候选人id
  @Column()
  candidateId: number;
  // 阶段：0 新建 1 一轮 2 二轮 3 三轮 4 四轮 5 offer 6 入职
  @Column({ default: 0 })
  process: number;
  // 评价
  @Column({ default: '' })
  evaluate: string;
  // 录入日期
  @CreateDateColumn({comment: '创建时间' })
  createAt: Date;
}