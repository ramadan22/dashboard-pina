import { FC, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import { ISize, IVariant } from '@/types/globals';

import styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: IVariant;
  size?: ISize;
}

const Button: FC<Props> = ({
  variant = 'primary',
  size = 'medium',
  text,
  ...rest
}) => {
  const cx = classNames.bind(styles);
  const classes = cx(
    styles.basic,
    styles[`variant__${variant}`],
    styles[`size__${size}`],
  );

  return (
    <button
      {...rest}
      type="button"
      className={classes}
    >
      {text}
    </button>
  );
};

export default Button;
