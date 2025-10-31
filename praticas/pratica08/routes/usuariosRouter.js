const express = require('express');
const router = express.Router();
const { gerarToken, verificarToken } = require('../middlewares/authMiddleware');


router.post('/login', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ msg: "Email é obrigatório" });
    }

    const token = gerarToken({ email });
    return res.status(200).json({ token });
});


router.post('/renovar', verificarToken, (req, res) => {
   
    const token = gerarToken({ email: req.payload.email });
    return res.status(200).json({ token });
});

module.exports = router;
