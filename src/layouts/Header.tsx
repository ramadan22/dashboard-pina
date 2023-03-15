import { useState } from 'react';

import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from '@/assets/styles/Header.module.scss';

import { useOpenSidebar } from '@/context/useSidebarMenu';
import Icon from '@/components/icon/Icon';
import { InputAddon } from '@/components/input';
import BoxLabely from '@/components/box-labely/BoxLabely';

import Profile from '@/assets/images/Ellipse-profile.png';

const Header = () => {
  const cx = classNames.bind(styles);
  const classes = cx(styles.wrap);

  const handleOpen = useOpenSidebar((state: any) => state.handle);

  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  const isOpen = cx({
    [styles.open]: openDropdown,
  });

  return (
    <div className={classes}>
      <div>
        <button type="button" onClick={() => handleOpen()}>
          <Icon type="Hamburger" />
        </button>
      </div>
      <div className={isOpen}>
        <InputAddon fullWidth className="!text-[#9E9E9E] !bg-[#F5F7F7]" placeholder="Ketik nama atau simbol saham">
          <Icon type="Search" />
        </InputAddon>
      </div>
      <div className={isOpen}>
        <BoxLabely title="Portfolio" text="130.431.449" />
        <div className="bg-gray-200 pl-[1px]" />
        <BoxLabely title="Buying Power" text="130.431.449" />
      </div>
      <div>
        <div>
          <button type="button" className="text-[#9E9E9E]">
            <Icon type="Mail" size="large" />
          </button>
          <button type="button">
            <Image src={Profile} alt="profile" />
          </button>
        </div>
      </div>
      <div>
        <button type="button" onClick={() => setOpenDropdown(!openDropdown)}>
          {openDropdown ? <Icon type="ArrowUp" /> : <Icon type="ArrowDown" />}
        </button>
      </div>
    </div>
  );
};

export default Header;
