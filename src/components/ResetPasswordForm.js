import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const ResetPasswordForm = (props) => {

	return (
		<form className="form" onSubmit={props.handleSubmit}>
			<div className="form-body">				
				<div className="password">
					<label className="form__label" for="new_password">Password: </label>
					<input type="text"
					className="form__input"
					type="password"
					id="new_password"
					placeholder="New Password"
					value={props.user.new_password || ''}
					onChange= {props.handleInputChange} />
				</div>
				{
					props.errors.new_password && (
					<div className="alert alert-danger">{props.errors.new_password}</div>
					)
				}				
				<div className="password">
					<label className="form__label" for="confirm_password">Confirm Password: </label>
					<input type="password"
					className="form__input"
					type="password"
					id="confirm_password"
					placeholder="Confirm your password"
					value={props.user.confirm_password || ''}
					onChange= {props.handleInputChange} />
				</div>
				{
					props.errors.confirm_password && (
					<div className="alert alert-danger">{props.errors.confirm_password}</div>
					)
				}
			</div>

			<div className="footer">
				<button type="submit" class="btn btn-success">Changer mon mot de passe</button>
			</div>
		</form>
	)
}

ResetPasswordForm.propTypes = {
	user: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleInputChange: PropTypes.func.isRequired,
	errors: PropTypes.object.isRequired
}

export default ResetPasswordForm;