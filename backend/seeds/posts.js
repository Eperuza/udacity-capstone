
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {
          title: 'Gibson Les Paul Standard',
          description: 'Gold top Les Paul Standard. Has some love marks but plays very well. No cracks. Seymour Duncan humbuckers',
          user_email: '1550555@park.edu',
          image_url: 'https://udacity-sales.s3.us-east-2.amazonaws.com/lespaul_gold.jpg'
        },
        {
          title: 'Nintendo Switch',
          description: 'Brand new Nintendo Switch. Does not include box.',
          user_email: '1550555@park.edu',
          image_url: 'https://udacity-sales.s3.us-east-2.amazonaws.com/nintendo_switch.jpg'
        },
        {
          title: 'Another users post',
          description: 'this should not appear in the response for the test cases',
          user_email: 'fakemail@me.com'
        }
        
      ]);
    });
};


