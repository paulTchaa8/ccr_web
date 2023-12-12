import React from 'react'
import {Modal} from 'react-bootstrap'
import CommonForm from './CommonForm'

const AddMessageModal = (props) => {
	const handleClose = () => props.setSent(false)

	return (
		<>
			<Modal show={props.sent} onHide={handleClose} size="lg" centered>
				<Modal.Header>
					<Modal.Title>
						Enr&eacute;gistrez un nouveau message:
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form onSubmit={props.handleSubmit}>
						<CommonForm 
							handleInputChange={props.handleInputChange} 
							data={props.data}
						/>
						<div id="enregistrer">
							<button type="submit" className="btn btn-primary save_message"
								style={{background: '#333', border: '1px solid #333'}}
								onClick={() => () => handleClose}>
								Enregistrer&nbsp;<i className="fa fa-save"></i>
							</button>
						</div>
					</form>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default AddMessageModal;