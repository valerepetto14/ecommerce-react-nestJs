import { Injectable, BadRequestException } from '@nestjs/common';
import { INCORRECT_CREDENTIALS } from 'src/utils/errors';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { User } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from "bcryptjs";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>, private readonly jwtService: JwtService) {} // Inject the User repository this is necesary to use the repository

  async login(body: LoginDto) {
    try {
      const user = await this.userRepository.findOne( { where: { email: body.email } } );
      if(user){
        const isPasswordValid = await bcrypt.compare(body.password, user.password);
        if(isPasswordValid){
          const payload = { email: user.email, id: user.id };
          return {
            access_token: this.jwtService.sign(payload),
          }
        } else {
          throw INCORRECT_CREDENTIALS;
        }
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async register(body: RegisterDto) {
    try {
      //find the user in the database
      const user = await this.userRepository.findOne( { where: { email: body.email } } );
      console.log(user)
      if(!user){
        //create the user
        const newUser = this.userRepository.create({
          email: body.email,
          firstname: body.firstname,
          lastname: body.lastname,
          numberPhone: body.numberPhone,
          password: await bcrypt.hash(body.password, 10),
        });
        return this.userRepository.save(newUser);
      } else {
        throw new BadRequestException('User already exists')
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }
}
