import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle";
import Index from './components/NavBar/index';
import { Categ } from './components/Hero-Section/categ';
import { Info } from './components/Body/info';
import { FooterMain } from './components/Footer/FooterMain';
import { FootCopy } from './components/Footer/FootCopy';
import ScrollButton from './components/BackToTop/ScrollButton';
import ImageSlider from './components/ImageSlider/ImageSlider';
import ImageSliderAuto from './components/ImageSlider/ImageSliderAuto';
import { ImageData } from './components/ImageSlider/JsonData';

function App() {
  return (
    <>
      <ScrollButton />
      <Index />
      <ImageSliderAuto ImageData={ImageData} SlideInterValTime={2000} />
      <Categ />
      {/* <ImageSlider ImageData={ImageData} /><br /> */}
      <Info />
      <FooterMain />
      <FootCopy />

    </>
  );
}

export default App;
