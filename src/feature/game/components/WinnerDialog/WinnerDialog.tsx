'use client';

import { useTransition } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/lib/atoms/Button';
import Typography from '@/lib/atoms/Typography';
import Dialog from '@/lib/molecules/Dialog';

interface IProps {
  isOpen: boolean;
  winnerName: string;
}

const WinnerDialog = ({ isOpen, winnerName }: IProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleClick = () =>
    startTransition(() => {
      router.push('/');
    });

  return (
    <Dialog isOpen={isOpen} shouldCloseOnOverlayClick={false} contentLabel="Modal" closeBtn={false}>
      <div className="text-center py-8">
        <Typography className="mb-8" variant="h2" align="center">
          Get the Kettle on...
        </Typography>
        <Typography className="font-semibold capitalize mb-10" option="large" color="primary">
          {winnerName}
        </Typography>
        <Button onClick={handleClick} isLoading={isPending}>
          Prepare a Tea
        </Button>
      </div>
    </Dialog>
  );
};
export default WinnerDialog;
