import { Suspense } from 'react';

import { redirect } from 'next/navigation';

import { playersApi } from '@/api';
import Game from '@/feature/game/templates/Game';

const getPlayers = async () => {
  const users = await playersApi.get();

  if (!users?.length) redirect(`/`);

  return users;
};

const GamePage = async () => {
  const players = await getPlayers();

  return (
    <Suspense fallback={<div>...Loading</div>}>
      <Game players={players} />
    </Suspense>
  );
};

export default GamePage;
