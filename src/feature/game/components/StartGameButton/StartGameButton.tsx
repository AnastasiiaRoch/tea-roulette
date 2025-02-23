'use client';

import { useTransition } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/lib/atoms/Button';
import ToastBase from '@/lib/atoms/Toast';

interface IProps {
  disabled?: boolean;
  noTransition?: boolean;
}

const StartGameButton = ({ disabled, noTransition }: IProps) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    if (noTransition) {
      ToastBase.error('Add at least one additional player to start.');

      return;
    }

    startTransition(() => {
      router.push('/game');
    });
  };

  return (
    <div className="text-center mt-10">
      <Button onClick={handleClick} disabled={disabled} isLoading={isPending}>
        Run the Game
      </Button>
    </div>
  );
};

export default StartGameButton;
