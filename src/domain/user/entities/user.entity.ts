import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

const enum Role {
    DEV = 'DEVELOPER',
    PO = 'PROJECT OWNER',
    SM = 'SCRUM MASTER',
}

@Entity()
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
    phonenumber: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    @CreateDateColumn({type: 'timestamp'})
    public cretaeat: Date;

    @UpdateDateColumn({ type: 'timestamp'})
    public updateat: Date;

    @BeforeInsert()
    async hashPassword() {
        this.salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, this.salt);
    }

    async validatePassword(password: string): Promise<boolean> {
        return await bcrypt.compare(password, this.password);
    }

}
