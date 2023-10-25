import { Autocomplete, TextField } from "@mui/material";
import React, { useRef, useState } from "react";

const Sport = () => {
  const [options, setOptions] = useState([]);
  const previousController = useRef();

  const getData = (searchTerm) => {
    fetch("https://dummyjson.com/products/search?q=" + searchTerm, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log("Response", response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(
          "search term: " + searchTerm + ", results: ",
          myJson.products
        );
        const updatedOptions =
          myJson &&
          myJson.products &&
          myJson.products.length > 0 &&
          myJson.products.map((p) => {
            return { title: p.title };
          });
        setOptions(updatedOptions);
      });
  };

  const onInputChange = (event, value, reason) => {
    if (value.length >= 3) {
      getData(value);
    } else {
      setOptions([]);
    }
  };

  return (
    <div>
      <h1>Auto Complete</h1>
      <Autocomplete
        id="combo-box-demo"
        options={options}
        onInputChange={onInputChange}
        getOptionLabel={(option) => option.title}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
      <h1>Auto Complete</h1>
    </div>
  );
};

export default Sport;
