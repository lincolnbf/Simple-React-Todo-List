import React, {Component} from 'react';
import style from './TodoList.css';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            tasks : [
                {
                    name: null,
                    key: null,
                }
            ],
            _inputvalue : '',
        }

        this.state.tasks.splice(0, 1);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addTask(newTask){
        
        if (newTask === ''){
            return;
        }

        const obj = {
            name: newTask,
            key: Math.random(1000)
        } 

        this.setState(old => ({
            tasks: [...old.tasks, obj]
        }));

        this.setState({_inputvalue: ''});        
        console.log(this.state.tasks);

    }    

    deleteTask(idTask){
        this.setState(prevState => ({
            tasks: prevState.tasks.filter(task => task.key !== idTask)
        }));
    }

    handleChange(event){
        this.setState({_inputvalue: event.target.value});
    }

    render(){        
        const listItems = this.state.tasks.map((link) =>
            <li key={link.key}>{link.name}
            <button 
                className="delete-btn"
                onClick={(a) => this.deleteTask(link.key)}    
                >
                x
            </button>
            </li> 
        ) 
        

        return(

            <div className="todo-list">

                <input
                    type="text"
                    value={this.state._inputvalue}
                    onChange={this.handleChange}
                >
                </input>

                <button onClick={() => this.addTask(this.state._inputvalue)}>
                    Add Task
                </button>

                <div>
                    <h3>
                        My tasks so far...                     
                    </h3>
                    <ul>
                        {listItems}
                    </ul>

                </div>

            </div>
        );
    }

}

export default TodoList;
