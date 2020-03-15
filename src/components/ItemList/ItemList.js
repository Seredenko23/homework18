import React, {Component} from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import Item from "./item/Item";

class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListGroup>
        {
          this.props.items.map(el => {
          return (
            <Item item={el}
                  key={el._id}
                  deleteItem={this.props.deleteItem}
                  updateItem={this.props.updateItem}/>
            )
          })
        }
      </ListGroup>
    );
  }
}

export default ItemList;
