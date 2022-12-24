import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CovalentModule } from './covalent/covalent.module';

@Module({
  imports: [CovalentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
