import React from 'react';

import { IconX } from '@tabler/icons-react';
import cn from 'classnames';

import Button from '@/lib/atoms/Button';
import { PlayersType } from '@/lib/types';

interface IProps {
  className?: string;
  players: PlayersType;
  onClear?: (value: string) => void;
}

const PlayersList = ({ className, players, onClear }: IProps) => {
  if (!players || !players?.length)
    return <p className="italic text-gray-400 my-12 text-center">The players list is currently empty.</p>;

  return (
    <ul className={cn('my-4', className)}>
      {players.map((player) => (
        <li key={player?.id} className="flex items-center justify-between py-2 text-lg">
          <span className="capitalize">
            {player?.firstName} {player?.lastName}
          </span>
          {onClear && (
            <Button
              className="border-transparent hover:border-transparent hover:text-primary"
              isMobileFull={false}
              onClick={() => onClear(player?.id)}
              variant="text"
            >
              <IconX />
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default PlayersList;
