module.exports = (req, res) => {
    const articles = require("../GET.json");

    const article = articles.find(article => article.id === +req.params.article_id);

    if (!article) {
        return res.status(401).json({
            message: "article not found!"
        })
    }

    return res.status(200).json(article);


}