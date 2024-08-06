const mongoose = require('mongoose')
const {model, Schema} = require('mongoose')
mongoose.Schema.Types.String.set('trim', true);

const userSchema = new Schema ({
        _id: mongoose.Schema.Types.ObjectId,

        firstName: {
            type: String,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        comments:{
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Comment'
                }
            ]
        }
    }
)

module.exports = model('User', userSchema)


