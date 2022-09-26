import { balanceData } from "../App";
import ChartBar from "../ChartBar/ChartBar.component";
import findDifference from "../utils/findDifference";
import {
  BCCharts,
  BCDescription,
  BCFooter,
  BCGainDescription,
  BCSection,
  BCTitle,
} from "./BalanceChartBody.styles";

interface BCBProps {
  data: balanceData;
}

const BalanceChartBody = ({ data }: BCBProps) => {
  const maxValue = Math.max(...data.spending.map((o) => o.amount));
  const amountOfColumns = data.spending.length;

  const organizedAPIDates = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const currentWeekday = organizedAPIDates[new Date().getDay()];
  const indexOfCurrentWeekday = data.spending.findIndex(
    (el) => el.day === currentWeekday
  );

  const ChartBars = data.spending.map((el, idx) => {
    return (
      <ChartBar
        key={Math.random() * 1.2 * idx}
        amount={el.amount}
        day={el.day}
        maxValue={maxValue}
        currentDay={idx === indexOfCurrentWeekday}
      />
    );
  });

  return (
    <BCSection>
      <BCTitle>Spending - Last 7 days</BCTitle>
      <BCCharts columns={amountOfColumns}>{ChartBars}</BCCharts>
      <BCFooter>
        <BCDescription>
          <h3>Total this month</h3>
          <p tabIndex={0}>${data.total}</p>
        </BCDescription>
        <BCGainDescription>
          <p tabIndex={0}>
            +{findDifference(data.total, data.totalLastMonth, true)}%
          </p>
          <h3>from last month</h3>
        </BCGainDescription>
      </BCFooter>
    </BCSection>
  );
};

export default BalanceChartBody;
