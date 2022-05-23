import create from 'zustand';

const useTodoStore = create((set) => ({
// TODO: answer here
    todos: [{
        id: 1,
        text: 'Learn React',
        isDone: false,
    }, {
        id: 2,
        text: 'Learn Zustand',
        isDone: false,
    }, {
        id: 3,
        text: 'Learn Chakra UI',
        isDone: false,
    }, { 
    }],
    addTodo: ({id, text, isDone}) => {
        set(() => ({
            todos: [...this.todos, {
                id,
                text,
                isDone,
            }],
        }))
    },
    removeTodo: (id) => {
        set(() => ({
            todos: this.todos.filter((todo) => todo.id !== id),
        }))
    },
    toggleTodo: (id) => {
        set(() => ({
            todos: this.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isDone: !todo.isDone,
                    }
                }
                return todo;
            }),
        }))
    },
}));

export default useTodoStore;