import { CollectionFilm } from '../../pages';
import FilmCard from '../FilmCard/FilmCard';

import styles from './CollectionSlider.module.scss';

interface CollectionSliderProps {
  items: CollectionFilm[];
}

const CollectionSlider: React.FC<CollectionSliderProps> = ({ items }) => {
  return (
    <div className={styles.collectionList}>
      {items.map((item) => (
        <FilmCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default CollectionSlider;
