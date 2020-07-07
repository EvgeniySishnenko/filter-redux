import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  EDIT_TO_SERVICE,
} from "./actionTypes";

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}
export function editService(res, edit) {
  return { type: EDIT_SERVICE, payload: { res, edit } };
}
export function editToService(res, edit) {
  return { type: EDIT_TO_SERVICE, payload: { res, edit } };
}
export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}
