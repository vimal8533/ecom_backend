
const arrr=[]
const bcrypt=require("bcrypt")
const register=(req,res)=>{
const data=req.body;
console.log(data)

const details=arrr.find((item)=>{
if(item.email===data.email){
    return item;
}
})
if(details){
  return  res.send({msg:"user already register"})
}
const haspswrd=bcrypt.hashSync(data.passward,10)
// arrr.push(data)
console.log(haspswrd);
const tempobj={
email:data.email,
passward:haspswrd
}
arrr.push(tempobj)
res.send(arrr)
}

const login=(req,res)=>{
const logindata=req.body;
console.log(logindata);
const details=arrr.find((item)=>{
    if(item.email===logindata.email ){
       return item;
        
    }
})
if(details){
    const validate=bcrypt.compareSync(logindata.passward,details.passward);
    if(validate){
    return res.send({msg:"login succefully"})
}else{
    return res.send({msg:"Incorrect password type correctly"})
}
}else{
    return res.send({msg:"Incorrect email"})
}



}

module.exports={register,login}
