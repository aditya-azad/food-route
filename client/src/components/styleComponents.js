import styled from 'styled-components';
import mainPageImage from "../assets/main-pic.jpg";
import { createGlobalStyle } from 'styled-components';

export const MainPageContainer = styled.div`
  width: 100%;
  align: center;
  display: flex;
  flex-direction: column;
  justify-content: center; `;

export const GeneralPageContainer = styled.div`
  padding-top: 80px;
  h1 {
    font-family: 'Raleway', 'sans-serif';
    font-size: 2.5em;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 60%;
`
export const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${mainPageImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  padding-bottom: 50px;
  height: 100vh;
`

export const CoverContent = styled.div`
  margin: 0px 40px;
  p {
    color: white;
    font-size: 60px;
    font-family: 'Raleway', 'sans-serif';
  }
  input {
    background: none;
    width: 100%;
    outline: 0;
    border-width: 0 0 2px;
    font-size: 50px;
    color: #BDB8B4;
    border-color: #BDB8B4;
  }
`

export const FeaturesSection = styled.div `
  display: flex;
  justify-content: center;
  padding: 70px 0px;
  div {
    margin: 0px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100px;
    min-height: 50vh;
    word-wrap: break-word;
    flex: 1;
    font-family: Roboto;
    word-wrap: break-word;
    background-color: red;
  }
`

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavBar = styled.header`
  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  z-index: 11;
  padding: 0px 40px;
  background-color: ${props => (props.scrollDirection === 'none' && props.isHome ? '' : 'Black')};
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  height: 60px};
  box-shadow: ${props => props.scrollDirection === 'none' ? 'none' : `0 10px 30px -10px rgba(0, 0, 0, 0.7)`};
`

export const FlexContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
  z-index: 12;
`;

export const Brand = styled.div `
  list-style-type: none;
  display: flex;
  margin: auto 0;
  font-size: 30px;
  font-family: 'Lobster', 'cursive';
`;

export const MenuList = styled.ul `
  list-style-type: none;
  font-family: 'Raleway', sans-serif;
  font-size: 21px;
  display: flex;
  margin: auto 0;
  li {
    margin: 1rem;
  }
  a:hover {
    color: #8B2A07;
  }
  a {
    color: #BDB8B4;
    transition: color 0.5s;
    text-transform: uppercase;
  }
`;

export const Card = styled.div`
  margin: 20px 0px;
  display: block;
  width: 100%;
`

export const InnerCard = styled.div`
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

export const StoreInformation = styled.div`
  padding: 10px;
  min-width: 50%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  span {
    margin: 2px;
    border: 1px solid black;
  }
  * {
    font-family: "Roboto";
  }
  button {
    display: block;
    border: none;
    color: white;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
  h2 {
    font-size: 30px;
    padding-bottom: 5px;
  }
  img {
    height: 100%;
    width: 50%;
  }

`

export const Image = styled.div`
  flex-grow: 1;
  background: url(${props => props.src});
  background-size: cover;
  width: 40%;
  height: 200px;
  background-repeat: no-repeat;
  background-position: center;
`

export const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const Popup = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
`

export const InnerPopup = styled.div`
  position: absolute;
  display: flex;
  left: 10%;
  right: 10%;
  top: 10%;
  bottom: 10%;
  margin: auto;
  background: white;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

export const Message = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 10vh;
    font-family: "Roboto"
  }
  a {
    color: black;
    text-decoration: underline;
  }
`

export const SaveButton = styled.button`
  background-color: #4CAF50;
`

export const DeleteButton = styled.button`
  background-color: #f44336;
`