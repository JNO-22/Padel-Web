const Form = ({ setReg, setButtonClicked, Reg }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const hour = event.target.hour.value;
    const duration = event.target.duration.value;
    setReg({
      ...Reg,
      name,
      email,
      phone,
      hour,
      duration,
    });
  };

  const hoursInDay = Array.from({ length: 24 }, (_, i) => i);

  const horasTomadas = [10, 11, 12, 13, 2];

  const duration = ["1", "2", "3", "4", "5", "6"];

  return (
    <div className="alquiler-form">
      <h2>Rent Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required />

        <div className="form-hour-container">
          {hoursInDay.map((hour) => (
            <label className="form-hour-label" htmlFor={hour} key={hour}>
              {hour > 11 ? ` ${hour}:00 PM` : ` ${hour}:00 AM`}
              <input
                className="form-hour-input"
                type="radio"
                name="something"
                id={hour}
                value={hour}
              />
            </label>
          ))}
        </div>

        <label htmlFor="duration">Duration:</label>
        <select name="duration" id="duration">
          {duration.map((hour) => (
            <option key={hour} value={hour}>
              {hour}
            </option>
          ))}
        </select>

        <button onClick={() => setButtonClicked(!setButtonClicked)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
