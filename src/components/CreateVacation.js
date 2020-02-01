import React, { useState } from 'react';
import moment from 'moment';

const today = () => moment().format('MM/DD/YYYY');
const week = () =>
  moment()
    .add('weeks', 1)
    .format('MM/DD/YYYY');

const CreateVacation = ({ createVacation }) => {
  const [startDate, setStartDate] = useState(today());

  const [endDate, setEndDate] = useState(week());

  const [error, setError] = useState('');

  const onSubmit = async ev => {
    ev.preventDefault();
    try {
      await createVacation({ startDate, endDate });
      setStartDate(today());
      setEndDate(week());
      setError('');
    } catch (ex) {
      setError(ex.response.data.message);
    }
  };

  return (
    <div>
      <h4 className="title">Vacations</h4>
      <span className="error">
        {error}
        <br />
      </span>
      <form className="input-container" onSubmit={onSubmit}>
        <input
          value={startDate}
          onChange={ev => setStartDate(ev.target.value)}
        />
        <input value={endDate} onChange={ev => setEndDate(ev.target.value)} />
        <button>Create</button>
      </form>
    </div>
  );
};

export default CreateVacation;
