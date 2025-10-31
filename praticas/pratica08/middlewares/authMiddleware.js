const jwt = require('jsonwebtoken');


function verificarToken(req, res, next){
    try {
        const { authorization } = req.headers;
        const token = authorization.split(" ")[1];
        const payload = jwt.verify(token, process.env.JWT_SEGREDO);
        req.payload = payload;
        return next();

    }catch (err) {
        return res.status(401).json({ msg: "Token invalido"});
    }

}

function gerarToken(payload){
    try{
        const expiresIn= 120;
        const token = jwt.sign(payload,process.env.JWT_SEGREDO, {expiresIn});
        return token;
    } catch(err){
        throw Error("Erro ao gerar um token");
    }
};

module.exports = {verificarToken, gerarToken}