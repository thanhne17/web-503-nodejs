import User from '../models/user';

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec();
        if(!user){
            return res.status(400).json({
                message: "Không tìm thấy user"
            })
        }
        req.profile = user;
        req.profile.password = undefined;
        req.profile.salt = undefined;

        next();

    } catch (error) {
        console.log(error)
    }
}

export const getOneUser = async (req, res) => {
    console.log(req.params);
    const user = await User.findById(req.params.id).exec()
    res.json(user)
}

export const updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).exec()
    console.log(req.params);
    console.log(req.body);
    res.json(user)
}

export const getAllUser = async (req, res) => {
    const user = await User.find().exec();
    res.json(user)
}

export const removeUser = async (req, res) => {
    const user = await User.findByIdAndRemove({_id: req.params.id}).exec()
    res.json(user)
   
}