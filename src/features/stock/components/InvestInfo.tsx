import Image from 'next/image';
import TelkomIndonesia from '@/assets/images/Telkom-Indonesia.png';

const InvestInfo = () => (
  <div className="flex flex-row items-center justify-between">
    <div className="flex flex-row items-center gap-x-5">
      <Image src={TelkomIndonesia} alt="Telkom Indonesia" />
      <div className="flex flex-col">
        <label className="text-lg font-semibold">BBCA</label>
        <label className="text-xs text-[#9E9E9E]">Bank Central Asia</label>
      </div>
    </div>
    <div className="flex flex-col text-right">
      <label className="text-lg font-semibold">7.726,19</label>
      <label className="text-xs text-[#7BCC29]">+48,83 (+0.68%)</label>
    </div>
  </div>
);

export default InvestInfo;