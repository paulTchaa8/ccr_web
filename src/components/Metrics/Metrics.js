import React, { useState, useEffect } from 'react'

import { Line } from 'react-chartjs-2'
import * as ccrApi from '../../api/ccrApi'
import Sidebar from './../Dashboard/Sidebar'
import NavCustom from './../Dashboard/NavCustom'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const Metrics = () => {
	const [labels, setLabels] = useState([])
	const [datas, setDatas] = useState([])

	useEffect(() => {
		ccrApi.get_message_metrics().then(response => {
			console.log('reponse  icici ', response)
			// provision the metrics and the months..
			setLabels(response.mois)
			setDatas(response.metriques)
		})
	}, [])

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Statistiques des messages',
			},
		},
	}

	const data = {
		labels,
		datasets: [
			{
				fill: true,
	      label: 'Nombre de messages',
	      data: datas,
	      borderColor: 'rgb(53, 162, 235)',
	      backgroundColor: 'rgba(53, 162, 235, 0.5)',
	    }
		],
	}
	return (
    <div className="d-flex">
	    <Sidebar />
      	<div style={{flex:"1 1 auto", display:"flex", flexFlow: "column", height:"100vh", overflowX:"hidden"}}>
        	<NavCustom />
        	<div style={{
        		display: 'flex', 
        		width: '100wh', 
        		height: '100vh', 
        		backgroundColor: "#fff", 
        		justifyContent: 'center'
        	}}>
        		<div style={{ width: '80%', padding: '4.5% 0'}}>
        			<Line options={options} data={data} />
        		</div>
        	</div>
      	</div>
    </div>
	)

}

export default Metrics