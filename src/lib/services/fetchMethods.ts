import { fetchRequest } from './fetchRequest';

export const get = async (url: string, options?: RequestInit) => await fetchRequest(url, options);

export const post = async (url: string, body = {}) =>
  await fetchRequest(url, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const put = async (url: string, body = {}) =>
  await fetchRequest(url, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
