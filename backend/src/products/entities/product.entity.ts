import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from 'src/categories/entities/category.entity';

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 30, unique: true, nullable: false })
    title: string;

    @Column({ length: 60, nullable: false })
    description: string;

    @Column('text', { nullable: false })
    price: string;

    @Column('text', { nullable: false })
    image: string;

    @Column({ default: 0 })
    ofert: number;

    //category
    @ManyToOne(() => Category, (category) => category.products)
    category: Category;

    @Column({ default: true })
    isActive: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
