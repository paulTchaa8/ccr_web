import Spinner from 'react-bootstrap/Spinner'

const SpinnerPage = () => {
	return (
		<div style={{ margin: '40vh auto', textAlign: 'center' }}>
			<Spinner animation="border" size="xl" role="status">
		    	<span className="visually-hidden">Loading...</span>
		    </Spinner>
		</div>
	)
}

export default SpinnerPage;