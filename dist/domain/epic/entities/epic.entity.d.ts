import { BaseEntity } from 'typeorm';
import { User } from 'src/domain/user';
export declare enum EpicStatus {
    TODO = "TO DO",
    IN_PROGRESS = "IN PROGRESS",
    DONE = "DONE",
    BUG = "BUG"
}
export declare class Epic extends BaseEntity {
    id: string;
    nameproject: string;
    title: string;
    description: string;
    status: EpicStatus;
    idauth: User;
    createat: Date;
    updateat: Date;
}
