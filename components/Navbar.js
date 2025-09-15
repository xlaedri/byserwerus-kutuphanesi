import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>BySerwerus</h2>
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="/" className="nav-link">Ana Sayfa</a>
          <a href="/kitaplar" className="nav-link">Kitaplar</a>
          <a href="#" className="nav-link">Hakkımızda</a>
          <a href="#" className="nav-link">İletişim</a>
        </div>

        <div className="nav-auth">
          <button className="login-btn">Giriş Yap</button>
          <button className="signup-btn">Kayıt Ol</button>
        </div>

        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 1rem 0;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
        }
        .nav-logo h2 {
          color: #667eea;
          margin: 0;
        }
        .nav-menu {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: #667eea;
        }
        .nav-auth {
          display: flex;
          gap: 1rem;
        }
        .login-btn, .signup-btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 500;
        }
        .login-btn {
          background: transparent;
          color: #333;
        }
        .signup-btn {
          background: #667eea;
          color: white;
        }
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
        }
        .hamburger span {
          width: 25px;
          height: 3px;
          background: #333;
          margin: 3px 0;
          transition: 0.3s;
        }
        
        @media (max-width: 768px) {
          .nav-menu, .nav-auth {
            display: none;
          }
          .hamburger {
            display: flex;
          }
          .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
        }
      `}</style>
    </nav>
  )
}
