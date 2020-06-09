
exports.up = function(knex) {
    return knex.schema.alterTable('members',(table)=>{
        table.string('user_type').defaultTo('member');
    })
};

exports.down = function(knex) {
    return knex.schema.alterTable('members',(table)=>{
        table.dropColumn('user_type').unsigned();
    })
};
