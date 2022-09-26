type TNavProp = {
    title: string;
}

type TNavItem = {
    id: number;
    name: string;
    slug: string;
    icon?: string;
    className?: string;
    parent?: number;
    children?: TNavItem[];
}

export type {
    TNavProp,
    TNavItem
};