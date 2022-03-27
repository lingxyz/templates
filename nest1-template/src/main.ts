import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { TransformInterceptor } from './interceptors/transform.interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 绑定拦截器：响应映射
  app.useGlobalInterceptors(new TransformInterceptor());
  // 全局异常捕获
  app.useGlobalFilters(new HttpExceptionFilter());
  // 开启跨域
  app.enableCors();
  const port = 3001;
  await app.listen(port);
  console.log(`server start at: http://localhost:${port}`)
}
bootstrap();
