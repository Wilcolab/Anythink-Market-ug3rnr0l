/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 */

 /**
    * GET /
    * Retrieves all comments from the database.
    * 
    * @route GET /
    * @returns {Object[]} 200 - An array of comment objects
    * @returns {Object} 500 - Error message if fetching fails
    */
 
 /**
    * DELETE /:id
    * Deletes a comment by its ID.
    * 
    * @route DELETE /:id
    * @param {string} id - The ID of the comment to delete
    * @returns {Object} 200 - Success message if deletion is successful
    * @returns {Object} 404 - Error message if comment not found
    * @returns {Object} 500 - Error message if deletion fails
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

module.exports = router;

router.delete("/:id", async (req, res) => {
    try {
        const deletedComment = await Comment.findByIdAndDelete(req.params.id);
        if (!deletedComment) {
            return res.status(404).json({ error: "Comment not found" });
        }
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});