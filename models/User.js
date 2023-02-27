const { Schema, model } = require('mongoose');
const validators = require('mongoose-validators');

// Schema for what makes up a user
const userSchema = new Schema({
    
    username: {
        type: String, 
        required: true, 
        unique: true,
        trim: true 
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate: validators.isEmail()
    }, 

    thoughts: [{
        type: Schema.Types.ObjectId, 
        ref: 'thought'
    }],

    friends: [{
        type: Schema.Types.ObjectId, 
        ref: 'user'
    }]

},
{
    toJSON: {
      virtuals: true,
    },
    id: false
});

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Initialize the User model
const User = model('user', userSchema);

module.exports = User;
