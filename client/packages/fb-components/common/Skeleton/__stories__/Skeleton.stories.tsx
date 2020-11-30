import { Meta } from '@storybook/react/types-6-0';
import Skeleton from '..';

export default {
  title: 'Common/Skeleton',
  component: Skeleton,
} as Meta;

const Template = (props) => <Skeleton {...props} />;

export const Circle = Template.bind({});
Circle.args = {
  type: 'circle',
};

export const Rect = Template.bind({});
Rect.args = {
  type: 'rect',
  w: '100%',
  h: '50px',
};
