import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import usePersistedState from "./utils/UsePersistedState";

import BalanceChartBody from "./BalanceChartBody/BalanceChartBody.component";
import BalanceHeader from "./BalanceHeader/BalanceHeader.component";

import GlobalStyle, { AppMain } from "./styles/index.styles";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

export interface SpendingProps {
  day: string;
  amount: number;
}

export interface balanceData {
  balance: number;
  total: number;
  totalLastMonth: number;
  spending: SpendingProps[];
}

function App() {
  const [balanceData, setBalanceData] = useState<balanceData>();
  const [theme, setTheme] = usePersistedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  useEffect(() => {
    fetch("./data.json")
      .then((data) => data.json())
      .then((json) => setBalanceData(json[0]));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppMain>
        <BalanceHeader
          handleClick={toggleTheme}
          balance={balanceData?.balance ?? 0}
        />
        {balanceData && <BalanceChartBody data={balanceData} />}
      </AppMain>
    </ThemeProvider>
  );
}

export default App;
