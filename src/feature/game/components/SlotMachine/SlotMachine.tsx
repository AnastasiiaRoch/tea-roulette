"use client";

import { useRef, useState } from "react";

import Button from "@/lib/atoms/Button";
import { PlayersType } from "@/lib/types";

interface IProps {
  players: PlayersType;
  targetPlayer: number;
  times?: number;
  duration?: number;
  onEnd?: VoidFunction;
}

const SlotMachine = ({
  players,
  targetPlayer = 3,
  times = 3,
  duration = 4000,
  onEnd,
}: IProps) => {
  const [height, setHeight] = useState(0);

  const frameRef = useRef<HTMLDivElement | null>(null);
  const targetRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleStart = () => {
    const parentElem = frameRef.current;
    const targetElem = targetRefs?.current[targetPlayer];
    const lastElem = targetRefs?.current[targetRefs?.current?.length - 1];

    if (!parentElem || !targetElem || !lastElem) return;

    const targetElemTop = targetElem.offsetTop;
    const lastElemTop = lastElem.offsetTop;
    const totalScroll = targetElemTop + lastElemTop * times;

    const startTime = Date.now();

    const animateScroll = () => {
      const progress = Date.now() - startTime;
      const easing = Math.min(
        Math.sin(0.5 * Math.PI * (progress / duration)),
        1
      );
      let newHeight = easing * totalScroll;

      if (newHeight > lastElemTop) {
        newHeight = newHeight % lastElemTop;
      }

      setHeight(newHeight);

      if (progress < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        setHeight(targetElemTop);
        if (onEnd) onEnd();
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const clonedPlayers = [...players, players[0]];
  const styles = {
    transform: `translateY(-${height}px)`,
  };

  return (
    <>
      <div className="relative">
        <div className="bg-secondary text-text text-center py-3 px-3 mx-auto max-w-[40%] rounded-t-md">
          Slot Machine
        </div>
        <div className="relative overflow-hidden border-solid border-[4px] border-secondary h-[10rem] rounded-lg">
          <div
            className="flex flex-col items-center justify-center"
            ref={frameRef}
            style={styles}
          >
            {clonedPlayers?.map((player, index) => (
              <div
                className="text-4xl capitalize py-2 h-[10rem] flex items-center"
                key={`${player?.id}-${index}`}
                ref={(el) => {
                  el && (targetRefs.current[index] = el); // eslint-disable-line @typescript-eslint/no-unused-expressions
                }}
              >
                {player?.firstName} {player?.lastName}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <Button onClick={handleStart}>Start Spinning</Button>
      </div>
    </>
  );
};

export default SlotMachine;
