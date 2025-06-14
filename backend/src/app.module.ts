import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseService } from './database.service';

@Module({
  controllers: [AppController],
  providers: [DatabaseService],
})
export class AppModule {}
