exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("members")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("members").insert([
        {
          id: 1,
          f_name: "YEN",
          l_name: "HK",
          email: "test",
          password:
            "$2b$10$olpOziQ6jAfmid4ZttvxzOC4up0Q9xfUxJw/1ZPg/XqzsPDhOtKnu",
        },
      ]);
    });
};
