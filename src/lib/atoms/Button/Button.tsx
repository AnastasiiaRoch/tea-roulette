import React from 'react';

import Link from 'next/link';

import cn from 'classnames';
import { twMerge } from 'tailwind-merge';

import Spinner from '../Spinner';
import { ButtonSizeType, ButtonVariantType } from './models';
import { buttonStyles } from './styles';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  isMobileFull?: boolean;
  href?: string;
  size?: ButtonSizeType;
  variant?: ButtonVariantType;
}

const Button = ({
  children,
  className,
  isLoading,
  isMobileFull = true,
  href,
  size = 'default',
  type = 'button',
  variant = 'primary',
  ...rest
}: IProps) => {
  const classes = twMerge(
    cn(
      'relative inline-block border-[1px] border-solid border-transparent text-center min-w-[8.5rem]',
      {
        [`${buttonStyles.variant[variant]}`]: variant,
        [`${buttonStyles.size[size]}`]: size && variant !== 'text',
        'w-full sm:w-auto': isMobileFull,
      },
      className
    )
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type={type} {...rest}>
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
