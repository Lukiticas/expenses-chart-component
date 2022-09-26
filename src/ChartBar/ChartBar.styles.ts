import { ChartProps } from "./../BalanceChartBody/BalanceChartBody.styles";
import styled from "styled-components";

const ChartBarBody = styled.div`
  min-height: 15rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  gap: 0.8rem;
`;

const ChartBarItem = styled.div<ChartProps>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height}%;

  animation: growUp 800ms ease;
  animation-fill-mode: forwards;
  transform-origin: bottom;

  border-radius: 0.5rem;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.acc900 : props.theme.colors.acc800};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  &:hover,
  &:focus-visible {
    cursor: pointer;
    filter: brightness(1.3);
    & > div {
      opacity: 1;
    }
  }

  @keyframes growUp {
    from {
      transform: scaleY(0);
    }
    to {
      transform: scaleY(1);
    }
  }
`;

const ChartPopUp = styled.div`
  font-size: 0.9rem;
  position: absolute;
  left: 50%;
  top: -2.8rem;
  transform: translateX(-50%);

  padding: 0.6rem;

  opacity: 0;
  border-radius: 0.4rem;

  background-color: ${(props) => props.theme.colors.wrd600};
  color: ${(props) => props.theme.colors.bg400};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  font-weight: 600;
`;

const ChartTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;

  color: ${(props) => props.theme.colors.wrd400};
`;

export { ChartBarItem, ChartBarBody, ChartPopUp, ChartTitle };
