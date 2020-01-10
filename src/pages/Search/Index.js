import React, { useEffect } from 'react';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'; 
import { fetchSingleClient, fetchClients } from '../../actions'; 
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Search = (props) => {

  console.log( '11 - this.props ', props  ); 
  console.log( '12 - props.clients.data ', props.clients.data  ); 

  useEffect(() => {
    // code to run on component mount
    props.fetchClients(); 
  }, [])

    const defaultProps = {
      options:  props.clients.data,     
      // getOptionLabel: option => 'clientId = '+option.clientId+' clientName = '+option.clientName+' mapid= '+option.mapId,
      getOptionLabel: option => ' '+option.mapName+' '+' '+option._id,
    };
  
    const flatProps = {
      options: top100Films.map(option => option._id),
    };
  
    const [value, setValue] = React.useState(null);
  

function updateState(e) {
        console.log( '25- updateState called    '); 
        console.log("e.target.textContent ", e.target.textContent );
        console.log("e.target =", e.target );
        
        // props.selectClient(e.target.textContent)
        console.log(e.target.getAttribute("data-option-index"));
        // this.setState({ selectedOption: e.target.textContent, itemSelected: true });

        let last2 = e.target.textContent.slice(-24);
        console.log('42 -  last2= ', last2 );
        
        // props.history.push(`/search/${last2}`);

        props.history.push(`/records/${last2}`);

      }


    return (
      <div style={{ width: 950, marginLeft: 20  }}>
        <Autocomplete
          {...defaultProps}
        //   onClick={ () => props.selectClient() }
          onChange={updateState}
          id="disable-open-on-focus"
          disableOpenOnFocus
          renderInput={params => (
            <TextField {...params} label="Search by MapperId/company Name/Provider/Client/paygroup/margin" margin="normal" fullWidth />
          )}
        />
       
      </div>
    );
  }


const mapStateToProps = (state) =>{
    console.log( '63 -  state =', state ); 
    
    return { clients: state.clients }; 
}; 

export default connect(mapStateToProps, { fetchSingleClient, fetchClients })(Search); 





  
  // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
  const top100Films = [
    { provider: 'BlackBaud', mapId: 'BlackClientId-123423994', clientName: 'Apple', PayGroup: 'project-ID'  },
    { provider: 'Shawshank Redemption', year: 1972, client: 'Royal Dutch Shell', PayGroup: 'paygp'},
    { provider: 'The Godfather: Part II', year: 1974, client: 'State Grid', PayGroup: 'paygp'  },
    { provider: 'The Dark Knight', year: 2008, client: 'BP', PayGroup: 'paygp'  },
    { provider: '12 Angry Men', year: 1957, client: 'Volkswagen', PayGroup: 'paygp'  },
    { provider: "Schindler's List", year: 1993, client: 'Toyota', PayGroup: 'paygp'  },
    { provider: 'Pulp Fiction', year: 1994, client: 'Berkshire Hathaway', PayGroup: 'paygp'  },
    { provider: 'The Lord of the Rings: The Return of the King', year: 2003, client: 'Amazon', PayGroup: 'paygp'  },
    { provider: 'The Good, the Bad and the Ugly', year: 1966, client: 	'UnitedHealth', PayGroup: 'paygp'  },
    { provider: 'Fight Club', year: 1999, client: 'Samsung', PayGroup: 'paygp'  },
    { provider: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001, client: 'McKesson', PayGroup: 'paygp'  },
    { provider: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980, client: 'Daimler', PayGroup: 'paygp'  },
    { provider: 'Forrest Gump', year: 1994, client: 'CVS Health', PayGroup: 'paygp'  },
    { provider: 'Inception', year: 2010, client: 'Apple', PayGroup: 'paygp'  },
    { provider: 'The Lord of the Rings: The Two Towers', year: 2002, client: 'Apple', PayGroup: 'paygp'  },
    { provider: "One Flew Over the Cuckoo's Nest", year: 1975, client: 'Apple', PayGroup: 'paygp'  },
    { provider: 'Goodfellas', year: 1990, client: 'Apple', PayGroup: 'paygp'  },
    { provider: 'The Matrix', year: 1999, client: 'Banana', PayGroup: 'paygp'  },
    { provider: 'Seven Samurai', year: 1954, client: 'Gap', PayGroup: 'paygp'  },
  ];
  

//   https://codesandbox.io/s/laughing-mclean-qzi4h
// https://stackoverflow.com/questions/58686204/cant-get-event-target-value-using-select-item-from-material-ui-autocomplete-with