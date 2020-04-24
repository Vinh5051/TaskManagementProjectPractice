import { BaseEntity } from 'typeorm';
import { User } from 'src/domain/user';
import { Epic } from 'src/domain/epic/entities';
export declare enum featureSatsus {
    TODO = "TO DO",
    IN_PROGRESS = "IN PROGRESS",
    DONE = "DONE",
    BUG = "BUG"
}
export declare class Feature extends BaseEntity {
    id: string;
    name: string;
    description: string;
    priority: number;
    status: featureSatsus;
    iduser: User;
    idepic: Epic;
}
