import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert } from 'typeorm';

export enum EpicStatus {
    TODO = 'TO DO',
    IN_PROGRESS = 'IN PROGRESS',
    DONE = 'DONE',
    BUG = 'BUG',
}

@Entity()
export class Epic extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    nameproject: string;

    @Column()
    title: string;

    @Column({ nullable: false})
    description: string;

    @Column({ default: EpicStatus.TODO})
    status: EpicStatus;

    @CreateDateColumn({ type: 'timestamp'})
    public createat: Date;

    @UpdateDateColumn({ type: 'timestamp'})
    public updateat: Date;

}
