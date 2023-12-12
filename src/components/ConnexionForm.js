import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const ConnexionForm = (props) => {

	return (
		<form className="form" onSubmit={props.handleSubmit}>
			<div className="form-body">				
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
				<button type="submit" class="btn btn-success">Se connecter</button>
			</div>
			<div className="row liens_register">
				<Link className="col-md-6" to={`/register`}>Cr&eacute;er mon compte</Link>
				<Link className="col-md-4" to={`/forgot-password`}>Mot de passe oubli&eacute;</Link>
			</div>
		</form>
	)
}

ConnexionForm.propTypes = {
	user: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
}

export default ConnexionForm;