import jwt from "jsonwebtoken";
import { User } from "../models/user";
import { JWT_SECRET } from "../services/config";

const auth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User.findOne({ _id: decoded, token })
        if (!user) throw new Error();
        req.user = user;
        req.token = token;
        next && next();
    } catch (error) {
        return res.json({ data: null, error: "Unauthorized" });
    }
};

export default auth;