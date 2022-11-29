import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'nfRGFWNP7N2WydtebD/myVBv1qX5UerPJP9q9Lc8MDM=',
        })
    }

    async validate(payload: any){
        return { id: payload.sub, email: payload.email }
    }

}