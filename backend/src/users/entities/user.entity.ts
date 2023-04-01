import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column({ length: 30 })
    firstname: string;

    @Column({ length: 30 })
    lastname: string;
    
    @Column('text')
    email: string;

    @Column('text')
    numberPhone: string;

    @Column()
    password: string;

    @Column({ default: true })
    isActive: boolean;


    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updatedAt: Date;
}
