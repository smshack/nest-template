import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Test2Module } from './modules/test2/test2.module';

@Module({
  imports: [Test2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
