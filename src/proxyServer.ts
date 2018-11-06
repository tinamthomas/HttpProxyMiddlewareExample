import * as express from "express";
import * as proxy from "http-proxy-middleware";

// proxy middleware options
const options = {
    router: {
        // when request.headers.host == 'dev.localhost:3000',
        // override target 'http://www.example.org' to 'http://localhost:8000'
        server2 : "http://localhost:3001",
    },
    target: "http://localhost:3000",
};

const redirectToServerTwo = (req) => {
    if (req.path.includes("server2")) {
        req.headers.host = "server2";
        req.originalUrl = "/";
    }
};

const app = express();
const proxyApp = proxy(options);

// tslint:disable-next-line:no-console
app.use("/", (req, res, next) => {
    console.log(req.headers.host);
    redirectToServerTwo(req);
    next();
});

app.use("/", proxyApp);

export default app;
