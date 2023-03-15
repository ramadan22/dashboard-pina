import Icon from '@/components/icon/Icon';

interface Props {
  icon: string;
  text: string;
}

const Chip = ({ icon, text }: Props) => (
  <div className="flex gap-x-1 h-[32px] items-center text-xs px-2 border rounded-full">
    <div className="bg-primary rounded-full w-[18px] h-[18px] flex">
      <Icon type={icon} />
    </div>
    {text}
  </div>
);

export default Chip;
