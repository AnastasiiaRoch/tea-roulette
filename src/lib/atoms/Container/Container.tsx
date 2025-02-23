import React from 'react';

import cn from 'classnames';

import { IComponent } from '@/lib/types';

const Container = ({ children, className }: IComponent) => (
  <div className={cn('mx-auto px-6', className)}>{children}</div>
);

export default Container;
