import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react'; // Example icons
import '../styles/global.css'; // Ensure global styles are available

const Navbar = () => {
    return (
        <nav className="navbar" style={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--secondary-color)',
            padding: '1rem 0',
            boxShadow: 'var(--shadow-sm)'
        }}>
            <div className="container item-center justify-between flex">
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    MedStar<span style={{ color: 'var(--accent-color)' }}>.</span>
                </Link>

                {/* Desktop Menu */}
                <ul className="nav-links flex" style={{ gap: '2rem', alignItems: 'center' }}>
                    <li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: isActive ? '600' : '400' })}>Home</NavLink></li>
                    <li><NavLink to="/products" style={({ isActive }) => ({ color: isActive ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: isActive ? '600' : '400' })}>Products</NavLink></li>
                    <li><NavLink to="/about" style={({ isActive }) => ({ color: isActive ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: isActive ? '600' : '400' })}>About Us</NavLink></li>
                    <li><NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'var(--primary-color)' : 'var(--text-dark)', fontWeight: isActive ? '600' : '400' })}>Contact</NavLink></li>
                    <li>
                        <Link to="/products" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                            Shop Now
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
