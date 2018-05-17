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

  const pastCandidatesList = [
    {
      name: 'Brian Kavanagh',
      affiliation: 'Democratic',
      voteCount: 17782,
      arrayIndex: 1
    },
    {
      name: 'Analicia Alexander',
      affiliation: 'Republican',
      voteCount: 4072,
      arrayIndex: 1
    },
    {
      name: 'Unrecorded',
      affiliation: 'Other',
      voteCount: 5079,
      arrayIndex: 1
    },
    {
      name: 'Write-ins',
      affiliation: 'Other',
      voteCount: 143,
      arrayIndex: 1
    },
    {
      name: 'Christine Pellegrino',
      affiliation: 'Democratic',
      voteCount: 5324,
      arrayIndex: 1
    },
    {
      name: 'Thomas Gargiulo',
      affiliation: 'Republican',
      voteCount: 3181,
      arrayIndex: 1
    },
    {
      name: 'Albert Thompson',
      affiliation: 'Independence',
      voteCount: 292,
      arrayIndex: 1
    },
    {
      name: 'John Smith',
      affiliation: 'Conservative',
      voteCount: 867,
      arrayIndex: 1
    },
  ]
  const activeCandidatesList = [
    {
      name: 'Rosa Franklin',
      affiliation: 'Scientist',
      voteCount: 0,
      arrayIndex: 0,
      description: "It may have taken humanity much, much longer to discover the double-helix structure of DNA without Rosalind Franklin’s work. In fact, it has been suggested that she could have discovered the entire double-helix model on her own within a year, if a parallel discovery had not been made based (partially) on her research data.",
      imageURL:'https://upload.wikimedia.org/wikipedia/en/e/e9/Rosalind_Franklin_%281920-1958%29.jpg'
    },
    {
      name: 'Sappho',
      affiliation: 'Poet',
      voteCount: 0,
      arrayIndex: 1,
      description: '(630 and 612 BC)- Included among the nine lyric poets of ancient Greece, little of Sappho\'s writing has survived; but what has survived is a rich influence on western society and a provocative philosophy and lifestyle that challenges us even today.',
      imageURL: 'https://qph.fs.quoracdn.net/main-qimg-8e166d74a6e7e1b8ff6e8d84e84af88c'
    },
    {
      name: 'Flannery O\'Conner',
      affiliation: 'Writer',
      voteCount: 0,
      arrayIndex: 2,
      description: '(1925-1964)- Leading member of the Southern Gothic movement, the American master of prose both in the short and long form. Along with William Faulkner, O\'Conner perhaps grasped the Southern experience like few others.Her short story A Good Man is Hard to Find is considered a landmark for the short form.',
      imageURL: 'https://qph.fs.quoracdn.net/main-qimg-8dc8ebab32e1e311c96778aff425e75f'
    },
    {
      name: 'Frida Kahlo',
      affiliation: 'Artist',
      voteCount: 0,
      arrayIndex: 3,
      description: '(1907-1957)- Shocking, controversial, and thought provoking both in her art and in her personal life. Frida\'s many self portraits challenged what should be at the center of a work of art, and her style often challenged how an artist should depict it.',
      imageURL: 'https://qph.fs.quoracdn.net/main-qimg-9590bb2a08ae42ad56f1730e6b233c4d'
    },
    {
      name: 'Maryam Mirzakhani',
      affiliation: 'Mathematician',
      voteCount: 0,
      arrayIndex: 4,
      description: 'She is an Iranian mathematician who serves as a professor of mathematics at Stanford University. She is the the first woman and Iranian to win the Fields Medal, the most prestigious award in mathematics. The Fields Medal and the Abel Prize have often been described as the "mathematician\'s Nobel Prize"',
      imageURL: 'https://qph.fs.quoracdn.net/main-qimg-90d6c37b286d5be2e131fa4d58ada603-c'
    },
    {
      name: 'Rear Admiral Dr. Grace Hopper',
      affiliation: 'Computer Science',
      voteCount: 0,
      arrayIndex: 5,
      description: ' Grace Hopper was one of the most accomplished women in computer science. She held a Ph.D. in mathematics and taught at Vassar until she joined the Navy during World War II. She served in the Naval Reserves for most of her life, eventually achieving the rank of Rear Admiral.',
      imageURL: 'https://qph.fs.quoracdn.net/main-qimg-08742725c88e7d39c39b839c2f73044f-c'
    }
  ]

  const upcomingCandidatesList = [
    {
      name: 'Lee Zeldin',
      affiliation: 'Republican',
      voteCount: 0,
      arrayIndex: 0,
      description: `Lee Zeldin (b. January 30, 1980) is a Republican member of the U.S. House of Representatives, representing New York's 1st Congressional District. Zeldin was first elected to the House in 2014. Zeldin is currently the only Jewish Republican member of Congress.`,
      imageURL: 'https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Lee_Zeldin_new_official_portrait.jpg'
    }, 
    {
      name: 'Kathleen M. Rice', 
      affiliation: 'Democrat', 
      voteCount: 0, 
      arrayIndex: 1, 
      description: `Kathleen M. Rice (b. February 15, 1965, in New York City, N.Y.) is a Democratic member of the U.S. House of Representatives, representing New York's 4th Congressional District. Rice was first elected to the House in 2014.`,
      imageURL: 'https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Kathleen_M._Rice.jpg'
    }, 
    {
      name: 'Yvette D. Clark', 
      affiliation: 'Democrat', 
      voteCount: 0, 
      arrayIndex: 2, 
      description: `Yvette D. Clarke (b. November 21, 1964, in Brooklyn, N.Y.) is a Democratic member of the United States House of Representatives representing New York's 9th Congressional District. Clarke was first elected to the House in New York's 11th Congressional District in 2006. Due to redistricting, she ran in the 9th District in 2012.`,
      imageURL: 'https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Yvette_Clark.jpeg'
    }, 
    {
      name: 'Daniel M. Donovan, Jr', 
      affiliation: 'Republican', 
      voteCount: 0, 
      arrayIndex: 3,
      description: `Daniel M. Donovan, Jr. (b. November 6, 1956, in Staten Island, New York) is a Republican member of the U.S. House representing the 11th Congressional District of New York. He was first elected in a special election on May 5, 2015.`,
      imageURL: 'https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Dan_Donovan.jpg'
    }, 
    { 
      name: 'Claudia Tenney', 
      affiliation: 'Republican', 
      voteCount: 0, 
      arrayIndex: 4, 
      description: `Claudia Tenney is a Republican member of the U.S. House representing the 22nd Congressional District of New York. Tenney was first elected to the House in 2016.`,
      imageURL: `https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Claudia_Tenney,_115th_official_photo-7.jpg`
    }, 
    {
      name: 'Hakeem Jeffries', 
      affiliation: 'Democrat', 
      voteCount: 0, 
      arrayIndex: 5, 
      description: `Hakeem Jeffries (b. August 4, 1970, in Crown Heights, N.Y.) is a Democratic member of the United States House of Representatives representing New York's 8th Congressional District. Jeffries was first elected to the House on November 6, 2012.`,
      imageURL: `https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/HakeemJeffries.jpg`
    }, 
    {
      name: 'Nydia Velazquez', 
      affiliation: 'Democrat', 
      voteCount: 0, 
      arrayIndex: 6, 
      description: `Nydia Velazquez (b. March 28, 1958, in Yabucoa, PR) is a Democratic member of the United States House of Representatives representing New York's 7th Congressional District. Velázquez was first elected to the House in 1992`,
      imageURL: 'https://api.ballotpedia.org/v3/thumbnail/200/300/crop/best/Nydia_Velazquez.jpg'
    }
  ]; 

  // const candidates = await Promise.all(
  //   candidatesList.map(candidate => Candidate.create(candidate))
  // );

  const pastCandidates = await Promise.all(
    pastCandidatesList.map(candidate => Candidate.create(candidate))
  )

  console.log(`seeded ${pastCandidates.length} candidates`);
  const activeCandidates = await Promise.all(
    activeCandidatesList.map(candidate => Candidate.create(candidate))
  );

  console.log(`seeded ${activeCandidates.length} activeCandidates`);

  const upcomingCandidates = await Promise.all(
    upcomingCandidatesList.map(candidate => Candidate.create(candidate))
  ); 
  
  console.log(`seeded ${upcomingCandidates.length} candidates`); 

  // -- COMMUNITIES --

  const communitiesList = [
    {
      name: 'New York State',
      location: 'New York, USA',
      timeZone: 'EST'
    },
    {
      name: 'New York State',
      location: 'New York, USA',
      timeZone: 'EST'
    },
    {
      name: 'New York State',
      location: 'New York, USA',
      timeZone: 'EST'
    }
  ];

  const communities = await Promise.all(
    communitiesList.map(community => Community.create(community))
  );

  const addUsersToCommunities = await Promise.all([
    User.findById(1).then(category => category.setCommunity(3)),
    User.findById(2).then(category => category.setCommunity(3)),
    User.findById(3).then(category => category.setCommunity(3)),
    User.findById(4).then(category => category.setCommunity(3)),
    User.findById(5).then(category => category.setCommunity(3)),
  ]);

  console.log(`seeded ${communities.length} communities`);

  // -- ELECTIONS --

  const pastElectionsList = [
    {
      name: 'New York State Assembly Special Elections, District 9',
      startDate: 'Tue May 23 2017 08:00:00 EST-0400 (EST)',
      endDate: 'Tue May 23 2017 16:00:00 EST-0400 (EST)',
      blockchainAddress: '0xBF0C74eEB0166d1E4291e5ebEFA9f3923f18fFd8'
    },
    {
      name: 'New York State Senate Special Elections, District 26',
      startDate: 'Tue Nov 07 2017 08:00:00 EST-0400 (EST)',
      endDate: 'Tue Nov 07 2017 18:00:00 EST-0400 (EST)',
    }
  ]

  const pastElections = await Promise.all(
    pastElectionsList.map(election => Election.create(election))
  );

  const addCandidatesToPastElections = await Promise.all([
    Candidate.findById(1).then(candidate => candidate.setElection(1)),
    Candidate.findById(2).then(candidate => candidate.setElection(1)),
    Candidate.findById(3).then(candidate => candidate.setElection(1)),
    Candidate.findById(4).then(candidate => candidate.setElection(1)),
    Candidate.findById(5).then(candidate => candidate.setElection(2)),
    Candidate.findById(6).then(candidate => candidate.setElection(2)),
    Candidate.findById(7).then(candidate => candidate.setElection(2)),
    Candidate.findById(8).then(candidate => candidate.setElection(2)),
  ]);

  console.log(`seeded ${pastElections.length} elections`);



  // const addElectionsToCommunities = await Promise.all([
  //   Election.findById(1).then(election => election.setCommunity(3)),
  //   Election.findById(2).then(election => election.setCommunity(3)),
  //   Election.findById(3).then(election => election.setCommunity(3))
  // ]);



  const activeElectionInfo = {
    name: 'Earth\'s Philosopher Queen',
    startDate: 'Sat May 09 2018 08:00:00 EST-0400 (EST)',
    endDate: 'Sun May 25 2018 08:00:00 EST-0400 (EST)',
    blockchainAddress: '0xb571C21E823026A26A49081e4d9ECa54f6D2166A'
  };



  const activeElection = await Election.create(activeElectionInfo);

  const addCandidatesToActiveElection = await Promise.all([
    Candidate.findById(9).then(candidate => candidate.setElection(3)),
    Candidate.findById(10).then(candidate => candidate.setElection(3)),
    Candidate.findById(11).then(candidate => candidate.setElection(3)),
    Candidate.findById(12).then(candidate => candidate.setElection(3)),
    Candidate.findById(13).then(candidate => candidate.setElection(3)),
    Candidate.findById(14).then(candidate => candidate.setElection(3)),
  ]);

  const addActiveElectionToCommunity =await Promise.all([
      Election.findById(1).then(election => election.setCommunity(3)),
      Election.findById(2).then(election => election.setCommunity(3)),
      Election.findById(3).then(election => election.setCommunity(3)),
    ])


  console.log(`seeded active election!`);

  const upcomingElectionsList = [
    {
      name: 'New York State Assembly Special Elections, District 12',
      startDate: 'Tue May 30 2018 08:00:00 EST-0400 (EST)',
      endDate: 'Tue May 30 2018 16:00:00 EST-0400 (EST)',
      blockchainAddress: '0xBF0C74eEB0166d1E4291e5ebEFA9f3923f18fFd8'
    },
    {
      name: 'New York State Senate Special Elections, District 24',
      startDate: 'Thurs June 07 2018 08:00:00 EST-0400 (EST)',
      endDate: 'Thurs June 07 2018 18:00:00 EST-0400 (EST)',
      blockchainAddress: '0xBF0C74eEB0166d1E4291e5ebEFA9f3923f18fFd8'
    }
  ]; 

  const upcomingElections = await Promise.all(
    upcomingElectionsList.map(election => Election.create(election))
  ); 

  const addCandidatesToUpcomingElections = await Promise.all([
    Candidate.findById(15).then(candidate => candidate.setElection(4)), 
    Candidate.findById(16).then(candidate => candidate.setElection(4)), 
    Candidate.findById(17).then(candidate => candidate.setElection(4)), 
    Candidate.findById(18).then(candidate => candidate.setElection(5)), 
    Candidate.findById(19).then(candidate => candidate.setElection(5)),
    Candidate.findById(20).then(candidate => candidate.setElection(5)),
    Candidate.findById(21).then(candidate => candidate.setElection(5)),
  ])

  const addUpcomingElectionsToCommunity =await Promise.all([
    Election.findById(4).then(election => election.setCommunity(3)),
    Election.findById(5).then(election => election.setCommunity(3))
  ])

  console.log(`seeded ${upcomingElections.length} elections`); 

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
