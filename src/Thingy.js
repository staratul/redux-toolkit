const { useState, useEffect } = require("react");

const Thingy = ({ passengers }) => {
  console.log(passengers);
  // state to hold tenure (number) input from user
  const [tenure, setTenure] = useState(null);
  // state to hold tenure-dates (array of varying size)
  const [tnDates, setTnDates] = useState(null);

  // update tenure when user input changes
  const handleTenureChange = (ev) => setTenure(ev.target.value);

  // when 'tenure' gets updated, update the tenure-dates array
  useEffect(
    () =>
      setTnDates(
        tenure && tenure > 0
          ? [...Array(+tenure).keys()].map((id) => ({ id, tenureDate: "" }))
          : null
      ),
    [tenure]
  );

  // when user inputs a particular date, accept the input
  // and update the specific element in the array
  const handleDateChange = (ev) => {
    const idx = ev.target.id; // to access specific array element
    const val = ev.target.value; // to access the date-value selected by user
    setTnDates((prev) => {
      // "prev" is the current array
      const nd = [...prev]; // shallow-copy "prev" into "nd" (new-data) array
      nd[idx].tenureDate = val; // update the "tenureDate" at position "idx"
      return nd; // return the updated "nd" array to store into state
    });
  };
  console.log(tnDates);

  // clear all fields
  const clearAllFields = () => setTenure(0);

  return (
    <div>
      <label>Tenure: </label>
      <input type="number" value={tenure} onChange={handleTenureChange} />
      {tenure && tenure > 0 ? (
        <div style={{ margin: "10px 0" }}>
          Select dates
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "45%",
              marginTop: "10px",
            }}
          >
            {tnDates &&
              Array.isArray(tnDates) &&
              tnDates.length > 0 &&
              tnDates.map(({ id, tenureDate }) => (
                <input
                  style={{ margin: "5px 0" }}
                  key={id}
                  id={id}
                  type="date"
                  value={tenureDate}
                  onChange={handleDateChange}
                />
              ))}
          </div>
          <div style={{ marginTop: "10px" }}>
            Place buttons for futher processing here...
          </div>
          {tenure && tenure > 0 && tnDates && Array.isArray(tnDates) && (
            <div style={{ margin: "5px 0" }}>
              <button onClick={clearAllFields}>Clear All Fields</button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Thingy;
