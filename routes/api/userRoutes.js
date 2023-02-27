const router = require('express').Router();
const {
    getUsers,
    addUser,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// /api/users
router.route('/')
  .get(getUsers)
  .post(addUser);

// /api/users/:id
router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// /api/users/:id/friends/:friendId
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend)

module.exports = router;