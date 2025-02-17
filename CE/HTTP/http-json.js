const http=require('http');
const fs=require('fs/promises');

// const users=[{
//     id:1,name:'harshit rai',email:'harshit143rai@gmail.com'},
// {id:2,name:'harshit ',email:'harshit510rai@gmail.com'
// }]
const server=http.createServer(async(req , res)=>{
res.writeHead(200,{'Content-Type':'text/html'});
const filedata=await fs.readFile('./aa.json','utf8');
const parsedData=JSON.parse(filedata);
res.end(JSON.stringify(parsedData));
// res.write('<h1>Hello World</h1>');
// const newdata=users.map(user=>{
//     return user.name
// });
// using for each 
// let newdata="";
// users.forEach(user=>{
//     newdata+=`<li>${user.name}</li>`;
// });
// // res.end(JSON.stringify(users[1]));//using index as is is an array
// res.end(JSON.stringify(newdata));
// for each
// res.end(newdata);
// through readfile 
// res.end(filedata); 

});
PORT=3000;
server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});

