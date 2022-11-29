import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){


    const usersDefault: CreateUserDto[] = [{
      name: "John Doe",
      email: "john@example.com",
      password: "0000000",
      role: "ADM",
    }, 
    {
      name: "Andre Marcos",
      email: "andre@example.com",
      password: "1111111",
      role: "ADM",
    },
    {
      name: "Carla Motta",
      email: "carla@test.com",
      password: "2222222",
      role: "default",
    },
    {
      name: "Cristiane Faria",
      email: "cris.faria@gmail.com",
      password: "3333333",
      role: "default",
    }]

    this.userRepository.find().then(response => {
      const userAlreadyExists = response.some(user => user.email === usersDefault[0].email);

      if(userAlreadyExists){
        return;
      } else{
        this.userRepository.save(usersDefault).then(result => console.log(result));       
      }

    });
  }


  async create(createUserDto: CreateUserDto) {

    try{ 

      const user =  await this.userRepository.save(createUserDto);
      
      return user;;

    } catch(err){
    
      console.log(err);
    
    }

  }

  async findAll() {

    try {

      const allUsers = await this.userRepository.find({
        loadRelationIds: true
      });


      return allUsers;

    } catch(err) {
      console.log(err);
    }
    
  }

  async findOne(email: string) {
    return await this.userRepository.findOne({ 
      where: {
        email
      }
    });
  }


}
