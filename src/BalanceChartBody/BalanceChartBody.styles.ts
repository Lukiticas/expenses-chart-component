import styled from "styled-components";
import { slideIn, slideInReverse } from "../styles/index.styles";

export interface ChartProps {
  height?: number;
  columns?: number;
  isActive?: boolean;
}

const BCSection = styled.section`
  width: 100%;
  padding: 2.2rem;

  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;

  background-color: ${(props) => props.theme.colors.bg400};
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  --pm-fs: 3.3rem;
  --sc-fs: 1.3rem;
  --main-p-fs: 1.2rem;

  animation: ${slideInReverse} 300ms ease;
  animation-fill-mode: forwards;
`;

const BCTitle = styled.h2`
  width: 100%;
  margin-bottom: 1rem;

  font-size: 2.3rem;
  font-weight: 600;

  color: ${(props) => props.theme.colors.wrd600};
`;

const BCCharts = styled.div<ChartProps>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  gap: 1rem;
`;

const BCFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-end;

  padding-block-start: 1.8rem;
  padding-block-end: 1rem;

  -webkit-box-shadow: 0px -10px 0px -8px ${(props) => props.theme.colors.bg600};
  -moz-box-shadow: 0px -10px 0px -8px ${(props) => props.theme.colors.bg600};
  box-shadow: 0px -10px 0px -8px ${(props) => props.theme.colors.bg600};
`;

const BCDescription = styled.section`
  width: 100%;

  h3 {
    font-size: var(--main-p-fs);
    font-weight: 500;

    color: ${(props) => props.theme.colors.wrd400};

    margin-bottom: 1ch;
  }

  p {
    cursor: pointer;

    font-size: var(--pm-fs);
    font-weight: 800;
    line-height: 1;

    color: ${(props) => props.theme.colors.wrd600};

    &:hover,
    &:focus-visible {
      color: ${(props) => props.theme.colors.acc800};
    }
  }
`;

const BCGainDescription = styled.section`
  width: 100%;
  text-align: end;

  h3 {
    font-size: var(--sc-fs);
    font-weight: 500;

    color: ${(props) => props.theme.colors.wrd400};

    margin-top: 0.4ch;
  }

  p {
    cursor: pointer;

    font-size: var(--sc-fs);
    font-weight: 800;
    line-height: 1;

    color: inherit;
    color: ${(props) => props.theme.colors.wrd600};

    &:hover,
    &:focus-visible {
      color: ${(props) => props.theme.colors.acc800};
    }
  }
`;

export {
  BCCharts,
  BCDescription,
  BCFooter,
  BCGainDescription,
  BCSection,
  BCTitle,
};
