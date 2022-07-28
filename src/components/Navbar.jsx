import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { mobile } from "../responsive";
import styled from 'styled-components'

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
`
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 5px;
`
const Language = styled.span`
  font-size: 14px;
  padding: 5px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`
const SearchContainer = styled.span`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 10px;
`
const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`
const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input/>
              <Search style={{color: "gray", fontSize: 16}}/>
            </SearchContainer>
          </Left>
          <Center><Logo>Lanjing.</Logo></Center>
          <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN IN</MenuItem>
            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            
            </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
