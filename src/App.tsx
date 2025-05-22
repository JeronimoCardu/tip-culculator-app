import { useState } from "react";
import Input from "./components/Input";
import TipButton from "./components/TipButton";
import TipCard from "./components/TipCard";

export default function App() {
  const [tip, setTip] = useState<number>(0);
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  return (
    <>
      <img
        className="desktop:my-24 mx-auto my-12"
        src="/images/logo.svg"
        alt="splitter"
      />
      <section className="tablet:w-18/20 tablet:shadow-[0px_32px_43px_rgba(79,166,175,0.20)] desktop:p-[2rem] desktop:w-5/10 desktop:grid desktop:grid-cols-2 desktop:gap-[4rem] tablet:mx-auto tablet:rounded-[1.5rem] tablet:p-[3rem_5rem] h-fit rounded-[1.5rem_1.5rem_0_0] bg-white p-[2rem_1.5rem]">
        <div className="desktop:py-4">
          <Input setBill={setBill} inputType={"bill"} />
          <div className="my-[2rem]">
            <h3 className="textPreset5 mb-[.5rem] text-gray-500">
              Select Tip %
            </h3>
            <div className="tablet:grid-cols-3 grid grid-cols-2 gap-[1rem]">
              <TipButton tip={tip} setTip={setTip}>
                5
              </TipButton>
              <TipButton tip={tip} setTip={setTip}>
                10
              </TipButton>
              <TipButton tip={tip} setTip={setTip}>
                15
              </TipButton>
              <TipButton tip={tip} setTip={setTip}>
                25
              </TipButton>
              <TipButton tip={tip} setTip={setTip}>
                50
              </TipButton>
              <TipButton tip={tip} setTip={setTip}>
                Custom
              </TipButton>
            </div>
          </div>
          <Input setPeople={setPeople} inputType={"person"} />
        </div>
        <TipCard
          setBill={setBill}
          setPeople={setPeople}
          people={people}
          bill={bill}
          setTip={setTip}
          tip={tip}
        />
      </section>
    </>
  );
}
