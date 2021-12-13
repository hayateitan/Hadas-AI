// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Server from "../Config";
// import axios from "axios";
// import { FormControl } from "react-bootstrap";
// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";

// const SelectedTab = () => {
//   const dispatch = useDispatch();
//   const tables = useSelector((store) => store.tables);
//   let token = sessionStorage.getItem("jwt");
//   const [selectedTabs, setSelectedTabs] = useState();
//   const handleChange = (event) => {
//     setSelectedTabs(event.target.value);
//   };
//   useEffect(() => {
//     getAllTables();
//   }, []);

//   const getAllTables = async () => {
//     const res = await axios.get(`${Server}/data`, {
//       headers: { Authorization: `Bearer ${token}` },
//     });

//     dispatch({ type: "LOAD_TABLES", payload: res.data });
//   };

//   const onTableauSelected = (tab) => {
//     setSelectedTabs(tab);
//     dispatch({ type: "TABLE_SELECTED", payload: tab });

//     if (tab !== null) {
//       axios
//         .get(`${Server}/data/${tab}`, {
//           headers: { Authorization: `Bearer ${token}` },
//         })
//         .then((res) => {
//           console.log(res);

//           dispatch({ type: "LOAD_COLUMNS", payload: res.data });
//         });
//       console.log("tableau envoyer" + tab);
//     } else {
//       console.log("choisi une table ");
//     }
//   };

//   return (
//     <div>
//       <Box sx={{ minWidth: 120 }}>
//         <FormControl>
//           <InputLabel id="selt">Table</InputLabel>
//           <Select
//             labelId="demo-simple-select-label"
//             id="demo-simple-select"
//             value={selectedTabs}
//             label="Table"
//             onChange={handleChange}
//           >
//             {tables?.map((t) => (
//               <MenuItem key={t}>{t}</MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Box>
//     </div>
//   );
// };

// export default SelectedTab;
