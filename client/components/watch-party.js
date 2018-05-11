import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';
import { fetchCandidates } from '../store/watch-party';
import Election from '../../ethereum/election';

/**
 * COMPONENT
 */

class WatchParty extends Component {

  async componentDidMount () {
    const election = await Election('0xC14AD6de02704C2e805e0b383116FC0B373eFF3b');
    // const count = await election.methods.candidates(3).call();
    // console.log(count);
    // console.log(election);
    // election
    // .then(this.props.getCandidates(election));
    this.props.getCandidates(election);
  }

  render () {
    console.log('CANDIDATES! ', this.props.candidates[0] && this.props.candidates[0].name)
    let active = this.props.activeElections.filter(election => election.communityId === this.props.user.communityId)

    const data = [{name: 'A1', value: 100},
                  {name: 'A2', value: 300},
                  {name: 'A3', value: 250},
                  {name: 'A4', value: 600},
                  {name: 'A5', value: 50}]

    return (
      <div>
          {
            active.length
            ? active.map(election => {
              return (
                <div key={election.id}>
                  <h1>Welcome to the Watch Party for the {election.name}!</h1>
                  {/*<PieChart width={800} height={400}>
                    {/*<Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                    <Pie data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" label />
                    <Tooltip />
                  </PieChart>*/}
                  <hr />
                  <div>{this.props.candidates[0] && `${this.props.candidates[0].name} ${this.props.candidates[0].count}`}</div>
                  <div>{this.props.candidates[1] && `${this.props.candidates[1].name} ${this.props.candidates[1].count}`}</div>
                </div>
              )
            })
            : <div>"There's no active election in your community!"</div>
          }
          <PieChart width={800} height={400}>
            <Pie isAnimationActive={true} data={data} dataKey="value" nameKey="name" cx={700} cy={300} innerRadius={40} outerRadius={80} fill="#82ca9d" label />
            {/*<Pie data={data} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" label />*/}
            <Tooltip />
          </PieChart>
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
    candidates: state.candidates
  }
}

const mapDispatch = (dispatch) => {
  return {
    getCandidates: (election) => {
      dispatch(fetchCandidates(election));
    }
  }
}

export default connect(mapState, mapDispatch)(WatchParty);
