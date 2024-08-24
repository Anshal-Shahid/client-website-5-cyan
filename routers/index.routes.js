const express=require("express")
const router=express.Router()


const {index,about}=require("../controllers/index.controller.js")



router.get("/",index)
router.get("/about",about)

module.exports=router