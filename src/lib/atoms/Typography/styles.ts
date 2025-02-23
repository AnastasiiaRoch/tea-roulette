import { TypographySchemeType } from './models';

export const typographyStyles: TypographySchemeType = {
  h1: {
    classes: 'text-5xl font-semibold leading-tight',
    options: {
      landing: 'text-5xl font-semibold leading-tight lg:text-7xl',
    },
  },
  h2: {
    classes: 'text-4xl font-semibold leading-tight',
    options: null,
  },
  h3: {
    classes: 'text-3xl font-semibold',
    options: null,
  },
  h4: {
    classes: 'text-2xl font-semibold',
    options: null,
  },
  h5: {
    classes: 'text-xl font-semibold',
    options: null,
  },
  h6: {
    classes: 'text-lg font-semibold',
    options: null,
  },
  p: {
    classes: 'text-base',
    options: {
      small: 'text-sm',
      medium: 'text-lg',
      large: 'text-xl',
    },
  },
};
