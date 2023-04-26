import { ReactNode } from 'react';
import styles from './Title.module.scss';

type TitleTag = 'h1' | 'h2' | 'h3';
type TitleType = 'lg' | 'md' | 'base' | 'sm';

interface TitleProps {
  tag?: TitleTag;
  size?: TitleType;
  text?: string;
  children?: ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ tag, size, text, className, children }) => {
  const classNames = [styles.title];
  className && classNames.push(className);
  size && styles[size] && classNames.push(styles[size]);

  const Tag = tag || 'h1';

  return <Tag className={classNames.join(' ')}>{children ?? text}</Tag>;
};

export default Title;
