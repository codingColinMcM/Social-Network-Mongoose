const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat')

// Schema for what makes up a reaction
const reactionSchema = new Schema({

    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },

    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },

    userName: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now(),
        get: (timestamp) => dateFormat(timestamp),
    }

},
{
    id: false,
    toJSON: {
        getters: true, 
    }
});

// Schema for what makes up a thought
const thoughtSchema = new Schema({

    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },

    createdAt: {
        type: Date,
        default: Date.now(),
        get: (timestamp) => dateFormat(timestamp)
    },

    userName: {
        type: String, 
        required: true, 
    },

    reactions: [reactionSchema]

}, 
{
    id: false,
    toJSON: {
        getters: true, 
        virtuals: true
    }
});

// Create a virtual property 'reactionCount' that gets the amount of reactions per thought
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Initialize our Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;