import { app } from "./server";


const port = process.env.PORT || 7001

app.listen(port,()=>{
    console.log("server on port ", port)
})