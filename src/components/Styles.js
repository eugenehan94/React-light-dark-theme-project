import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.background};

  @media screen and (max-width: 400px) {
    height: auto;
    padding-top: 2rem;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.title};
  letter-spacing: 2px;
  @media screen and (max-width: 400px) {
    text-align: center;
  }
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.paragraph};
  width: 80%;
  letter-spacing: 2px;
  font-weight: 600;
  @media screen and (max-width: 400px) {
    width: 95%;
  }
`;
export const ToggleBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: ${(props) => props.theme.button};
  color: ${(props) => props.theme};
  cursor: pointer;
`;
