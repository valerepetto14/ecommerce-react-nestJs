import { BadRequestException, HttpException } from '@nestjs/common';

export const INCORRECT_CREDENTIALS = new HttpException(
    'Incorrect credentials',
    401,
);
