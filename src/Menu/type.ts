export type MenuItemId = number;

export interface MenuItem {
    id: MenuItemId,
    label: string,
    href: string,
}

export type MenuItems = Array<MenuItem>;