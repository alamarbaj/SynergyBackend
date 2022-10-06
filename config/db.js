var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/SynergyCrud", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));