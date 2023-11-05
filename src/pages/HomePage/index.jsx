import './style.css';
import { Menu } from '../../Menu';
import { Carousel } from '../../Carousel';
import { Article } from '../../Article';

export const HomePage = () => {
  return (
    <div id="bg">
      <Menu />
      <Carousel />
      <Article />
    </div>
  );
};
