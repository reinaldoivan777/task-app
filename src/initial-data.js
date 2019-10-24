const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Clean My Room' },
        'task-2': { id: 'task-2', content: 'Playing Guitar' },
        'task-3': { id: 'task-3', content: 'Setup Bible Study' },
        'task-4': { id: 'task-4', content: 'Coding Exercise' }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Do',
            tasksIds: ['task-1', 'task-2', 'task-3', 'task-4']
        }
    },
    columnOrder: ['column-1']
};

export default initialData;
