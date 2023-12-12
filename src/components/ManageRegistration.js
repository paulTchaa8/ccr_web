import React, { useState } from 'react'
import RegistrationForm from './registrationForm'
import Header from './Header'
import InfoModal from './InfoModal'
import * as ccrApi from '../api/ccrApi'
import {toast} from "react-toastify"
import './style.css'

function ManageRegistration(props) {
	const [errors, setErrors] = useState({})
	const [envoye, setEnvoye] = useState(false)

	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	})

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

		ccrApi.saveUser(user).then((reponse) => {
			console.log('here => ', reponse)
			setEnvoye(true)
		}).catch((err) => {
			toast.error('Erreur lors de l\'enregistrement !')
		})
	}

	function formIsValid() {
		const _errors = {}

		if (!user.firstName) _errors.firstName = "FirstName is required."
		if (!/^[a-zA-Z \'-]{2,}$/.test(user.firstName)) _errors.firstName = "Invalid first name."
		
		if (!user.lastName) _errors.lastName = "LastName is required."
		if (!/^[a-zA-Z \'-]{2,}$/.test(user.lastName)) _errors.lastName = "Invalid last name."

		if (!user.email) _errors.email = "Email is required."
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
			_errors.email = "Adresse Email Invalide."
		}	
		if (!user.password) _errors.password = "Password is required."	
		if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}/.test(user.password)) {
			_errors.password = "Mot de Passe Invalide."
		}

		setErrors(_errors)
		// Form is valid if _errors has no properties..
		return Object.keys(_errors).length === 0
	}

	return (
		<div className="container-fluid">
		    <Header titre='Registration' />
      		<InfoModal envoye={envoye} 
      			titre='Compte enregistr&eacute; !' 
      			message='activer votre compte.'
      		/>
			<RegistrationForm 
				user={user}
				errors={errors}
				handleInputChange={handleInputChange} 
				handleSubmit={handleSubmit}
			/>
		</div>
	)
}

export default ManageRegistration;