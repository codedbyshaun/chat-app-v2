const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express()
app.use(express.json())
app.use(cors({ origin: true }))

app.post("/authenticate", async (req, res) => {
  const { username } = req.body


  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "c67dd7dc-ddf0-42c7-9974-a26c6d833f1c" } }
    )
    return res.status(r.status).json(r.data)
  } catch (err) {
    return res.status(err.response.status).json(err.response.data)
  }
});


app.listen(3001)


console.log('running on port 3001')
