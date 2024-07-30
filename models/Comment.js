const mongoose = require('mongoose')
const {model, Schema} = require('mongoose')
mongoose.Schema.Types.String.set('trim', true);

const userSchema = new Schema ({
        _id: mongoose.Schema.Types.ObjectId,

        user: {
            type: String,
            trim: true,
        },
        createdAt: {
            type: String,
            trim: true,
        },
       rating: {
            type: String,
            trim: true,
       },
      title: {
            type: String,
             trim: true,

      },
        description:{
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
