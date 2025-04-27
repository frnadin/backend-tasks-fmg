import jwt from 'jsonwebtoken'
const secret = process.env.SECRET_KEY

const auth =  (req, res, next) => {
    try {
        console.log('autenticando...');
        
        //import o token que ira para o header da req
        const { token } = req.headers

        
        if (!token) {
            console.log('token: ',token);
            return res.status(401).send({ mensagem: 'Acesso negado D:' })      
        }

        // se tiver token usaremos o  jtw para validar
        const contentToken = jwt.verify(token, secret)
        // identifica para qual user foi gerado o token
        req.id = contentToken.id
        next()
    } catch(erro){
        res.status(404).send({ mensagem: 'Acesso negado' })
    }    
}
export { auth }