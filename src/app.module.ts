import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { RegisteredTimeModule } from './registered_time/registered_time.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from './user/entities/user.entity';
import { RegisteredTime } from './registered_time/entities/registered_time.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      username: "postgres",
      password: "docker",
      database: "postgres",
      host: "localhost",
      port: 5432,
      entities: [User, RegisteredTime],
      synchronize: true
    }),
    UserModule, 
    RegisteredTimeModule, 
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
