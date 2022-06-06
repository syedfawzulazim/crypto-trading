import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

interface BackdropProps {
  handleClose: () => void;
}

interface ModalProps {
  handleClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  return (
    <div
      onClick={props.handleClose}
      className="fixed top-0 left-0 z-40 w-full h-screen backdrop-blur-sm"
    ></div>
  );
};

const ModalOverlay: React.FC = (props) => {
  return (
    <div className="fixed top-[20vh] z-50 left-[25%] w-2/4 backdrop-blur-xl  shadow-2xl p-4 border rounded-2xl">
      <div>{props.children}</div>
    </div>
  );
};

const Modal: React.FC<ModalProps> = (props) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return (
      <div>
        {ReactDOM.createPortal(
          <Backdrop handleClose={props.handleClose} />,
          document.getElementById("overlays")!
        )}

        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          document.getElementById("overlays")!
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
