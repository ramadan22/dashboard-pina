import classNames from 'classnames/bind';
import Image from 'next/image';

import styles from '@/assets/styles/Footer.module.scss';

import OjkImage from '@/assets/images/ojk.png';
import IdxImage from '@/assets/images/idx.png';
import IdClearImage from '@/assets/images/idClear.png';
import SipfImage from '@/assets/images/sipf.png';
import KseiImage from '@/assets/images/ksei.png';

const Footer = () => {
  const cx = classNames.bind(styles);
  const classes = cx(styles.wrap);

  return (
    <div className={classes}>
      <div>
        <Image src={OjkImage} alt="" />
        <Image src={IdxImage} alt="" />
        <Image src={KseiImage} alt="" />
        <Image src={IdClearImage} alt="" />
        <Image src={SipfImage} alt="" />
      </div>
      <div>
        <span>Copyright © 2022 PT Pina Aplikasi Bersama</span>
      </div>
    </div>
  );
};

export default Footer;
