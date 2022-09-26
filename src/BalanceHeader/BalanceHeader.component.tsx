import { BHHeader, BHDescription, BHIcon } from "./BalanceHeader.styles";

interface BHProps {
  balance: number;
  handleClick: () => void;
}

const BalanceHeader = ({ balance, handleClick }: BHProps) => {
  return (
    <BHHeader>
      <BHDescription>
        <h2>My balance</h2>
        <p>${balance}</p>
      </BHDescription>

      <BHIcon
        tabIndex={0}
        src="./images/logo.svg"
        alt="credit card logo"
        onClick={handleClick}
      />
    </BHHeader>
  );
};

export default BalanceHeader;
