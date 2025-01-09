import { FC } from "hono/jsx";

const Layout: FC = (props) => {
  return (
    <html>
      <head>
        <link href="/static/output.css" rel="stylesheet" />
      </head>
      <body>{props.children}</body>
    </html>
  );
};

export default Layout;
