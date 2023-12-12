import {Modal} from 'react-bootstrap'

const DeleteModal = (props) => {
	const handleClose = () => {
		props.setDel(false)
	}
	return (
		<>
			<Modal show={props.del} onHide={handleClose} size="lg" centered>
				<Modal.Header>
					<Modal.Title>Supprimer ce message ?</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<form style={{ margin: 'auto 20%'}}
					onSubmit={props.handleDeletion}>
					<div>
						<button type="button" className="btn btn-sm btn-primary"
							style={{background: 'gray', border: '1px solid gray'}}
							onClick={() => handleClose}>
							Annuler
						</button>&nbsp;
						<button type="submit" className="btn btn-sm btn-danger"
							onClick={() => handleClose}>
							Supprimer
						</button>
					</div>
				</form>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default DeleteModal;