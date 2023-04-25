import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "secret",
    });
  }

  //per strategjine jwt Passport si fillim verifikon signiture e JWT dhe dekodon JWT
  //pastaj therret metoden validate dhe i kalon token te dekoduar.
  

  async validate(payload: any) {
    console.log("payload------");
    return { userId: payload.sub, username: payload.username };
  }
}