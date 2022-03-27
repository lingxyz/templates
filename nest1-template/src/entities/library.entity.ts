import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Library {
  @PrimaryGeneratedColumn()
  id: number;
  // 姓名
  @Column()
  name: string;
  // 需求id
  @Column()
  hcId: number;
  // 面试结果：-1淘汰 0 流程中 1录用
  @Column({ default: 0 })
  result: number;
  // 评价
  @Column({ default: '' })
  evaluate: string;
  // 录入日期
  @CreateDateColumn({comment: '创建时间' })
  createAt: Date;
}