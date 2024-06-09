import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  email: string,
  password: string,
  firstname: string,
  lastname: string
) {
  const res = await prisma.user.create({
    data: {
      email,
      password,
      firstname,
      lastname,
    },
    select: {
      id: true,
      firstname: true,
      password: true,
    },
  });

  console.log(res);
}
// insertUser("sagarghimire@gmail.com", "password123", "Sagar", "Ghimire");

interface UpdateParams {
  firstname: string;
  lastname: string;
}
async function updateUser(
  username: string,
  { firstname, lastname }: UpdateParams
) {
  const res = await prisma.user.update({
    where: { email: username },
    data: {
      lastname,
    },
  });
  console.log(res);
}

// updateUser("durpinthapa@gmail.com", { firstname: "Durp", lastname: "Thapa M" });
