import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';

 
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy,'local') {
    constructor(private authService: AuthService){
        super()
    }


    //per cdo strategji te implementuar Passport do therasi verify callback,
    //duke implementuar validate function ne therrasim verify callback.
    //per local-strategy Passport pret nje metode validate me parametra username string dhe passport string 


    //kjo passport local strategy ka nje emer default lokal , kete eme e referencojme tek @UseGuards()

    validate(username: string, password: string) {
        console.log("first-----");
        const user =  this.authService.validateUser(username, password);
        if (!user) {
          throw new UnauthorizedException();
        }
        return user;
      }
}