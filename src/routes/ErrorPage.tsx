import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="error-page">
      OOPS, Something went wrong!
      <Link to="..">Go Back</Link>
    </div>
  );
}
