import Intro from '../home/Intro';
import NavBar from '../../layout/NavBar'
import styled from 'styled-components';
import Carousel from '../carousel/Carousel';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

const HeaderContainer = styled.div`
  margin: 0;
  padding-top: 7rem;
  display: block;
  background: linear-gradient(180deg, rgba(112, 93, 80, .8) 0, rgba(112, 93, 112, .8) 50%), url("https://user-images.githubusercontent.com/44131043/132935964-ceb9b3ba-6540-41fd-8569-54d0bbeee6c2.jpeg") 50% no-repeat;
  content: "";
  //position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-size: cover;
  z-index: -1;
  height: 700px;
  width: 100%;


  @media screen and (max-width: 768px) {
    height: 300px;
  }

`;

const MainExplanation = styled.div`
  font-weight: 400;
  font-size: 4rem;
  color: #fff;
  word-break: keep-all;
  font-family: S-CoreDream-6;
  text-align: center;

  @media screen and (max-width:768px){
    font-size: 2rem;
    margin-bottom: 0;
  }
`;

const BlackMainExplanation = styled(MainExplanation)`
  margin: 60px;
  color: black;
  font-weight: 400;
  font-size: 3rem;
  font-family: S-CoreDream-6;
  margin-bottom: 0;

  @media screen and (max-width:768px){
    font-size: 1rem;

  }
`

const SubExplanation = styled.div`
  margin-top: 50px;
  font-weight: 200;
  font-size: 1.1rem;
  color: #fff;
  word-break: keep-all;
  font-family: S-CoreDream-4;
  text-align: center;
  
  @media screen and (max-width:768px){
    font-size: 0.5rem;
  }
`;

const NavButtonContainer = styled.div`
  margin: 100px;
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
    display: none;
    
  }


`;
const NavButton = styled.div`
  background-color: #e36226;
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  margin: 10px 10px;
  opacity: 1;
  transition: 0.3s;
  width: 150px;
  height: 50px;
  border-radius: 17px;
  font-family: S-CoreDream-5;

  &:hover {
    opacity: 0.6;
  }
`;


const Header = () => {

    return (
        <>
            <HeaderContainer>
                <div>
                    <MainExplanation>HELLO WATERSKI</MainExplanation>
                    <MainExplanation>??????????????? ?????? ???</MainExplanation>
                    <SubExplanation>
                        <br/>
                        ???????????? ??????????????? ?????? ?????? ????????? ???????????? ???
                        <br/>
                        ?????? ????????? ??? ????????? ???????????? ????????? ??? ?????? ???????????????.
                        <br/>
                        HELLO WATERSKI?????? ????????? ???????????? ???????????????.
                    </SubExplanation>
                    <NavButtonContainer>
                        <NavButton>????????????</NavButton>
                        <NavButton>?????????</NavButton>
                        <NavButton>???????????????</NavButton>
                        <NavButton>????????????</NavButton>
                        <NavButton>?????????</NavButton>
                    </NavButtonContainer>
                </div>
            </HeaderContainer>
            <BlackMainExplanation>SERVICES</BlackMainExplanation>
            <SubExplanation style={{color: 'black'}}>??????????????? ?????? ????????? ???????????? ???????????????.</SubExplanation>
            <Services></Services>
            <Carousel></Carousel>
            <Footer/>
        </>

    );
};

export default Header;