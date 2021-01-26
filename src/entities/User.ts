import { IsEmail, Length } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, Index, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
    constructor(user: Partial<User>) {
        super();
        Object.assign(this, user);
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Index()
    @IsEmail()
    @Column({ unique: true })
    email: string;

    @Index()
    @Length(3, 255)
    @Column({ unique: true })
    username: string;

    @Index()
    @Column()
    @Length(3, 255)
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updated: Date;
}
