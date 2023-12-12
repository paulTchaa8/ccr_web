import '../style.css'
import MessageVisualForm from './MessageVisualForm'
import DeleteModal from './DeleteModal'
import Sidebar from './Sidebar'
import NavCustom from './NavCustom'
import SpinnerPage from '../common/SpinnerPage'
import WithAuth from '../common/WithAuth'
import * as ccrApi from '../../api/ccrApi'
import { useState, useEffect } from 'react'
import { toast } from "react-toastify"
import { useHistory } from 'react-router-dom'

const ManageMessage = (props) => {
	const [data, setData] = useState({})
	const [del, setDel] = useState(false)
	const [spin, setSpin] = useState(true)

	// recupere l'id message comme parametre
	const m_id = new URLSearchParams(window.location.search).get('mid')
	const history = useHistory()
	// recupere le message et rend les donnees dans les fields

	useEffect(() => {
		ccrApi.detail_message(m_id).then(response => {
			console.log('quoi ===>', response)
			setData({'numRecepteur': response['num_recepteur'],
					'nomEmetteur': response['emetteur'],
					'nomRecepteur': response['recepteur'],
					'numEmetteur': response['num_emetteur'],
					'installation': response['installation'],
					'message': response['message'],
					'date_message': response['date_message'],
					'modified_at': response['modified_at'],
					'modified_by': response['modified_by']
				})
			setSpin(false)
		}).catch(err => {
			toast.error('Message introuvable.')
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

	// fonction de modification et update des donnees dans les fields
	function handleSubmit(e) {
		e.preventDefault()
		ccrApi.put_message(data, m_id).then(response => {
			toast.success(`Modification reussie`)
			setData({'numRecepteur': response['num_recepteur'],
				'nomEmetteur': response['emetteur'],
				'nomRecepteur': response['recepteur'],
				'numEmetteur': response['num_emetteur'],
				'installation': response['installation'],
				'message': response['message'],
				'date_message': response['date_message'],
				'modified_at': response['modified_at'],
				'modified_by': response['modified_by']
			})
		}).catch(err => {
			console.log(`Echec de modification ${err}`)
			toast.error(`Echec de modification - ${err}`)
		})
	}

	// fonction de suppression et redirection vers dashboard
	function handleDeletion() {
		ccrApi.delete_message(m_id).then(response => {
			console.log('mq reoonse ', response)
			history.push('/dashboard')
			toast.success(`Suppression message ok`)
		}).catch(err => {
			console.log(`Echec de modification ${err}`)
			toast.error(`Echec de modification - ${err}`)
		})
	}

	// modale de confirmation avant suppression
	return (
    <div className="d-flex">
	    <Sidebar />
      	<div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowX:"hidden"}}>
        	<NavCustom />
        	<div>
        		{spin ? 
    			(
    				<SpinnerPage />
    			) : (
        		<MessageVisualForm 
        			handleInputChange={handleInputChange}
        			data={data}
        			handleSubmit={handleSubmit}
        			handleDeletion={handleDeletion}
        			setDel={setDel}
        		/>
        		)}
        	</div>
      	</div>
    </div>
	)
}

export default WithAuth(ManageMessage);