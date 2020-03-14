import {Router} from "express";
import ItemController from "../controllers/item"

const router = Router();

router.get("/item", (req, res) => {
  ItemController.getItems(req, res)
});

router.get("/item/:id", (req, res) => {
  ItemController.getItemsById(req, res)
});

router.put("/item/:id", (req, res) => {
  ItemController.updateItem(req, res)
});

router.post("/item", async (req, res) => {
  ItemController.createItem(req, res)
});

router.delete('/item/:id', (req, res) => {
  ItemController.deleteItem(req, res)
})
