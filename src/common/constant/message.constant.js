const generatemesaage=(entity)=>{
return {
       alreadyexist:`${entity} already exist`,
        notfound:` ${entity} not found`,
        craeted:` ${entity} craeted sucessfully`,
        updated: `${entity} updated sucessfully`,
        deleted:`${entity}  updated sucessfully`,
        failtocreate:  `fail to craete ${entity} ` ,
        failtoupdate:  `fail to update ${entity}`  ,
        failtodelete: ` fail to delete ${entity} ` 
}


}













export const SYS_MESSAGE= {
    user:generatemesaage("User")
      
    ,
    product:generatemesaage("Product"),
    
    category:generatemesaage("Category"),
    brand:generatemesaage("Brand")
}