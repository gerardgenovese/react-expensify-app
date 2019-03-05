import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../redux/actions/auth";

export const LoginPage = ({ startLogin }) => {
  return(
    <div className="box-layout">
      <div className="box-layout--box">

      <h1 className="box-layout--title">Expensify</h1>
      <p>It's time to get your expenses under control</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
      </div>
      {/* <h3>Login Page</h3> */}
  
    </div>
  )
};

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);