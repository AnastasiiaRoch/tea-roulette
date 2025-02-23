import { get, post } from '@/lib/services';

import { ICreatePlayer } from './types';

export const playersApi = {
  create: (payload: ICreatePlayer) => post('/v1/users', payload),
  get: () => get('/v1/users', { cache: 'no-store' }),
};
