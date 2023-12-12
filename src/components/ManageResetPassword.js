import { useState } from 'react'
import ResetPasswordForm from './ResetPasswordForm'
import Header from './Header'
import * as ccrApi from '../api/ccrApi'
import './style.css'
import { toast } from "react-toastify"

const ManageResetPassword = (props) => {
	const [errors, setErrors] = useState({})

	const [user, setUser] = useState({
		new_password: '',
		confirm_password: ''
	})

	const queryParameters = new URLSearchParams(window.location.search)
	const reset_token = queryParameters.get('reset_token')

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

		ccrApi.verify_token(reset_token)
		.then(reponse => {
			// si bon, essaie de modifier le password..
			console.log('Peut modifier son password !')
			// ----------
			ccrApi.reset_password(user, reset_token).then((response) => {
				// Redirection vers la page de connexion..
				props.history.push('/login')
				// Toaster de reussite de connexion..
				toast.success('Mot de passe modifie avec succes.')
			}).catch(err => {
				// message d'erreur correspondance..
				toast.error('Les mots de passe ne sont pas identiques.')
				props.history.push('/login')
			})
			// ----------

		}).catch(err => {
			// sinon, notifie lien token expire..
			toast.error('Token expire ou incorrect.')
			// redirection vers le login page..
			props.history.push('/login')
		})
	}

	function formIsValid() {
		const _errors = {}

		if (!user.new_password) _errors.new_password = "Password is required."	
		if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}/.test(user.new_password)) {
			_errors.new_password = "Invalid Password."
		}		
		if (!user.confirm_password) _errors.confirm_password = "Password is required."	
		if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}/.test(user.confirm_password)) {
			_errors.confirm_password = "Invalid Password."
		}

		setErrors(_errors)
		// Form is valid if _errors has no properties..
		return Object.keys(_errors).length === 0
	}

	return (
		<div className="container-fluid">
			<Header titre='Reinitialisation Mot de Passe' />
			<ResetPasswordForm 
				user={user}
				errors={errors}
				handleInputChange={handleInputChange} 
				handleSubmit={handleSubmit}
			/>
		</div>
	)
}

export default ManageResetPassword;