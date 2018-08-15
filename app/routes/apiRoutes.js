// DATA
// =====================================================
var friendArray = require("../data/friendData");


// ROUTING
// =====================================================
module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
      res.json(friendArray);
    });
  
    app.post("/api/friends", (req, res) => {
        var bestMatch = {
          name: "",
          photo: "",
          friendDifference: 0
        };

        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;
        
        var totalDifference = 0;

        for (var i=0; i<friendArray.length; i++) {
          totalDifference = 0
          for (var j=o; i<friendArray[i].scores[j]; j++) {
            totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
            if (totalDifference <= bestMatch.friendDifference) {
              bestMatch.name = friends[i].name;
              bestMatch.photo = friends[i].photo;
              bestMatch.friendDifference = totalDifference;
            }
          }
        }

        friendArray.push(userData);

        res.json(bestMatch);
    });
  
  };
  

// TESTING
// =====================================================
// console.log(friendData);