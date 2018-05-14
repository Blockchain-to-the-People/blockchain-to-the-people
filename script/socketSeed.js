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


  // -- COMMUNITIES --

  const communitiesList = [
    {
      name: 'Board of Directors for Imaginary Corp',
      location: 'New York City',
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
