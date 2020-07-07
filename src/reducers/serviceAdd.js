import {
  CHANGE_SERVICE_FIELD,
  ADD_SERVICE,
  EDIT_SERVICE,
  EDIT_TO_SERVICE,
  REMOVE_SERVICE,
} from "../actions/actionTypes";

const initialState = [
  {
    id: "",
    name: "",
    price: "",
    edit: false,
  },
];

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case ADD_SERVICE:
      // return { ...initialState };
      return {
        id: "",
        name: "",
        price: "",
        edit: false,
      };
    case EDIT_SERVICE:
      const { res, edit } = action.payload;

      return {
        id: res && res[0].id,
        name: res && res[0].name,
        price: res && Number(res[0].price),
        edit: edit,
      };
    case EDIT_TO_SERVICE:
      return { ...initialState };
    case REMOVE_SERVICE:
      return {
        id: "",
        name: "",
        price: "",
        edit: false,
      };

    default:
      return state;
  }
}
