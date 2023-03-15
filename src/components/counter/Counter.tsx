import { FC } from 'react';
import classNames from 'classnames/bind';
import Icon from '@/components/icon/Icon';
import styles from './Counter.module.scss';

interface Props {
  value: string | number;
}

const Counter: FC<Props> = ({ value }) => {
  const cx = classNames.bind(styles);
  const classes = cx(styles.basic);

  return (
    <div className={classes}>
      <button type="button">
        <Icon type="Minus" size="medium" />
      </button>
      <input type="" value={value} onChange={() => {}} />
      <button type="button">
        <Icon type="Plus" size="medium" />
      </button>
    </div>
  );
};

export default Counter;
