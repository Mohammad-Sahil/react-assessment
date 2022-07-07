const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const details = require('../model/model');
const db = require('../db/connection');
var cors = require('cors');

app.use(express.json());
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next()
})

//using cors to allow cross origin resource sharing
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

app.get('/', (req,res) => {
    res.status(200).send(`<h1>Sever is running at localhost:${port}</h1>`);
});

app.get('/v1/student', async(req,res) => {
    try {
        const studentDetails = await details.find();
        res.status(200).send(studentDetails);
    } catch (error) {
        console.log(error)
        res.status(500).send('Details not found')
    }
});

// /////read single data 
app.get('/v1/student/:roll', async(req,res) => {
    try{
        const roll = req.params.roll;
        const studentOne = await details.findOne({roll});
        console.log(studentOne)
        res.status(200).send(studentOne);
    }catch(e){
        res.status(404).send(e);
    }
});

// app.get('/logout',auth, async(req,res) => {
//     try {
//         req.userDoc.tokens = req.userDoc.tokens.filter((oldData) => {
//             return oldData.token !== req.cookie;
//         });
//         const newDoc = await req.userDoc.save();
//         console.log(newDoc);
//         res.clearCookie('jwt');
//         console.log('succussfully logout');
//         res.status(200).render('login');
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// app.get('/alllog',auth, async(req,res) => {
//     try {
//         req.userDoc.tokens = [];
//         const saveDoc = await req.userDoc.save();
//         console.log(saveDoc);
//         res.clearCookie('jwt');
//         console.log('succussfully logout form all devices');
//         res.status(200).render('login');
//     } catch (error) {
//        res.status(500).send(error); 
//     }
// })

// app.post('/login', async(req,res) => {
//     try {
//         const email = req.body.email;
//         const password = req.body.password;
//         const userDoc = await User.findOne({email});
//         const varifyPass = await bcrypt.compare(password,userDoc.password);
//         const token = await userDoc.generateAuthToken();
//         res.cookie('jwt',token,{
//             httpOnly: true
//         });
//         console.log(userDoc);
//         if(varifyPass){
//             res.status(200).render('homee');
//         }else{
//             res.status(404).send('invalid pass');
//         }
//     } catch (error) {
//         res.status(500).send('invalid email');
//     }
// })

// POST data 
app.post('/v2/student', async(req,res) => {
    try {
        console.log(req.body)
        const studentDetails = details(req.body);
        const userSave = await studentDetails.save();
        console.log(userSave);
        res.send(userSave);
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete data 
app.delete('/v2/student/:roll', async(req,res) => {
    try{
        if(!req.params.roll){
            return res.status(404).send('roll not found');
        }
        const roll = req.params.roll;
        console.log(roll);
        const deleteData = await details.findOneAndDelete({roll});
        res.status(200).send(deleteData);
        console.log(deleteData);
    }catch(e){
        res.status(500).send(e);
    }
});

// patch data 
app.patch('/v2/student/:roll', async(req,res) => {
    try{
        const roll = req.params.roll;
        const updateData = await details.findOneAndUpdate({roll},req.body, {
            new: true
        });
        res.status(200).send(updateData);
        console.log(updateData);
    }catch(e){
        res.status(500).send(e);
    }
    
});

// listen data 
app.listen(8000, (req,res) => {
    console.log(`successfully connected to port ${port}`)
})