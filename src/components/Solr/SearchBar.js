const SearchBar = (props) => {
 	return (
 		<form className="d-flex input-group w-auto" onSubmit={props.handleSearchSolr}>
		    <input
		        type="search"
		        id="search-solr"
		        className="form-control rounded"
		        placeholder="Search"
		       	style={{minWidth: '20rem'}}
		        aria-label="Search"
		        aria-describedby="search-addon"
		        onChange={props.handleSearch}
		    />
		    <button type="submit" className="input-group-text text-white border-0" id="search-addon"
		      	style={{background: 'rgb(51, 51, 51)'}}
		      	>
		        <i className="fas fa-search"></i>
		    </button>
		</form>
	)
}

export default SearchBar