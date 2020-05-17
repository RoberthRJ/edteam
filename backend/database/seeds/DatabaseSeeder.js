'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class DatabaseSeeder {
  async run () {
  	const role_admin = await Factory
        .model('App/Models/Role').create({
          name: 'admin'
        });
    const role_teacher = await Factory
        .model('App/Models/Role').create({
          name: 'teacher'
        });
    const role_student = await Factory
        .model('App/Models/Role').create({
          name: 'student'
        });
    for(let i = 1; i <= 3; i++) {
	    const usersArray = await Factory
	      .model('App/Models/User')
	      .create({role_id: role_admin.id});
    }

  }
}

module.exports = DatabaseSeeder
