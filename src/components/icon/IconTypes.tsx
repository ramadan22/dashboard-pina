import ArrowDown from '@/public/assets/icons/ArrowDown.svg';
import ArrowUp from '@/public/assets/icons/ArrowUp.svg';
import ArrowLeft from '@/public/assets/icons/ArrowLeft.svg';
import Search from '@/public/assets/icons/Search.svg';
import Mail from '@/public/assets/icons/Mail.svg';
import Invest from '@/public/assets/icons/Invest.svg';
import User from '@/public/assets/icons/User.svg';
import Home from '@/public/assets/icons/Home.svg';
import Logout from '@/public/assets/icons/Logout.svg';
import Minus from '@/public/assets/icons/Minus.svg';
import Plus from '@/public/assets/icons/Plus.svg';
import Shield from '@/public/assets/icons/Shield.svg';
import LineUp from '@/public/assets/icons/LineUp.svg';
import Timeline from '@/public/assets/icons/Timeline.svg';
import BuyCart from '@/public/assets/icons/BuyCart.svg';
import Hamburger from '@/public/assets/icons/Hamburger.svg';

export type IconType =
  | 'ArrowDown'
  | 'ArrowUp'
  | 'Search'
  | 'Mail'
  | 'Invest'
  | 'User'
  | 'Home'
  | 'Logout'
  | 'Minus'
  | 'Plus'
  | 'Shield'
  | 'LineUp'
  | 'Timeline'
  | 'ArrowLeft'
  | 'BuyCart'
  | 'Hamburger'
  | string;

export const IconTypes = new Map([
  ['ArrowDown', <ArrowDown />],
  ['ArrowUp', <ArrowUp />],
  ['Search', <Search />],
  ['Mail', <Mail />],
  ['Invest', <Invest />],
  ['User', <User />],
  ['Home', <Home />],
  ['Logout', <Logout />],
  ['Minus', <Minus />],
  ['Plus', <Plus />],
  ['Shield', <Shield />],
  ['LineUp', <LineUp />],
  ['Timeline', <Timeline />],
  ['Hamburger', <Hamburger />],
  ['BuyCart', <BuyCart />],
  ['ArrowLeft', <ArrowLeft />],
]);
