import { useState } from 'react'
import ConnexionForm from './ConnexionForm'
import Dashboard from './Dashboard/Dashboard'
import Header from './Header'
import * as ccrApi from '../api/ccrApi'
import './style.css'
import { useLocation, Redirect } from 'react-router-dom'
import { toast } from "react-toastify"

const ManageConnexion = (props) => {
	const [errors, setErrors] = useState({})

	const [user, setUser] = useState({
		email: '',
		password: ''
	})

	const isAuth = !!localStorage.getItem("token")
	if (isAuth) {
		return <Redirect to="/dashboard" />
	}

	const queryParameters = new URLSearchParams(window.location.search)

	if (queryParameters.get('status') === 'invalid') {
		// toast ici erreur d'activation..
		toast.error('Compte deja actif ou inexistant..')
	}

	function handleInputChange(e) {
		const updatedUser = {
			...user,
			[e.target.id]: e.target.value
		}
		// then, update through the setter..
		setUser(updatedUser)
	}

	function handleSubmit(ev) {
		ev.preventDefault()
		if (!formIsValid()) return;

		ccrApi.login(user).then((response) => {
			console.log('Connexion reussie ', response)
			localStorage.setItem("token", response.token)
			props.history.push("/dashboard")
			toast.success(`Content de vous revoir, ${response.prenom} ${response.nom} !`)
		}).catch(err => {
			console.log("Connexion echouee..")
			props.history.push("/login")
			toast.error(`Parametres de connexion incorrects !`)
		})
	}

	function formIsValid() {
		const _errors = {}

		if (!user.email) _errors.email = "Email is required."
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
			_errors.email = "Invalid Email Address."
		}	
		if (!user.password) _errors.password = "Password is required."	
		if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}/.test(user.password)) {
			_errors.password = "Invalid Password."
		}

		setErrors(_errors)
		// Form is valid if _errors has no properties..
		return Object.keys(_errors).length === 0
	}

	return (
		<div className="container-fluid">
			<Header titre='Connexion' />
			<ConnexionForm 
				user={user}
				errors={errors}
				handleInputChange={handleInputChange} 
				handleSubmit={handleSubmit}
			/>
		</div>
	)
}

export default ManageConnexion;