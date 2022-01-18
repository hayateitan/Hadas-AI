import { React, useEffect } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Modal, Dropdown, ListGroup, Form } from "react-bootstrap";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import "./accesnotebook.css";
import { useDispatch, useSelector } from "react-redux";
import { nodejs } from "../Config";
import axios from "axios";

const AccesNotebook = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const dispatch = useDispatch();
  var data = sessionStorage.getItem("clé");
  useEffect(() => {
    axios.get(`${nodejs}/getUsers/${data}`).then((res) => {
      if (res.status === 200) {
        dispatch({ type: "GET_ALL_USER", payload: res.data });
      } else {
        console.log("erreur");
      }
    });
  }, []);

  const allusers = useSelector((store) => store.allusers);
  console.log(allusers);
  return (
    <div id="containerblockaccesnotebook">
      <Modal.Dialog
        id="modaldialogaccesnotebook"
        contentClassName="modalaccesnotebook"
      >
        <Modal.Header>
          <Modal.Title>
            {" "}
            <p id="puseraccesnoteboksearchbar">User</p>
            <Search id="searchbar">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <p id="lastsignedin">Last signed in</p>
            <p id="acceslevel">Acces level</p>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ListGroup variant="flush">
            {allusers?.map((t) => (
              <ListGroup.Item
                style={{ background: "white", height: 50, width: 667 }}
              
              >
                <p id="name" key={t.id}>
                  {t.name}{" "}
                </p>{" "}
                <p id="email" key={t.id}>
                  {t.email}
                </p>{" "}
                <p id="lastsigjnedinlistgroupitem" key={t.id}>
                  {t.signed}
                </p>{" "}
                <Dropdown id="acceslevellistgroupitem">
                  <Dropdown.Toggle id="dropdown-basic1">
                    Dropdown
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    id="komfjn"
                    style={{ position: "unset", inset: "" }}
                  >
                    <ListGroup variant="flush" id="listgroupacceslevel">
                      <ListGroup.Item id="listacceslevel">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <Form.Check type="checkbox" label="View" />
                          <p id="pacceslevel">
                            User will only be able to view the project.
                          </p>
                        </Form.Group>
                      </ListGroup.Item>

                      <ListGroup.Item id="listacceslevel">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox2"
                        >
                          <Form.Check type="checkbox" label="Comment" />
                          <p id="pacceslevel">User will be able to comment.</p>
                        </Form.Group>
                      </ListGroup.Item>

                      <ListGroup.Item id="listacceslevel">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox3"
                        >
                          <Form.Check type="checkbox" label="Execute" />
                          <p id="pacceslevel">
                            User will be able to execute code.
                          </p>
                        </Form.Group>
                      </ListGroup.Item>
                      <ListGroup.Item id="listacceslevel">
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox4"
                        >
                          <Form.Check type="checkbox" label="Edit" />
                          <p id="pacceslevel">
                            User will be able to edit the project.
                          </p>
                        </Form.Group>
                      </ListGroup.Item>
                    </ListGroup>
                  </Dropdown.Menu>
                </Dropdown>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default AccesNotebook;
