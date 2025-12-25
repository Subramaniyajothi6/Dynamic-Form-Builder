import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    let role = null;

    if (token) {
        try {
            const decoded = jwtDecode(token);
            role = decoded.role;
        } catch (err) {
            console.error("Invalid token", err.message);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };
    const handleBrandClick = () => {
        if (!token) {
            navigate("/");
            return;
        }
        if (role === "admin") {
            navigate("/admin");
        } else {
            navigate("/"); // UserHome
        }
    };

    return (
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
            <button
                type="button"
                onClick={handleBrandClick}
                className="text-xl font-bold tracking-wide"
            >
                Dynamic Forms
            </button>


            <div className="flex gap-6 items-center">


                {token && role === "user" && (
                    <Link to="/forms" className="hover:text-gray-300">
                        Forms
                    </Link>
                )}


                {token && role === "admin" && (
                    <Link to="/admin" className="hover:text-gray-300">
                        Admin
                    </Link>
                )}
                {token && role === "admin" && (
                    <Link to="/admin/forms" className="hover:text-gray-300">
                        forms
                    </Link>
                )}



                {!token ? (
                    <>
                        <Link to="/login" className="hover:text-gray-300">
                            Login
                        </Link>
                        <Link to="/register" className="hover:text-gray-300">
                            Register
                        </Link>
                    </>
                ) : (
                    <button
                        onClick={handleLogout}
                        className="text-red-400 hover:text-red-300"
                    >
                        Logout
                    </button>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
