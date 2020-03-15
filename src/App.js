import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ItemList from "./components/ItemList/ItemList";
import Col from "react-bootstrap/Col";
import ItemForm from "./components/ItemForm/ItemForm";
import itemService from "./service/item";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component{
  constructor() {
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.getItems()
  }

  getItems = () => {
    itemService.getItems()
      .then(items => {
        this.setState({items: items})
      })
  };

  deleteItem = async (id) => {
    await itemService.deleteItem(id);
    this.getItems()
  };

  updateItem = async (id, isBought) => {
    await itemService.updateItem(id, isBought);
    this.getItems()
  };

  createItem = async (item) => {
    await itemService.createItems(item);
    this.getItems();
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <ItemList
                getItems={this.getItems}
                deleteItem={this.deleteItem}
                updateItem={this.updateItem}
                items={this.state.items}
              />
            </Col>
            <Col>
              <ItemForm createItem={this.createItem}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }


}

export default App;
