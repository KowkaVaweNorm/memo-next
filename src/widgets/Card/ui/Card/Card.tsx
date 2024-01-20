"use client"
import { memo, useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { CardQuestions } from '../CardQuestion/CardQuestions';
import cls from './Card.module.scss';
import { CardSchema } from '@/entities/Card';
import { CardAnswers } from '../CardAnswers/CardAnswers';
import ArrowRight from '@/shared/assets/icons/arrow-right.svg'
import Image from 'next/image';
interface ICardProps {
  card: CardSchema
  className?: string;
}

export const Card = memo((props: ICardProps): JSX.Element => {
  const {
    card,
    className
  } = props;
  const [allowNextCard, setAllowNextCard] = useState<boolean>(false)
  
  const handleAnswerClick = useCallback(() => {
    console.log('click');

    setAllowNextCard(true)
  }, [])

  return (
    <div className={classNames(cls.card ?? '', {}, [className])}>
      <CardQuestions
        className={cls.question}
        question={card.question}
      />
       <CardAnswers
        className={cls.answers}
        answers={card.answers}
        onSelectAnswer={handleAnswerClick} />
      <button className={
        classNames(cls.next_page_btn, {
          [cls.active]: allowNextCard
        }, [])}>
        <Image
          src={ArrowRight}
          alt=''
          className={
            classNames(cls.arrow_right, {}, [])} />
      </button>
    </div>
  );
});
