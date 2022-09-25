type TNavProp = {
    title: string;
    data?: TNavItem[];
}

type TNavItem = {
    name: string;
    slug: string;
    level: number;
    icon?: string;
    space?: boolean;
    children?: TNavItem[];
}

export type {
    TNavProp,
    TNavItem
};