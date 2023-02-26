import { TextField } from "@mui/material"
import SearchBar from "material-ui-search-bar";
import { useState } from "react";

const Search=(props)=>{

    const [value,setValue]=useState(null);
    return (
        <input
        //   value={this.state.value}
          onChange={(newValue) => props.onSearchHandler(newValue)}
          style={{ 
            width:'300px' ,
             background:'transparent',
              height: '34px',
   
    
    boxShadow: '0px 0px 2px 1px #20d1d1',
    border:'none',
    position: 'fixed',
    right: '84px',
    fontSize: '16px',
    borderRadius: '0px',
    padding:'0px 5px'
        }}
          placeholder="Search Event"
        //   onRequestSearch={() => doSomethingWith(this.state.value)}
        />
      );
}

export default Search