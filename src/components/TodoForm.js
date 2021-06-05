import React, { useState } from 'react'

import {
     FormGroup,
     Input,
     InputGroup,
     InputGroupAddon,
     Button,
     Form,
     Container
} from 'reactstrap'
import { uuid, v4 } from 'uuid'

const TodoForm = ({ addTodo }) => {
     const [todoString, setTodoString] = useState("")

     const handleSubmit = e => {
          e.preventDefault();
          if (todoString === "") {
               return alert("Please enter a Todo")
          }

          const todo = {
               //we can also write simply- todoString
               title: todoString,
               id: v4()
          }

          addTodo(todo)

          setTodoString("")

     }

     return (
          <Form onSubmit={handleSubmit}>
               <FormGroup>
                    <InputGroup>
                         <Input
                              type="text"
                              id="todo"
                              name="todo"
                              placeholder="Enter a Todo"
                              value={todoString}
                              onChange={e => setTodoString(e.target.value)}
                         />
                         <InputGroupAddon>
                              <Button
                                   color="success">AddTodo</Button>
                         </InputGroupAddon>

                    </InputGroup>
               </FormGroup>
          </Form>
     )
}

export default TodoForm