import '../style.css'


const CommonForm = (props) => {
	return (
		<>
			<div className="item-enregistrement">
				<label htmlFor="numRecepteur">Num Recepteur: <span className="star">*</span></label>
				<input type="text" id="numRecepteur" className="form-control"
					aria-invalid="true" name="numRecepteur" pattern="(.){2,}\/(.){2,}"
					placeholder="Numero du recepteur" maxLength="20" title="Numero du recepteur"
					required data-content="Numero recepteur requis." value={props.data.numRecepteur}
					onChange={props.handleInputChange} />
				<span className="invalid">Num&eacute;ro recepteur incorrect</span>
			</div>
			<div className="item-enregistrement">
				<label htmlFor="nomEmetteur">Nom Emetteur: <span className="star">*</span></label>
				<input type="text" id="nomEmetteur" className="form-control"
					aria-invalid="true" name="nomEmetteur" pattern="(.){2,}"
					placeholder="Nom de l'emetteur" maxLength="20" title="Nom de l'emetteur"
					required data-content="Nom de l'emetteur requis." value={props.data.nomEmetteur}
					onChange={props.handleInputChange} />
				<span className="invalid">Nom de l'emetteur incorrect</span>
			</div>
			<div className="item-enregistrement">
				<label htmlFor="numEmetteur">Num Emetteur: <span className="star">*</span></label>
				<input type="text" id="numEmetteur" className="form-control"
					aria-invalid="true" name="numEmetteur" pattern="(.){2,}\/(.){2,3}"
					placeholder="Numero de l'emetteur" maxLength="20" title="Numero de l'emetteur"
					required data-content="Numero Emetteur requis." value={props.data.numEmetteur}
					onChange={props.handleInputChange} />
				<span className="invalid">Num&eacute;ro emetteur incorrect</span>
			</div>			
			<div className="item-enregistrement">
				<label htmlFor="installation">Installation: <span className="star">*</span></label>
				<input type="text" id="installation" className="form-control"
					aria-invalid="true" name="installation" pattern="(.){3,}"
					placeholder="Installation concern&eacute;e" maxLength="50" title="Installation concern&eacute;e"
					required data-content="Installation concern&acute;e requise." value={props.data.installation}
					onChange={props.handleInputChange} />
				<span className="invalid">Installation concern&eacute;e incorrect</span>
			</div>
			<div className="item-enregistrement">
				<label htmlFor="message">Message: <span className="star">*</span></label>
				<textarea id="message" className="form-control" name="message" pattern="(.){2,}" aria-invalid="true"
					placeholder="Votre message.." title="Laisser votre message" required value={props.data.message}
					onChange={props.handleInputChange} >
				</textarea>
				<span className="invalid">Message incorrect.</span>
			</div>
			<br/>
			<span style={{fontStyle: 'italic' }}>
				<span className="star">*</span>&nbsp;Champ requis.
			</span>
			<br/><br/>
		</>
	)
}

export default CommonForm