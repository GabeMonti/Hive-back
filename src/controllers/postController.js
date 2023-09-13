exports.get = (req, res, next) => {
    let id = res.id;
    res.status(201).send(`Post ${id} created with success!`);
};
exports.post = (req, res, next) => {
    let id = res.id;
    res.status(201).send(`Post ${id} created with success!`);
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Post ${id} updated with success! `);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Post ${id} deleted with success! `);
};