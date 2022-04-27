/*
    Name : Muhammad Rifqi Setiawan
    idcamp : 2121510
*/

// comment module.exports to running code
module.exports = class TextEditor {
    constructor() {
        // TODO: answer here
        this.undoStack = []; // stack untuk undo
        this.redoStack = []; // stack untuk redo
    }

    write(c) {
        // TODO: answer here
        // kita simpan di variabel undo
        for (const WriteStack of c) {
            // kita push ke stack undo
            this.undoStack.push(c.charAt(WriteStack));
        }
        return this.undoStack.join('');
    }

    read() {
        // TODO: answer here
        let baca = []; // array untuk menampung kata
        for (let i = 0; i < this.undoStack.length; i++) {
            baca.push(this.undoStack[i]);
        }
        // kita join kata dengan spasi
        return baca.join('');
    }

    undo() {
        // TODO: answer here
        // kita cek apakah stack undo kosong
        if (this.undoStack.length === 0) {
            return "";
        } else {
            // kita pop dari stack undo
            let LastStack = this.undoStack.pop();
            // kita push ke stack redo
            this.redoStack.push(LastStack);
            return this.undoStack.join('');
        }
    }
    
    redo() {
        // TODO: answer here
        // kita cek apakah stack redo kosong
        if (this.redoStack.length === 0) {
            return "";
        } else {
            // kita pop dari stack redo
            let LastStack = this.redoStack.pop();
            // kita push ke stack undo
            this.undoStack.push(LastStack);
            return this.undoStack.join('');
        }
    }
}
// uncomment 64-77 to test code
// write stack
// console.log(new TextEditor().write("r")); // r
// console.log(new TextEditor().write("i")); // ri
// console.log(new TextEditor().write("f")); // rif
// console.log(new TextEditor().write("q")); // rifq
// console.log(new TextEditor().write("i")); // rifqi

// read stack
// console.log(new TextEditor().read()); 

// undo stack
// console.log(new TextEditor().undo()); 

// redo stack
// console.log(new TextEditor().redo()); 
