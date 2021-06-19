const Koa = require('koa');
const koaRouter = require('koa-router')
const app = new Koa();
const router = new koaRouter();

// response
app.use(router.routes()).use(router.allowedMethods())
router.get('/', ctx=>ctx.body=('<h1>ANA SAYFAYA HOŞ GELDİNİZ</h1> '))
router.get('/hakkimda', ctx=>ctx.body=('<h1>HAKKIMDA SAYFASINA HOŞ GELDİNİZ</h1>'))
router.get('/iletisim', ctx=>ctx.body=('<h1>İLETİŞİM SAYFASINA HOŞ GELDİNİZ</h1>'))

app.listen(3000,()=>{
  console.log("app started")
});