import { BaseEntity } from 'typeorm';
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
    createat: Date;
    updateat: Date;
}
