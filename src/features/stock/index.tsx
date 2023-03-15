import Image from 'next/image';
import classNames from 'classnames/bind';
import { Button } from '@/components/button';
import styles from './assets/styles/FeatureStock.module.scss';

import { useOpenBuy } from '@/context/useBuying';
import { useConfirmation } from '@/context/useConfirmation';
import Filter from '@/assets/images/Filter.png';
import BoxLabely from '@/components/box-labely/BoxLabely';
import BoxStatistic from '@/components/box-statistic/BoxStatistic';
import Counter from '@/components/counter/Counter';
import Icon from '@/components/icon/Icon';

import BuyConfirmation from './components/BuyConfirmation';
import MenuStatistic from './components/MenuStatistic';
import InvestInfo from './components/InvestInfo';
import GroupChip from './components/GroupChip';
import Chart from './assets/images/Chart.png';
import useStatistic from './hooks/useStatistic';

const Stock = () => {
  const handleOpenConf = useConfirmation((state: any) => state.handle);
  const isConfirmation = useConfirmation((state: any) => state.isOpen);

  const handleOpenBuy = useOpenBuy((state: any) => state.handle);
  const handleCloseBuy = useOpenBuy((state: any) => state.handleClose);
  const isOpenBuy = useOpenBuy((state: any) => state.isOpen);

  const cx = classNames.bind(styles);
  const classes = cx(styles.wrap, {
    [styles.open]: isOpenBuy,
  });

  const {
    other,
    fundamental,
    earning,
    Profitabilitas,
    solvabilitas,
  } = useStatistic();

  return (
    <div className={classes}>
      <div>
        <div className="flex flex-col gap-y-5 bg-white rounded-xl p-5">
          <InvestInfo />
          <GroupChip />
          <div>
            <Image src={Filter} alt="Filter" width={1000} />
          </div>
          <div>
            <Image src={Chart} alt="Chart" width={1000} />
          </div>
        </div>
        <div className="flex flex-col gap-y-5 bg-white rounded-xl p-5">
          <MenuStatistic />
          <div className="flex gap-x-5">
            <div className="flex-grow flex flex-col gap-y-2">
              <BoxStatistic title={other.title} data={other.data} />
              <BoxStatistic title={fundamental.title} data={fundamental.data} />
            </div>
            <div className="flex-grow flex flex-col gap-y-2">
              <BoxStatistic title={earning.title} data={earning.data} />
              <BoxStatistic title={Profitabilitas.title} data={Profitabilitas.data} />
              <BoxStatistic title={solvabilitas.title} data={solvabilitas.data} />
            </div>
          </div>
        </div>
      </div>
      <div id="other" className={classes}>
        <div>
          <div>
            <button onClick={() => handleCloseBuy()} type="button" className="flex gap-x-2 mb-1 items-center !text-[#9E9E9E]">
              <Icon type="ArrowLeft" />
              kembali
            </button>
          </div>
          <div className="flex flex-row">
            <button type="button" className="border-b border-primary flex-grow py-1 text-primary">Beli</button>
            <button type="button" className="border-b flex-grow py-1 text-[#9E9E9E]">Jual</button>
          </div>
          <BoxLabely title="Dana yang tersedia" text="IDR 1.250.000" />
          <div className="flex flex-col gap-y-2">
            <span className="text-[#9E9E9E] text-xs">Jumlah Lot</span>
            <Counter value={1} />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-[#9E9E9E] text-xs">Harga Per Saham</span>
            <Counter value="IDR 1.000.000" />
          </div>
          <div className="border-t border-b border-gray-100 py-3 px-0.5">
            <span className="text-[#9E9E9E] text-sm">Total Pembelian</span>
          </div>
          <div className="flex flex-col">
            <Button text="Beli" size="large" onClick={() => handleOpenConf()} />
          </div>
        </div>
      </div>
      <div className={styles.buttonBuy}>
        <button type="button" onClick={() => handleOpenBuy()}>
          <Icon type="BuyCart" size="large" />
        </button>
      </div>
      <BuyConfirmation openConfirmation={isConfirmation} />
    </div>
  );
};

export default Stock;
