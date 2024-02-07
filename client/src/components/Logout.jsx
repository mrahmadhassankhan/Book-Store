import axios from "axios";
import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setRoleStatus }) => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/logout")
      .then((res) => {
        if (res.data.logout) {
          setRoleStatus("");
          navigate("/");
        }
      })
      .catch((err) => console.error(err));
  }, []);
};

export default Logout;
