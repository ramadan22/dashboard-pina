import Image from 'next/image';
import TelkomIndonesia from '@/assets/images/Telkom-Indonesia.png';

const InvestInfo = () => (
  <div className="flex flex-row items-center justify-between">
    <div className="flex flex-row items-center gap-x-5">
      <Image src={TelkomIndonesia} alt="Telkom Indonesia" />
      <div className="flex flex-col">
        <span className="text-lg font-semibold">BBCA</span>
        <span className="text-xs text-[#9E9E9E]">Bank Central Asia</span>
      </div>
    </div>
    <div className="flex flex-col text-right">
      <span className="text-lg font-semibold">7.726,19</span>
      <span className="text-xs text-[#7BCC29]">+48,83 (+0.68%)</span>
    </div>
  </div>
);

export default InvestInfo;
