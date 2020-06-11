import express from 'express';
 import routes from './routes';
 import path from 'path';
 import cors from 'cors';
 import {errors} from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')));

app.use(errors());

app.listen(3333);





// app.get('/',(request,response)=>{

//     return response.json ({message: 'hello Mundo'});
//     // const search= String(request.query.search);

//     // const filteredUsers = search ? users.filter(user => users.includes(search)): users;

//     // return  response.json(filteredUsers);
// });

 

// app.get('/users/:id',(request,response)=>{
//     const id = Number(request.params.id);

//     const user = users[id];

//     return  response.json(user);
// });




// app.post('/users',(request,response)=>{

//     const data = request.body;
//     console.log(data);


//     const user = {
//         name:  'Andre',
//         email:'andre@albuqueruqe.com'
//     };
//     return response.json(user);
// })

