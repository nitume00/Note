const fs= require('fs');
const _= require('lodash');

var utility={
    fetchAllNotes:()=>{
        try{
            var notsString = fs.readFileSync('notes.json');
            return JSON.parse(notsString);
           }catch(e){
                return [];
           }
       },
       writeNode:(notes)=>{
        fs.writeFileSync('notes.json',JSON.stringify(notes));
    },
    displayNode: (note)=>{
        debugger;
        console.log('----------------');
        console.log(`title is :${note.title}`);
        console.log(`body is : ${note.body}`);
    },
    checkIfNodeExist:(notes,title)=>{
        return notes.filter((note)=>note.title===title);
    }
}
module.exports=utility;