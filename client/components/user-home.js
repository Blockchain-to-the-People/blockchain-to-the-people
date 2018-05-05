import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { fetchActiveElections, fetchUpcomingElections } from '../store/user-home';

/**
 * COMPONENT
 */
class UserHome extends Component {
  componentDidMount() {
    this.props.getActiveElections();
    this.props.getUpcomingElections();
  }
  render() {
    console.log('PROPS', this.props)
    let active = this.props.activeElections.filter(election => election.communityId === this.props.user.communityId)

    let upcoming = this.props.upcomingElections.filter(election => election.communityId === this.props.user.communityId)

  return (
    <div>
      <h3>Welcome, {this.props.user.name}</h3>
      <hr />
      <h4>Active Election:</h4>
      {
        active.length
        ? active.map(election => {
            return (
              <div key={election.id}>
                <h5>{election.name}</h5>
                <h5>From: {election.startDate}</h5>
                <h5>To: {election.endDate}</h5>
                <button>Vote Now!</button>
              </div>
            )
          })
        : <div>"There's no active election in your community!"</div>
      }
      <hr />
      <h4>Upcoming Elections:</h4>
      {
        upcoming.length
        ? upcoming.map(election => {
            return (
              <div key={election.id}>
                <h5>{election.name}</h5>
                <h5>From: {election.startDate}</h5>
                <h5>To: {election.endDate}</h5>
              </div>
            )
          })
        : <div>There's no upcoming elections in your community!</div>
      }
    </div>
  )

  }
  
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    user: state.user,
    activeElections: state.activeElections,
    upcomingElections: state.upcomingElections
  }
}

const mapDispatch = (dispatch) => {
  return {
    getActiveElections: () => {
      dispatch(fetchActiveElections());
    },
    getUpcomingElections: () => {
      dispatch(fetchUpcomingElections());
    }
  }
}

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {

}
