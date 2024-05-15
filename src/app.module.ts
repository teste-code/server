import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoundsModule } from './sounds/sounds.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { DatabaseController } from './database/database.controller';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [SoundsModule, AuthModule, UserModule, DatabaseModule],
  controllers: [AppController, DatabaseController],
  providers: [AppService],
})
export class AppModule {}
