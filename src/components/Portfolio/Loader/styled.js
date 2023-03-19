import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 20px;
  line-height: 140%;
  color: ${({ theme }) => theme.color.title};
  margin: 64px 0 48px;
`;

export const Spinner = styled.div`
  margin-bottom: 140px;
  width: 160px;
  height: 160px;
  border: 11px solid ${({ theme }) => theme.color.spinnerMain};
  border-radius: 50%;
  border-right-color: ${({ theme }) => theme.color.link};
  animation: spin 1.2s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
