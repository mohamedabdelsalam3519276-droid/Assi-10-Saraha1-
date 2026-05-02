import  jwt  from "jsonwebtoken";
export function verifyToken(Token,secretkey) {
    return jwt.verify(Token,secretkey)
}
export function signToken(payload,secretkey,optons) {
     return jwt.sign(payload,secretkey,optons)
}
export function generatrTokens(payload) {
     const acsesstoken = signToken(payload,"jdsjkdhuadyduasydhdhjahfggyfyayfdyadfdf",{expiresIn:120})
     const refreshtoken= signToken(payload,"ijefjdfjhoeheuioeeueruireueruyrug",{expiresIn:"1y"})
     return {acsesstoken,refreshtoken}
    
}