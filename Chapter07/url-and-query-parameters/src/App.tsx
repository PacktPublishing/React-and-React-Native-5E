import { Link } from "react-router-dom";

const param = "From Param";
const query = new URLSearchParams({ msg: "From Query" });

export default function App() {
  return (
    <section>
      <p>
        <Link to={`echo/${param}`}>Echo param</Link>
      </p>
      <p>
        <Link to={`echo?${query.toString()}`}>Echo query</Link>
      </p>
    </section>
  );
}
