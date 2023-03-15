interface Props {
  title: string;
  text: string;
}

const BoxLabely = ({ title, text }: Props) => (
  <div>
    <div className="text-xs text-[#9E9E9E]">{title}</div>
    <div className="font-semibold">{text}</div>
  </div>
);

export default BoxLabely;
