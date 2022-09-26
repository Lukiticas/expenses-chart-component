import styled from "styled-components";
import { slideIn } from "../styles/index.styles";

const BHHeader = styled.header`
  width: 100%;
  padding: 1.5rem;
  position: relative;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  color: ${(props) => props.theme.colors.wrd400};
  background-color: ${(props) => props.theme.colors.acc800};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  border-radius: 1rem;

  animation: ${slideIn} 300ms ease;
  animation-fill-mode: forwards;
`;

const BHDescription = styled.div`
  width: 60%;
  color: ${(props) => props.theme.colors.bg400};

  p {
    font-size: 1.9rem;
    font-weight: 600;
  }

  h2 {
    font-size: 1rem;
    font-weight: 400;
  }
`;

const BHIcon = styled.img`
  cursor: pointer;
  width: 6rem;

  &:hover,
  &:focus-visible {
    transform: rotate(180deg);
  }
  &:active {
    transform: rotate(360deg);
  }
`;

export { BHHeader, BHDescription, BHIcon };
