import { useCallback, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./Calendario.css";

export const Calendario = (props) => {
  // eslint-disable-next-line react/prop-types
  const { alquiler, setAlq } = props;
  const [fecha, setFecha] = useState(new Date());

  const onChange = useCallback((nextValue) => {
    console.log(nextValue);
    setFecha(nextValue);
  }, []);

  useEffect(() => {
    const formattedDate = {
      day: fecha.getDate(),
      month: fecha.getMonth() + 1,
      year: fecha.getFullYear(),
    };
    setAlq({ ...alquiler, date: formattedDate });
    console.log(JSON.stringify(alquiler));
  }, [fecha]);

  return (
    <>
      <Calendar
        onChange={onChange}
        value={fecha}
        locale="es-AR"
        minDate={new Date()}
        showFixedNumberOfWeeks={true}
        tileDisabled={({ date }) => date.getDay() === 0 || date.getDay() === 6}
        onActiveStartDateChange={({ activeStartDate }) =>
          setFecha(activeStartDate)
        }
        maxDate={
          new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            new Date().getDate()
          )
        }
      />
    </>
  );
};
