import { Suspense } from 'react';

import { playersApi } from '@/api';
import AddPlayers from '@/feature/players/templates/AddPlayers';

const getPlayers = async () => {
  const users = await playersApi.get();

  if (!users?.length) return [];

  return users;
};

const AddPlayersPage = async () => {
  const players = await getPlayers();

  return (
    <Suspense fallback={null}>
      <AddPlayers initialPlayers={players} />
    </Suspense>
  );
};

export default AddPlayersPage;
