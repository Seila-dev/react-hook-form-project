import Background from '../../assets/logo.png';
import styled from 'styled-components';
import { useState } from 'react';

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  const toggleActive = () => {
    setActive(!active);
  }

    return (
       <HeaderElement>
        <img src={Background} alt="Logo site" />
        <nav>
          <Ul>
            <Item>Home</Item>
            <Item>Services</Item>
            <Item>About</Item>
            <Item>Portfolio</Item>
            <Item>Contact</Item>
          </Ul>
          <BurguerBtn className="material-icons-outlined burguer" onClick={toggleActive}>
            menu
          </BurguerBtn>
        </nav>

          <Menu active={active}>
          <div className='close-div'>
            <span className="material-symbols-outlined close" onClick={toggleActive}>
            close
            </span>
          </div>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </Menu>
       </HeaderElement>
    )
}

const HeaderElement = styled.header`
  padding: 40px 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img{
    margin-right: 20px;
  }
  @media(max-width: 768px){
    margin: 0;
  }
  @media(max-width: 540px){
    padding: 30px;
  }
  .burguer {
    @media(min-width: 769px){
    display: none;
  }
`

const BurguerBtn = styled.span`
  font-weight: 700;
`

const Ul = styled.ul`
  display: flex;
  align-items: center;
    @media(max-width: 768px){
    flex-direction: column;
    margin: 0;
    max-width: 100%;
    width: 100%;
  }

`

const Item = styled.li`
  margin-right: 60px;
    @media(max-width: 768px){
      margin: 0;
      display: none;
  }
`

interface MenuProps {
  active: boolean;
}

const Menu = styled.div<MenuProps>`
  background: #29e094;
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.3s ease-in;
  transform: ${({ active }) => (active ? 'translateX(0)' : 'translateX(100%)')};
  .close-div{
    width: 100%;
    margin-bottom: 40px;
  }
  .close{
    font-weight: 700;
  }
  ul{
    width: 100%;
  }
  li{
    margin-bottom: 20px;
  }
  @media(max-width: 490px){
    width: 100%;
  }
`

