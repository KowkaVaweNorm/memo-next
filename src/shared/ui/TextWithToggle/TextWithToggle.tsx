import { classNames } from '@/shared/lib/ClassNames/ClassNames';
import React, { useState, useEffect, useRef, RefObject } from 'react';
import cls from './TextWithToggle.module.scss'


interface IProps {
  opened: boolean
  isOverflowed: boolean
  selfRef: React.RefObject<HTMLDivElement>
  text: string
  className?: string
}

export const TextWithToggle = (props: IProps) => {
  const {
    text,
    className,
    opened = false,
    selfRef,
    isOverflowed
  } = props;
  // console.log(isOverflowed + ' ' + text);

  return (
    <div
      ref={selfRef}
      className={
        classNames(className ?? '', {}, [cls.container])
      }
      style={{
        overflow: isOverflowed && opened ? 'visible' : 'hidden',
        whiteSpace: isOverflowed && opened ? 'normal' : 'nowrap',
        textOverflow: isOverflowed && opened ? 'inherit' : 'ellipsis',
        width: isOverflowed ? '83%' : '100%',
      }}
    >
      {text}
    </div>
  );
};

