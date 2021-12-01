import { Role, Gender } from "./enums";

export interface User {
    id?: number;
    name: string;
    surname: string;
    age?: number;
    dateOfBirth?: Date | string;
    address?: Address;
    role?: Role;
    username?: string;
    profilePhotoUrl?: string;
    companies?: Company[];
    gender?: Gender;
}

interface Address {
    city: string;
    street: string;
    postalCode: string;
}

interface Company {
    id: number;
    name: string;
    description: string;
    location: Address;
}