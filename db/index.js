const { connect } = require('mongoose')

const URI = "mongodb+srv://user1:N5FGa1tOGdDzndLh@cluster0.bypfw.mongodb.net/brllio-db?retryWrites=true&w=majority";

connect(URI)
    .then(conn => console.log("MongoDB Connected...."))
    .catch(console.log)