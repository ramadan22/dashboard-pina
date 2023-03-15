import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from '@/assets/styles/Layout.module.scss';

import { useOpenSidebar } from '@/context/useSidebarMenu';
import { useOpenBuy } from '@/context/useBuying';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: ReactNode;
}

const Template = ({ children }: Props) => {
  const cx = classNames.bind(styles);
  const classes = cx(styles.wrap);

  const handleClose = useOpenSidebar((state: any) => state.handleClose);
  const isOpen = useOpenSidebar((state: any) => state.isOpen);
  const closeBuying = useOpenBuy((state: any) => state.handleClose);

  if (typeof window !== "undefined") {
    const body = document?.getElementById('other');
    const except = document?.getElementById('except');

    body?.addEventListener("click", function () {
      handleClose();
      closeBuying();
    }, false);
    except?.addEventListener("click", function (ev) {
        ev.stopPropagation(); // this is important! If removed, you'll get both alerts
    }, false);
  }

  return (
    <>
      <div id="other" className={classes}>
        <div>
          <Sidebar />
          <div>
            <Header />
            <div>
              <div>
                {children}
              </div>
            </div>
          </div>
        </div>
        <Footer />
        {isOpen && (
          <div className="w-full h-full fixed z-10 inset-0" style={{ background: 'rgba(0,0,0,0.5)' }}></div>
        )}
      </div>
    </>
  );
};

export default Template;