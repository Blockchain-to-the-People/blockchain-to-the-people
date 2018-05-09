import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton, TextField, DatePicker, TimePicker } from 'material-ui';
import web3 from '../../ethereum/web3';
import factory from '../../ethereum/factory';
import { fetchActiveElections } from '../store/user-home';

// const electionEvent = factory.ElectionLog();
// electionEvent.watch((error, result) => console.log(error, result));

class CreateElection extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      startDate: null,
      endDate: null,
      startTime: null,
      endTime: null,
      code: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleCodeChange = this.handleCodeChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleStartTime = this.handleStartTime.bind(this);
    this.handleEndTime = this.handleEndTime.bind(this);
  }

  handleChange (event) {
    // this.setState({ [event.target.name]: event.target.value })
    this.setState({ name: event.target.value })
  }


  handleCodeChange(event) {
      this.setState({ code: event.target.value })
  }

  handleStartDate (event, date) {
    let currentState = this.state;
    currentState.startDate = date;
    this.setState(currentState);
    console.log(this.state)
  }

  handleEndDate (event, date) {
    let currentState = this.state;
    currentState.endDate = date;
    this.setState(currentState);
    console.log(this.state)
  }

  handleStartTime (event, time) {
    let currentState = this.state;
    currentState.startTime = time;
    this.setState(currentState);
    console.log(this.state)
  }

  handleEndTime (event, time) {
    let currentState = this.state;
    currentState.endTime = time;
    this.setState(currentState);
    console.log(this.state)
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitted')
    web3.eth.getAccounts()
      .then(accounts => {
        return factory.methods
        .createElection(this.state.code)
        .send({
          from: accounts[0]
        })
        .then(stuff => console.log(stuff))
      })
      .catch(console.error)
  };

  render () {
    return (
      <div>
        <h1>New Election</h1>
          <form onSubmit={this.handleSubmit}>
            <TextField
              floatingLabelText="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <DatePicker name="start date" hintText="start date" value={this.state.startDate} onChange={this.handleStartDate}  />
            <DatePicker hintText="end date" value={this.state.endDate}  onChange={this.handleEndDate} />
            <TimePicker hintText="start time" value={this.state.startTime}  onChange={this.handleStartTime} />
            <TimePicker hintText="end time" value={this.state.endTime} onChange={this.handleEndTime} />
            <TextField
              floatingLabelText="code"
              value={this.state.code}
              onChange={this.handleCodeChange}
            />
          <RaisedButton type="submit">Submit</RaisedButton>
          </form>
      </div>
  )
  }
}
const mapState = (state) => {
  return {
    state: state,
    user: state.user,
    activeElections: state.activeElections,
    upcomingElections: state.upcomingElections
  }
}

const mapDispatch = (dispatch) => {
  return {
    getActiveElections: () => {
      dispatch(fetchActiveElections());
    }
  }
}

export default connect(mapState, mapDispatch)(CreateElection);
