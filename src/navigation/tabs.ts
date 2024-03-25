import { CatalogStackScreen, HomeStackScreen } from './Stack';
import { EAppTabsRoutes } from './types';

export const tabs = [
  {
    name: EAppTabsRoutes.HOME_STACK,
    icon: 'home',
    component: HomeStackScreen,
  },
  {
    name: EAppTabsRoutes.MENU_STACK,
    icon: 'store',
    component: CatalogStackScreen,
  },
  {
    name: EAppTabsRoutes.BAG_STACK,
    icon: 'backpack',
    component: CatalogStackScreen,
  },
];
