'use strict';

const db = require('../server/db');
const { User, Candidate, Community, Election } = require('../server/db/models');

async function seed () {
  await db.sync({ force: true });
  console.log('db synced!');

  // -- USERS --

  const usersList = [
    {
      name: 'Annalee Switek',
      email: 'annalee@annalee.com',
      password: 'annalee'
    },
    {
      name: 'Tasnuva Noor',
      email: 'tasnuva@tasnuva.com',
      password: 'tasnuva'
    },
    {
      name: 'Melissa Bellah',
      email: 'melissa@melissa.com',
      password: 'melissa'
    },
    {
      name: 'Christen Martin',
      email: 'christen@christen.com',
      password: 'christen'
    },
    {
      name: 'Ms. Admin',
      email: 'admin@admin.com',
      password: 'admin',
      isAdmin: true
    }
  ];

  const users = await Promise.all(
    usersList.map(user => User.create(user))
  );

  console.log(`seeded ${users.length} users`);

  // -- CANDIDATES --

  const candidatesList = [
    {
      name: 'Bernie Sanders',
      affiliation: 'Democrat',
      voteCount: 200,
      arrayIndex: 1
    },
    {
      name: 'Kieth Ellison',
      affiliation: 'Democrat',
      voteCount: 300,
      arrayIndex: 1
    },
    {
      name: 'Elizabeth Warren',
      affiliation: 'Democrat',
      voteCount: 350,
      arrayIndex: 1
    },
    {
      name: 'Mark Zuckerberg',
      affiliation: 'Democrat',
      voteCount: 300,
      arrayIndex: 1
    },
    {
      name: 'Lord Voldemort',
      affiliation: 'Republican',
      voteCount: 200,
      arrayIndex: 1
    },
    {
      name: 'Jill Stein',
      affiliation: 'Green Party',
      voteCount: 300,
      arrayIndex: 1
    }

  ];

  const candidates = await Promise.all(
    candidatesList.map(candidate => Candidate.create(candidate))
  );

  console.log(`seeded ${candidates.length} candidates`);

  // -- COMMUNITIES --

  const communitiesList = [
    {
      name: 'Generic Progressive Org',
      location: 'New York',
      timeZone: 'EST'
    }
  ];

  const communities = await Promise.all(
    communitiesList.map(community => Community.create(community))
  );

  const addUsersToCommunities = await Promise.all([
    User.findById(1).then(category => category.setCommunity(1)),
    User.findById(2).then(category => category.setCommunity(1)),
    User.findById(3).then(category => category.setCommunity(1)),
    User.findById(4).then(category => category.setCommunity(1)),
    User.findById(5).then(category => category.setCommunity(1)),
  ]);

  console.log(`seeded ${communities.length} communities`);

  // -- ELECTIONS --

  const electionsList = [
    {
      name: 'New Steering Committee Member Vote',
      startDate: 'Sun May 13 2018 08:00:00 EST-0400 (EST)',
      endDate: 'Wed May 30 2018 08:00:00 EST-0400 (EST)',
      blockchainAddress: '0x19B61a60f265EA37194826d752E5699bF382091D'
    }
  ];

  const elections = await Promise.all(
    electionsList.map(election => Election.create(election))
  );

  const addCandidatesToElections = await Promise.all([
    Candidate.findById(1).then(candidate => candidate.setElection(1)),
    Candidate.findById(2).then(candidate => candidate.setElection(1)),
    Candidate.findById(3).then(candidate => candidate.setElection(1)),
    Candidate.findById(4).then(candidate => candidate.setElection(1)),
    Candidate.findById(5).then(candidate => candidate.setElection(1)),
    Candidate.findById(6).then(candidate => candidate.setElection(1)),
  ]);

  const addElectionsToCommunities = await Promise.all([
    Election.findById(1).then(election => election.setCommunity(1))
  ]);

  console.log(`seeded ${elections.length} elections`);

}

seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  })
  .then(() => {
    console.log('closing db connection');
    db.close();
    console.log('db connection closed');
  });

console.log('seeding...');
