import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import Layout from "./Components/Layout";
import SampleComponent from "./Components/SampleComponent";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  const name = "User"; // can also be a parameter, ex: c.req.param("name")
  return c.html(<Layout>{<SampleComponent name={name} />}</Layout>);
});

export default app;
