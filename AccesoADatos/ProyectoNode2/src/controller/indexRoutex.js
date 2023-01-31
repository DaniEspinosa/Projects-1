export const vistaHome = (req, res) => {
    res.render('index', {title: 'Home'})
}

export const vistaLogin = (req, res) => {
    res.render('login', {title: 'Login'})
}

export const vistaRegistro = (req, res) => {
    res.render('registro', {title: 'Registro'})
}