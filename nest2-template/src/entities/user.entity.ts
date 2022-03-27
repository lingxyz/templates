/**
 * 用户信息
 */

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class User {
   @PrimaryGeneratedColumn()
  id: number;
  // 姓名
  @Column()
  name: string;
  // 真实姓名
  @Column()
  realName: string;
  // 手机号
  @Column()
  phone: number;
  // 密码
  @Column()
  password: string;
  // 部门
  @Column()
  department: string;
  // 创建时间
  @CreateDateColumn({comment: '创建时间' })
  createAt: Date;
  // 修改时间
  @UpdateDateColumn({comment: '修改时间' })
  updateAt: Date;
}