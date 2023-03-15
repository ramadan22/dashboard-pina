import { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames/bind';
import styles from './ButtonIcon.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const ButtonIcon: FC<Props> = ({
  variant = 'primary',
  size = 'medium',
  children,
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
      className={`${styles.basic} ${classes}`}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
