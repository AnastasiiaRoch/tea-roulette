'use client';

import { useEffect, useState } from 'react';

import CheckPlayersDialog from '@/feature/players/components/CheckPlayersDialog';
import Container from '@/lib/atoms/Container';
import Typography from '@/lib/atoms/Typography';
import { useDialog } from '@/lib/hooks';
import { PlayersType } from '@/lib/types';

import SlotMachine from '../../components/SlotMachine';
import WinnerDialog from '../../components/WinnerDialog';

interface IProps {
  players: PlayersType;
}

const Game = ({ players }: IProps) => {
  const [targetPlayer, setTargetPlayer] = useState(0);
  const { isOpen, dialogOpen } = useDialog();

  useEffect(() => {
    const randomPlayer = Math.floor(Math.random() * players?.length);
    setTargetPlayer(randomPlayer);
  }, [players?.length]);

  const winnerName = `${players[targetPlayer]?.firstName} ${players[targetPlayer]?.lastName}`;

  return (
    <Container className="max-w-2xl">
      <Typography className="mb-10" variant="h1" align="center">
        Let`s the Game Begin!
      </Typography>
      <div className="text-center mb-10">
        <CheckPlayersDialog players={players} />
      </div>
      <SlotMachine players={players} targetPlayer={targetPlayer} onEnd={dialogOpen} />
      <WinnerDialog isOpen={isOpen} winnerName={winnerName} />
    </Container>
  );
};

export default Game;
