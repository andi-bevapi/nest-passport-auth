import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {UsersModule} from "../users/users.module";
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from '../localStrategy/local.strategy';
import {JwtStrategy} from "../localStrategy/jwt.strategy";

@Module({
  imports:[
    UsersModule,
    PassportModule,
    JwtModule.register({
    secret: "secret",
    signOptions: { expiresIn: '60s' },
  }),],
  providers: [AuthService,LocalStrategy,JwtStrategy],
  exports:[AuthService]
})
export class AuthModule {}
