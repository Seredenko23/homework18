import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class ItemForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      category: 'books',
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createItem(this.state)
      .then(() => {
        this.setState({
          name: '',
          price: '',
          category: 'books'
        })
      })
  };

  changeHandle = (event)=> {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="name"
                        placeholder="Enter name"
                        onChange={this.changeHandle}
                        value={this.state.name}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control name="category"
                        placeholder="Enter category"
                        as={'select'}
                        onChange={this.changeHandle}
                        value={this.state.category}
          >
            <option value={'books'}>Books</option>
            <option value={'magazines'}>Magazines</option>
            <option value={'newspaper'}>Newspapers</option>
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control name="price"
                        placeholder="Enter price"
                        onChange={this.changeHandle}
                        value={this.state.price}
          />
          <Form.Text className="text-muted">Only numbers</Form.Text>
        </Form.Group>
        <Button
          onSubmit={this.onSubmit}
          variant="primary"
          type={'submit'}
        >
          Submit
        </Button>
      </Form>
    );
  }
}

export default ItemForm;
