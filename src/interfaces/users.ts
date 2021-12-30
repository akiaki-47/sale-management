import { IBase } from "./base";

export interface IUser extends IBase {
    email: string;
    username: string;
    password: string;
    name: string;
    introduction: string;
    age: number;
    role: Role;
}

export enum Role {
    ADMIN = 3,
    STAFF = 2,
    USER = 1,
}

export interface RegistrationForm extends IBase {
    title: string;
    description: string;
    status: string;
}
