import { Link } from "react-router"

function Nav() {
  return (
    <nav className="flex justify-between items-center py-4 px-20 bg-bg-light border-b border-bdark">
      <div>
        <Link to="/" className="flex items-center gap-2 text-dark">
          <img src="../assets/SVGs/logo.svg" alt="logo-icon"></img>
          <h2 className="font-fraunces font-bold">WargaReport</h2>
        </Link>
      </div>
      <div className="flex items-center *:font-semibold *:p-2 *:text-semi-dark *:text-xs">
        <Link to="/feed">Live Feed</Link>
        <Link to="/track">Track</Link>
        <Link to="/help">How it works</Link>
      </div>
      <div className="flex items-center font-semibold text-semi-dark text-xs">
        <button className="flex items-center gap-1 py-2 px-4">
          <img src="../assets/SVGs/arrow-signin.svg" alt="arrow-signin" />
          <p>Sign In</p>
        </button>
        <button className="flex items-center gap-1 rounded-full bg-bg-dark py-2 px-4 font-semibold text-light text-xs">
          <img src="../assets/SVGs/plus-light.svg" alt="plus-light" />
          Report
        </button>
      </div>
    </nav>
  )
}

export default Nav