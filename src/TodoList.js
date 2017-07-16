import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends React.Component {
    filter(e) {
        this.props.store.filter = e.target.value;
        // console.log(this, e);
    }    
    render() {
        const { filter, filteredTodos, todos } = this.props.store;
        const todoList = filteredTodos.map((todo, index) => {
            return <li key={index}>{todo}</li>
        });

        return (
            <div>
                <h1>Todos</h1>
                {/*<input className="filter" value={filter} onChange={(e) => this.filter(e)} />*/}
                <input className="filter" value={filter} onChange={this.filter.bind(this)} />
                <ul>{todoList}</ul>
            </div>
        );
    }
}