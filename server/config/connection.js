const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

module.exports = mongoose.connection;


// const mongoose = require("mongoose");
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/googlebooks",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );
// module.exports = mongoose.connection;

// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// module.exports = mongoose.connection;