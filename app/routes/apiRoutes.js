// DATA
// =====================================================
var friendData = require("../data/friendData");

// ROUTING
// =====================================================
module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    });

    app.post("/api/friends", (req, res) => {
        friendData.push(req.body);
        res.json(true);
    });
}