import { IsNotEmpty, IsOptional, MaxLength } from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty()
    @MaxLength(30)
    title: string;

    @IsNotEmpty()
    @MaxLength(100)
    description: string;

    @IsNotEmpty()
    price: string;

    @IsNotEmpty()
    image: string;

    @IsOptional()
    ofert: number;

    @IsNotEmpty()
    isActive: boolean;

    @IsNotEmpty()
    categoryId: string
}
