export interface ISession {
    user_id: string;
    ip: string;
    session_token: {
        token: string;
        expiry: string;
    };
    refresh_token: {
        token: string;
        expiry: string;
    };
    user_agent: {
        os: string;
        source: string;
        browser: string;
        version: string;
        platform: string;
    };
    id: string;
    created_at: string;
    updated_at: string;
}
