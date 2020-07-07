import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeServiceField,
  addService,
  editService,
  editToService,
} from "../actions/actionCreators";

function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (item.edit === true) {
      dispatch(editToService(item, false));
    } else {
      dispatch(addService(item.name, item.price));
    }
  };
  const handleClose = (e) => {
    e.preventDefault();
    dispatch(editService("", false));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <button type="submit">Save</button>
      {item.edit && (
        <button onClick={handleClose} type="submit">
          Close
        </button>
      )}
    </form>
  );
}

export default ServiceAdd;
