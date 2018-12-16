const fs = require('fs');
const yargs = require('yargs');
const notes = require('./notes.js');

const params={
     titleOption :{
        describe:'Title of the node',
        demand:true,
        alias:'t'
    },
     bodyOption:{
        describe:'Body of the Note',
        demand:true,
        alias:'b'
    }
}


var argv = yargs.command('add','Add a Node',{
    title:params.titleOption,
    body:params.bodyOption
})
.command('list','List All Notes')
.command('read','Read a Node',{
    title:params.titleOption
})
.command('delete','Delete A Node',{
    title:params.titleOption
})
.command('update','Update a Note',{
    title:params.titleOption,
    body:params.bodyOption
}).help().version('1.0').argv;
var command = process.argv[2];
if(command ==='add'){
   var note= notes.addNote(argv.title, argv.body);
   if(note){
       notes.displayNote(note);
   }else{
       console.log('Note already exist');
   }
}else if(command ==='delete'){
    console.log('deleting note')
    var note =notes.deleteNode(argv.title);
    if(note){
        console.log('Note deleted successfully');
        console.log('Diplaying Notes');
        notes.displayNote(note);
    }
   
}else if(command === 'list'){
console.log("listing all node");
console.log('----------------------------');
var allNotes = notes.getAllNotes();
console.log('Diplaying Notes');
allNotes.forEach(note => {
  notes.displayNote(note);
});
}else if (command === 'read'){
    console.log("reading note");
    var note= notes.readNode(argv.title);
    if(note){
        console.log('Diplaying Notes');
        notes.displayNote(note);
    }
    else{
        console.log('Note not found');
    }
}else if(command==='update'){
    console.log("updateing notes................");
    var note = notes.updateNote(argv.title,argv.body);
    if(note){
        console.log('Note updated successfully..');
        notes.displayNote(note);
    }
   
}
else{

    console.log("commang is not recognized...");
}


