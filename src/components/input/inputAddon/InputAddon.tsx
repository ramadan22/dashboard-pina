import { FC, InputHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './InputAddon.module.scss';
import stylesInput from '../Input.module.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | 'medium' | 'large';
  addonPosition?: 'left' | 'right';
  fullWidth?: boolean;
  children: ReactNode;
  className?: string;
}

const InputAddon: FC<Props> = ({
  addonPosition = 'right',
  fullWidth = false,
  size = 'medium',
  children,
  className,
  ...rest
}) => {
  const cx = classNames.bind(stylesInput);

  const positionClasses = cx('InputAddon', {
    [styles.left]: addonPosition === 'left',
    [styles.right]: addonPosition === 'right',
  });

  const inputClasses = cx(
    'Input',
    stylesInput.basic,
    stylesInput[`size__${size}`],
    {
      [stylesInput.fullWidth]: fullWidth,
    },
  );

  return (
    <div className={`${styles.basic} !bg-[#F5F7F7]`}>
      <input
        {...rest}
        className={`${inputClasses} ${className}`}
      />
      <div className={`${positionClasses} !text-[#9E9E9E]`}>
        {children}
      </div>
    </div>
  );
};

export default InputAddon;
