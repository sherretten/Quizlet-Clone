// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
  decimal,
  date,
  pgEnum,
  time,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `shop-scheduler_${name}`);

export const orderStatusEnum = pgEnum("status", [
  "New",
  "In Progress",
  "Completed",
]);

export const mechanics = createTable("mechanic", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity().notNull(),
  name: varchar("name", { length: 256 }).notNull(),
  hoursWorked: decimal("hours_worked", { precision: 2 }).default("0.0"),
  maxHours: integer("max_hours").default(50),
  shopId: integer("shop_id").references(() => shop.shopId),
});

export const serviceOrders = createTable("orders", {
  orderId: varchar("id").primaryKey().notNull(),
  customerId: varchar("customer_id").notNull(),
  customerPhoneNumber: varchar("customer_phone_number"),
  customerName: varchar("customer_name"),
  mechanicId: integer("mechanic_id").references(() => mechanics.id),
  duration: decimal("duration", { precision: 2 }).notNull(),
  startTime: date("start"),
  status: orderStatusEnum("status").default("New"),
});

export const shop = createTable("shop", {
  shopId: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  open: time("open"),
  close: time("close"),
  daysOpen: varchar("days_open").array(),
  holidays: date("holidays").array(),
});
