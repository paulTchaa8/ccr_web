import { useState } from 'react'
import ForgotPasswordForm from './ForgotPasswordForm'
import Header from './Header'
import InfoModal from './InfoModal'
import * as ccrApi from '../api/ccrApi'
import {toast} from 'react-toastify'
import './style.css'

function ManageForgotPassword(props) {
	const [errors, setErrors] = useState({})
	const [envoye, setEnvoye] = useState(false)

	const [user, setUser] = useState({
		email: ''
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

		ccrApi.sendForgotPassword(user).then(() => {
			setEnvoye(true)
		}).catch(err => {
			console.log('boulet', err)
			toast.error('Adresse Email incorrect.')
		})
	}

	function formIsValid() {
		const _errors = {}
		if (!user.email) _errors.email = "Email is required."
		if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.email)) {
			_errors.email = "Invalid Email Address."
		}

		setErrors(_errors)
		// Form is valid if _errors has no properties..
		return Object.keys(_errors).length === 0
	}

	return (
		<div className="container-fluid">
		    <Header titre='Demande de reinitialisation' />
      		<InfoModal envoye={envoye} 
      			titre='Reinitialisation mot de passe !' 
      			message='changer votre mot de passe.'
      		/>
			<ForgotPasswordForm 
				user={user}
				errors={errors}
				handleInputChange={handleInputChange} 
				handleSubmit={handleSubmit}
			/>
		</div>
	)
}

export default ManageForgotPassword;