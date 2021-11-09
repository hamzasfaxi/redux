import { ADDTASK, TOGGLECOMPLETE, EDDITTASK } from "../Action/action";

export const addtask = (newtask) => {
  return {
    type: ADDTASK,
    payload: newtask,
  };
};

export const togglecomplete = (id) => {
  return {
    type: TOGGLECOMPLETE,
    payload: id,
  };
};

export const edittasks = (editedtask) => {
  return {
    type: EDDITTASK,
    payload: editedtask,
  };
};
