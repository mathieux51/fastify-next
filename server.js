const fastify = require("fastify")({ logger: { level: "error" } })
const Next = require("next")

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production"

fastify.register((fastify, opts, next) => {
  const app = Next({ dev })
  app
    .prepare()
    .then(() => {
      if (dev) {
        fastify.get("/_next/*", async (req, reply) => {
          await app.handleRequest(req.req, reply.res)
          reply.sent = true
          return
        })
      }

      fastify.get("/*", async (req, reply) => {
        await app.handleRequest(req.req, reply.res)
        reply.sent = true
        return
      })

      fastify.setNotFoundHandler(async (request, reply) => {
        await app.handleRequest(request.req, reply.res)
        reply.sent = true
        return
      })

      next()
    })
    .catch(err => next(err))
})

fastify.listen(port, err => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
