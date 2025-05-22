import reset from "../utils/reset";
import equation from "../utils/equation";

type Props = {
  people: number;
  bill: number;
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  setBill: React.Dispatch<React.SetStateAction<number>>;
  setPeople: React.Dispatch<React.SetStateAction<number>>;
};

export default function TipCard({
  setBill,
  setPeople,
  setTip,
  bill,
  people,
  tip,
}: Props) {
  return (
    <div className="desktop:m-0 my-[2rem] flex flex-col justify-between gap-[2rem] rounded-[1rem] bg-green-900 p-[1.5rem_2rem]">
      <section className="flex w-full flex-col gap-[1.5rem]">
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center">
            <p className="textPreset5 text-white">Tip Amount</p>
            <p className="textPreset6 text-gray-400">/ person</p>
          </div>
          <h2 className="textPreset1 text-green-400">
            ${equation(bill, people, tip).amount}
          </h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col justify-center">
            <p className="textPreset5 text-white">Total</p>
            <p className="textPreset6 text-gray-400">/ person</p>
          </div>
          <h2 className="textPreset1 text-green-400">
            ${equation(bill, people, tip).total}
          </h2>
        </div>
      </section>
      <button
        onClick={() => {
          setBill(0);
          setPeople(0);
          setTip(0);
          reset();
        }}
        className="textPreset4 w-full cursor-pointer rounded-[5px] bg-green-400 p-[.5rem_2rem] text-green-900 outline-0"
      >
        RESET
      </button>
    </div>
  );
}
