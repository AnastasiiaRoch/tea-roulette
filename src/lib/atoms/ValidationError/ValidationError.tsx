import React from 'react';

import cn from 'classnames';

import { IComponent } from '@/lib/types';

interface IProps extends IComponent {
  id?: string;
}

const ValidationError = ({ className, children, id }: IProps) => (
  <div className={cn('text-xs text-rose-500 font-semibold mt-2', className)} id={id}>
    {children}
  </div>
);

export default ValidationError;
