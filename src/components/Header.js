import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from "../redux/actions/auth";

export const Header = ({ startLogout }) => {
	return (
		<header className="header">
			<div className="content-container">
				<div className="header-content">
					<Link to="/dashboard" className="header--title">
						<h1>Expensify App</h1>
					</Link>

					{/* <NavLink to="/create" activeClassName="is-active">Create</NavLink> */}
					{/* <NavLink to="/help" activeClassName="is-active">Help</NavLink> */}

					<button className="button button--link" onClick={startLogout}>Logout</button>
				</div>
			</div>
			
		</header>
	)
}

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);