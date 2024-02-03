import cls from './ArrowBtn.module.scss';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import Image from 'next/image';
import { memo } from 'react';
import arrow from '@/shared/assets/icons/arrow.svg'

interface INextPageBtnProps {
  onClick: () => void
  shadow?: boolean
  className?: string
}

export const ArrowBtn = memo((props: INextPageBtnProps): JSX.Element => {
  const {
    onClick,
    shadow = true,
    className = ''
  } = props

  return (
    <button
      className={
        classNames(cls.arrow_btn, {
          [cls.shadow]: shadow
        }, [className])
      }
      onClick={onClick}>
      <Image
        priority
        src={arrow}
        style={{
          width: '100%',
          height: '100%'
        }}
        alt='arrow button'
      />
    </button>
  );
});
