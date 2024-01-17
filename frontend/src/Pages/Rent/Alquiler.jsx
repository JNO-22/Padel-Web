import { useState } from "react";
import "./alquiler.css";
import Form from "./Components/Form";
import { Calendario } from "./Components/calendar/Calendario";

const Alquiler = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [registro, setRegistro] = useState({});

  return (
    <div className="alquiler-container">
      <div className="calendar-container">
        <Calendario
          alquiler={registro}
          setAlq={setRegistro}
          buttonClicked={buttonClicked}
        />
      </div>

      <div className="alquiler-form-container">
        <Form
          setButtonClicked={setButtonClicked}
          setReg={setRegistro}
          Reg={registro}
        />
      </div>
    </div>
  );
};

export default Alquiler;
