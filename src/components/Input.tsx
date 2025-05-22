type Props = {
  inputType: string;
};

export default function Input({ inputType }: Props) {
  return (
    <div className="flex flex-col gap-[.5rem]">
      <label
        htmlFor={inputType}
      >{`${inputType == "bill" ? "Bill" : "Number of People"}`}</label>
      <div className="flex items-center justify-between rounded-[5px] bg-gray-50 p-[.5rem_1rem]">
        <img
          src={`/images/icon-${inputType == "bill" ? "dollar" : "person"}.svg`}
          alt={`${inputType == "bill" ? "bill" : "people"}`}
        />
        <input
          id={inputType}
          className="textPreset3 w-full text-right outline-0"
          type="number"
          placeholder="0"
        />
      </div>
    </div>
  );
}
