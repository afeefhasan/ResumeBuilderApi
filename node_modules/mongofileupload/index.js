var fs = require("fs");
var path = require('path');

//The function to return file size in KB
function getFileSizeInKB(filename) {
    var stats = fs.statSync(filename)
    var fileSizeInBytes = stats["size"]
    return fileSizeInBytes/1024.0;
}

// A object to store the file details
module.exports.fileDetails = function (name,filepath) {
    this.filename = name;
    this.filepath = filepath;
    this.content = fs.readFileSync(this.filepath, "binary",(err, Buffer) => {
            if(err){
                console.error(err);
                return err;
            }
            return Buffer;    
    });
    this.size = getFileSizeInKB(this.filepath);
    this.extention = path.extname(this.filename)
}

//function to upload
module.exports.mongoUploadOne = function(Collection,document)
{
    return new Promise((resolve,reject)=>{
        Collection.insertOne(document)
        .then(result => {
            resolve("saved");
        })
        .catch(error => reject(error));
    })
}

//function to retreive
module.exports.mongoRetreive = function(collection,query={},options={}){
    let data=[];
    let error = null
    return new Promise((resolve,reject) => {
        collection.find(query,options).toArray()
        .then(Data => {    
            resolve(Data);
        })
        .catch((error) => {
            reject(error);
        })
    });
}