import React from 'react';
import {
  Step,
  Stepper,
  StepContent, 
  StepLabel,
  RaisedButton, 
  FlatButton 
} from 'material-ui';
import { CreateElection, CreateCandidate, InstallMetamask, AllCommunityMembers } from './index';
import {Link} from 'react-router-dom'; 

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class HorizontalStepper extends React.Component {

  constructor(props) {
      super(props); 
      this.state = {
        finished: false,
        stepIndex: 0,
        components: [<InstallMetamask/>, <CreateElection/>, <CreateCandidate/>, <AllCommunityMembers />] 
      };

      this.getStepContent = this.getStepContent.bind(this); 
  }

  

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'MetaMask Browser Extension turns Google Chrome into an ethereum browser, which will enable us to retrieve your vote from the blockchain, and lets you securely sign transactions and manage your identity.'
      case 1: 
        return 'Select campaign settings.';
      case 2:
        return 'Add your first candidate. You can either add several candidates now, or return to this page at a later date.';
      case 3:
        return 'Invite members of your community to your election. They will be sent a private code, and will be added to your view after thay have successfully registered on the site.';
    }
  }


  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper className="container" activeStep={stepIndex}>
          <Step className="centerText">
            <StepLabel>Download MetaMask 
            </StepLabel>
          </Step >
          <Step className="centerText">
            <StepLabel>Create a Campaign
            </StepLabel>
          </Step>
          <Step className="centerText">
            <StepLabel>Add a Candidate to the Election</StepLabel>
          </Step>
          <Step className="centerText">
            <StepLabel>Invite Community Members To Participate In The Election</StepLabel>
          </Step>
        </Stepper>
        <div style={contentStyle}>
          {finished ? (
            <p>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  this.setState({stepIndex: 0, finished: false});
                }}
              >
                Click here
              </a> to reset the tutorial.
            </p>
          ) : (
            <div>
              <p>{this.getStepContent(stepIndex)}</p>
              <div className="container">{ this.state.components[stepIndex]}</div> 
              <div style={{marginTop: 12}}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 3 ? 'Finish' : 'Next'}
                  primary={true}
                  onClick={this.handleNext}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default HorizontalStepper;