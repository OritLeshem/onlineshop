import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Badge } from "@material-ui/core";
const Container = styled.div`
  height: 60px;
  margin: 25px;
`;
const Wraper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 18px;
  cursor: pointer;
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
  font-style: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wraper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <SearchIcon style={{ fontSize: "18px", color: "gray" }} />
            <Input />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Pink.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>SignIn</MenuItem>
          <MenuItem>
            <Badge color="primary" badgeContent={4}>
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wraper>
    </Container>
  );
};

export default Navbar;
