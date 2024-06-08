import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://testdb_owner:ISVRHQX01kBf@ep-black-sun-a5jk9tmv.us-east-2.aws.neon.tech/testdb?sslmode=require",
});
