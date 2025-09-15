export default function Layout({ children }) {
  return (
    <div className="layout">
      {children}
      <footer className="footer">
        <p>&copy; 2025 BySerwerus Kütüphanesi. Tüm hakları saklıdır.</p>
      </footer>

      <style jsx>{`
        .layout {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .footer {
          margin-top: auto;
          text-align: center;
          padding: 20px;
          background: #343a40;
          color: white;
        }
      `}</style>
    </div>
  )
}
