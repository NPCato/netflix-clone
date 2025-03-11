export function extractParams(req, res, next) {
    const { type, id, query } = req.params;

    req.type = type;
    req.queryParam = query;  

    if (!isNaN(id) && id !== undefined) {
        req.id = id;
        req.category = null;
    } else {
        req.id = null;
        req.category = id;
    }

    next();
}
