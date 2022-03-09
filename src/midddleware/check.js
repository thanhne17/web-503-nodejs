exports.bibat = (req, res, next)=>{
    const vuotDenDo = true;
    if (vuotDenDo) {
        console.log("Phat 2 lit");
        next()
    }
    else{
        console.log("Di dung luat");
        res.redirect("/")
    }
}