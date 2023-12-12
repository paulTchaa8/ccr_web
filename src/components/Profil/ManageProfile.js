import '../style.css'
import ProfileContent from './ProfileContent'
import NavCustom from '../Dashboard/NavCustom'
import Sidebar from '../Dashboard/Sidebar'
import SpinnerPage from '../common/SpinnerPage'
import WithAuth from '../common/WithAuth'
import * as ccrApi from '../../api/ccrApi'
import { useState, useEffect } from 'react'
import { toast } from "react-toastify"
import { useHistory } from 'react-router-dom'

const ManageProfile = (props) => {
	const [data, setData] = useState({})
	const [envoye, setEnvoye] = useState(false)
	const [spin, setSpin] = useState(true)
	const history = useHistory()
	useEffect(() => {
		ccrApi.get_info_recepteur().then(response => {
			// provision the user's data..
			console.log('vodicl', response)
			setData(
				{
					'nomUser': response['nom'],
					'prenomUser': response['prenom'],
					'emailUser': response['email'],
					'phoneUser': response['telephone'],
					'date': response['date_inscription']
				}
			)
			setSpin(false)
		}).catch(err => {
			console.log('derreur '+ err.status_code)
			toast.error(`Erreur fetch profile. ${err}`)
			history.push('/dashboard')
		})
	}, [])

	function handleInputChange(e) {
		const updatedData = {
			...data,
			[e.target.id]: e.target.value
		}
		// then, update through the setter..
		setData(updatedData)
	}

	function handleSubmit(e) {
		e.preventDefault()
		ccrApi.put_recepteur(data).then(response => {
			toast.success(`Modification reussie`)
			setData(
				{
					'nomUser': response['nom'],
					'prenomUser': response['prenom'],
					'emailUser': response['email'],
					'phoneUser': response['telephone'],
					'date': response['date_inscription']
				}
			)
		}).catch(err => {
			console.log(`Echec de modification ${err}`)
			toast.error(`Echec de modification - ${err}`)
		})
	}
	return (
	    <div className="d-flex">
		    <Sidebar setEnvoye={setEnvoye}/>
	      	<div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowX:"hidden"}}>
	        	<NavCustom />
	        	<div style={{ display: 'flex', height: '100vh' }}>
	        		
	        		{	spin ? (
	        				<SpinnerPage />
	        			):(
	        				<ProfileContent data={data}
			        			handleInputChange={handleInputChange}
			        			handleSubmit={handleSubmit}
			        		/>
			        	)
	        		}
	        	</div>
	      	</div>
	    </div>
	)
}

export default WithAuth(ManageProfile)