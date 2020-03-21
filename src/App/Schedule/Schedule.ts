import VStack from 'components/VStack';
import ScheduleHeader from './ScheduleHeader';

const getDay = (next: number) => {
  const day = new Date();

  day.setDate(new Date().getDate() + next);

  return day;
};
const SCHEDULE_DAYS = [
  getDay(0),
  getDay(1),
  getDay(2),
  getDay(3),
  getDay(4),
  getDay(5),
  getDay(6),
];

const Schedule = () => VStack(
  ScheduleHeader({ days: SCHEDULE_DAYS }),
);

export default Schedule;
