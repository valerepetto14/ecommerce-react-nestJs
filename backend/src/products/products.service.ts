import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan } from 'typeorm';
import { Category } from '../categories/entities/category.entity';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository (Product) private readonly productRepository: Repository<Product>,
    @InjectRepository (Category) private readonly categoryRepository: Repository<Category>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    try {
      const isProductExist = await this.productRepository.findOne({ 
        where: {
          title: createProductDto.title
        }
      });
      if(!isProductExist) {
        console.log('product not exist')
        const category = await this.categoryRepository.findOne({
          where : {
            id : createProductDto.categoryId
          }
        })
        if(category){
          console.log('category exists')
          let dataProduct = {
            title: createProductDto.title,
            description: createProductDto.description,
            price: createProductDto.price,
            category: category,
            image: createProductDto.image
          }
          if(createProductDto.ofert){
            dataProduct['ofert'] = createProductDto.ofert
          }
          let newProduct = this.productRepository.create(dataProduct)
          return this.productRepository.save(newProduct)
        } else {
          console.log('category not exists')
          throw new BadRequestException('Category not exists')
        }
      } else {
        console.log('product exist')
        throw new BadRequestException('Product already exists')
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async findAll(queryParams) {
    try {
      let page = queryParams.page ? Number(queryParams.page) : 1
      let limit = queryParams.limit ? Number(queryParams.limit) : 10
      let categoryTitle = queryParams.category ? queryParams.category : null
      let ofert = queryParams.ofert ? Number(queryParams.ofert) : null;

      let where = {}
      if(categoryTitle){
        where['category.title'] = { title: categoryTitle }
      }
      if(ofert){
        where['ofert'] = ofert
      }

      let products =  await this.productRepository.find({
        where: where,
        relations: ['category'],
        skip: (page - 1) * limit,
        take: limit
      })

      let totalProducts = await this.productRepository.count()

      let response = {
        products: products,
        totalPages: Math.ceil(totalProducts / limit),
        page: page,
        limit: limit
      }
      return response;
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async findOne(id: string) {
    try {
      const product = await this.productRepository.findOne({
        where: {
          id: id
        },
        relations: ['category']
      })
      if(product){
        return product;
      } else {
        throw new BadRequestException('Product not found')
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async getProductWithOfert(queryParams) {
    try {
      let page = queryParams.page ? Number(queryParams.page) : 1
      let limit = queryParams.limit ? Number(queryParams.limit) : 10
      const products = await this.productRepository.find({
        where: {
          ofert: MoreThan(0)
        },
        relations: ['category'],
        skip: (page - 1) * limit,
        take: limit
      })
      const totalProducts = await this.productRepository.count({
        where: {
          ofert: MoreThan(0)
        }
      })
      return {
        products: products,
        totalPages: Math.ceil(totalProducts / limit),
        page: page,
        limit: limit
      }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
