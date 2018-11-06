import app1 from "./server1";
import app2 from "./server2";
import proxy from "./proxyServer";

// tslint:disable-next-line:no-console
app1.listen(3000, () => console.log("Example app listening on port 3000!"));

// tslint:disable-next-line:no-console
app2.listen(3001, () => console.log(`Example app listening on port 3001!`));

// tslint:disable-next-line:no-console
proxy.listen(8080, () => console.log(`Example app listening on port 8080!`));
