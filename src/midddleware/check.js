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