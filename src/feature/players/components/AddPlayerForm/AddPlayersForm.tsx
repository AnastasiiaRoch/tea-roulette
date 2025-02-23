'use client';

import { useState } from 'react';

import Button from '@/lib/atoms/Button';
import InputField from '@/lib/atoms/Input';
import FormGroup from '@/lib/molecules/FormGroup';
import { playerSchema } from '@/lib/validation';

interface IProps {
  isLoading?: boolean;
  onAdd?: (value: string) => void;
}

const AddPlayersForm = ({ isLoading, onAdd }: IProps) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value.trim()) setError('');

    setInputValue(value);
  };

  const handleAdd = async () => {
    try {
      await playerSchema.validate({ player: inputValue });

      setInputValue('');
      if (onAdd) onAdd(inputValue);
    } catch (error: unknown) {
      const { message } = error as Error;
      setError(message);
    }
  };

  return (
    <div className="flex items-start gap-3 flex-col md:flex-row">
      <FormGroup label="Player Name" error={error} isLabelHidden className="flex-1 w-full">
        <InputField placeholder="Enter a player name" name="player" onChange={handleChange} value={inputValue} />
      </FormGroup>
      <Button isLoading={isLoading} onClick={handleAdd} variant="secondary">
        Add Player
      </Button>
    </div>
  );
};

export default AddPlayersForm;
