/**
 * 权限表
 */

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id: number;
  //  权限码
  @Column()
  code: number;
  // 权限名称
  @Column()
  name: string;
  // 创建时间
  @CreateDateColumn({comment: '创建时间' })
  createAt: Date;
  // 修改时间
  @UpdateDateColumn({comment: '修改时间' })
  updateAt: Date;
}