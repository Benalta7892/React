import { Link, Outlet } from "react-router-dom";

export default function Analytics() {
  return (
    <div className="bg-slate-400">
      <div className="max-w-4xl mx-auto text-center pb-20">
        <p className="text-2xl pt-10 mb-6">Here is the company analytics</p>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aut ad ea tempora voluptatibus consequuntur.
          Impedit quisquam praesentium odio tempora?
        </p>
        <nav>
          <Link to="/analytics/development" className="mx-2 font-semibold text-lg">
            Development
          </Link>
          <Link to="/analytics/cybersecurity" className="mx-2 font-semibold text-lg">
            Cybersecurity
          </Link>
          <Link to="/analytics/uiux" className="mx-2 font-semibold text-lg">
            UI/UX
          </Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
}