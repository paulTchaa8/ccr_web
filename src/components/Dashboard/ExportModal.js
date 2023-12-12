import React from 'react'
import {Modal} from 'react-bootstrap'

const ExportModal = (props) => {
	const handleClose = () => {
		props.setEnvoye(false)
		console.log('Export interface !')
	}

	return (
		<>
			<Modal show={props.envoye} onHide={handleClose} size="md" centered>
				<Modal.Header>
					<Modal.Title>D&eacute;finissez les marges de l'export:</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<form style={{ margin: 'auto 20%'}} onSubmit={props.handleDateSubmit}>
					<div style={{ display: 'flex', marginTop: '1rem', flexFlow: 'row'}}>
						<label htmlFor="debut" style={{width: '10rem'}}>Du:&nbsp;</label>
						<input type="date" id="debut" className="form-control"
							name="debut" title="Date de depart" onChange={props.handleDateChange}
							value={props.dates.debut}/>
					</div>						
					<div style={{ display: 'flex', marginTop: '1rem', flexFlow: 'row'}}>
						<label htmlFor="fin" style={{width: '10rem'}}>Au:&nbsp;</label>
						<input type="date" id="fin" className="form-control"
							name="fin" title="Date de fin" onChange={props.handleDateChange} 
							value={props.dates.fin} />
					</div>												

					<div style={{ display: 'flex', margin: '2rem auto', flexFlow: 'column'}}>
						<button type="submit" className="btn btn-primary" onClick={() => handleClose}
							style={{background: '#333', border: '1px solid #333'}}>
							Exporter&nbsp;<i className="fa fa-file-export"></i>
						</button>
					</div>
				</form>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default ExportModal;