import React, { Component } from 'react';
import {
    Link,
    Route
} from "react-router-dom"
import axios from "axios"


class ListItem extends Component {
    sate = {
        ListItem: []
    }
    componentDidMount() {
        axios.get("http://localhost:3001/api/listItems/")
            .then((res) => {
                console.log(res)
                this.setState({
                    ListItem: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        const listItems = this.state.listItems.map((listItem, index) => {
            return (
                <div key={index}>
                    <p>
                        <Link to={`/listItems/${listItem._id}`}>{listItem.title}</Link>>
                </p>
                    <Route path={`listItems/${listItem._id}`}
                        render={() => {
                            return (
                                <p>{listItem.title}{listItem.url}{listItem.discription}{listItem.completetd}</p>
                            )
                        }}
                    />
                </div>
            )
        })
        return (
            <div>
                <h1>Thy Bucket List</h1>
                {listItems}
            </div>
        );
    }
}

export default ListItem;