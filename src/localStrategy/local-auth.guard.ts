import { Injectable,UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {

    handleRequest(err, user, info) {

        console.log("user-----",user);

        if (err || !user) {
          throw err || new UnauthorizedException();
        }
        return user;
      }
}