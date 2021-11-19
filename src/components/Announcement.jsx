import styled from "styled-components";

const Container = styled.div`
  background-color: pink;
  color: white;
  height: 35px;
  display: flex;
  font-weight: 900;
  justify-content: center;
  align-items: center;
`;
const Announcement = () => {
  return <Container>FREE SHIPPING IN CANADA !</Container>;
};

export default Announcement;
