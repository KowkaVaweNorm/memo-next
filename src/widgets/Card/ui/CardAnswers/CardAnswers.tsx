import { AnswerItem } from '@/entities/Card';
import cls from './CardAnswers.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo, useLayoutEffect, useState } from 'react';
import { CardAnswerItem } from './CardAnswerItem/CardAnswerItem';

interface ICardAnswersProps {
  answers: AnswerItem[]
  onSelectAnswer: () => void
  className?: string
}

export const CardAnswers = memo((props: ICardAnswersProps): JSX.Element => {
  const {
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
        onClick={onSelectAnswer}
      />
    )))
  }, [answers, onSelectAnswer])
  return (
    <div
      className={classNames(cls.card_answers ?? '', {}, [className])}
    >
      {comp}

    </div>
  );
});
