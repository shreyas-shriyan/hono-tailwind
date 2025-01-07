import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));

app.get("/", (c) => {
  const name = c.req.query("name");

  const Component = ({ name }: { name: string }) => (
    <h1 class={"text-3xl font-bold text-red-800"}>Hello jhfgs {name}</h1>
  );

  const Layout = () => {
    return (
      <html>
        <head>
          <link href="/static/output.css" rel="stylesheet" />
        </head>
        <body>
          <Component name={name || ""} />
        </body>
      </html>
    );
  };

  return c.html(<Layout />);
});

export default app;
