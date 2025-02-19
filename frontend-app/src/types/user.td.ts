export interface IUser {
    useremail: {
        email: string;
        is_verified: boolean;
        is_primary: boolean;
        webeze_newsletter: boolean;
    };
    password: string;
    trusted_ip_address: {
        ip: string;
        trusted: boolean;
    }[];
    timezone: string;
    username: string | null;
    phone: string | null;
    location: string | null;
    last_location: string | null;
    last_login: string | null;
    id: string;
    created_at: string;
    updated_at: string;
    role: "USER" | "ADMIN" | "MODERATOR"; // Add more roles if necessary
    social_login: {
        active: boolean;
        platform: {
            google: boolean;
            facebook: boolean;
        };
    };
    active: boolean;
    session_count: number;
    two_fact_auth: {
        is_configured: boolean;
    };
    can_use_default_password: boolean;
    onboard: boolean;
    dashboard_tour: boolean;
}
