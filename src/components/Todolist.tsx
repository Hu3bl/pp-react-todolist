import * as React from 'react';
import { Todo } from '../interfaces/Todo';

import { Todoitem } from './Todoitem';

interface Todoliststate {
  todos: Array<Todo>;
}

export class Todolist extends React.Component<{}, Todoliststate> {
  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [
        { id: 0, description: 'groceries', done: false },
        { id: 1, description: 'taxes', done: true },
        { id: 2, description: 'cooking', done: false },
      ]
    };
  }

  render() {
    return (
      <ul>
        {
          this.state.todos.map((todo) => {
            return <Todoitem todo={todo} key={todo.id} />
          })
        }
      </ul>
    );
  }
}