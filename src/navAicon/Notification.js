import { React, useState, useRef } from "react";
import { Overlay, Popover } from "react-bootstrap";
import { StickyBallLoading } from "react-loadingg";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Notification = () => {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
      <Badge badgeContent={4} color="error" >
        <NotificationsIcon onClick={handleClick} />
      </Badge>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained">
          <Popover.Header as="h3"> Coming soon</Popover.Header>
          <Popover.Body>
            <div id="containeranimation2">
              <StickyBallLoading id="AWIP" />
            </div>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
};

export default Notification;
