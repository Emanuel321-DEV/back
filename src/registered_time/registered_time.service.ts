import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegisteredTimeDto } from './dto/create-registered_time.dto';
import { RegisteredTime } from './entities/registered_time.entity';
import { format } from "date-fns";
import ptBR from 'date-fns/locale/pt-BR';


@Injectable()
export class RegisteredTimeService {
  
  constructor(
    @InjectRepository(RegisteredTime)
    private readonly registeredTimeRepository: Repository<RegisteredTime>
  ){}

  async create(createRegisteredTimeDto: CreateRegisteredTimeDto) {

    const registeredTime = await this.registeredTimeRepository.save(createRegisteredTimeDto);

    return registeredTime;
    
  
  }

  async findAll() {
    
    const allRegisters = await this.registeredTimeRepository.find({
      relations: ['user']
    });

    const registersFormatted = allRegisters.map(register => {
      return {
        ...register,
        timeRegistered: format(new Date(register.timeRegistered), "dd/MM/yy", {
          locale: ptBR,
        }),
        hour: format(new Date(register.timeRegistered), "kk:mm'h'", {
          locale: ptBR,

        })
      }
    })
    
    return registersFormatted


  }

  async findOne(id: number) {
    
    const allRegisters = await this.registeredTimeRepository.find({
      relations: ['user']
    });
    
    const filterRegisterByUser = allRegisters.filter(register => register.user.id === id);
    

    const registersFormatted = filterRegisterByUser.map(register => {
      return {
        ...register,
        timeRegistered: format(new Date(register.timeRegistered), "dd/MM/yy", {
          locale: ptBR,
        }),
        hour: format(new Date(register.timeRegistered), "kk:mm'h'", {
          locale: ptBR,
        })
      }
    })

    
    return registersFormatted

  }
}
