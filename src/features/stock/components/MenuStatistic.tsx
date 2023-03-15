import { Button } from '@/components/button';

const MenuStatistic = () => (
  <div className="flex flex-nowrap overflow-x-auto no-scrollbar whitespace-nowrap gap-2">
    <Button variant="primary" text="Statistik" />
    <Button variant="secondary" text="Corp Action" />
    <Button variant="secondary" text="Berita" />
    <Button variant="secondary" text="Laporan Keuangan" />
    <Button variant="secondary" text="Tentang Perusahaan" />
  </div>
);

export default MenuStatistic;
