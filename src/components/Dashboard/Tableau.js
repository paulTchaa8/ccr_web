import '../style.css'

const Tableau = (props) => {
	// Ici le composant table des messages..

	const messages = props.messagesPages
 	const liste_messages = messages.length > 0 ? (
 		messages.map(donnee => {
		return (
			<tr className="active ligne_message"
				key={donnee.id}
				onClick={() => window.location.href=`/messages?mid=${donnee.id}`}>
				<td>{ donnee.num_emetteur }</td>
				<td>{ donnee.emetteur }</td>
				<td>{ donnee.num_recepteur }</td>
				<td>{ donnee.recepteur }</td>
				<td>{ donnee.installation }</td>
				<td>{ donnee.message }</td>
				<td>{ new Date(donnee.date_message).toLocaleString() }</td>
			</tr>
		)
	})
 	) : (
	 	<tr>
			<td colSpan={7}>
				<div style={{ margin: '7.85em auto', textAlign: 'center' }}>
					<p>No content here.</p>
				</div>
			</td>
		</tr>	
		)

	return (
		<>
			<div id="generateur">
				<p>LES DERNIERS ENREGISTREMENTS</p>
			</div>
			<div style={{textAlign: 'right', marginBottom: '.15rem', marginRight: '.15rem'}}>
				<div style={{alignItems: 'center'}}>
				<button className="btn btn-sm btn-primary" style={{background: '#333', border: '1px solid #333'}}
					onClick={() => props.setSent(true)}>
					Ajouter &nbsp;&nbsp;<i className="fa fa-save"></i>
				</button>&nbsp;
				<button className="btn btn-sm btn-primary" onClick={() => props.setEnvoye(true)}>
					Exporter &nbsp;<i className="fa fa-file-export"></i>
				</button>
				</div>
			</div>
			<div className="cadre_message">
				<table id="cadre_table" className="table table-hover table-condensed">
					<thead style={{ background: "#333", color: "#fff", position: 'sticky', top: '0px' }}>
						<th>Num&eacute;ro &Eacute;metteur</th>
						<th>Nom local &Eacute;metteur</th>
						<th>Num&eacute;ro Recepteur</th>
						<th>Nom Recepteur</th>
						<th>Installation</th>
						<th>Message</th>
						<th>Date Reception</th>
					</thead>
					<tbody>
						{ liste_messages }
					</tbody>
				</table>
			</div>
			<nav>
		       <ul className="pagination justify-content-center" style={{float: 'right'}}>
			       {
			       	props.numerosDePage.map(number => (
						<li key={number} className={props.currentPage === number ? 'page-item active' : 'page-item' }>
							<button
								onClick={() => props.getMessagesForPage(number)}
								className="page-link"
							>
								{number}
							</button>
						</li>
					))
			       }
		       </ul>
	       </nav>
		</>
	)
}

export default Tableau