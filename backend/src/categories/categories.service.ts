import { Injectable, BadRequestException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectRepository (Category) private readonly categoryRepository: Repository<Category>,
  ) {}

  create(createCotegoryDto: CreateCategoryDto) {
    try {
      const newCategory = this.categoryRepository.create(createCotegoryDto);
      return this.categoryRepository.save(newCategory);
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  findAll() {
    return `This action returns all cotegories`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cotegory`;
  }

  update(id: number, updateCotegoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} cotegory`;
  }

  remove(id: number) {
    return `This action removes a #${id} cotegory`;
  }
}
