"use client"
import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { CardQuestions } from '../CardQuestion/CardQuestions';
import cls from './Card.module.scss';
import { CardSchema } from '@/entities/Card';
import { CardAnswers } from '../CardAnswers/CardAnswers';

interface ICardProps {
  card: CardSchema | null
  onSelectAnswer: (answerId: string) => void
  className?: string;
}

export const Card = memo((props: ICardProps): JSX.Element => {
  const {
    card,
    onSelectAnswer,
    className
  } = props;

  const answersRef = useRef<HTMLDivElement>(null);
  const handleAnswerClick = useCallback((answerId: string) => {
    onSelectAnswer(answerId)
  }, [])

  // const handleOutsideClick = (event: MouseEvent) => {
  //   // Проверяем, был ли клик вне области кнопок
  //   const buttonsContainer = answersRef.current;
  //   if (buttonsContainer && !buttonsContainer.contains(event.target as Node)) {
  //     setAllowNextCard(false);
  //   }
  // };

  // Добавляем обработчик клика за пределами компонента
  // useEffect(() => {
  //   document.addEventListener('click', handleOutsideClick);

  //   // Очищаем обработчик при размонтировании компонента
  //   return () => {
  //     document.removeEventListener('click', handleOutsideClick);
  //   };
  // }, []);



  return (
    <div className={classNames(cls.card ?? '', {}, [className])}>
      {
        card && <>
          <CardQuestions
            className={cls.question}
            question={card.question}
          />
          <CardAnswers
            innerRef={answersRef}
            className={cls.answers}
            answers={card.answers}
            onSelectAnswer={handleAnswerClick} />
        </>

      }
    </div>
  );
});
