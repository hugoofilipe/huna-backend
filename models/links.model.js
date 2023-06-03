const sql = require("./db.js");

// constructor
const Link = function(link) {
  this.title = link.title;
  this.description = link.description;
  this.published = link.published;
};



Link.getAll = (title, result) => {
//   let query = "SELECT * FROM links";

//   if (title) {
//     query += ` WHERE title LIKE '%${title}%'`;
//   }

//   sql.query(query, (err, res) => {
//     if (err) {
//       console.log("error: ", err);
//       result(null, err);
//       return;
//     }

//     console.log("links foo: ", res);
//     result(null, res);
//   });
    console.log("foo here");

};

module.exports = Link;