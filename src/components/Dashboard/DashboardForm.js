import '../style.css'
import CommonForm from './CommonForm'

const DashboardForm = (props) => {
	return (
		<div style={{ margin: '2%' }}>
			<hr/>
			<p style={{ fontStyle: 'italic'}}>Enr&eacute;gistrez un nouveau message ici:</p>
			<hr/>
			<form onSubmit={props.handleSubmit}>
				<CommonForm 
					handleInputChange={props.handleInputChange} 
					data={props.data}
				/>
				<div id="enregistrer">
					<button type="submit" className="btn btn-primary save_message"
						style={{background: '#333', border: '1px solid #333'}}>
						Enregistrer&nbsp;<i className="fa fa-save"></i>
					</button>
				</div>
			</form>
		</div>
	)
}

export default DashboardForm