import '../style.css'
import CommonForm from './CommonForm'

const MessageVisualForm = (props) => {
	return (
		<div style={{ margin: '2%' }}>
			<p style={{fontSize: '1.45rem'}}>
			<strong>INFORMATIONS SUR LE MESSAGE:</strong>
			</p>
			<hr/>
			<div>
				<em>Enr&eacute;gistr&eacute; par <strong>{props.data.nomRecepteur}</strong>, le <strong>{ new Date(props.data.date_message).toLocaleString() }</strong></em>
				&nbsp;&nbsp;
				{ props.data.modified_at && props.data.modified_by && (
					<em>Modifi&eacute; par <strong>{props.data.modified_by}</strong>, le <strong>{ new Date(props.data.modified_at).toLocaleString() }</strong></em>
				)}
			</div>
			<br/>
			<form onSubmit={props.handleSubmit}>
				<CommonForm 
					handleInputChange={props.handleInputChange} 
					data={props.data}
				/>

				<div>
					<button type="submit" className="btn btn-primary btn-sm"
						style={{background: '#333', border: '1px solid #333'}}>
						Modifier&nbsp;<i className="fa fa-edit"></i>
					</button>&nbsp;
					<button type="button" className="btn btn-danger btn-sm"
						onClick={() =>{ if(window.confirm('Supprimer ce message ?')) props.handleDeletion() }}>
						Supprimer&nbsp;<i className="fa fa-trash"></i>
					</button>
				</div>
			</form>
		</div>
	)
}

export default MessageVisualForm