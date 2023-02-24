// import logo from './logo.svg';
import './css/E_card.css';
// import Gallary from './comps/Gallary';
// import Images from './images';
// import Bg_1 from './components/bg-1';
// import Bg_2 from './components/bg-2';
// import Button from './components/Button';
// import Footer from './components/footer';
// import AbHeader from './components/AbHeader';
import GComp from './E_card_compo';

function Card1() {

  const styles=[
    {
        height: '263px',
        width: '283px',
        margin: '10px 10px',
        margin2:'10px 10px',
        tag:1
    }
  ]
  return (
    <div className="App">
      {/* <AbHeader/> */}
      <GComp styles={styles[0]}/>
      {/* <Images src="./img-1.jpg"/> */}
      
      {/* <Footer/> */}
    </div>
  );
}

// box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;

export default Card1;
