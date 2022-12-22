/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {

    return knex.schema.withSchema("public").createTable("users", tableBuilder=>{
        tableBuilder.increments("id")
        tableBuilder.string("username").notNullable().unique()
        tableBuilder.string("bio")
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.withSchema("public").dropTable("users")
};
