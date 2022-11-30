import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RegisteredTimeModule } from './registered_time/registered_time.module';
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from './user/entities/user.entity';
import { RegisteredTime } from './registered_time/entities/registered_time.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_TYPE,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATA,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      entities: [User, RegisteredTime],
      synchronize: true
    } as TypeOrmModuleOptions),
    UserModule, 
    RegisteredTimeModule, 
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
