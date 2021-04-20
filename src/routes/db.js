const { Router } = require('express');
const router = Router();

router.get('/db', (req, res) => {
    const data = {
        "name": "Test",
        "Grupo": "Test"

    };
    res.send(data);
});

module.exports = router;