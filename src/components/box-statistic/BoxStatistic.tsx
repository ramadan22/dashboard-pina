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
    {title && <span className="text-lg font-semibold py-1">{title}</span>}
    <div className="flex flex-col gap-y-2">
      {data.map((item) => (
        <div key={item.id} className="flex items-center justify-between">
          <span className="text-xs text-[#9E9E9E]">{item.title}</span>
          <span className="font-semibold">{item.text}</span>
        </div>
      ))}
    </div>
  </div>
);

export default BoxStatistic;
