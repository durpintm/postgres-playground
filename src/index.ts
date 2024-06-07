import { Client } from "pg";

const client = new Client({
  connectionString:
    "postgresql://testdb_owner:ISVRHQX01kBf@ep-black-sun-a5jk9tmv.us-east-2.aws.neon.tech/testdb?sslmode=require",
});

// async function createUsersTable() {
//   await client.connect();

//   const result = await client.query(`
//   CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//       );
//   `);

//   console.log(result);
// }

// createUsersTable();

// Not secure
// async function insertData() {
//   try {
//     await client.connect();

//     const insertQuery =
//       "insert into users (username, email, password) values ('username', 'user@gmail.com', 'password')";

//     const res = await client.query(insertQuery);
//     console.log("Insertion success", res);
//   } catch (err) {
//     console.log("Error during insert ", err);
//   } finally {
//     await client.end(); // Close the connection
//   }
// }

// insertData();

async function insertData(username: string, email: string, password: string) {
  try {
    await client.connect();
    const insertQuery =
      "insert into users (username, email, password) values ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log("Insertion success: ", res);
  } catch (err) {
    console.error("Error during the insertion: ", err);
  } finally {
    await client.end();
  }
}

insertData("durpin", "durpin@gmail.com", "Password123").catch(console.error);
