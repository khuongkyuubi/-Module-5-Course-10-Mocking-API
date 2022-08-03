module.exports = (req, res) =>
    res.status(200).json({
        id: 0,
        username: req.params.userName,
        age: 20
    });