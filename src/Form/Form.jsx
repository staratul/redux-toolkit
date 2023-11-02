import React, { useEffect, useState } from "react";

const Form = ({ passengers, onChange }) => {
  const [tnDates, setTnDates] = useState(null);

  useEffect(() => {
    setTnDates(passengers);
  }, [passengers]);

  const handleNameChange = (ev) => {
    const idx = ev.target.id;
    const val = ev.target.value;
    setTnDates((prev) => {
      const nd = [...prev];
      nd[idx].Name = val;
      return nd;
    });
    onChange(tnDates);
  };

  const handleEmailChange = (ev) => {
    const idx = ev.target.id;
    const val = ev.target.value;
    setTnDates((prev) => {
      const nd = [...prev];
      nd[idx].Email = val;
      return nd;
    });
    onChange(tnDates);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      {passengers &&
        passengers.map(({ Id, Name, Email }) => {
          return (
            <div key={Id}>
              <span>Name</span>
              <input
                key={`Name` + Id}
                id={Id}
                name="name"
                value={Name}
                onChange={(e) => handleNameChange(e)}
              />
              <span>Email</span>
              <input
                key={`Email` + Id}
                id={Id}
                name="email"
                value={Email}
                onChange={(e) => handleEmailChange(e)}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Form;
