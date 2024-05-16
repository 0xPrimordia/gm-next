export default function Footer() {
    return (
        <footer className="footer-style page1">
        <div className="footer-toggle-container">
            <input type="checkbox" id="footerToggle" hidden checked />
            <label htmlFor="footerToggle" className="toggle-label"></label>
        </div>
        <div>
        <a href="https://example.com" target="_blank" className="footer-link page">OTG</a>
        <a href="https://example.com" target="_blank" className="footer-link page">BASE</a>
        <a href="https://example.com" target="_blank" className="footer-link page">Thirdweb</a>

        </div>
    </footer>
    )
}