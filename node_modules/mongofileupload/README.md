# MongoFileUpload

MongoFileUpload is a simple npm package to upload files to mongodb. It simply stores the file chunk to MongoDB as a document. It can be used for the profile and simple document upload. As we can store max 16MB data to a document so we cannot store more then that in one document.  It can be used to store files with other text fields in the same document. 
  - Creates an object for a file with the details like name,extension,content and size 
  - Can be saved multiple files at a time but the sum of sizes of all files and fields, should be less then 16MB
  - It uses promises to handle the response

# Features!
  - Easy to use
  - Can upload multiple files

### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ npm i mongofileupload
```

### How to use

1. Connect to Mongodb collection

```
const {fileDetails,mongoUploadOne,mongoRetreive}  = require('mongofileupload');
const MongoClient = require('mongodb').MongoClient

const connectionString = MONGO_URI;
MongoClient.connect(connectionString, { useUnifiedTopology: true })
const Collection = client.db('test').collection('test')

```

2. Create a object/document to store in collection

```
  var documentToSave = {};
  documentToSave.name = "abc";
  documentToSave.profile = new fileDetails('prof.png','./profile.png');
  documentToSave.resume = new fileDetails('res.pdf','./resume.pdf');
  documentToSave.email = "pqr@email.com";
  
  //save the document 
  mongoUploadOne(Collection,documentToSave).then((result)=>{
    console.log(result);
  })
  .catch((err)=>{
    console.log(err);
  });
```    

3. To retreive 

```
  mongoRetreive(Collection).then((result)=>{
        //to save a file 
      fs.writeFile('/home/coder/Music/'+result[0].resume.filename,result[0].resume.content, "binary", function(err) {
        if(err) {
            return console.log(err);
        }
        else console.log("The file was saved!");
      });
```

### How to contribute

Want to contribute? Great!
1. Give it a star if you like it
2. fork the repo
3. clone it

```sh
$ git clone https://github.com/Rajpra786/MongoFileUpload.git
$ cd MongoFileUpload
```

4. create new branch
```sh
$ git checkout -b branch_name
```
5. edit files
6. update files in new branch
```sh
$ git add -A
```
8. commit
```sh
$ git commit -m "info about your edits"
```
9. push it
```sh
$ git push --set-upstream origin new-branch
```
10. Now from github web site, make a pull request
for more details about how to create a pull request check it [here](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github)

You can do following upgrades to this project
- Add an example(like a profile page which requires image as well as other detials)
- Remove the limitation of 16MB by saving the remaining file chuncks to another document
- Your own ideas



License
----

MIT


