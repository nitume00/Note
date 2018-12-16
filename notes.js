console.log("staring note js")
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
 
var noteService= {
     addNote :(title,body) => {
        var note={title,body};
        var notes= utility.fetchAllNotes();
        var duplicateNotes= utility.checkIfNodeExist(notes,title);
        if(duplicateNotes.length===0){
            notes.push(note);
            utility.writeNode(notes);
            return note;
        }
      },
    getAllNotes: ()=>{
        return utility.fetchAllNotes();
    },
    deleteNode:(title)=>{
        var notes = fetchAllNotes();
        var note  = utility.checkIfNodeExist(notes,title);
        if(note){
            _.remove(notes,{title:title});
            utility.writeNode(notes);
            return note[0];
        }
    },
    updateNote: (title,body)=>{
        var notes =utility.fetchAllNotes();
        var index=_.findIndex(notes,{title:title});
        notes[index].body=body;
       utility.writeNode(notes);
       return notes[index];
    }, 
    displayNote:(note)=>{
        utility.displayNode(note);
    },
    readNode:(title)=>{
        var notes= utility.fetchAllNotes();
        var note= utility.checkIfNodeExist(notes,title);
        if(note){
            return note[0];
        }
    }



}


module.exports=noteService;