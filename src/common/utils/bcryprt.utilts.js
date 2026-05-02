import pkg from "bcryptjs";
export async function hash(passward) {
    const saltround=10
   return await pkg.hash(passward,saltround)
}

export async function compare(passward,hashedpassward) {
    return await pkg.compare(passward,hashedpassward)
}









