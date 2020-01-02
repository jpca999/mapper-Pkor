import clients from '../apis/clients';

import {
CREATE_RECORD,
FETCH_RECORDS,
FETCH_RECORD, 
EDIT_RECORD, 
DELETE_RECORD
  } from './types'


const sortArr = (arr) =>{

    return arr.sort((a, b) => (a.SequenceNumber > b.SequenceNumber) ? 1 : -1)
}

export const fetchRecords =  () =>{
    return async dispatch => {
    const response = await clients.get('/records'); 
    console.log('16 ---  action fetchRecords  response = ', response.data ); 

    const sortedArray = response.data.data.sort((a, b) => (a.SequenceNumber > b.SequenceNumber) ? 1 : -1)
    //   let arrr =   sortArr(response.data)
    console.log('24 ---  action fetchRecords  sortedArray = ', sortedArray ); 

    dispatch ({  type: 'FETCH_RECORDS',   payload: sortedArray });
    }
};

export const editRecord = (fieldID, formValues) =>{
        console.log('36-editField-action ---  fieldID = ', fieldID ); 
        console.log('37 ---  action editField   formValues = ', formValues ); 
        return async dispatch => {
            const response = await clients.put(`/records/${fieldID}`, formValues); 
            
            console.log('19 ---  action fetchSingleField  response = ', response.data ); 
            dispatch ({  type: EDIT_RECORD,   payload: response.data });
            }
        };
    
    


export const fetchSingleRecord = (recordID) =>{

console.log('15 ---  action fetchSingleRecord  recordID = ', recordID ); 
return async dispatch => {
    const response = await clients.get(`/fieldlist/${recordID}`); 
                                                 
    console.log('19 ---  action fetchClients  response = ', response.data ); 

    dispatch ({  type: 'FETCH_SINGLE_RECORD',   payload: response.data });
    }
};