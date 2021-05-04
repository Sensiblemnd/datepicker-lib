import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import DatePicker from './date-picker';

const Container = styled.div`
  margin-bottom: 2rem;
  padding: 4rem;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default {
  title: 'Component/DatePicker',
  component: DatePicker,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;
/**
 *
 * @param args
 * @returns
 */
export const Default = (args: any) => (
  <Container>
    <DatePicker {...args} />
  </Container>
);

Default.args = {
  text: 'Save Game',
};
