// Mock để truyền params

module.exports = (req, res) => {
    let users = require("../../users/GET.json");
    let user = users.find(user => user.id === +req.params.user_id);

    if(!user) {
        return res.status(200).json({
            message: "user not found by mock api"
        });
    }

    return res.status(200).json({
        id: user.id,
        name: user.name
    });
}