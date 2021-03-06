import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';
import {render} from 'react-dom';


import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import RecordComponent from './RecordComponent';
import { connect } from "react-redux";
import { fetchFields, editRecord } from '../../actions';

import DragHandleIcon from '@material-ui/icons/DragHandle';

const DragHandle = sortableHandle(() => <span> <DragHandleIcon/> </span>);


const SortableItem = sortableElement(({value}) => (
  <div className="theItem">
    <RecordComponent DragHandle={DragHandle} value={value} />
  </div>
));

const SortableContainer = sortableContainer(({children}) => {
  return <span>{children}</span>;
  // return <ul>{children}</ul>;
});

class SortableComponent extends Component {

    constructor(props) {
        // console.log(' 34 - in SortableComponent constrcutor props.Record._id = ',  props.Record._id );
        super(props);
        this.state = {
            resources: [],
            // records: ['Header Record 1', 'Details Record', 'Trail Record'],
            items: ['Field 97', 'Field 98', 'Field 99']

        };

        console.log('44 inside  EditRecords SortableCompoennt  this.props = ', this.props);

        // console.log(' 43 - inside EditREcords  SortableComponent - constrcutor = this.props= ', this.props); Records
        // console.log(' 44 - inside EditREcords  SortableComponent - constrcutor = this.props.Records= ', this.props.Records );

      }

      // async componentDidMount(){
      //   console.log('52-   compnent Did Mounted ');

      //   console.log('44 inside  EditRecords SortableCompoennt  this.props = ', this.props);
      //   // const response = await axios.get(`http://localhost:3030/records`)
      //   // let sortedResources = response.data.data.sort((a, b) => (a.SequenceNumber > b.SequenceNumber) ? 1 : -1)
      //   // console.log('49-sortedResources=', sortedResources );
      //   // this.setState({ resources: sortedResources });
      // }

      componentDidUpdate(prevProps) {
        // console.log('62 inside componentDidUpdate  EditRecords SortableCompoennt  this.props = ', this.props);
        if (prevProps.Records !== this.props.Records) {
          console.log('62 inside componentDidUpdate  EditRecords SortableCompoennt  this.props = ', this.props);
          this.setState({ resources: this.props.Records });
        }
      }


  onSortEnd = ({oldIndex, newIndex}) => {
    // console.log( ' 34 - oldIndex  = ', oldIndex );
    // console.log( ' 35 - newIndex  = ', newIndex );

    // this.setState(({items}) => ({
    //   items: arrayMove(items, oldIndex, newIndex),
    // }));

    this.setState(({resources}) => ({
      resources: arrayMove(resources, oldIndex, newIndex),
    }));

    this.state.resources.forEach((obj, index) =>{

      // console.log(' index = ', index );
      // console.log(' obj = ', obj );
      this.state.resources[index].SequenceNumber = index;

      this.props.editRecord(this.state.resources[index]._id,  this.state.resources[index] );
      // console.log('71 - this.state.resources  = ', this.state.resources );

    });
  };


  render() {
    // console.log('58- SortableComponent\'s props = ', this.props );
    const {items} = this.state;
    const {records} = this.state;
    const { resources } = this.state;

    // console.log('68- SortableComponent\'s resources  = ', resources );

    return (<div>
      <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
        {resources.map((value, index) => (
          <SortableItem key={`item-${value.fieldName}`} index={index} value={value} />
        ))}
      </SortableContainer>
        </div>
    );
  }
}


const mapStateToProps = (state) =>{
    // console.log( '81 - SortableComponent ->  state.records =', state );
    return { singleRecord: state.singleRecord };
};

export default connect(mapStateToProps, { fetchFields, editRecord })(SortableComponent);

// https://github.com/clauderic/react-sortable-hoc