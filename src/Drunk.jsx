import { forwardRef } from "react";
import DrunkEffect from "./DrunkEffect";
// forwardRef allows for ref forwarding to this component
// in second parameter
export default forwardRef(function Drunk(props, ref) {
  const effect = new DrunkEffect(props);
  return <primitive ref={ref} object={effect} />;
});
