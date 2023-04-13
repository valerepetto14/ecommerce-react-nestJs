import {
    Injectable,
    BadRequestException,
    UnauthorizedException,
} from '@nestjs/common';
import { INCORRECT_CREDENTIALS } from 'src/utils/errors';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { User } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private jwtService: JwtService,
    ) {} // Inject the User repository this is necesary to use the repository

    async login(body: LoginDto, req: Request, res: Response) {
        try {
            console.log(body);
            const user = await this.userRepository.findOne({
                where: { email: body.email },
            });
            if (user) {
                const isPasswordValid = await bcrypt.compare(
                    body.password,
                    user.password,
                );
                if (isPasswordValid) {
                    const payload = { email: user.email, id: user.id };
                    const token = this.jwtService.sign(payload);
                    res.cookie('token', token, { httpOnly: true });
                    return {
                        message: 'Login success',
                        user: {
                            id: user.id,
                            email: user.email,
                            firstname: user.firstname,
                            lastname: user.lastname,
                            numberPhone: user.numberPhone,
                        },
                        token,
                    };
                } else {
                    throw INCORRECT_CREDENTIALS;
                }
            }
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async register(body: RegisterDto) {
        try {
            //find the user in the database
            const user = await this.userRepository.findOne({
                where: { email: body.email },
            });
            console.log(user);
            if (!user) {
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
                throw new BadRequestException('User already exists');
            }
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    async verifyToken(req: Request, res: Response) {
        try {
            const token = req.cookies.token;
            console.log('token verify');
            const payload = this.jwtService.verify(token);
            const user = await this.userRepository.findOne({
                where: { email: payload.email },
            });
            if (user) {
                return user;
            } else {
                throw INCORRECT_CREDENTIALS;
            }
        } catch (error) {
            throw new BadRequestException(error.message);
        }
    }

    logout(req: Request, res: Response) {
        res.clearCookie('token');
        return {
            message: 'Logout success',
        };
    }
}
