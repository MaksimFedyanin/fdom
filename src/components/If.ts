import Empty from 'components/Empty';
import { IView } from './View';

const If = (condition: boolean, view: IView) => (condition ? view : Empty());

export default If;
