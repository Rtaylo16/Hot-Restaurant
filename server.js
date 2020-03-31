var express = require("express");
var path = require("path");
var index = require()

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var reservations = [{
        customerID: "1",
        CustomerName: "Athur Freeman",
        eMail: "arthur@me.com",
        phone: "555-1212"
    },

    {
        customerID: "2",
        CustomerName: "Athur Freeman",
        eMail: "arthur@me.com",
        phone: "555-1212"
    },

    {
        customerID: "3",
        CustomerName: "Athur Freeman",
        eMail: "arthur@me.com",
        phone: "555-1212"
    },

    {
        customerID: "4",
        CustomerName: "Athur Freeman",
        eMail: "arthur@me.com",
        phone: "555-1212"
    }
]


app.get("/", function(req, res) {
    res.sendfile(path.join(__dirname, "home.html"));
});


app.post("/reserve", function(req, res) {
    var newReservation = req.body;
    reservation.push(newReservation);
});


app.get("/tables", function(req, res) {
    return res.json(reservations);
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("Server listening on port:" + PORT);
})