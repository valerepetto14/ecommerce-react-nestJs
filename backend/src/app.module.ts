import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './users/entities/user.entity';
import { Product } from './products/entities/product.entity';
import { Category } from './categories/entities/category.entity';

import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
    imports: [
        UsersModule,
        AuthModule,
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'valentin',
            password: 'valentin',
            database: 'ecommerce',
            entities: [User, Category, Product],
            synchronize: true,
        }),
        ProductsModule,
        CategoriesModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
