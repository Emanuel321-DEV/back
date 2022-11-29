import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ){}

    async login(user){
        const payload = { sub: user.id, email: user.email }
        return {
            token: this.jwtService.sign(payload),
            user,
        }
    }

    async validateUser(email: string, password: string){

        let user: User;

        try{ 
            user = await this.userService.findOne(email)
        } catch(error){
            return null;
        }

        const isPasswordValid = password === user.password;

        if(!isPasswordValid) return null;

        return user;



    }


}
