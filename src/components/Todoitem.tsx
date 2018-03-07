import * as React from 'react';

import { Todo } from '../interfaces/Todo';


export function Todoitem(props: {todo: Todo}) {
  return (
    <div>
      {props.todo.description}
    </div>
  )
}