
interface Props {
  text: string;
  children: JSX.Element
}
export default function Tooltip({ text, children }: Props) {
  return (
    <div className="relative inline-block">
      <div className="group">
        {children}
        <div className="text-white text-xs rounded-md p-2 absolute bottom-full left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {text}
        </div>
      </div>
    </div>
  );
};
