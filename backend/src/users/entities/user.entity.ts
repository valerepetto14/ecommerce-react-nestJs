import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length: 30, nullable: false })
    firstname: string;

    @Column({ length: 30, nullable: false })
    lastname: string;

    @Column({ length: 50, nullable: false, unique: true })
    email: string;

    @Column('text', { nullable: false })
    numberPhone: string;

    @Column({ nullable: false })
    password: string;

    @Column({ default: null })
    avatar: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
