import { ApiProperty } from '@nestjs/swagger';

export class UserDto{
   public id : number
   @ApiProperty()
   public username:string
   @ApiProperty()
   public password:string
}

export class UserDtoType{
   public id : number
   public username:string
   public password:string
}