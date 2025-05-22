type Props = {
  children: string;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
};

export default function TipButton({ children, tip, setTip }: Props) {
  return children != "Custom" ? (
    <button
      className={`${tip == Number(children) ? "bg-green-400 text-green-900" : "bg-green-900 text-gray-50 hover:bg-green-200 hover:text-green-900"} textPreset3 cursor-pointer rounded-[5px] p-[.5rem_1rem]`}
      onClick={() => {
        setTip(Number(children));
      }}
    >
      {children}%
    </button>
  ) : (
    <input
      placeholder="Custom"
      className="textPreset3 text-gray-550 w-full cursor-pointer rounded-[5px] bg-gray-50 p-[.5rem_1rem] text-center outline-0"
      type="number"
      id="custom"
      onChange={(e) => setTip(Number(e.target.value))}
    />
  );
}
