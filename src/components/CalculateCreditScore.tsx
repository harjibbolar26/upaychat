import React, { useEffect, useState } from "react";
import CustomButton from "./CustomButton";

export interface Recommended {
  recommendedCards: string[];
  setRecommendedCards: React.Dispatch<React.SetStateAction<string[]>>;
}

const CreditScoreCalculator = ({
  recommendedCards,
  setRecommendedCards,
}: Recommended) => {
  const [spendingHabit, setSpendingHabit] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [creditScore, setCreditScore] = useState<number>(0);

  const calculateCreditScore = () => {
    let score = 0;

    if (spendingHabit === "Very often") {
      score += 3;
    } else if (spendingHabit === "Often") {
      score += 2;
    } else if (spendingHabit === "Rarely") {
      score += 1;
    }

    if (monthlyIncome === 100000) {
      score += 1;
    } else if (monthlyIncome === 200000) {
      score += 2;
    } else if (monthlyIncome === 300000) {
      score += 3;
    }

    setCreditScore(score);
    suggestCardOptions(score);
  };

  const reset = () => {
    setSpendingHabit("");
    setMonthlyIncome(0);
  };

  const suggestCardOptions = (score: number) => {
    let options: string[] = [];

    if (spendingHabit === "" || monthlyIncome === 0) {
      options.push("");
    } else if (score >= 5) {
      options.push("Credit Card", "Business Card");
      // reset();
    } else if (score >= 3) {
      options.push("Debit Card", "Prepaid Card");
      // reset();
    } else {
      options.push("Prepaid Card", "Student Card");
      // reset();
    }

    setRecommendedCards(options);
  };

  useEffect(() => {
    calculateCreditScore();
    // reset();
  }, [spendingHabit, monthlyIncome]);

  return (
    <div>
      <h2 className="text-3xl font-layarBahteraBold mb-3">
        {" "}
        <span className="text-[#4EE567]">Credit</span> Score Calculator
      </h2>
      <div className="flex justify-between items-center">
        <label className="font-semibold font-layarBahteralight max-md:text-xl text-xl">
          How often do you spend?:
        </label>
        <select
          value={spendingHabit}
          onChange={(e) => setSpendingHabit(e.target.value)}
          className="border border-solid border-[#4EE567] rounded-lg ml-12 w-fit my-2 py-1 px-2 font-layarBahteralight"
        >
          <option value="" className="p-2 text-[#4EE567] font-layarBahtera">
            Select
          </option>
          <option
            value="Very often"
            className="p-2 text-[#4EE567] font-layarBahtera"
          >
            Very often
          </option>
          <option
            value="Often"
            className="p-2 text-[#4EE567] font-layarBahtera"
          >
            Often
          </option>
          <option
            value="Rarely"
            className="p-2 text-[#4EE567] font-layarBahtera"
          >
            Rarely
          </option>
        </select>
      </div>
      <div className="flex justify-between items-center">
        <label className="font-semibold font-layarBahteralight max-md:text-xl text-xl">
          Monthly Income:
        </label>
        <select
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(parseInt(e.target.value))}
          className="border border-solid border-[#4EE567] rounded-lg ml-12 w-fit my-2 py-1 px-2 font-layarBahtera "
        >
          <option value={0} className="p-2 text-[#4EE567] font-layarBahtera">
            Select
          </option>
          <option
            value={100000}
            className="p-2 text-[#4EE567] font-layarBahtera"
          >
            100,000 NGN
          </option>
          <option
            value={200000}
            className="p-2 text-[#4EE567] font-layarBahtera"
          >
            200,000 NGN
          </option>
          <option
            value={300000}
            className="p-2 text-[#4EE567] font-layarBahtera"
          >
            300,000 NGN
          </option>
        </select>
      </div>
      <CustomButton
        title="reset"
        containerStyles="uppercase py-2 rounded-full bg-[#4EE567]  w-1/3 float-right mt-3"
        textStyles="text-white text-[14px]  leading-[17px] font-bold"
        handleClick={() => reset()}
      />
      {/* <p>Credit Score: {creditScore}</p> */}
      {/* <p>Recommended Card Options: {recommendedCards.join(" or ")} Card</p> */}
    </div>
  );
};

export default CreditScoreCalculator;
