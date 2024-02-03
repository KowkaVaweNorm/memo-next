'use client'
import cls from './RootPage.module.scss';
import { CardSchema } from '@/entities/Card';
import { CardManager, cardManagerStore } from '@/widgets/CardManager';
import { useEffect, useLayoutEffect } from 'react';
import { observer } from 'mobx-react-lite';


const cardObject: CardSchema = {
  id: '1',
  question: {
    text: `Вопрос 1? 
    Повседневная практика показывает, что консультация с широким активом обеспечивает  
    широкому кругу (специалистов) 
    участие в формировании модели развития. 
    Повседневная практика показывает, что рамки и место обучения кадров 
    требуют  определения и 
    уточнения модели развития. Задача организации, в особенности же рамки 
    и место обучения кадров представляет`
  },
  answers: [
    {
      id: '1',
      text: 'вода очищенная и вода жидкая опасны'
    },
    {
      id: '2',
      text: 'общий объем воды'
    },
    {
      id: '3',
      text: 'каждая серия воды приводит к разным положительным и не очень последствиям'
    },
    {
      id: '4',
      text: 'отдельные дозы воды вредны'
    },
    {
      id: '5',
      text: 'растворы для водяной воды'
    }
  ]
}
const cardObject2: CardSchema = {
  id: '2',
  question: {
    text: `Вопрос 2? 
    Повседневная практика показывает, что консультация с широким активом обеспечивает  
    широкому кругу (специалистов)`
  },
  answers: [
    {
      id: '1',
      text: 'вода Другая и вода '
    },
    {
      id: '2',
      text: 'общий объем воды приводит к разным положительным и не очень'
    },
    {
      id: '3',
      text: 'каждая серия воды последствиям'
    },
    {
      id: '4',
      text: 'отдельные АВОЗЫ воды вредны'
    },
    {
      id: '5',
      text: 'растворы для водяной воды'
    }
  ]
}
const cardList: CardSchema[] = [
  cardObject,
  cardObject2
]


// Главная страница
const RootPage = observer((): JSX.Element => {

  useEffect(() => {
    cardManagerStore.setList(cardList)
    return () => {
      cardManagerStore.setList(null)
    }
  }, [])

  return (
    <div className={cls.root_page}>
      <CardManager className={cls.card} />
    </div>
  );
});

export default RootPage;
