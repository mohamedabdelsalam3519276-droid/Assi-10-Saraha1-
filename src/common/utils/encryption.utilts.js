import  crypto  from "node:crypto";

export function encription(plantext) {
    // alortherm<< 8 bite then we choose 256 then the secret key should be 32 = 254/8
    const iv = crypto.randomBytes(16)
  const cipher=  crypto.createCipheriv("aes-256-cbc",Buffer.from("12345678123456781234567812345678"),iv)
   
  let encrypteddata=cipher.update(plantext,"utf-8","hex")
 encrypteddata += cipher.final("hex")
return `${iv.toString("hex")}:${encrypteddata}`
}
export function decription( encrypteddata) {
  const [iv , encryptvalue ]= encrypteddata.split(":")
   const ivbufferlike= Buffer.from(iv,"hex")
 const Decipheriv= crypto.createDecipheriv("aes-256-cbc",Buffer.from("12345678123456781234567812345678"),ivbufferlike)
 let decripteddata= Decipheriv.update(encryptvalue,"hex","utf-8")
decripteddata+= Decipheriv.final("utf-8")
return decripteddata
}
