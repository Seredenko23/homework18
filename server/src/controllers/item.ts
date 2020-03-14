import express from 'express'
import Item from "../models/Item"

class ItemController {
  getItems = async (req: express.Request, res: express.Response) => {
    const items = await Item.find().exec();
    res.status(200).send(items)
  };

  createItem = async (req: express.Request, res: express.Response) => {
    const item = new Item({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      isBought: req.body.isBought
    });
    try {
      const savedItem = await item.save();
      res.status(200).send(savedItem)
    } catch (e) {
      res.status(500).send(e.details[0].message)
    }
  };

  getItemsById = async (req: express.Request, res: express.Response) => {
    const itemId = req.params.id;
    try {
      const items = await Item.findById(itemId).exec();
      res.status(200).send(items)
    }
    catch (e) {
      res.status(500).send(e.details[0].message)
    }
  };

  updateItem = async (req: express.Request, res: express.Response) => {
    const itemId = req.params.id;
    try {
      const items = await Item.findByIdAndUpdate(req.params.id ,{isBought: req.body.isBought}).exec();
      res.status(200).send(items)
    } catch (e) {
      res.status(500).send(e.details[0].message)
    }
  };

  deleteItem = async (req: express.Request, res: express.Response) => {
    const itemId = req.params.id;
    try {
      const items = await Item.deleteOne({_id: itemId}).exec();
      res.status(200)
    } catch (e) {
      res.status(500).send(e.details[0].message)
    }
  }
}

export default new ItemController()
