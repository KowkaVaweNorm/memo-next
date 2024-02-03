'use client'
import { memo, useEffect, useMemo } from 'react';
import { Timer } from './store'
import { observer } from 'mobx-react-lite';
interface ITimerProps {
  myTimer: any
  className?: string
}

export const TimerView = observer(function TimerView(props: ITimerProps): JSX.Element {
  const {
    myTimer,
    className
  } = props;
  console.log('render TimerView');


  useEffect(() => {
    const timer = setInterval(() => {
      console.log('increase');

      myTimer.increaseTimer()
    }, 1000)
    return () => {
      clearInterval(timer);
    }
  }, [myTimer])

  return (
    <div>
      Timer: {myTimer.secondsPassed}
    </div>
  );
});
