import expressJWT from "express-jwt"

export const bibat = (req, res, next)=>{
    const vuotDenDo = true;
    if (vuotDenDo) {
        console.log("Phat 2 lit");
        next();
    }
    else{
        res.redirect("/")
    }
}

export const requireSignIN = expressJWT ({
    secret: "123456",
    algorithms:["HS256"],
    requestProperty: "auth" 
})

export const isAuth = (req,res,next) => {
    console.log(req.params)
    console.log(req.profile._id);
    const user = req.profile._id === req.params;
    if (!user) {
        return res.status(402).json({
            message: "Ban khong duoc phep truy cap"
        })
    }
    next()
}

export const isAdmin = (req, res, next) => {
    if (req.profile.role == 0) {
        return res.status(401).json({
            message: "Ban khong co quyen truy cap admin"
        })
    }
    next()
}