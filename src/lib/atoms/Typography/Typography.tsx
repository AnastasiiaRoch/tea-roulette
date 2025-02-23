import React, { createElement } from 'react';

import cn from 'classnames';
import { twMerge } from 'tailwind-merge';

import { IComponent } from '@/lib/types';

import { AlignType, ColorType, VariantType } from './models';
import { typographyStyles } from './styles';

interface IProps extends IComponent {
  align?: AlignType;
  color?: ColorType;
  ref?: React.Ref<HTMLElement>;
}

const Typography = ({
  align,
  as,
  children,
  className,
  color,
  option,
  ref,
  variant = 'p',
  ...rest
}: IProps & VariantType) => {
  const variantStyle =
    option && typographyStyles[variant]?.options
      ? typographyStyles[variant].options?.[option]
      : typographyStyles[variant].classes;

  const classes = twMerge(
    cn({
      [variantStyle]: variant,
      [`text-${color}`]: color,
      [`text-${align}`]: align,
    }),
    className
  );

  return createElement(
    as || variant,
    {
      ...rest,
      ref,
      className: classes,
    },
    children
  );
};

export default Typography;
