const express = require('express');
const session = require('express-session');
const port = 3000;

const app = express();
app.use(express.json());
app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}));
app.use("/login",(req,res)=>{
    req.session.user = { username: 'john_doe' };
    res.send("User logged in and session created.");
});

app.use("/profile",(req,res)=>{
    if(req.session.user){
        res.send(`Welcome ${req.session.user.username}, this is your profile.`);
    } else {
        res.send("Please log in to view your profile.");
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
