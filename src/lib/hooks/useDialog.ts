import { useState } from 'react';

/**
 * A Custom Hook that handles Dialog open/close states.
 - initialOpen - initial isOpen state (optional)
*/

export const useDialog = (initialOpen?: boolean) => {
  const [isOpen, setIsOpen] = useState(initialOpen || false);

  const dialogOpen = () => setIsOpen(true);
  const dialogClose = () => setIsOpen(false);

  return { isOpen, dialogOpen, dialogClose };
};
