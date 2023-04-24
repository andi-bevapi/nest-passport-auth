import { Injectable } from '@nestjs/common';
import{UserDtoType} from "../DataTransferObject/UserDTO";

@Injectable()
export class UsersService {
    private readonly users = [
        {
          id: 1,
          username: 'john',
          password: 'john',
        },
        {
          id: 2,
          username: 'maria',
          password: 'guess',
        },
      ];
    
      public findOne(username: string): UserDtoType {
        return this.users.find(user => user.username === username);
      }
}
