import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <a href="/main.jsx">
            <img alt="Mikrosono logo" className="h-20 inline" src="https://raw.githubusercontent.com/Ludocmy/Mikrosono/2953132dbf5599e93f37b4b79b357d5a0f19e630/client/src/assets/MikrosonoLogo.svg"></img>
          </a>
        </NavLink>
        

        <NavLink className="inline-flex items-center justify-center whitespace-nowrap text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-10 rounded-md px-3" to="/create">
          Create Employee
        </NavLink>
      </nav>
    </div>
  );
}