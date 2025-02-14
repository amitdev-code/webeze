import { createContext, useContext } from "react";


interface AppConfigContextType {
    tairo: {
        sidebar: {
            circularMenu: {
                enabled: boolean,
                tools: [],
            },
            toolbar: {
                enabled: boolean,
                showTitle: boolean,
                showNavBurger: boolean,
                tools: [],
            },
            navigation: {
                enabled: boolean,
                startOpen: boolean,
                logo?: {
                    component: string,
                    props: { class: string },
                },
                items: [],
            },
        },
    },
}


const AppConfigContext = createContext<AppConfigContextType | null>({
    tairo: {
        sidebar: {
            circularMenu: {
                enabled: false,
                tools: [],
            },
            toolbar: {
                enabled: true,
                showTitle: true,
                showNavBurger: false,
                tools: [],
            },
            navigation: {
                enabled: true,
                startOpen: true,
                items: [],
            },
        },
    },
}
);

export const useAppConfig = () => {
    const context = useContext(AppConfigContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
