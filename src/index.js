import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './Column';

class App extends Component {
    state = initialData;

    onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) return;
        if (destination.droppableId === source.droppableId && destination.index === source.index) return;

        const column = this.state.columns[source.droppableId];
        const newTaskIds = Array.from(column.tasksIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
        const newColumn = {
            ...column,
            tasksIds: newTaskIds
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn
            }
        };

        this.setState(newState);
        console.log(newState);
    };

    render() {
        const { columnOrder, columns, tasks } = this.state;
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {columnOrder.map(columnId => {
                    const column = columns[columnId];

                    const task = column.tasksIds.map(taskId => tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={task} />;
                })}
            </DragDropContext>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
