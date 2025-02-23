'use client';

import { useState } from 'react';

import { playersApi } from '@/api';
import StartGameButton from '@/feature/game/components/StartGameButton';
import Container from '@/lib/atoms/Container';
import ToastBase from '@/lib/atoms/Toast';
import Typography from '@/lib/atoms/Typography';
import { PlayersType } from '@/lib/types';
import { splitFullName } from '@/lib/utils';

import AddPlayersForm from '../../components/AddPlayerForm';
import PlayersList from '../../components/PlayersList';

interface IProps {
  initialPlayers: PlayersType;
}

const AddPlayers = ({ initialPlayers }: IProps) => {
  const [players, setPlayers] = useState(initialPlayers || []);
  const [isLoading, setIsLoading] = useState(false);

  const handleAdd = async (value: string) => {
    if (!value) return;

    setIsLoading(true);
    try {
      const newPlayer = await playersApi.create(splitFullName(value));
      setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
      ToastBase.success('The player was successfully added.');
    } catch (error) {
      console.error(`Error: ${error}`);
      ToastBase.error('The player creation process has failed.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = async (id: string) => {
    if (!id) return;

    // We can delete a player using their ID in this method
    ToastBase.info('No DELETE method in the DB');
  };

  return (
    <Container className="max-w-xl">
      <Typography className="mb-10" variant="h1" align="center">
        Add Players
      </Typography>
      <AddPlayersForm isLoading={isLoading} onAdd={handleAdd} />
      <PlayersList players={players} onClear={handleClear} />
      <StartGameButton disabled={!players?.length} noTransition={players?.length < 2} />
    </Container>
  );
};

export default AddPlayers;
