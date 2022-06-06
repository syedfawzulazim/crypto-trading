import React from "react";
import Modal from "../UI/Modal";
import { AiOutlineClose } from "react-icons/ai";

//test 3
interface LoginProps {
  handleClose: () => void;
}

const Login: React.FC<LoginProps> = (props) => {
  return (
    <Modal handleClose={props.handleClose}>
      <div
        onClick={props.handleClose}
        className="w-5 bg-black cursor-pointer text-cyan-50"
      >
        <AiOutlineClose />
      </div>
      Login
    </Modal>
  );
};

export default Login;
