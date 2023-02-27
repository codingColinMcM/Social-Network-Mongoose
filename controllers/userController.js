const  User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find({})
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
    },
    addUser({ body }, res) {
        User.create(body)
            .then(userData => res.json(userData))
            .catch(err => res.status(400).json(err));
    },
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
        .then((user) =>
            !user
              ? res.status(404).json({ message: 'No user with that ID' })
              : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.userId}, body, { new: true, runValidators: true })
        .then(userData => {
            if(!userData) {
                res.status(404).json({ message: 'No user found with this ID!' });
                return;
            }

            res.json(userData);
        })
        .catch(err => res.status(400).json(err));
    },
    deleteUser({params}, res) {
        User.findOneAndDelete({_id: params.userId})
        .then(userData => {
            if(!userData) {
                res.status(404).json({ message: 'No user found with this ID!' });
                return;
            }

            res.json(userData);
        })
        .catch(err => res.status(400).json(err));
    },
    addFriend({params}, res){
        User.findOneAndUpdate(
            {_id: params.userId},
            {$push: {friends: params.friendId}},
            {runValidators: true, new: true}
        )
        .then(userData => {
            if(!userData) {
                res.status(404).json({ message: 'No user found with this ID!' });
                return;
            }
            res.json(userData);
        })
        .catch(err => res.status(400).json(err));
    },
    deleteFriend({params}, res) {
        User.findOneAndUpdate(
            { _id: params.userId },
            { $pull: { friends: params.friendId } },
            { new: true }
        )
        .then((userData) => res.json(userData))
        .catch((err) => res.json(err));
    },
}