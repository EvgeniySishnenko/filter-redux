import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeService, editService } from "../actions/actionCreators";

function ServiceList() {
  const items = useSelector((state) => state.serviceList);
  const value = useSelector((state) => state.serviceAdd);
  let arr = [];

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };
  const handleEdit = (id) => {
    const res = items.filter((service) => service.id === id);

    dispatch(editService(res, true));
  };
  function fltr() {
    if (value.name !== undefined) {
      arr = items.filter(
        (o) => o.name.toLowerCase().indexOf(value.name.toLowerCase()) >= 0
      );
    } else {
      arr = items;
    }
  }
  fltr();

  return (
    <ul>
      {arr.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={() => handleEdit(o.id)}>edit</button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default ServiceList;
