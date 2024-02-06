import { TLoadingStatusOptions } from "../hooks/https.hook";

export interface IUserCardProps {
    loadingStatus: TLoadingStatusOptions;
}

export interface IRegistrationData {
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    city: string;
    birthday: string | Date;
    role: string[];
}
