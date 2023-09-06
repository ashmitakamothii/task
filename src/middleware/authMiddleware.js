const jwt=require('jsonwebtoken');
module.exports=(req,res,next)=>{
    const token=req.header('Authorization');

    if(!token){
        return res.status(401).json({error:'Authentication failed'})
    }

    try {
        const decodedToken=jwt.verify(token,process.env.JWT_SECRET);
        req.userId=decodedToken.userId;
        next();

    } catch (error) {
        console.error(error)
        res.status(401).json({error:'Authentication failed'})
    }
}
