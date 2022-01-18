import React, { createElement, useState } from "react";
import { Modal } from "react-bootstrap";
import "./comentest.css";
import TextField from "@mui/material/TextField";
import "antd/dist/antd.css";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";
import {
  DislikeOutlined,
  LikeOutlined,
  DislikeFilled,
  LikeFilled,
} from "@ant-design/icons";
const Commenttest = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like} >
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];
  return (
    <div style={{ position: "relative", top: 189 }}>
      <Modal.Dialog
        size="xl"
        id="changeHeightmodalboxcommentarytest"
        scrollable={true}
        aria-labelledby="example-modal-sizes-title-xlg"
        contentClassName="modalcommentaryboxtest"
      >
        <Modal.Title>
          {" "}
          <TextField
            id="inputaddcomentary"
            variant="standard"
            placeholder="Add a comment... "
            style={{ width: 939 }}
          />
        </Modal.Title>
        <Modal.Body
          style={{
            height: 181,
            display: "grid",
            gridTemplateColumns: "auto auto ",
          }}
        >
          <Comment
            actions={actions}
            author={<a>Han Solo</a>}
            avatar={
              <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
            }
            content={
              <p id="textcommentary">
                We supply a series of design principles, practical patterns and
                high quality design re resources resourcessources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            }
            datetime={
              <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        </Modal.Body>
      </Modal.Dialog>
    </div>
  );
};

export default Commenttest;
