
 export class DbRepostory {
    nModel;
    constructor(model) {
        this.nModel=model
        
    }
   async create(item){
    const doc =  this.nModel(item)
    return await doc.save()
} 

  async update(Filter,update,option={}){
   return await this.nModel.findOneAndUpdate(Filter,update,option)
  }
  async getOne(Filter,projection={},option={}){
   return await this.nModel.findOne(Filter,projection,option)
  }
  async getAll (Filter,projection={},option={}){
    return await this.nModel.find(Filter,projection,option)
  }
  async deleteOne(Filter,option={}){
    return await User.deleteOne(Filter,option)
  }

}



