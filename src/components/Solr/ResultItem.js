const ResultItem = ({message}) => {

	return (
		<div 
			style={{borderBottom: '1px solid #000', cursor: 'pointer',
			background: 'lightgray', width: '60.5rem', padding: '10px'}}
		>
			<p>Num&eacute;ro &Eacute;metteur: { message["num_emetteur"].split("'")[1] }</p>
			<p>Nom local &Eacute;metteur: { message["emetteur"].split("'")[1] }</p>
			<p>Num&eacute;ro Recepteur: { message["num_recepteur"].split("'")[1] }</p>
			<p>Nom Recepteur: { message["recepteur"].split("'")[1] }</p>
			<p>Installation: { message["installation"].split("'")[1] }</p>
			<p>Message: { message["message"].split("'")[1] }</p>
			<p>Date: { message["text"].split("'")[1].split('\\n')[6] }</p>
		</div>
	)
}

export default ResultItem