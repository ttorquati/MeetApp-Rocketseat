import React, { useRef, useEffect, useState, useMemo } from "react";
import ReactDatePicker from "react-datepicker";

import {
  parseISO,
  setHours,
  setMinutes,
  getHours,
  addHours,
  isToday
} from "date-fns";
import pt from "date-fns/locale/pt";

import { useField } from "@rocketseat/unform";

import { Container } from "./styles";

export default function DatePicker({ name }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: "props.selected",
      clearValue: pickerRef => {
        pickerRef.clear();
      }
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  useEffect(() => {
    if (defaultValue) {
      setSelected(parseISO(defaultValue));
    }
  }, [defaultValue]);

  const minHour = useMemo(() => {
    if (isToday(selected)) {
      const hour = getHours(addHours(new Date(), 1));

      return hour < 8 ? 8 : hour;
    }
    return 8;
  }, [selected]);

  return (
    <Container>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        locale={pt}
        placeholderText="Data do Meetup"
        showTimeSelect
        timeFormat="p"
        timeIntervals={60}
        dateFormat="dd 'de' MMMM', às ' kk'h'"
        minTime={setHours(setMinutes(new Date(), 0), minHour)}
        maxTime={setHours(setMinutes(new Date(), 0), 20)}
        minDate={new Date()}
      />
      {error && <span>{error}</span>}
    </Container>
  );
}
