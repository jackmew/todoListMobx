import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class TodoList extends React.Component {
    render() {
        return (
            <div>
                <h1>Todos</h1>
                <p>{this.props.store.todos[0]}</p>
            </div>
        );
    }
}