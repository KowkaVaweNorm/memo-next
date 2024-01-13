import { type MutableRefObject, memo, useEffect, useRef, type UIEvent, useState, useCallback } from 'react';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { useWidthScreen } from '@/shared/lib/hooks/useWidthScreen/useWidthScreen';
import cls from './CardQuestions.module.scss';
import { QuestionItem } from '@/entities/Card';
import { useHeightScreen } from '@/shared/lib/hooks/useHeightScreen/useHeightScreen';

interface ICardQuestionsProps {
  question: QuestionItem;
  className?: string;
}


export const CardQuestions = memo((props: ICardQuestionsProps): JSX.Element => {
  const { question, className } = props;

  /**
   * Для корректного отображения тени при ресайзе
   */
  const widthScreen = useWidthScreen();
  const heightScreen = useHeightScreen();
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;


  const changeIsScrolling = useCallback((wrapperRef: MutableRefObject<HTMLDivElement>, document: any) => {
    const wrapperElement = wrapperRef.current;
    const correctScrollHeight = +(wrapperElement?.scrollHeight).toFixed(0);
    const correctClientHeight = +(wrapperElement.clientHeight + wrapperElement.scrollTop + 7).toFixed(0);
    if (correctScrollHeight > correctClientHeight) {
      document.querySelector('.' + cls.card_questions)?.classList.add(`${cls.isScrolling}`);
    } else {
      document.querySelector('.' + cls.card_questions)?.classList.remove(cls.isScrolling);
    }
  }, [])

  // Если изменилась ширина надо изменить отображение тени
  useEffect(() => {
    changeIsScrolling(wrapperRef, document)
  }, [changeIsScrolling, widthScreen, heightScreen]);

  const onScroll = (e: UIEvent<HTMLDivElement>): void => {
    changeIsScrolling(wrapperRef, document)
  };

  return (
    <div
      className={classNames(
        cls.card_questions ?? '', {}, [className]
      )}
    >
      <div
        ref={wrapperRef}
        onScroll={onScroll}
        className={classNames(
          cls.wrap_questions ?? '', {}, []
        )}
      >
        <div className={classNames(cls.question ?? '', {}, [])}>{question.text}</div>
      </div>
    </div>
  );
});
