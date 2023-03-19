import { Spinner, Text, Wrapper } from "./styled";

const Loader = () => {
  return (
    <Wrapper>
      <Text>Please wait, projects are being loaded...</Text>
      <Spinner />
    </Wrapper>
  );
};

export default Loader;
