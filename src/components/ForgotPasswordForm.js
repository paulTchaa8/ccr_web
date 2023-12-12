import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const ForgotPasswordForm = (props) => {

	return (
		<form className="form" onSubmit={props.handleSubmit}>
			<div className="form-body">				
				<div className="email">
					<label className="form__label" for="email">Entrer votre Email: </label>
					<input type="text" className="form__input" type="email" id="email" placeholder="Email" 
					value={props.user.email || ''}
					onChange= {props.handleInputChange} />
				</div>
				{
					props.errors.email && (
					<div className="alert alert-danger">{props.errors.email}</div>
					)
				}
			</div>

			<div className="footer">
				<button type="submit" class="btn btn-success">Renitialiser mon mot de passe</button>
			</div>
			<div className="row liens_register">
				<Link className="col-md-6" to={`/login`}>Se connecter</Link>
			</div>
		</form>
	)
}

ForgotPasswordForm.propTypes = {
	user: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
}

export default ForgotPasswordForm;