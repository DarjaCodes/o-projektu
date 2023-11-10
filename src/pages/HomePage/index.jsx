import './style.css';

import { Carousel } from '../../components/Carousel';
import { Article } from '../../components/Article';

export const HomePage = () => {
  return (
    <div id="bg">
      <Carousel />

      <Article />
    </div>
  );
};
