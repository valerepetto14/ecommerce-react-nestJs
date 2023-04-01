import { IsNotEmpty, IsOptional, MinLength, IsEmail, IsPhoneNumber } from 'class-validator';

export class RegisterDto {
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsPhoneNumber('UY')
    numberPhone: string;

    @IsNotEmpty()
    password: string;
}