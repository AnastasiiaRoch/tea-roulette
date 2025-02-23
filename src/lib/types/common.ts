import { ElementType } from 'react';

export interface IComponent {
  as?: ElementType;
  children: React.ReactNode;
  className?: string;
}
