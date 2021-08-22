import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Headcount } from './entities/headcount.entity';
import { HeadcountModule } from './modules/headcount/headcount.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '00000000',
      database: 'recruit',
      // entities: [Headcount],
      autoLoadEntities: true,
      // entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      logging: true
    }),
    HeadcountModule,
  ],
})
export class AppModule {}
