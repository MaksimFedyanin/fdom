import VStack from 'components/VStack';
import Text, { TextAlignment } from 'components/Text';
import HStack from 'components/HStack';
import Color from '../../utils/Color';

const DayText: Map<number, string> = new Map([
  [1, 'Пн'],
  [2, 'Вт'],
  [3, 'Ср'],
  [4, 'Чт'],
  [5, 'Пт'],
  [6, 'Сб'],
  [0, 'Вс'],
]);
const MonthText: Map<number, string> = new Map([
  [0, 'января'],
  [1, 'февраля'],
  [2, 'марта'],
  [3, 'апреля'],
  [4, 'мая'],
  [5, 'июня'],
  [6, 'июля'],
  [7, 'августа'],
  [8, 'сентября'],
  [9, 'октября'],
  [10, 'ноября'],
  [11, 'декабря'],
]);

interface IScheduleHeaderDayProps {
    day: Date;
}

const ScheduleHeaderDay = (props: IScheduleHeaderDayProps) => VStack(
  Text(`${DayText.get(props.day.getDay())}`)
    .textAlignment(TextAlignment.CENTER)
    .color(Color.white),
  HStack(
    Text(`${props.day.getDate()} `)
      .color(Color.white),
    Text(`${MonthText.get(props.day.getMonth())}`)
      .color(Color.white),
  ),
)
  .padding('2px', '10px', '2px', '10px');

export default ScheduleHeaderDay;
