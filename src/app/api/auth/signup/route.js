import { hashPassword } from "@/utils/auth";
import connectToDB from "../../../../../configs/db";
import UserModel from "@/models/User";
import { roles } from "@/utils/constants";

export async function GET(req) {
  await connectToDB();

  const body = await req.json();
  const { name, phone, email, password } = body;

  // Start Validation

  const isUserExist = await UserModel.findOne({
    $or: [{ name }, { email }, [{ phone }]],
  });

  if (isUserExist) {
    return Response.json(
      {
        message: "The username or email or name is already",
      },
      { status: 422 }
    );
  }

  const hashedPassword = await hashPassword(password);
  const accessToken = generateAccessToken({ name });

  const users = await UserModel.find({});

  await UserModel.create({
    name,
    email,
    phone,
    password: hashedPassword,
    role: users.length > 0 ? roles.USER : roles.ADMIN,
  });

  return Response.json({ message: "Success Response" }, { status: 201 });
}
