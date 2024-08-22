import {
integer, numeric, pgTable,serial,varchar
} from 'drizzle-orm/pg-core'

// budget schema
export const Budgets = pgTable('budgets',{
    id: serial('id',).primaryKey(),
    name: varchar('name').notNull(),
    amount: varchar('amount').notNull(),
    Icon: varchar('icon'),
    createdBy: varchar('createdBy').notNull()
})

// Income schema
export const Incomes = pgTable('incomes',{
    id: serial('id',).primaryKey(),
    name: varchar('name').notNull(),
    amount: varchar('amount').notNull(),
    Icon: varchar('icon'),
    createdBy: varchar('createdBy').notNull()
})