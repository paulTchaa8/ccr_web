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
        			404 | <span style={{fontSize: '5vh'}}>
        			Oops! Couldn't find what you're looking for.
        			</span>
        		</p>
        	</div>
      	</div>
    </div>
	)

}

export default PageNotFound