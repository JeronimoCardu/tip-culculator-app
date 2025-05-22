import { useState } from "react";

type Props = {
  inputType: string;
  setPeople?: React.Dispatch<React.SetStateAction<number>>;
  setBill?: React.Dispatch<React.SetStateAction<number>>;
};

export default function Input({ setPeople, setBill, inputType }: Props) {
  const [billIsZero, setBillIsZero] = useState<boolean>(false);
  const [peopleIsZero, setPeopleIsZero] = useState<boolean>(false);

  const isZero = (numberInput: number, type: string) => {
    if (numberInput <= 0 && type == "bill") setBillIsZero(true);
    if (numberInput <= 0 && type == "person") setPeopleIsZero(true);
  };

  return (
    <div className="flex flex-col gap-[.5rem]">
      <div className="flex justify-between">
        <label
          htmlFor={inputType}
        >{`${inputType == "bill" ? "Bill" : "Number of People"}`}</label>
        {(peopleIsZero || billIsZero) && (
          <p className="textPreset5 text-orange">Can't be zero</p>
        )}
      </div>
      <div
        className={`${peopleIsZero || billIsZero ? "border-orange border-1" : "border-0"} flex items-center justify-between rounded-[5px] bg-gray-50 p-[.5rem_1rem]`}
      >
        <img
          src={`/images/icon-${inputType == "bill" ? "dollar" : "person"}.svg`}
          alt={`${inputType == "bill" ? "bill" : "people"}`}
        />
        <input
          onChange={(e) => {
            isZero(Number(e.target.value), inputType);
            if (Number(e.target.value) > 0 && inputType == "bill" && setBill) {
              setBill(Number(e.target.value));
              setBillIsZero(false);
            } else if (Number(e.target.value) > 0 && setPeople) {
              setPeople(Number(e.target.value));
              setPeopleIsZero(false);
            }
          }}
          id={inputType}
          className={`textPreset3 w-full cursor-pointer text-right outline-0`}
          type="number"
          placeholder="0"
        />
      </div>
    </div>
  );
}
