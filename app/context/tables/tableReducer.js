import { TABLE_CREATE, TABLE_DELETE, TABLE_LIST, TABLE_UPDATE } from "./types";

export default (state, action) => {
  switch (action.type) {
    case TABLE_LIST:
      return {
        ...state,
        tables: action.payload,
      };
    case TABLE_CREATE:
      return {
        ...state,
        tables: [...state.tables, action.payload],
      };
    case TABLE_UPDATE:
      return {
        ...state,
        tables: [...state.tables.map(table => table._id != action.payload._id ? table : action.payload) ],
      };
    case TABLE_DELETE:
      return {
        ...state,
        tables: [...state.tables.filter(table => table._id != action.payload ) ],
      };
    default:
      break;
  }
};
