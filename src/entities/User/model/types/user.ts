export interface User {
    _id: string;
    username: string;
    email: string;
    createdAt: string;
}

export interface UserSchema {
    userData?: User;
    _inited: boolean;
}
