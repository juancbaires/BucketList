import React, { Component } from 'react';
import { FormControl } from "react-bootstrap"
import { FormGroup } from "react-bootstrap"
import { Button } from 'react-bootstrap'
class CreateItem extends Component {

    render() {
        return (
            <div className="CreateItem">
                <form>
                    <FormGroup bsSize="large">
                        <label>Title</label>
                        <FormControl type="text" placeholder="Title" />
                    </FormGroup>
                    <FormGroup bsSize="large">
                        <label>Url</label>
                        <FormControl type="text" placeholder="Url" />
                    </FormGroup>
                    <FormGroup bsSize="large">
                        <label>Add to your bucket</label>
                        <FormControl type="text" placeholder="Item or Task" />
                        <p>
                            <Button className="button" bsStyle="primary">submit</Button>
                        </p>
                    </FormGroup>
                </form>
            </div>
        );
    }
}

export default CreateItem;