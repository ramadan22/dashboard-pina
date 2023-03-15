import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from '@/assets/styles/Sidebar.module.scss';

import { useOpenSidebar } from '@/context/useSidebarMenu';
import sidebarMenu from '@/data/sidebarMenu.json';
import { ButtonIcon } from '@/components/button';
import Icon from '@/components/icon/Icon';
import PinaLogo from '@/assets/images/pina-logo.png';

const Sidebar = () => {
  const cx = classNames.bind(styles);
  const isOpen: boolean = useOpenSidebar((state: any) => state.isOpen);

  const classes = cx(styles.wrap, {
    [styles.open]: isOpen
  });

  return (
    <div id="except" className={classes}>
      <div>
        <Image src={PinaLogo} alt="pina logo" />
      </div>
      <div>
        {sidebarMenu.map((item) => (
          <div key={item.id}>
            <Link href={{}} passHref legacyBehavior>
              <a className="text-[#9E9E9E]">
                <Icon type={item.icon} size="medium" />
                <label>{item.text}</label>
              </a>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <ButtonIcon>
          <Icon type="Logout" />
        </ButtonIcon>
      </div>
    </div>
  );
};

export default Sidebar;
