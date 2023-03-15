import { ReactNode } from 'react';
import Div100vh from 'react-div-100vh';
import classNames from 'classnames/bind';
import styles from '@/assets/styles/Layout.module.scss';

import { useOpenSidebar } from '@/context/useSidebarMenu';
import { useOpenBuy } from '@/context/useBuying';
import { useConfirmation } from '@/context/useConfirmation';
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
  const closeConfirmation = useConfirmation((state: any) => state.handleClose);

  if (typeof window !== 'undefined') {
    const body = document?.getElementById('other');
    const except = document?.getElementById('except');

    body?.addEventListener('click', () => {
      handleClose();
      closeBuying();
      closeConfirmation();
    }, false);
    except?.addEventListener('click', (ev) => {
      ev.stopPropagation();
    }, false);
  }

  return (
    <Div100vh>
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
          <div className="w-full h-full fixed z-10 inset-0" style={{ background: 'rgba(0,0,0,0.5)' }} />
        )}
      </div>
    </Div100vh>
  );
};

export default Template;
