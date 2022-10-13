export type MenuItemId = number;

export interface MenuItem {
    id: MenuItemId,
    label: string,
    href: string,
}

export interface NavigationLinkProps {
    href: string,
    label: string,
    handleCloseNavMenu: any,
    isRow: boolean
}

export type MenuItems = Array<MenuItem>;