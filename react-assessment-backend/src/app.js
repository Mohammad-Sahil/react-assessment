const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const details = require('../model/model');
const db = require('../db/connection');

app.use(express.json());
app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next()
})

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

app.post('/v2/student', async(req,res) => {
    try {
        const studentDetails = details(req.body);
        const userSave = await studentDetails.save();
        console.log(userSave);
        res.send(userSave);
    } catch (error) {
        res.status(500).send(error);
    }
})

app.listen(8000, (req,res) => {
    console.log(`successfully connected to port ${port}`)
})