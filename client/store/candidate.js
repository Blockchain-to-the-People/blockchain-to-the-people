import axios from 'axios';
import Election from '../../ethereum/election';

//Action Types
const GET_CANDIDATES = 'GET_CANDIDATES';
const NEW_VOTE_SOCKET = 'NEW_VOTE_SOCKET';
const POST_NEW_CANDIDATE = 'POST_NEW_CANDIDATE';

//Action Creators
const getCandidates = (candidates) => {
  return { type: GET_CANDIDATES, candidates }
};

export const newVoteSocket = (candidateLog) => {
  return { type: NEW_VOTE_SOCKET, candidateLog }
};

//Thunks!
export const fetchCandidates = (election) => {
  return dispatch => {
      election.methods.getCandidatesCount().call()
        .then(count => {
          console.log('counts is', typeof count);
        let candidates = {};
        for (let i = 0; i < +count; i++) {
          election.methods.candidates(i).call()
          .then(candidate => {
            candidates[i] = candidate;
          })
        }
        return candidates
      })
      .then(candidates => dispatch(getCandidates(candidates)))
      .catch(console.error);
  }
};

export const postVote = (newVoteObj, candidateId) => {
  return dispatch => {
    axios.put(`/api/candidates/${candidateId}`, newVoteObj)
      .then(res => res.data)
      .then(updated => console.log("new vote posted! ", updated))
      .catch(console.error);
  }
};

export const postNewCandidate = (newCandidateObj, electionId) => {
  return dispatch => {
    axios.post(`/api/candidates/${electionId}`, newCandidateObj)
      .then(res => res.data)
      .then(created => console.log("new candidate posted! ", created))
      .catch(console.error);
  }
};
//do we need an action creator to update the candidates array with the new candidate now?


//Reducer
export function candidatesReducer(candidates = {}, action) {
  switch (action.type) {
    case GET_CANDIDATES:
      return action.candidates
    default:
      return candidates
  }
};

export function newVoteSocketsReducer (countLog = [], action) {
  switch(action.type) {
    case NEW_VOTE_SOCKET:
      return [...countLog, action.candidateLog]
    default:
      return countLog
  }
};
