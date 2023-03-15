import classNames from 'classnames/bind';
import Image from 'next/image';
import styles from '../assets/styles/BuyConfirmation.module.scss';
import { Button } from '@/components/button';
import ImgSeed from '@/assets/images/img_seed.png';
import Icon from '@/components/icon/Icon';
import { useConfirmation } from '@/context/useConfirmation';
import { useOpenBuy } from '@/context/useBuying';

interface Props {
  openConfirmation: boolean;
}

const BuyConfirmation = ({ openConfirmation = false }: Props) => {
  const cx = classNames.bind(styles);
  const classes = cx(styles.wrap, {
    [styles.open]: openConfirmation,
  });

  const handleCloseConf = useConfirmation((state: any) => state.handleClose);
  const handleOpenBuy = useOpenBuy((state: any) => state.handle);

  return (
    <div id="other" className={classes}>
      <div className="flex flex-col items-center">
        <div>
          <button
            onClick={() => {
              handleCloseConf();
              handleOpenBuy();
            }}
            type="button"
            className="flex gap-x-2 mb-1 items-center !text-[#9E9E9E] justify-self-start"
          >
            <Icon type="ArrowLeft" />
            kembali
          </button>
        </div>
        <div>
          <Image src={ImgSeed} alt="seed logo" className="-mb-10" />
        </div>
        <div>
          <div className="leading-6 flex flex-col">
            <span className="font-semibold text-center">Mohon cek kembali order kamu</span>
            <span className="text-sm text-center text-[#9E9E9E]">No Order: PI213123123DHEX</span>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-row justify-between items-center">
              <div className="text-sm text-[#9E9E9E]">Stock</div>
              <div className="font-semibold">ADRO</div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="text-sm text-[#9E9E9E]">Action</div>
              <div className="font-semibold text-primary">Buy</div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="text-sm text-[#9E9E9E]">Harga</div>
              <div className="font-semibold">156</div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="text-sm text-[#9E9E9E]">Lot</div>
              <div className="font-semibold">1</div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="text-sm text-[#9E9E9E]">Biaya</div>
              <div className="font-semibold">2.500</div>
            </div>
            <div className="flex flex-row justify-between items-center border-t border-b border-gray-100 py-3 px-0.5">
              <div className="text-sm text-[#9E9E9E]">Total Amount</div>
              <div className="font-semibold">15.8000</div>
            </div>
            <div className="flex flex-col py-1">
              <Button text="Konfirmasi" size="large" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyConfirmation;
