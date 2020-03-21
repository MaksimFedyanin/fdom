import HStack from 'components/HStack';
import ForEach from 'components/ForEach';
import VStack from 'components/VStack';
import { BorderType } from '../../utils/Border';
import ScheduleHeaderDay from './ScheduleHeaderDay';
import Color from '../../utils/Color';
import rgb from '../../utils/rgb';
import Alignment from "../../utils/Alignment";

interface IScheduleHeaderProps {
    days: Date[];
}

const ScheduleHeader = (props: IScheduleHeaderProps) => HStack(
  ...ForEach(props.days, (day: Date, index: number) => VStack(
    ScheduleHeaderDay({ day }),
  )
    .flex(1)
    .borderRight({
      width: '1px',
      color: rgb('f8', '10', '4d'),
      type: index === props.days.length - 1 ? BorderType.solid : BorderType.none,
    })
    .borderLeft({ width: '1px', color: rgb('f8', '10', '4d'), type: BorderType.solid })),
)
  .alignment(Alignment.LEFT)
  .background(Color.black);

export default ScheduleHeader;
