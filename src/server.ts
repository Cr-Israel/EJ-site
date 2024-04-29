import { app } from "./infrastructure/http/app"

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running!')
})