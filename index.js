import Koa from 'koa'
import Router from '@koa/router'
import serve from 'koa-static'

const app = new Koa()

app.use(serve('./public'))

const PORT = process.env.PORT || 5000

console.log(PORT)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))