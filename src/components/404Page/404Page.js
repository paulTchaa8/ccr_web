import Sidebar from './../Dashboard/Sidebar'
import NavCustom from './../Dashboard/NavCustom'


const PageNotFound = () => {
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
        		justifyContent: 'center', 
        		alignItems: 'center'
        	}}>
        		<p style={{ fontSize: '20vh', color: 'rgb(53, 162, 235)'}}>
        			404
        		</p>
        	</div>
      	</div>
    </div>
	)

}

export default PageNotFound