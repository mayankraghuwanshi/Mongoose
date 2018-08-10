const mongoose = require('mongoose');
function date () {
    let actualDate = new Date();
    let day = actualDate.getDate();
    let month = actualDate.getMonth() + 1;
    let year = actualDate.getFullYear();
    if (day < 10)
        day = `0${actualDate.getDate()}`;
    if (month < 10)
        month = `0${actualDate.getMonth() + 1}`;

    let finalDate = `${day}-${month}-${year}`;

    return finalDate;
}
const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imgage:{
        type:String,
        required:false
    },
    content:{
        type:String,
        required:true
    }
    ,
    user:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
        default: date()
    }

})

module.exports = mongoose.model('post',postSchema)