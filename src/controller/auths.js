import user from "../models/user"
import jwt from "jsonwebtoken"

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existUser = await user.findOne({email}).exec()  
        if (existUser) {
            return res.status(400).json({
                message: "Email da ton tai"
            })
        }
        else{
            const User = await new user({name, email, password}).save();
            res.json({
               User:{
                _id: User._id,
                name: User.name,
                email: User.email
               }
            })
        }


    } catch (error) {
        res.json(400).json({
            message: "Co loi xay ra"
        })
    }
}

export const signin = async (req, res) => {
    const {email, password} = req.body;
    const User = await user.findOne({email}).exec();
    if (!User) {
        return res.status(401).json({
            message: "User khong ton tai"
        })
    }
    if(!User.authenticate(password)){
        return res.status(401).json({
            message: "Mat khau khong dung"
        })
    }
    const token = jwt.sign({_id: User._id}, "123456", {expiresIn: 60 * 60})
    return res.json({
        token,
        data: {
            _id: User._id,
            email: User.email,
            name: User.name,
            is_registered: User.is_registered,
            role: User.role,
            image: User.image
        }
    })
}
