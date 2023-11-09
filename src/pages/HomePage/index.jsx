import './style.css';
import { Menu } from '../../Menu';
import { Carousel } from '../../Carousel';
import { Article } from '../../Article';
import { AboutUs } from '../AboutUs';

export const HomePage = () => {
  return (
    <div id="bg">
      <Menu />
      <Carousel />
      <Article />
    </div>
  );
};
