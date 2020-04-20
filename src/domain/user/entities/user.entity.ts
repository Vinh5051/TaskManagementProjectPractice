import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, } from 'typeorm';
import * as bcrypt from 'bcrypt';

const enum Role {
    DEV = 'DEVELOPER',
    PO = 'PROJECT OWNER',
    SM = 'SCRUM MASTER',
}

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ nullable: true })
    fistname: string;

    @Column({ nullable: true })
    lastname: string;

    @Column({ nullable: true })
    role: Role;

    @Column({ nullable: true })
    phonenumber: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @CreateDateColumn({type: 'timestamp'})
    public cretaeat: Date;

    @UpdateDateColumn({ type: 'timestamp'})
    public updateat: Date;

    async hashPassword(password: string, salt: string): Promise<string> {
        return await bcrypt.hash(password, salt);
    }

    async validatePassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    }
}
