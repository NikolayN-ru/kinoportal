import styles from './FilmCardTools.module.scss';

interface FilmCardToolsProps {
  className?: string;
}

const FilmCardTools: React.FC<FilmCardToolsProps> = ({ className }) => {
  const containerClassNames = [styles.container];
  className && containerClassNames.push(className);

  return (
    <div className={containerClassNames.join(' ')}>
      <button className={styles.button}></button>
      <button className={styles.button}></button>
      <button className={styles.button}></button>
      <button className={styles.button}></button>
    </div>
  );
};

export default FilmCardTools;
