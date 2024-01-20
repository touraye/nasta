import { Link } from "@remix-run/react";

export function Footer() {
    return (
        <footer>
            <small>
                All right reserved &copy; 2024 <Link to="/">Open Java</Link>
            </small>
        </footer>
    )
}