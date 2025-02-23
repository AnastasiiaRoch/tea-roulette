import { isSSR } from '../utils';

export const fetchRequest = async (url: string, options: RequestInit = {}) => {
  const serverDomainURL = process.env.API_URL || 'http://localhost:8794';
  const requestURL = isSSR() ? `${serverDomainURL}${url}` : url;
  const response = await fetch(requestURL, options);

  const contentType = response?.headers.get('content-type');
  const isContentTypeJSON = contentType && contentType.indexOf('application/json') !== -1;

  if (!response.ok) {
    const errorMessage = isContentTypeJSON ? await response.json() : await response.text();
    throw new Error(typeof errorMessage === 'string' ? errorMessage : JSON.stringify(errorMessage));
  }

  if (!isContentTypeJSON) {
    return await response.text();
  }

  return await response.json();
};
