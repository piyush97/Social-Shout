import { IsEmail, Length } from 'class-validator';
import { Entity as TOEntity, Column, Index, BeforeInsert, OneToMany } from 'typeorm';
import bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';

import Entity from './Entity';

@TOEntity('users')
export default class User extends Entity {
    constructor(user: Partial<User>) {
        super();
        Object.assign(this, user);
    }

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
    @Exclude()
    @Length(3, 255)
    password: string;

    @OneToMany(() => Post, (post) => post.user)
    posts: Posts[];

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 6);
    }
}
