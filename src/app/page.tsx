'use client';

import { useRouter } from 'next/navigation';

import Button from '@/lib/atoms/Button';
import Container from '@/lib/atoms/Container';
import Typography from '@/lib/atoms/Typography';

const WelcomePage = () => {
  const router = useRouter();

  return (
    <Container className="flex items-center justify-center h-full">
      <div className="text-center">
        <Typography className="mb-3" variant="h1" option="landing">
          Tea Roulette Game
        </Typography>
        <Typography className="mb-10" color="gray-200" option="large">
          Are you ready to find out who will prepare the tea next?
        </Typography>
        <Button onClick={() => router.push('/players')}>Start</Button>
      </div>
    </Container>
  );
};

export default WelcomePage;
