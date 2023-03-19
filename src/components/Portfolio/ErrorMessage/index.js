import React from "react";
import { PrimaryButton } from "../../PrimaryButton";
import { Text, Title, Triangle, Wrapper } from "./styled";
import Danger from "./Danger.png";

const ErrorMessage = () => {
  return (
    <Wrapper>
      <Triangle src={Danger} />
      <Title>Ooops! Something went wrong... </Title>
      <Text>
        Sorry, failed to load Github projects. You can check them directly on
        Github.
      </Text>
      <PrimaryButton>Go to Github</PrimaryButton>
    </Wrapper>
  );
};

export default ErrorMessage;
