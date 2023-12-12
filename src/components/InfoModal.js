import React from 'react'
import {Modal, Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom"

const InfoModal = (props) => {
	let show = props.envoye
	let history = useHistory()
	const handleClose = () => {
		show = false
		console.log('Enregistrement reussi !', props)
		// redirection vers la page de connexion ici..
		history.push("/login")
	}

	return (
		<>
			<Modal show={show} onHide={handleClose} size="lg" centered>
				<Modal.Header>
					<Modal.Title>{ props.titre }</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Veuillez consulter votre courriel pour { props.message }
				</Modal.Body>
				<Modal.Footer>
					<Button variant="success" onClick={handleClose}>
						OK
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default InfoModal;