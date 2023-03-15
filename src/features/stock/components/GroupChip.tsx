import Chip from '@/components/chip/Chip';

const GroupChip = () => (
  <div className="flex gap-x-2">
    <Chip icon="LineUp" text="Energi" />
    <Chip icon="LineUp" text="Batu Bara" />
    <Chip icon="Shield" text="Blue Chip" />
  </div>
);

export default GroupChip;