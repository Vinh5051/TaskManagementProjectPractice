import {Entity, BaseEntity, ManyToOne, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {User} from 'src/domain/user';
import {Epic} from 'src/domain/epic/entities';
import { type } from 'os';

export enum FeatureStatus {
    TODO = 'TO DO',
    IN_PROGRESS = 'IN PROGRESS',
    DONE = 'DONE',
    BUG = 'BUG',
}

@Entity()
export class Feature extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column({ nullable: false })
    description: string;

    @Column({default: 0})
    priority: number;

    @Column({ default: FeatureStatus.TODO })
    status: FeatureStatus;

    @ManyToOne(type => User)
    auth: User;

    @ManyToOne(type => User)
    user: User;

    @ManyToOne(type => Epic)
    epic: Epic;

    @CreateDateColumn({type: 'timestamp'})
    createat: Date;

    @UpdateDateColumn({type: 'timestamp'})
    updateat: Date;
}
