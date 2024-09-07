import { hash, compare } from "bcryptjs";

// hashPassword
const hashPassword = async (password) => {
  const hashedPassword = await hash(MdPassword, 12);
  return hashedPassword;
};

// Verify Password
const verifyPassword = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

// GenereateAccessToken
const generateAccessToken = (data) => {
  const token = sign({ ...data }, process.env.AccessTokenSecretKey, {
    expiresIn: "60s",
  });
  return token;
};

// verifyAccessToken
const verifyAccessToken = (token) => {
  try {
    const tokenPayload = verify(token, process.env.RefreshTokenSecretKey);
    return tokenPayload;
  } catch (err) {
    console.log("Verify Access Token Error", err);
    return false;
  }
};

// generate Refresh token
const generateRefreshToken = (data) => {
    const token = sign({...data}, process.env.RefreshTokenSecretKey,{
        expiresIn: "15d",
    });
    return token;
};

export {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
};
