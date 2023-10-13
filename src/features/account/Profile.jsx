import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "./accountSlice";

const Profile = () => {
  const navigate = useNavigate();
  const account = useSelector((store) => store.account);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!account.isAuth)
      navigate("/auth/login", {
        replace: true,
      });
  }, [account.isAuth, navigate]);

  function handleLogOut() {
    dispatch(logout());

    navigate("/auth/login", {
      replace: true,
    });
  }

  return (
    <div>
      <h1>Welcome: {account.user.name}</h1>
      <p>
        <b>Email:</b> {account.user.email}
      </p>
      <p style={{ marginTop: "-12px" }}>
        <b>National ID:</b> {account.user.nationalId}
      </p>
      <img src={`${account.user.avatar}`} style={{ borderRadius: "10px" }} />
      <br />
      <br />
      <button onClick={() => handleLogOut()}>Log Out</button>
    </div>
  );
};

export default Profile;
