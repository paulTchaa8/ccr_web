import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const RegistrationForm = (props) => {

	return (
		<form className="form" onSubmit={props.handleSubmit}>
			<div className="form-body">
				<div className="username">
					<label className="form__label" for="firstName">First Name: </label>
					<input type="text" className="form__input" type="text" id="firstName" placeholder="First Name"
					value={props.user.firstName || ''} 
					onChange= {props.handleInputChange} />
				</div>
				{
					props.errors.firstName && (
					<div className="alert alert-danger">{props.errors.firstName}</div>
					)
				}
				<div className="lastname">
					<label className="form__label" for="lastName">Last Name: </label>
					<input type="text" className="form__input" type="text" id="lastName" placeholder="Last Name" 
					value={props.user.lastName || ''} 
					onChange= {props.handleInputChange} />
				</div>
				{
					props.errors.lastName && (
					<div className="alert alert-danger">{props.errors.lastName}</div>
					)
				}				
				<div className="email">
					<label className="form__label" for="email">Email: </label>
					<input type="text" className="form__input" type="email" id="email" placeholder="Email" 
					value={props.user.email || ''}
					onChange= {props.handleInputChange} />
				</div>
				{
					props.errors.email && (
					<div className="alert alert-danger">{props.errors.email}</div>
					)
				}				
				<div className="password">
					<label className="form__label" for="password">Password: </label>
					<input type="text"
					className="form__input"
					type="password"
					id="password"
					placeholder="Password"
					value={props.user.password || ''}
					onChange= {props.handleInputChange} />
				</div>
				{
					props.errors.password && (
					<div className="alert alert-danger">{props.errors.password}</div>
					)
				}
			</div>

			<div className="footer">
				<button type="submit" class="btn btn-success">Cr&eacute;er mon compte</button>
			</div>
			<div className="row liens_register">
				<Link className="col-md-6" to={`/login`}>Se connecter</Link>
				<Link className="col-md-4" to={`/forgot-password`}>Mot de passe oubli&eacute;</Link>
			</div>
		</form>
	)
}

RegistrationForm.propTypes = {
	user: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
}

export default RegistrationForm;