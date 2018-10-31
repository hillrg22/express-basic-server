
exports.up = function(knex, Promise) {
  //code to run to set up our tables
    //create schema
  return knex.schema.createTable('character', function (table) {
    table.increments('id')
    table.string('name')
    table.integer('height')
    table.integer('mass')
  })
}

exports.down = function(knex, Promise) {
  // code to run to remove tables & restart
  return knex.schema.dropTableIfExists('character')
};
