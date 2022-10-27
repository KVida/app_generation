export type MenuItemId = number;

export interface MenuItemElement {
    id: MenuItemId,
    label: string,
    href: string,
}

export type MenuItems = Array<MenuItemElement>;

export type NavigationLinkVariant = 'vertical' | 'horizontal';