import Image from 'next/image';
import Link from 'next/link';

import { CollectionFilm } from '../../pages';
import FilmCardTools from './FilmCardTools/FilmCardTools';
import Rating from './Rating/Rating';

import styles from './FilmCard.module.scss';

interface FilmCardProps {
  data: CollectionFilm;
}

const IMAGE_PATH = '/images/';

const FilmCard: React.FC<FilmCardProps> = ({ data }) => {
  const { name, genre, year, country, rating, image, seasons, link } = data;
  return (
    <div className={styles.cardContainer}>
      <Link className={styles.title} href={`watch/${link}`}>
        {name}
      </Link>

      <div className={styles.card}>
        <div className={styles.poster}>
          <Image src={IMAGE_PATH + image} width={153} height={235} alt="" />
          <div className={styles.ageLabel}>16+</div>
        </div>

        <div className={styles.info}>
          <FilmCardTools className={styles.tools} />
          <div className={styles.infoProperties}>
            <Rating className={styles.rating} value={rating} />
            <div className={styles.infoRow}>{`${year}, ${country}, ${genre}`}</div>
            <div className={styles.infoRow}>{seasons} сезонов</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
