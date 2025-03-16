/* eslint-disable prettier/prettier */
export interface RequestCustomer {
    user:    { user: User};
    roleApp: RoleApp[];
}

export interface RoleApp {
    id:      number;
    rol:     string;
    user_id: string;
}

export interface User {
    id:                   string;
    aud:                  string;
    role:                 string;
    email:                string;
    email_confirmed_at:   Date;
    phone:                string;
    confirmation_sent_at: string;
    confirmed_at:         Date;
    last_sign_in_at:      Date;
    user_metadata:        UserMetadata;
    created_at:           Date;
    updated_at:           Date;
    is_anonymous:         boolean;
}

export interface UserMetadata {
    email:          string;
    email_verified: boolean;
    phone_verified: boolean;
    sub:            string;
}
