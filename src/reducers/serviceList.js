import { nanoid } from "nanoid";
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  EDIT_TO_SERVICE,
} from "../actions/actionTypes";

const initialState = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
  { id: nanoid(), name: "Подмена дисплея", price: 25000 },
  { id: nanoid(), name: "Размен дисплея", price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      const { name, price } = action.payload;

      return [...state, { id: nanoid(), name, price: Number(price) }];
    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);
    case EDIT_TO_SERVICE:
      const { res, edit } = action.payload;
      let arr = state;

      const index = arr.findIndex((el) => {
        return el.id === res.id;
      });
      arr[index]["name"] = res.name;
      arr[index]["price"] = res.price;
      return arr;
    default:
      return state;
  }
}
