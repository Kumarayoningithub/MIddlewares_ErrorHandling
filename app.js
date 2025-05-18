const express = require("express");
const app =  express();
const ExpressError= require("./ExpressError");

//middleware-> response send

// app.use( (req, res, next)=>{
    


//     console.log("Hi, i am 1st middleware");
//     next()
//     // res.send ("middleware finished");
// } );

// app.use( (req, res, next)=>{
    


//     console.log("Hi, i am 2nd middleware");
//     next()
// });
//logger-morgan
// app.use((req, res, next)=>{
//     req.time= Datenow();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

// if we want that our middlewares works for only specific path
// app.use("/random", (req, res, next)=>{
//     console.log("I am only for random");
//     next();
// });


// exercise token api
// app.use("/api", (req, res, next)=>{
//     let { token } = req.query;
//     if(token === "giveaccess"){
//         next();
//     }else{
//         res.send("ACCESS DENIED!");
//     }
// });

// app.get("/api",(req, res)=>{
//     res.send("data");
// });

// middleware as a function

const checkToken = (req, res, next)=>{
    let { token } = req.query;
        if(token === "giveaccess"){
            next();
        }else{
            throw new ExpressError(401, "ACCESS DENIED!");
};

// error handling

app.get("/err", ( req, res)=>{
    abcd = abcd;
});

app.use((err, req, res, next)=>{
    let {status=500, message="some error occured"} = err;
    res.status(status).send(message);
});


// small activity

app.get("/admin", (req, res)=>{
    throw new ExpressError(403, "Access to admin  is forbidden");
});





app.get("/api", checkToken, (req, res)=>{
    res.send("data");
});







app.get("/", (req, res)=>{
    res.send("Hi, i am root")
});


app.get("/random", (req, res)=>{
   res.send("hi, i am random");
});


app.use((err, req, res, next)=>{
      //console.log(err);
      console.log("------ERROR-----");
      res.send(err);
});

// app.use((err, req, res, next)=>{
//     console.log("------ERROR2-----");
//     next(err);
// });



//404
app.use((req, res)=>{
   res.status(404).send("page not found!");
});

app.listen(8080, ()=>{
    console.log("server is listening to port 8080");
}
)};