import React from 'react';
import axios from 'axios';

export default class Task extends React.Component {

    state = {
        tasks: ['default']
    };

    componentDidMount() {
        // fetch("http://localhost:8080/task")
        //     .then(resp => resp.json())
        //     .then(data => {
        //         this.setState({tasks: data});
        //     })
        axios.get("/task")
            .then(resp => {
                console.log(resp);
                this.setState({tasks: resp.data});
            })
            .catch(e => alert('Error while getting tasks data: ' + e))

    }

    render() {
        let tst = this.state.tasks;
        console.log('in render ' + tst);
        const tasksContent = this.state.tasks.map(t => {
            return (
                <div key={t}>{t}</div>
            )
        });

        return (
            <div>
                <h3>Tasks</h3>
                {tasksContent}
            </div>
        )
    }

}