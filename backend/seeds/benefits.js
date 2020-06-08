exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("benefits")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("benefits").insert([
        {
          id: 1,
          company: "YEN HK",
          company_logo: "assets/logos/yen.png",
          benefit_title: "50% off everything",
          benefits_description: "Eligible when you spend over 200HKD",
          category: "Food & Drinks",
        },
      ]);
    });
};
