import {
	CDBSidebar,
	CDBSidebarContent,
	CDBSidebarFooter,
	CDBSidebarHeader,
	CDBSidebarMenu,
	CDBSidebarMenuItem,
} from 'cdbreact'
import { NavLink } from 'react-router-dom'

const Sidebar = (props) => {
	return (
		<div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
	      	<CDBSidebar textColor="#fff" backgroundColor="#333">
		        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
					<a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
						CCR App
					</a>
		        </CDBSidebarHeader>

		        <CDBSidebarContent className="sidebar-content">
		        	<CDBSidebarMenu>
		        		<NavLink exact to="/dashboard" activeClassName="activeClicked">
		        			<CDBSidebarMenuItem icon="columns">
		        				Tableau de bord
		        			</CDBSidebarMenuItem>
		        		</NavLink>

			            <NavLink exact to="/profile/me" activeClassName="activeClicked">
			              	<CDBSidebarMenuItem icon="user">
			              		Mon Profil
			              	</CDBSidebarMenuItem>
			            </NavLink>

			            <NavLink exact to="/analytics" activeClassName="activeClicked"
			            onClick={() => props.setEnvoye(true)}>
			              	<CDBSidebarMenuItem icon="file-export">
			              		Exporter
			              	</CDBSidebarMenuItem>
			            </NavLink>

			            <NavLink exact to="/solr/search" activeClassName="activeClicked">
			              	<CDBSidebarMenuItem icon="search">
			              		Solr search
			              	</CDBSidebarMenuItem>
			            </NavLink>
		        	</CDBSidebarMenu>
		        </CDBSidebarContent>

		        <CDBSidebarFooter style={{ textAlign: 'center', marginTop: '10vh' }}>
					<div className="sidebar-btn-wrapper" style={{ padding: '20px 5px' }}>
						Copyright &copy;2023 CCR
					</div>
		        </CDBSidebarFooter>
			</CDBSidebar>
		</div>
	)
}

export default Sidebar;