import express from 'express';
const app = express();
app.get('/',(request,response)=>{
    response.send('Hello Ce Students');
}); // GET request
//http://localhost:3000/api/harshit/28
app.get('/api/:name/:age',(req,res)=>{
    try{
    const data = req.params;
    res.send(`Hello dear Ce student ${data.name} and your age is${data.age}`);
    }
    catch(error){
        console.log(error.message);
    }
    
});
//http:localhost:3000/api?name=Harshit&rollno=28
app.get('/api',(request,response)=>{
    // const data = request.query;
    // const { name , rollno } = request.query;
    // const { name = 'Guest', rollno = '100'} = request.query;
    // response.send(`Hello dear ${name} and my roll number is ${rollno}`);
    // response.send(`Hello dear ${data.name} and my roll number is ${data.rollno}`);
try{
    // const { name = 'Guest', rollno = '100'} = request.query;
    // response.send(`Hello dear ${name} and my roll number is ${rollno}`);
    const { name , rollno } = request.query;
    if(!name || !rollno){
        response.send({
            status: 400,
            message: 'Please provide both name and rollno'
        });
        
    }
    else{
        response.send(`Hello dear ${name} and my roll number is ${rollno}`);
    }
}
catch(error){
    // response.send('Error occured');
    console.log(error);
}

});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);

});