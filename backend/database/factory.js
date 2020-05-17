'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash');

Factory.blueprint('App/Models/Role', async (faker, i, data) => {
  return {
    name: data.name,
    description: faker.sentence()
  }
});

Factory.blueprint('App/Models/User', async (faker, i, data) => {
  const username = faker.username();
  return {
  	role_id: data.role_id,
    username: username,
    last_name: faker.sentence({words: 2}),
    email: faker.email(),
    password: await Hash.make(faker.password()),
    picture: `http://fakeimg.pl/600x400/?text=${username}`,
    created_at: faker.date()
  }
});


