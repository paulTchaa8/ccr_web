const ProfileContent = (props) => {
	return (
		<div style={{ width: '50%', margin: '2% 25%', background: '#fff'}}>
			<hr/>
			<p style={{fontSize: '1.45rem', textAlign: 'center'}}>
				<strong>MON COMPTE</strong>
			</p>
			<form style={{ margin: 'auto 20%'}} onSubmit={props.handleSubmit}>
				<div style={{ display: 'flex', marginTop: '1rem', flexFlow: 'row'}}>
					<label htmlFor="nomUser" style={{width: '10rem'}}>Nom:&nbsp;</label>
					<input type="text" id="nomUser" className="form-control"
						name="nomUser" pattern="(.){2,}" onChange={props.handleInputChange}
						maxLength="20" title="Mon nom" value={props.data.nomUser} required/>
				</div>						
				<div style={{ display: 'flex', marginTop: '1rem', flexFlow: 'row'}}>
					<label htmlFor="prenomUser" style={{width: '10rem'}}>Pr&eacute;nom:&nbsp;</label>
					<input type="text" id="prenomUser" className="form-control"
						name="prenomUser" pattern="(.){2,}" onChange={props.handleInputChange}
						maxLength="20" title="Mon prenom" value={props.data.prenomUser} />
				</div>						
				<div style={{ display: 'flex', marginTop: '1rem', flexFlow: 'row'}}>
					<label htmlFor="emailUser" style={{width: '10rem'}}>Email:&nbsp;</label>
					<input type="text" id="emailUser" className="form-control"
						name="emailUser" pattern="(.){2,}"
						maxLength="20" title="Mon email" value={props.data.emailUser} disabled/>
				</div>						
				<div style={{ display: 'flex', marginTop: '1rem', flexFlow: 'row'}}>
					<label htmlFor="phoneUser" style={{width: '10rem'}}>T&eacute;l&eacute;phone:&nbsp;</label>
					<input type="text" id="phoneUser" className="form-control"
						name="phoneUser" pattern="(.){2,}" onChange={props.handleInputChange}
						maxLength="20" title="Mon telephone" value={props.data.phoneUser} required/>
				</div>
				<div style={{ display: 'flex', marginTop: '1rem', flexFlow: 'row'}}>
					<label htmlFor="date" style={{width: '10rem'}}>Inscription:&nbsp;</label>
					<input type="text" id="date" className="form-control"
						aria-invalid="true" name="date" pattern="(.){2,}"
						maxLength="20" title="date inscription" value={new Date(props.data.date).toLocaleString()} disabled/>
				</div>
				<div style={{ display: 'flex', margin: '2rem auto', flexFlow: 'column'}}>
					<button type="submit" className="btn btn-primary"
						style={{background: '#333', border: '1px solid #333'}}>
						Modifier mon compte&nbsp;<i className="fa fa-edit"></i>
					</button>
				</div>
			</form>
		</div>
	)
}

export default ProfileContent;