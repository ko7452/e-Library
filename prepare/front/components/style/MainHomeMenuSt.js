import styled from 'styled-components';
import { Menu } from 'antd';
// LoginSignupMenu
export const LayoutHeader = styled.header`
  margin: auto;
  width: 100%;
  @media (max-width: 850px) {
    // 상단 메뉴 전체 레이아웃
    height: 75px;
    background-color: rgb(46 49 51 / 81%);
    display: inline-flex;
    h1 {
      display: none;
    }
  }
`;

// 모바일 로그인 CSS
export const LoginWrapper = styled.div`
  @media (max-width: 850px) {
    h3 {
      display: none;
    }
  }
`;

export const MobileVarWrapper = styled.div`
  @media (min-width: 850px) {
    display: none;
  }
`;

export const NavTop = styled.div`
  display: none;
  color: white;
  @media (max-width: 850px) {
    display: flex;
    .CloseOutlined {
      svg {
        width: 43px;
        height: 69px;
        margin: 5% 0% 0% 30%;
      }
    }
    .menuOutlined {
      svg {
        margin: 45% 0% 0% 30%;
        width: 43px;
        height: 36px;
      }
    }
  }
`;

export const MenuWrapper = styled(Menu)`
  background-color: #232323;
  text-align: center;
  height: 775px;
  /* width: 360px; */
  a {
    color: white;
  }
  li {
    margin: 0px 0px 0px -1px;
    border-bottom: 1px solid black;
  }
  @media (min-width: 200px) {
    width: 200px;
  }
  @media (min-width: 300px) {
    width: 300px;
  }
  @media (min-width: 350px) {
    width: 350px;
  }
  @media (min-width: 420px) {
    width: 415px;
  }
  @media (min-width: 450px) {
    width: 450px;
  }
  @media (min-width: 550px) {
    width: 550px;
  }
  @media (min-width: 650px) {
    width: 650px;
  }
  @media (min-width: 800px) {
    width: 800px;
  }
`;

export const MobileLoginWrapper = styled.div`
  text-align: center;
  margin: 7%;
  div {
    color: #aba6a6;
    margin-top: 15%;
    margin-bottom: 5%;
  }
  li {
    background-color: #000000;
    border: 1px solid black;
  }
`;

export const LoginSignupMenu = styled.div`
  background-color: rgb(28 28 28 / 83%);
  height: 37px;
  margin-top: -8px;
  user-select: none;
  button {
    color: white;
    font-size: 15px;
    padding: 8px 15px 6px 15px;
    border: 1px;
    float: right;
    text-decoration: none;
    background-color: rgb(28 28 28 / 83%);
  }
  button:hover {
    background-color: black;
  }
  span {
    color: white;
    font-size: 15px;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 8px;
    padding-bottom: 6px;
    float: right;
    text-decoration: none;
  }
  h3 a {
    color: white;
    font-size: 15px;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 8px;
    padding-bottom: 6px;
    float: right;
    text-decoration: none;
  }
  h3 a:hover {
    background-color: black;
  }

  // 모바일
  @media (max-width: 850px) {
    /* background-color: #ffffff00; */
    display: none;
  }
`;
// nav wrapper
export const NavWrapper = styled.div`
  background-color: rgb(46 49 51 / 81%);
  user-select: none;
  h1 {
    left: 0;
    position: absolute;
    text-align: center;
    margin: 1%;
    margin-left: 3%;
    a {
      font-family: '고딕';
      font-size: 110%;
      color: rgb(167 164 158);
    }
  }
  ul {
    list-style: none;
    text-align: center;
    a {
      color: rgb(233 233 233);
    }
    li {
      display: inline-block;
      font-size: 130%;
      width: 15%;
      padding: 1.4% 0% 1.4% 0%;
    }
    li:hover {
      background: rgb(62 60 59 / 35%);
    }
  }
  @media (max-width: 850px) {
    display: none;
    width: 5%;
    background-color: #ffffff00;
  }
`;

export const FooterComponent = styled.footer`
  background-color: rgb(60, 65, 67);
  padding-top: 5%;
  padding-bottom: 5%;
  margin: auto;
  position: unset;
  bottom: 0;
  width: 100%;
  left: 0;
  p {
    margin-left: 10%;
    margin-top: 1%;
    color: #858585;
    a {
      margin-left: 1%;
      color: #858585;
    }
    a:hover {
      color: #fffdfd;
    }
  }
  @media (max-width: 630px) {
    display: none;
  }
`;
