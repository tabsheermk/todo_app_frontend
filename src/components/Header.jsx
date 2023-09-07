import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../main";
import { server } from "../main";
import { toast } from "react-hot-toast";
import axios from "axios";

function Header() {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.get(`${server}/users/logout`, {
        withCredentials: true,
      });

      toast.success("Logged out successfully");
      setIsAuthenticated(false);
    } catch (error) {
      toast.error(error.response.data.message);
      // console.log(error);
      setIsAuthenticated(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="header">
      <div>
        <h2>Todo App</h2>
      </div>
      <article>
        <Link to={"/"}>Home</Link>
        <Link to={"/profile"}>Profile</Link>
        {isAuthenticated ? (
          <button disabled={loading} className="btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to={"/login"}>Login</Link>
        )}
      </article>
    </nav>
  );
}

export default Header;
