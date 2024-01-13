"use client"
import { memo } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { CardQuestions } from '../CardQuestion/CardQuestions';
import cls from './Card.module.scss';
import { CardSchema } from '@/entities/Card';
import { CardAnswers } from '../CardAnswers/CardAnswers';

interface ICardProps {
  card: CardSchema
  className?: string;
}

export const Card = memo((props: ICardProps): JSX.Element => {
  const {
    card,
    className
  } = props;

  return (
    <div className={classNames(cls.card ?? '', {}, [className])}>
      <CardQuestions
        className={cls.question}
        question={card.question}
      />
      <CardAnswers className={cls.answers} answers={card.answers} />
    </div>
  );
});
