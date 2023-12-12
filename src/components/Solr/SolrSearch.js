//import SpinnerPage from '../common/SpinnerPage'
import * as ccrApi from '../../api/ccrApi'
import WithAuth from '../common/WithAuth'
import Sidebar from './../Dashboard/Sidebar'
import NavCustom from './../Dashboard/NavCustom'
import SearchBar from './SearchBar'
import ResultItem from './ResultItem'
import { useState } from 'react'
import { toast } from "react-toastify"

const SolrSearch = (props) => {
	const [results, setResults] = useState([])
	const [texte, setTexte] = useState('')

	const handleSearch = (e) => {
		let value = e.target.value.toLowerCase()
		setTexte(value)
		setResults([])
	}	

	const handleSearchSolr = (e) => {
		e.preventDefault()
		ccrApi.get_messages_solr(texte).then(response => {
			console.log(response.length)
			setResults(response)
		}).catch(err => {
			console.log("Erreur solr.." + err.message)
			toast.error(`Erreur solr..`)
		})
	}

	return (
    <div className="d-flex">
	    <Sidebar />
      	<div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowX:"hidden"}}>
        	<NavCustom />
        	<div style={{height:"150vh"}}>
        		<div id="generateur">
					<p>RECHERCHE MESSAGES AVEC SOLR</p>
				</div>
				<div className="container-fluid">
	        		<div style={{
	        			display: 'flex',
	        			justifyContent:'center',
	        			marginBottom: '20px'
	        		}}>
	        			<SearchBar 
	        				handleSearch={handleSearch}
	        				handleSearchSolr={handleSearchSolr}
	        			/>
	        		</div>

	        		<div className="cadre_message table table-hover table-condensed">
	        			
	        			{
	        				results.length > 0 ? (
	        				results.map((msg, index) => {
	        					return (
			        				<ResultItem 
			        					key={index}
			        					message={msg}
			        				/>
			        			)
	        				})
	        			) : (
						 	<div>
								<div style={{ margin: '7.85em auto', textAlign: 'center' }}>
									<p>No content here.</p>
								</div>
							</div>	
							)      		
		        		}

					</div>
				</div>
        	</div>
      	</div>
    </div>
	)
}

export default WithAuth(SolrSearch)