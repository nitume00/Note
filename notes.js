const fs= require('fs');
const _= require('lodash');
const utility= require('./utility.js');
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
        var notes = utility.fetchAllNotes();
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