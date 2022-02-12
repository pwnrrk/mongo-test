import Controller from "libs/controller";
import { Http } from "libs/http";
import User from "models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default class UserController extends Controller {
  async register(http: Http) {
    try {
      const userData = http.request.body;
      const oldUser = await User.findOne({ email: userData.email });

      if (oldUser)
        return http.response
          .status(409)
          .json({ status: "failed", message: "User already register" });

      const encryptedPassword = await bcrypt.hash(userData.password, 10);
      userData.password = encryptedPassword;
      const user = await User.create(userData);
      const token = jwt.sign(
        {
          user_id: user._id,
          email: user.email,
        },
        process.env.TOKEN_KEY as string,
        {
          expiresIn: "3d",
        }
      );
      user.token = token;
      http.response.json({
        status: "ok",
        message: "saved!",
        data: user,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async login(http: Http) {
    try {
      const { email, password } = http.request.body;
      const user = await User.findOne({ email: email });
      if (!user)
        return http.response
          .status(404)
          .json({ status: "fail", message: "No user founded" });
      const verified = await bcrypt.compare(password, user.password);
      if (!verified)
        return http.response
          .status(401)
          .json({ status: "fail", message: "Invalid creadentials" });
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY as string,
        { expiresIn: "3d" }
      );
      user.token = token;
      http.response.json({ status: "ok", message: "success", data: user });
    } catch (error) {
      console.trace(error);
    }
  }
}
