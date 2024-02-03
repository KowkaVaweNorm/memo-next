import { AnswerItem } from '@/entities/Card';
import cls from './CardAnswerItem.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { TextWithToggle } from '@/shared/ui/TextWithToggle/TextWithToggle';

interface ICardAnswerItemProps {
  answer: AnswerItem
  onClick: () => void
  className?: string
}

export const CardAnswerItem = memo((props: ICardAnswerItemProps): JSX.Element => {
  const {
    answer,
    onClick,
    className
  } = props;
  const contentRef = useRef<HTMLDivElement>(null);

  const [expanded, setExpanded] = useState(false);
  const [isOverflowed, setIsOverflowed] = useState(false);


  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      const isTextOverflowed = content
        ? (content.scrollWidth > content.clientWidth) : false;

      setIsOverflowed(isTextOverflowed);
    }
  }, [answer.text]);


  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setExpanded(!expanded);
  }, [expanded]);
  return (
    <div
      title={answer.text}
      className={
        classNames(cls.card_answer_item ?? '',
          {},
          [cls.reset_btn, cls.btn, className])}
      onClick={onClick}>
      <span className={cls.id}>{answer.id}.</span>

      <TextWithToggle
        selfRef={contentRef}
        opened={expanded}
        isOverflowed={isOverflowed}
        text={answer.text} />

      {isOverflowed && (
        <button
          className={
            classNames(cls.expand_btn, {
              [cls.opened]: expanded
            }, [])
          }
          onClick={handleClick}>

        </button>
      )}
    </div>
  );
});
