const mongoose = require('mongoose')

const friendSchema = new mongoose.Schema (
    {
        name:{
            type: String,
            required:true
        },
        
        age:{
            type: String,
            // require:true
        },
        
        avatar:{
            type: String,
            // require:true
        },

        email:{
            type: String,
            required:true
        },

        password:{
            type: String,
            required:true
        },

        phoneNumber:{
            type: String,
            required:true
        },
       

    },
    {
        timestamps:true
    }
)

const FriendsModel = mongoose.model('friend', friendSchema )

module.exports = FriendsModel