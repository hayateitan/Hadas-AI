import { produce } from "immer";

const reducer = produce((draft, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_EDITOR_VALUE":
      draft.editors[payload.id] = payload.value;
      break;
    case "LOAD_TABLES":
      draft.tables = payload;
      break;
    case "LOAD_COLUMNS":
      draft.columns = payload;
      break;
    case "TABLE_SELECTED":
      draft.selectedTable = payload;
      break;
    case "COLUMN_SELECTED":
      draft.selectedColumn = payload;
      break;
    case "COLUMN_SELECTEDF":
      draft.selectedColumnf = payload;
      break;
    case "ADD_FILTER":
      if (draft.filters[payload.table] === undefined) {
        console.log("init for table " + payload.table);
        draft.filters[payload.table] = [];
      }
      draft.filters[payload.table].push(payload.filter);
      break;
    case "REMOVE_FILTER":
      break;
    case "CREATE_LIBRARY_NAME":
      draft.librairiesname.push(payload);
      break;
    case "CREATE_LIBRARY_DESCRIPTION":
      draft.descriptionname.push(payload);
      break;
    case "SAVE_PROFILES_PREDICTION":
      draft.predict = payload;
      break;
    case "LOAD_OUTPOUT":
      draft.outpout = payload;
      break;
    case "GET_ALL_USER":
      draft.allusers = payload;
      break;
    default:
      break;
  }
  console.log(JSON.stringify(draft.predict));
});

export default reducer;
