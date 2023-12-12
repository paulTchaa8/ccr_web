import React from 'react'

function Header({titre}) {
	return (
		<nav class="row bg-dark navbar-dark navbar">
			<div className="row col-12 d-flex justify-content-center text-white">
				<h3 style={{ textAlign: "center" }}>{titre}</h3>
			</div>
		</nav>
	)
}

export default Header;