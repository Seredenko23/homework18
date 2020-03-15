import {Router} from "express";
import ItemController from "../controllers/item"

const itemRouter = Router();

itemRouter.get("/item", (req, res) => {
  ItemController.getItems(req, res)
});

itemRouter.get("/item/:id", (req, res) => {
  ItemController.getItemsById(req, res)
});

itemRouter.put("/item/:id", (req, res) => {
  ItemController.updateItem(req, res)
});

itemRouter.post("/item",  (req, res) => {
  ItemController.createItem(req, res)
});

itemRouter.delete('/item/:id', (req, res) => {
  ItemController.deleteItem(req, res)
})

export default itemRouter
