type Props = {
  children: string;
};
export default function TipButton({ children }: Props) {
  return (
    <button
      className={`${children == "Custom" ? "text-gray-550 bg-gray-50" : "bg-green-900 text-gray-50"} textPreset3 cursor-pointer rounded-[5px] p-[.5rem_1rem]`}
    >
      {children}
    </button>
  );
}
