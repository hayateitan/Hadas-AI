import { produce } from "immer";

const reducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case "TEST": 
        alert("hello " + payload.name)
        draft.test = payload.name
        break;
    default:
        break;
  }
});

export default reducer;