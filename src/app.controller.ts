import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { UserDto } from './DataTransferObject/UserDTO';
import { LocalAuthGuard } from './localStrategy/local-auth.guard';
import { JwtAuthGuard } from './localStrategy/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { Public } from './custom_decorators/public.routes';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  //Built-in Passport Guards eshte AuthGuard
  //1:kufizon rutet qe useri jo i autentifikuar mos te aksesoje dhe per kete do vendosim Guard
  //2: iniciohet hapi i autentifikimit, leshohet nj TOKEN per nje user valid
  // Moduli @nestjs/passport mundeson nje build in Guard , ky Guard  therret Passport strategjine dhe ben (merr kredencialet, ekzek verify function krijon user prop)
  //

  //route login eshte dekoruar me AuthGuard i cili eshte buildin dhe qe mundesoh nga passport-local strategji
  //kjo do te thote qe route handler do thirret vetem kur te kemi nje user qe eshte i validuar
  // parametri req do te kete nje props user qe mundesohet nga passport-local

  //@UseGuards(AuthGuard('local'))
  @UseGuards(LocalAuthGuard)
  @Public()
  @ApiBody({
    description: 'This is the description of body parameters',
    type: UserDto,
    required: true,
  })
  @Post('auth/login')
  login(@Request() req) {
    // return req.user;
    return this.authService.login(req.user);
  }

  //kur aksesohet ky route Guard automatikisht therret strategjine qe e kemi konfiguruar
  //validon token dhe fut userin ne Request

  //@UseGuards(AuthGuard('jwt'))
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
    //return this.authService.login(req.user);
  }

  @Public()
  @Get('public')
  findAll() {
    return " the route is public ";
  }
}
