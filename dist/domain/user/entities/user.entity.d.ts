import { BaseEntity } from 'typeorm';
declare const enum Role {
    DEV = "DEVELOPER",
    PO = "PROJECT OWNER",
    SM = "SCRUM MASTER"
}
export declare class User extends BaseEntity {
    id: string;
    fistname: string;
    lastname: string;
    role: Role;
    phonenumber: number;
    email: string;
    password: string;
    salt: string;
    cretaeat: Date;
    updateat: Date;
    hashPassword(password: string, salt: string): Promise<string>;
    validatePassword(password: string): Promise<boolean>;
}
export {};
