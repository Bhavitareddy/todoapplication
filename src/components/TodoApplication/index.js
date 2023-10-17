// Write your code here
import {Component} from 'react'
import TodoItem from '../TodoItem'
import '/index.css'

const initialTodosList = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: 'illo expedita consequatur quia in',
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: 'quo adipisci enim quam ut ab',
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: 'molestiae perspiciatis ipsa',
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: 'illo est ratione doloremque quia maiores aut',
    completed: true,
  },
  {
    userId: 1,
    id: 11,
    title: 'vero rerum temporibus dolor',
    completed: true,
  },
  {
    userId: 1,
    id: 12,
    title: 'ipsa repellendus fugit nisi',
    completed: true,
  },
  {
    userId: 1,
    id: 13,
    title: 'et doloremque nulla',
    completed: false,
  },
  {
    userId: 1,
    id: 14,
    title: 'repellendus sunt dolores architecto voluptatum',
    completed: true,
  },
  {
    userId: 1,
    id: 15,
    title: 'ab voluptatum amet voluptas',
    completed: true,
  },
  {
    userId: 1,
    id: 16,
    title: 'accusamus eos facilis sint et aut voluptatem',
    completed: true,
  },
  {
    userId: 1,
    id: 17,
    title: 'quo laboriosam deleniti aut qui',
    completed: true,
  },
  {
    userId: 1,
    id: 18,
    title: 'dolorum est consequatur ea mollitia in culpa',
    completed: false,
  },
  {
    userId: 1,
    id: 19,
    title: 'molestiae ipsa aut voluptatibus pariatur dolor nihil',
    completed: true,
  },
  {
    userId: 1,
    id: 20,
    title: 'ullam nobis libero sapiente ad optio sint',
    completed: true,
  },
]

export default class TodoApplication extends Component {
  state = {todosList: initialTodosList}

  deleteTodoItem = id => {
    const {todosList} = this.state
    const filteredList = todosList.filter(each => each.id !== id)
    this.setState({todosList: filteredList})
  }

  createTodoItem=id=>{
      const [task,setTask]=useState("");
      const[todos,setTodos]=useState("");
      const changeHandler=e=>{
          setTask(e.target.value)
      }
      const submitHandler=e=>{
          e.preventDefault();
          const newTodos=[...todos,task];
          setTodos(newTodos);
      }
  
  render() {
    const {todosList} = this.state
    return (
      <div className="container">
        <div className="todoContainer">
          <h1>Todo Application</h1>
          <form onSubmit={submitHandler}>
              <input type="text" name="task" value={task} onChange={changeHandler}/>
              <input type="submit" value="Add" name="Add"/>
          </form>
          <ul>
            {todosList.map(each => (
              <TodoItem
                key={each.id}
                deleteTodoItem={this.deleteTodoItem}
                details={each}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
