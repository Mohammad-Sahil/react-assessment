const mongoose = require('mongoose');

const connection_url = 'mongodb+srv://admin:inhmDzmQvm2ZporT@cluster0.iurfwis.mongodb.net/reactAssessment?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('successfully connected to mongoose');
}).catch((error) => {
    console.log(error);
})