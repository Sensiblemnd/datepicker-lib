import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import getYear from 'date-fns/getYear';
import getMonth from 'date-fns/getMonth';

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  interface CustomHeaderProps {
    date: Date;
    changeYear(year: number): void;
    changeMonth(month: number): void;
    decreaseMonth(): void;
    increaseMonth(): void;
    prevMonthButtonDisabled: boolean;
    nextMonthButtonDisabled: boolean;
  }

  const years = [2001, 2002, 2003, 2004, 2005];
  //TODO localize years

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const customHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: CustomHeaderProps) => {
    const onChangeYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
      changeYear(parseInt(event.currentTarget.value));
    };

    return (
      <div
        style={{
          margin: 10,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
          {'<'}
        </button>
        <select value={getYear(date)} onChange={onChangeYear}>
          {years.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          value={months[getMonth(date)]}
          onChange={({ target: { value } }) =>
            changeMonth(months.indexOf(value))
          }
        >
          {months.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          {'>'}
        </button>
      </div>
    );
  };

  const onDateChanged = (selectedDate: Date) => {
    selectedDate && setStartDate(selectedDate);
  };

  return (
    <ReactDatePicker
      renderCustomHeader={customHeader}
      selected={startDate}
      onChange={onDateChanged}
    />
  );
};

export default DatePicker;
