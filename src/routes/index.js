const { Router } = require('express');
const router = Router();

router.get('/test', (req, res) => {
    const data = {
        "name": "Arquitectura de software",
        "Grupo": "2"

    };
    res.send(data);
});

module.exports = router;