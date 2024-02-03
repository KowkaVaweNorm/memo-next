import cls from './NextPageBtn.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import { memo, useEffect, useState } from 'react';
import Image from 'next/image';
import ArrowRight from '@/shared/assets/icons/arrow-right.svg'
import { observer } from 'mobx-react-lite';

interface INextPageBtnProps {
  hidden: boolean
  onClick: () => void
  className?: string
}
/**
 * @deprecated
 */
export const NextPageBtn = observer((props: INextPageBtnProps): JSX.Element => {
  const {
    hidden,
    onClick,
    className
  } = props

  return (
    <button
      onClick={onClick}
      className={
        classNames(cls.next_page_btn, {
          [cls.active]: !hidden
        }, [className])}>
      <Image
        src={ArrowRight}
        alt=''
        className={
          classNames(cls.arrow_right, {}, [])} />
    </button>
  );
});
