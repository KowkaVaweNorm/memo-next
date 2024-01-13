import { Card } from '@/widgets/Card';
import cls from './RootPage.module.scss';
import { CardSchema } from '@/entities/Card';


const cardObject: CardSchema = {
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
      text: 'вода очищенная и вода для инъекций'
    },
    {
      id: '2',
      text: 'общий объем раствора'
    },
    {
      id: '3',
      text: 'каждая серия внутриаптечной заготовки лекарственных форм'
    },
    {
      id: '4',
      text: 'отдельные дозы в порошках'
    },
    {
      id: '5',
      text: 'растворы для лечебных клизм'
    }
  ]
}


// Главная страница
const RootPage = (): JSX.Element => {
  return (
    <div className={cls.root_page}>
      <Card card={cardObject} className={cls.card} />
    </div>
  );
};

export default RootPage;
