import { AnswerItem } from '@/entities/Card';
import cls from './CardAnswerItem.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo } from 'react';

interface ICardAnswerItemProps {
  answer: AnswerItem
  className?: string
}

export const CardAnswerItem = memo((props: ICardAnswerItemProps): JSX.Element => {
  const {
    answer,
    className
  } = props;
  return (
    <button title={answer.text} className={classNames(cls.card_answer_item ?? '', {}, [cls.reset_btn, cls.btn, className])}>
      <span className={cls.id}>{answer.id}.</span>
      <p className={cls.text}>{answer.text}</p>
    </button>
  );
});
