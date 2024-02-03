import { AnswerItem } from '@/entities/Card';
import cls from './CardAnswers.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { RefObject, memo, useLayoutEffect, useState } from 'react';
import { CardAnswerItem } from './CardAnswerItem/CardAnswerItem';

interface ICardAnswersProps {
  innerRef: RefObject<HTMLDivElement>
  answers: AnswerItem[]
  onSelectAnswer: (answerId: string) => void
  className?: string
}

export const CardAnswers = memo((props: ICardAnswersProps): JSX.Element => {
  const {
    innerRef,
    answers,
    onSelectAnswer,
    className
  } = props;

  const [comp, setComp] = useState<JSX.Element | JSX.Element[]>(<>Loading</>);
  useLayoutEffect(() => {
    setComp(answers.map(item => (
      <CardAnswerItem
        answer={item}
        key={item.id}
        className={cls.answer_item}
        onClick={onSelectAnswer.bind(null, item.id)} // не спрашивайте зачем именно bind, я так захотел))))
      />
    )))
  }, [answers, onSelectAnswer])
  return (
    <div
      ref={innerRef}
      className={classNames(cls.card_answers ?? '', {}, [className])}
    >
      {comp}
    </div>
  );
});
