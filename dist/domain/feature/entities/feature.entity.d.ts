import { BaseEntity } from 'typeorm';
import { User } from 'src/domain/user';
import { Epic } from 'src/domain/epic/entities';
export declare enum FeatureStatus {
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
    status: FeatureStatus;
    auth: User;
    user: User;
    epic: Epic;
    createat: Date;
    updateat: Date;
}
