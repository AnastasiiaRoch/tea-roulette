'use client';

import Button from '@/lib/atoms/Button';
import Typography from '@/lib/atoms/Typography';
import { useDialog } from '@/lib/hooks';
import Dialog from '@/lib/molecules/Dialog';
import { PlayersType } from '@/lib/types';

import PlayersList from '../PlayersList';

interface IProps {
  players: PlayersType;
}

const CheckPlayersDialog = ({ players }: IProps) => {
  const { isOpen, dialogOpen, dialogClose } = useDialog();

  return (
    <>
      <Button onClick={dialogOpen} variant="text" className="text-gray-200" isMobileFull={false}>
        Check Players
      </Button>
      <Dialog isOpen={isOpen} contentLabel="Players List Dialog" onRequestClose={dialogClose}>
        <div className="py-8">
          <Typography className="mb-8" variant="h3" align="center">
            List of Players
          </Typography>
          <PlayersList className="px-6" players={players} />
          <div className="text-center mt-12">
            <Button onClick={dialogClose}>Close</Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CheckPlayersDialog;
