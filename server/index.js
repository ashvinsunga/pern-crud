const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

// middleware
app.use(cors());
app.use(express.json()) // to  parse JSON from request

// routes

//create an item
app.post("/item", async (req, res) => {
    try {
        const {description} = req.body;
        const newItem = await pool.query(
            "INSERT INTO crud (description) VALUES($1) RETURNING *",
            [description]
        );
        console.log(req.body)

        res.json(newItem.rows[0]);

    } catch (err) {
        console.log(err.message)
    }
} )

// get all items
app.get("/items", async (req, res) => {
    try {
      const allItems = await pool.query("SELECT * FROM crud");
      res.json(allItems.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

// get an item
app.get("/items/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const item = await pool.query("SELECT * FROM crud WHERE item_id = $1", [
        id
      ]);
  
      res.json(item.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

// update an item
app.put("/items/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const updateItem = await pool.query(
        "UPDATE crud SET description = $1 WHERE item_id = $2",
        [description, id]
      );
  
      res.json("item was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });


//delete a todo
app.delete("/items/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const deleteItem = await pool.query("DELETE FROM crud WHERE item_id = $1", [
        id
      ]);
      res.json("item was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });


app.listen(5000, () => {
    console.log("Server has started on port 5000")
});