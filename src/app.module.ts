import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CovalentModule } from './covalent/covalent.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CovalentModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.production',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
