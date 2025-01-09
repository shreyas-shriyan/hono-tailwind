import { FC, useEffect, useState } from "hono/jsx";

const SampleComponent: FC = (props) => {
  return (
    <div>
      <div class="text-4xl">Sample Page</div>
      <div class="text-green-500">Hello {props.name}</div>
    </div>
  );
};

export default SampleComponent;
