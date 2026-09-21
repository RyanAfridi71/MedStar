import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/global.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    // Close menu on outside click
    useEffect(() => {
        if (!menuOpen) return;
        const handleClick = (e) => {
            if (!e.target.closest('.navbar')) setMenuOpen(false);
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [menuOpen]);

    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? 'var(--primary-color)' : 'var(--text-dark)',
        fontWeight: isActive ? '600' : '400',
    });

    return (
        <nav
            className="navbar"
            style={{
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--secondary-color)',
                padding: '1rem 0',
                boxShadow: 'var(--shadow-sm)',
            }}
        >
            <div className="container item-center justify-between flex" style={{ position: 'relative' }}>

                {/* Logo */}
                <Link
                    to="/"
                    style={{
                        fontSize: '1.4rem',
                        fontWeight: '800',
                        color: 'var(--primary-color)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        flexShrink: 0,
                    }}
                >
                    SkyMedical<span style={{ color: 'var(--accent-color)' }}>.</span>
                </Link>

                {/* Desktop + Mobile Nav Links */}
                <ul className={`nav-links flex${menuOpen ? ' open' : ''}`} style={{ gap: '2rem', alignItems: 'center' }}>
                    <li><NavLink to="/"        style={navLinkStyle}>Home</NavLink></li>
                    <li><NavLink to="/products" style={navLinkStyle}>Products</NavLink></li>
                    <li><NavLink to="/about"   style={navLinkStyle}>About Us</NavLink></li>
                    <li><NavLink to="/contact" style={navLinkStyle}>Contact</NavLink></li>
                    <li>
                        <Link
                            to="/products"
                            className="btn btn-primary"
                            style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
                        >
                            Shop Now
                        </Link>
                    </li>
                </ul>

                {/* Hamburger button — hidden on desktop via CSS */}
                <button
                    className="nav-hamburger"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
