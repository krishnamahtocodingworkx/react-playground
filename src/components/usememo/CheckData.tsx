import { useMemo } from "react";
import "./style.css";

interface CheckDataProps {
  myNum: number;
}

const CheckData = ({ myNum }: CheckDataProps) => {
  const countNumber = (num: number) => {
    for (let i = 0; i <= 1000000000; i++) {} // heavy operation which takes time to execute
    return num;
  };

  const memoizedValue = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

  return <>{memoizedValue}</>;
};

export default CheckData;
