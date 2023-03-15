type IData = {
  id: number;
  title: string;
  text: string;
}

interface Props {
  title?: string;
  data: Array<IData> | [];
}

const BoxStatistic = ({ title = '', data }: Props) => (
  <div className="flex flex-col gap-y-2">
    {title && <label className="text-lg font-semibold py-1">{title}</label>}
    <div className="flex flex-col gap-y-2">
      {data.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <label className="text-xs text-[#9E9E9E]">{item.title}</label>
          <label className="font-semibold">{item.text}</label>
        </div>
      ))}
    </div>
  </div>
);

export default BoxStatistic;
