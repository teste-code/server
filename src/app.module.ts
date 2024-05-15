import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoundsModule } from './sounds/sounds.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SoundsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
