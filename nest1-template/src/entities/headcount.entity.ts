import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Headcount {
  @PrimaryGeneratedColumn()
  id: number;
  // 岗位类型
  @Column()
  post: string;
  // 职级
  @Column()
  level: number;
  // 项目
  @Column()
  project: string;
  // 原因
  @Column({ default: '离职补充' })
  reason: string;
  // 负责人
  @Column({ default: '张凌' })
  head: string;
  // 优先级：1 紧急 2 较紧急 3 不紧急
  @Column({ default: 3 })
  priority: number;
  // 状态：1 待申请 2 待发布 3 招聘中 4 已关闭
  @Column({ default: 3 })
  status: number;
}