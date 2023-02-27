const  Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    getThoughts(req, res) {
        Thought.find({})
            .then(thought => res.json(thought))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    getThoughtByID({ params }, res) {
        Thought.findOne({ _id: params.thoughtId })
            .then(thought => res.json(thought))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    },
    addThought({ params, body }, res) {
        Thought.create(body)
            .then(({ _id }) => {
                return User.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then(thought => {
                if (!thought) {
                    res.status(404).json({ message: 'Incorrect thought data!' });
                    return;
                }
                res.json(thought);
            })
            .catch(err => res.json(err));
    },
    updateThought({ params, body }, res) {
        Thought.findByIdAndUpdate({ _id: params.thoughtId }, body, { runValidators: true, new: true })
            .then(thought => {
                if (!thought) {
                    res.status(404).json({ message: 'No user found with this ID!' });
                    return;
                }
                res.json(thought);
            })
            .catch(err => res.json(err));
    },
    deleteThought({ params }, res) {
        Thought.findByIdAndDelete({ _id: params.thoughtId }, { runValidators: true, new: true })
            .then(thoughtData => {
                if (!thoughtData) {
                    res.status(404).json({ message: 'No user found with this ID!' });
                    return;
                }
                res.json(thought);
            })
            .catch(err => res.json(err));
    },
    addReaction({params, body}, res){
        Thought.findOneAndUpdate(
            {_id: params.thoughtId},
            {$push: {reactions: body}},
            { new: true, runValidators: true }
        )
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'Incorrect reaction data!' });
                return;
            }
            res.json(thought);
        })
        .catch(err => res.json(err));
    },
    deleteReaction({params}, res){
        Thought.findOneAndUpdate(
            {_id: params.thoughtId},
            {$pull: {reactions: {reactionID : params.reactionId}}},
            { new: true, runValidators: true }
        )
        .then(thoughtData => {
            if (!thoughtData) {
                res.status(404).json({ message: 'Incorrect reaction data!' });
                return;
            }
            res.json(thought);
        })
        .catch(err => res.json(err));
    }
}