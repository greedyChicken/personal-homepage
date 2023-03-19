import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 426.5px;
  margin: 0 auto;
`;

export const Triangle = styled.img`
  width: 48px;
  height: 48px;
  margin: 70px 0 0;
`;

export const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.title};
  margin: 16px 0 0;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.title};
  margin: 32px 0;
`;
