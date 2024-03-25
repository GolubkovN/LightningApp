export enum EHomeStackScreens {
  HOME = 'Home',
}

export enum EMenuStackScreens {
  MENU = 'Menu',
}

export enum EAppTabsRoutes {
  HOME_STACK = 'HOME',
  MENU_STACK = 'MENU',
  BAG_STACK = 'BAG',
}

export enum EAppRoutes {
  APP_TABS = 'APP_TABS',
}

export interface ITabBarIconProps {
  icon: string;
  focused?: boolean;
  color?: string;
  size?: number;
}
