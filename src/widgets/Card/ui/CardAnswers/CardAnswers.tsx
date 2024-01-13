import { AnswerItem } from '@/entities/Card';
import cls from './CardAnswers.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo } from 'react';
import { CardAnswerItem } from './CardAnswerItem/CardAnswerItem';

interface ICardAnswersProps {
  answers: AnswerItem[]
  className?: string
}

export const CardAnswers = memo((props: ICardAnswersProps): JSX.Element => {
  const {
    answers,
    className
  } = props;
  return (
    <div
      className={classNames(cls.card_answers ?? '', {}, [className])}
    >
      {
        answers.map(item => (
          <CardAnswerItem answer={item} key={item.id} className={cls.answer_item} />
        ))
      }

    </div>
  );
});
