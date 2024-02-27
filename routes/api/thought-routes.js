const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction, // corrected function name
    deleteReaction // corrected function name
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThoughtById)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(createReaction); // corrected function name

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction); // corrected function name

module.exports = router;
