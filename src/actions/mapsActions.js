import ls from 'local-storage';
// import clients from '../apis/local';
import clients from '../apis/paycor';
import {
    CREATE_MAP,
    FETCH_MAPS,
    FETCH_MAP,
    EDIT_MAP,
    DELETE_MAP
      } from './types'


export const createMap = (formValues) => async dispatch => {

    var obj = { mapName: formValues };
    var myJSON = JSON.stringify(obj);

    console.log( ' createMap called wth myJSON = ', myJSON );
    console.log('16-  fomrValues = ', formValues );

    // debugger;
    const response = await clients.post('/maps', { mapName: formValues } );

    console.log('24 -  response from createMap = ', response );

    ls.clear();
    ls.set('current_MapId', response.data._id);
    ls.set('current_MapName', response.data.mapName);

    dispatch ({  type: 'CREATE_MAP',   payload: response.data });

    // route to  records/5e2349f732266ae2947db7e1
    };


    export const fetchMaps = () => {
        console.log('36 ---  action fetchMaps /maps   ');

      return async dispatch => {
          const response = await clients.get('/mapping');
          console.log('38 ---  action fetchClients  response = ', response.data );

          dispatch({
              type: 'FETCH_MAPS',
              payload: response.data
          });
      }
  };


  export const fetchSingleMap = (clientID) => {
      console.log('15 ---  action fetchSingleClient  clientID = ', clientID);
      return async dispatch => {
          const response = await clients.get(`/maps/${clientID}`);
          // console.log('19 ---  action fetchClients  response = ', response.data );
          dispatch({
              type: 'FETCH_SINGLE_MAP',
              payload: response.data
          });
      }
  };


  export const editMap = ( _id, mapName ) =>{

    console.log('66-editMap-action ---  _id = ', _id );
    console.log('67 ---  action editMap   mapName = ', mapName );


    return async dispatch => {
        const response = await clients.patch(`/maps/${_id}`, [
            { "op": "replace",
       "path": "/mapName",
       "value" : mapName }
    ]
    );

// const response = await clients.post('/maps', { mapName: formValues } );

        console.log('77 ---  action fetchSingleField  response = ', response.data );

        dispatch ({  type: EDIT_MAP,   payload: response.data });
        }


    };
