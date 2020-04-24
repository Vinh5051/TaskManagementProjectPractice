import {Entity, BaseEntity, ManyToOne, PrimaryGeneratedColumn, Column} from 'typeorm';
import {User} from 'src/domain/user';
import {Epic} from 'src/domain/epic/entities';

export enum featureSatsus {
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

    @Column({ default: featureSatsus.TODO })
    status: featureSatsus;

    @ManyToOne(type => User)
    iduser: User;

    @ManyToOne(type => Epic)
    idepic: Epic;
}
