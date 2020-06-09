exports.up = function (knex) {
  return knex.schema
    .createTable("members", (table) => {
      table.increments("id").unique().primary();
      table.string("f_name");
      table.string("l_name");
      table.string("email").unique().notNull();
      table.string("password");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("benefits", (table) => {
      table.increments("id").unique().primary();
      table.string("company");
      table.string("company_logo");
      table.string("benefit_title");
      table.string("benefits_description");
      table.string("category");
      table.boolean("active").defaultTo(true);
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("members").dropTable("benefits");
};
