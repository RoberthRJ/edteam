'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments();
      table.integer('role_id').unsigned().references('id').inTable('roles');
      table.string('username', 80).notNullable().unique();
      table.string('last_name').notNullable();
      table.string('email', 254).notNullable().unique();
      table.string('password', 60).notNullable();
      table.string('picture');
      table.timestamps();
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
