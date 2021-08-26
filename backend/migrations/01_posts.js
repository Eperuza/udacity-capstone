
exports.up = function(knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id').primary();
    table.string('title');
    table.string('description');
    table.string('user_email');
    table.string('image_url');
    table.timestamp('date').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts')
};
