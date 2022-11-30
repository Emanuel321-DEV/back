import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RegisteredTimeService } from './registered_time.service';
import { CreateRegisteredTimeDto } from './dto/create-registered_time.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('registered-time')
@UseGuards(AuthGuard('jwt'))
export class RegisteredTimeController {
  constructor(private readonly registeredTimeService: RegisteredTimeService) {}

  @Post()
  create(@Body() createRegisteredTimeDto: CreateRegisteredTimeDto) {
    return this.registeredTimeService.create(createRegisteredTimeDto);
  }

  @Get()
  findAll() {
    return this.registeredTimeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registeredTimeService.findOne(+id);
  }

}
