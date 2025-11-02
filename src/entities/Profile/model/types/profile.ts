import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

export interface Profile {
    _id: string;
    userId: string;
    firstname: string;
    lastname: string;
    currency: Currency;
    country: Country;
    city: string;
    avatar: string;
    age: number;
}

export interface ProfileSchema {
    userData?: Profile;
    formData?: Profile;
}
