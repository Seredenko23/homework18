import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";

import "./Item.css"

class Item extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {item, deleteItem, updateItem} = this.props
    return (
      <ListGroup.Item>
        <div className={'item'}>
          <span className={'item-name'}>{item.name}</span>
          <span>{item.category}</span>
          <span>{item.price}</span>
          <button onClick={() => {updateItem(item._id, !item.isBought)}}>
            {item.isBought ? 'refund' : 'buy'}
          </button>
          <button onClick={() => {deleteItem(item._id)}}>
            Delete
          </button>
        </div>
      </ListGroup.Item>
    );
  }
}

export default Item;
