import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true, // Prevents JavaScript from reading the cookie || XSS Attack || Cross-Site Scripting Attacks
    sameSite: "strict", // Prevents CSRF attacks || Cross-Site Request Forgery attacks
    // secure: process.env.NODE_ENV === "production",
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokenAndSetCookie;