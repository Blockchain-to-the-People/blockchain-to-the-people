import React, { Component } from 'react';
import { PieChart, Pie, Tooltip} from 'recharts';
import { connect } from 'react-redux';

class DonutChart extends Component {

  render (){
    const colorArray = ['#8884d8', '#8dd1e1', '#9cacf1', '#82ca9d', '#a4de6c', '#d0ed57']
    let idx = 0;

    const data = this.props.candidates ? this.props.candidates.map(candidate => {
      let candidateName = candidate.name;
      let candidateVoteCount = candidate.voteCount;
      let dataObj = {name: candidateName, value: candidateVoteCount, fill: colorArray[idx]}
      idx++
      return dataObj;
    }) : null
    console.log('Here is data! ', data);
    return (
        <div className="chart-wrapper">
          <PieChart width={1000} height={1000}>
            <Pie isAnimationActive={true} data={data} dataKey="value" nameKey="name" cx={700} cy={250} innerRadius={150} outerRadius={200} fill="#82ca9d" label />
            <Tooltip />
          </PieChart>
        </div>
    )
  }
}

const mapState = (state) => {
  return {
    candidates: state.activeElection.candidates,
  }
}

export default connect(mapState)(DonutChart);
