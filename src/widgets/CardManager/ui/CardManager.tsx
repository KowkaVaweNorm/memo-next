'use client'
import cls from './CardManager.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { observer } from 'mobx-react-lite';
import { cardManagerStore } from '..';
import { Card } from '@/widgets/Card';
import { useCallback, useState } from 'react';
import { ArrowBtn } from '@/shared/ui/ArrowBtn/ArrowBtn';

interface ICardManagerProps {
  className?: string
}
export const CardManager = observer((props: ICardManagerProps): JSX.Element => {
  const {
    className
  } = props;
  const [showNext, setShowNext] = useState(false);

  const setNextCard = useCallback(() => {
    console.log('click');
    setShowNext(false);
    cardManagerStore.setNextCard()
  }, [])

  const getCardComponent = useCallback(() => {
    if (cardManagerStore.getListLength()) {
      return <Card
        onSelectAnswer={(id: string) => {
          console.log('click answer: ', id);
          setShowNext(true)
        }}
        card={cardManagerStore.getCard()} />
    }
    else {
      return 'Loading... '
    }
  }, [])

  return (
    <div
      className={classNames(cls.card_manager ?? '', {}, [className])}
    >
      {getCardComponent()}
      <ArrowBtn
        className={
          classNames(cls.next_page_btn, {
            [cls.active]: showNext
          }, [])
        }
        onClick={setNextCard} />

    </div>
  );
});
