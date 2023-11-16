import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CpuModule } from './cpu/cpu.module';

@Module({
  imports: [CpuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
