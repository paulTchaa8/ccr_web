import Sidebar from './Sidebar'
import NavCustom from './NavCustom'
import Tableau from './Tableau'
import ExportModal from './ExportModal'
import AddMessageModal from './AddMessageModal'
import SpinnerPage from '../common/SpinnerPage'
import WithAuth from '../common/WithAuth'
import * as ccrApi from '../../api/ccrApi'
import { useState, useEffect, useLayoutEffect } from 'react'
import { toast } from "react-toastify"
import  {useHistory} from 'react-router-dom'

const Dashboard = () => {
	const [data, setData] = useState({})
	const [messages, setMessages] = useState([])
	const [envoye, setEnvoye] = useState(false)
	const [sent, setSent] = useState(false)
	const [dates, setDates] = useState({'debut': '', 'fin': ''})
	const [spin, setSpin] = useState(true)

	const [messagesPages, setMessagesPages] = useState([])
	const [currentPage, setCurrentPage] = useState(0)
	const postsPerPage = ccrApi.postsPerPage
	const numerosDePage = []
	let history = useHistory()

	useEffect(() => {
		ccrApi.get_messages().then(response => {
			// provision the list of messages..
			setMessages(response)
			if (currentPage === 0)
			{
				getMessagesForPage(1)
			}else{
				getMessagesForPage(currentPage)
			}
		setSpin(false)
		console.log('after ', spin)
		})
	}, [currentPage])

	const getMessagesForPage = (number) => {
		setCurrentPage(number)
		const indexOfLastPage = currentPage * postsPerPage
		const indexOfFirstPage = indexOfLastPage - postsPerPage
		setMessagesPages(messages.slice(
			indexOfFirstPage, indexOfLastPage))
	}

	for (let i=1; i<=Math.ceil(messages.length/postsPerPage); i++) {
		numerosDePage.push(i)
	}

	const handleInputChange = (e) => {
		const updatedData = {
			...data,
			[e.target.id]: e.target.value
		}
		// then, update through the setter..
		setData(updatedData)
	}	

	const handleDateChange = (e) => {
		const updatedDate = {
			...dates,
			[e.target.id]: e.target.value
		}
		// then, update through the setter..
		setDates(updatedDate)
	}

	const handleSearchBar = (e) => {
		let value = e.target.value.toLowerCase()
		// process the search..
		if (value.length > 0) {
			let resultat = messages.filter(
				elt => elt['num_recepteur'].toLowerCase().indexOf(value) >= 0 || 
				elt['recepteur'].toLowerCase().indexOf(value) >= 0 ||
				elt['num_emetteur'].toLowerCase().indexOf(value) >= 0 ||
				elt['emetteur'].toLowerCase().indexOf(value) >= 0 ||
				elt['installation'].toLowerCase().indexOf(value) >= 0 ||
				elt['message'].toLowerCase().indexOf(value) >= 0
			)
			//setMessages(resultat)
			setMessagesPages(resultat)
		} else {
			ccrApi.get_messages().then(response => {
				// provision the list of messages..
				getMessagesForPage(currentPage)
			})
		}
	}

	const handleDateSubmit = (ev) => {
		ev.preventDefault()
		ccrApi.export_message(dates).then((response) => {
			setEnvoye(false)
			setDates({'debut': '', 'fin': ''})
			toast.success(`Export reussi`)
			const link = document.createElement('a')
			link.href = response['chemin_fichier']
			document.body.appendChild(link);
			link.click();
        	link.parentNode.removeChild(link);
		}).catch(err => {
			console.log("Erreur lors de l'export.." + err.message)
			toast.error(`Erreur lors de l'export..`)
			
		})
	}

	const handleSubmit = (ev) => {
		ev.preventDefault()
		ccrApi.post_message(data).then((response) => {
			console.log('Message enregistree ', response.length)
			// Change le num de page, ce qui va enclancher le useEffect..
			setCurrentPage(0)
			setData({
				'numRecepteur': '',
				'nomEmetteur': '',
				'numEmetteur': '',
				'installation': '',
				'message': ''
			})
			setSent(false)
			toast.success(`Message enregistree !`)
		}).catch(err => {
			console.log("Erreur lors de l'enregistrement.." + err.message)
			toast.error(`Erreur lors de l'enregistrement.. ${err.message}`)
		})
	}

	const handleLogout = (e) => {
		// fonction de deconnexion de l'utilisateur..
		e.preventDefault()
		console.log('BADDOOO')
		ccrApi.logout().then((response) => {
			console.log('Deconnexion OK !', response)
			// vide le localStorage et redirection vers la login page
			history.push('/login')
			localStorage.clear()
			
		}).catch(err => {
			console.log('Erreur de deconnexion..'+ err.message)
			toast.error('Erreur de deconnexion..' + err.message)
		})
	}

	return (
    <div className="d-flex">
	    <Sidebar setEnvoye={setEnvoye}/>
      	<div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowX:"hidden"}}>
        	<NavCustom 
        		handleSearchBar={handleSearchBar} 
        		handleLogout={handleLogout}
        	/>
        	<div style={{height:"150vh"}}>
        		{
        			spin ? 
        			(
        				<SpinnerPage />
        			) : (
        			<>
		        	<ExportModal
		        		envoye={envoye}
		        		setEnvoye={setEnvoye}
		        		handleDateChange={handleDateChange}
		        		dates={dates}
		        		handleDateSubmit={handleDateSubmit}
		        	/>
		        	<AddMessageModal
		        		sent={sent}
		        		setSent={setSent} 
	        			handleSubmit={handleSubmit} 
	        			handleInputChange={handleInputChange}
	        			data={data}
	        		/> 
	        		<Tableau 
	        			messagesPages={messagesPages}
	        			setEnvoye={setEnvoye}
	        			setSent={setSent}
	        			currentPage={currentPage}
	        			numerosDePage={numerosDePage}
	        			getMessagesForPage={getMessagesForPage}
	        		/>
	        		</>
        			)
        		}
        	</div>
      	</div>
    </div>
	)
}

export default WithAuth(Dashboard);