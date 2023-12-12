import { Redirect } from 'react-router-dom'
import {toast} from 'react-toastify'

const WithAuth = (Component) => {
	const AuthRoute = () => {
		// check if the token is stored..
		const isAuth = !!localStorage.getItem("token")
		if (isAuth) {
			console.log("Echo d'ici ==")
			return <Component />
		} else {
			toast.error("Session expiree")
			console.log("Echo d'ailleurs ==")
			return <Redirect to="/login" />
		}
	}

	return AuthRoute
}

export default WithAuth