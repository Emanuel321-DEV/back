import { Module } from '@nestjs/common';
import { RegisteredTimeService } from './registered_time.service';
import { RegisteredTimeController } from './registered_time.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisteredTime } from './entities/registered_time.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RegisteredTime])],
  controllers: [RegisteredTimeController],
  providers: [RegisteredTimeService]
})
export class RegisteredTimeModule {}
