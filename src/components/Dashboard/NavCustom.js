import { useState } from "react"

const NavCustom = (props) => {
	const [isOpen, setIsOpen] = useState(false)
	const [isOpenPhoto, setIsOpenPhoto] = useState(false)
	const toggleOpen = () => {
		setIsOpen(!isOpen)
		console.log('bell ', isOpen)
	}	
	const toggleOpenPhoto = () => {
		setIsOpenPhoto(!isOpenPhoto)
		console.log('photo ', isOpenPhoto)
	}
	const menuClassBell = `dropdown-menu ${isOpen ? "show" : "" } dropdown-menu-right dropdown-menu-left`
	const menuClassPhoto = `dropdown-menu ${isOpenPhoto ? "show" : ""} dropdown-menu-right dropdown-menu-left`

	return (
		<nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{background: 'rgb(51, 51, 51)', padding: '1.1rem'}}>
		  <div className="container-fluid">
		    <form className="d-flex input-group w-auto">
		      <input
		        type="search"
		        className="form-control rounded"
		        style={{width: '16rem'}}
		        placeholder="Search"
		        aria-label="Search"
		        aria-describedby="search-addon"
		        onChange={props.handleSearchBar}
		      />
		      <span className="input-group-text text-white border-0" id="search-addon"
		      	style={{background: 'rgb(51, 51, 51)'}}>
		        <i className="fas fa-search"></i>
		      </span>
		    </form>

		    <div className="d-flex align-items-center">

		      <div className="dropdown" onClick={toggleOpen}>
		        <a
		          className="link-secondary me-3 dropdown"
		          href="#"
		          id="navbarDropdownMenuLink"
		          role="button"
		          data-mdb-toggle="dropdown"
		          aria-expanded="false"
		        >
		          <i className="fas fa-comments"></i>
		          <span className="badge rounded-pill badge-notification bg-danger">50+</span>
		        </a>
		        <ul
		          className={menuClassBell}
		          aria-labelledby="navbarDropdownMenuLink"
		        >
		          <li>
		            <a className="dropdown-item" href="/">Some news</a>
		          </li>
		          <li>
		            <a className="dropdown-item" href="/">Another news</a>
		          </li>
		          <li>
		            <a className="dropdown-item" href="/">Something else here</a>
		          </li>
		        </ul>
		      </div>

		      <div className="dropdown" onClick={toggleOpenPhoto}>
		        <a
		          className="dropdown d-flex align-items-center"
		          href="#"
		          id="navbarDropdownMenuAvatar"
		          role="button"
		          data-mdb-toggle="dropdown"
		          aria-expanded="false"
		        >
		         
		        <div style={{
		        	borderRadius: '50%',
		        	backgroundColor: '#11f',
		        	color: '#fff',
		        	height: '30px',
		        	width: '30px',
		        	padding: '3px',
		        	fontWeight: 'bold'
		        }}>
		        	{localStorage.getItem('prenom').charAt(0).toUpperCase()}
		        	{localStorage.getItem('nom').charAt(0).toUpperCase()}
		        </div>
		        
		        </a>
		        <ul
		          className={menuClassPhoto}
		          aria-labelledby="navbarDropdownMenuAvatar"
		        >
		          <li>
		            <a className="dropdown-item" href="/profile/me">Mon profil</a>
		          </li>
		          <li>
		            <a className="dropdown-item" href="#" onClick={props.handleLogout}>D&eacute;connexion</a>
		          </li>
		        </ul>
		      </div>
		    </div>

		  </div>
		</nav>
	)
}

export default NavCustom