

const index=(req,res)=>{
    res.render("index.ejs")
}
const about=(req,res)=>{
    res.render("about.ejs")
}

module.exports={index,about}