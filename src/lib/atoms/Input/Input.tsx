import React from 'react';

import cn from 'classnames';
import { twMerge } from 'tailwind-merge';

interface CommonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
}

const InputField = ({ className, ref, ...props }: CommonProps) => (
  <input
    className={twMerge(cn('px-4 h-[3.7rem] w-full bg-transparent border-[1px] border-solid border-white text-text placeholder:text-gray-300', className))}
    ref={ref}
    {...props}
  />
);

export default InputField;
