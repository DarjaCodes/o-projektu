import './style.css';
import { Menu } from '../../components/Menu';
import { Carousel } from '../../components/Carousel';
import { Article } from '../../components/Article';

export const HomePage = () => {
  return (
    <div id="bg">
      <Menu />
      <Carousel />
      <Article />
    </div>
  );
};
