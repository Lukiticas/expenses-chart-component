import { SpendingProps } from "../App";
import findDifference from "../utils/findDifference";
import {
  ChartBarBody,
  ChartBarItem,
  ChartPopUp,
  ChartTitle,
} from "./ChartBar.styles";

interface CBProps {
  amount: number;
  day: string;
  maxValue: number;
  currentDay: boolean;
}

const ChartBar = ({ amount, day, maxValue, currentDay }: CBProps) => {
  return (
    <ChartBarBody>
      <ChartBarItem
        tabIndex={0}
        height={findDifference(amount, maxValue + 15, false) as number}
        isActive={currentDay}
      >
        <ChartPopUp>${amount}</ChartPopUp>
      </ChartBarItem>
      <ChartTitle>{day}</ChartTitle>
    </ChartBarBody>
  );
};

export default ChartBar;
