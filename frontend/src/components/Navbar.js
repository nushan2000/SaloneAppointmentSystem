import React from "react"; // Capitalize 'React'
import './css/Navbar.css';
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <header>
            <nav className="xxx">
                <a className="logoo" href="/">Your Logo</a> {/* Provide visible content within anchor */}
                <ol className="list">
                    <li><a href="/about" className="salone vl">Salon</a></li>
                    <li><a href="/services" className="salone vl">Services</a></li>
                    <li><a href="/team" className="salone vl">Team</a></li>
                    <li><a href="/add" className="salone vl">Reservations</a></li>
                    <li><a href="/policies" className="salone vl">Policies</a></li>
                </ol>
                <button className="button1 border border-dark" onClick={() => navigate("/signin")}>Login</button>
            </nav>
        </header>
    );
}
