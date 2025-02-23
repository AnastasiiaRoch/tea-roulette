import React, { useId } from 'react';

import cn from 'classnames';

import ValidationError from '@/lib/atoms/ValidationError';
import { IComponent } from '@/lib/types';

import { renderChildren } from './renderChildren';

interface IProps extends IComponent {
  describedBy?: string;
  error?: string;
  id?: string;
  isLabelHidden?: boolean;
  label: string;
  required?: boolean;
}

const FormGroup = ({ children, className, describedBy, error, id, isLabelHidden, label, required }: IProps) => {
  const uniqueID = useId();
  const fieldID = id || uniqueID;
  const errorID = `${fieldID}-error`;

  const formElement = renderChildren(children, {
    'aria-describedby': error ? errorID : describedBy || undefined,
    'aria-required': required || undefined,
    id: fieldID,
  });

  return (
    <div className={cn('next:mt-4', className)}>
      <label className={cn('block mb-1', { 'sr-only': isLabelHidden })} htmlFor={fieldID}>
        {label}
        {required && <span className="text-red">*</span>}
      </label>
      {formElement}
      {error && <ValidationError id={errorID}>{error}</ValidationError>}
    </div>
  );
};

export default FormGroup;
