// components/Layout.js
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <header style={{ 
        backgroundColor: '#2c3e50', 
        padding: '1rem', 
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'white' }}>
          <h1 style={{ margin: 0 }}>BySerwerus DigiTalk Kütüphanesi</h1>
        </Link>
        <nav>
          <Link href="/" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>
            Ana Sayfa
          </Link>
          <Link href="/kitaplar" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>
            Kitaplar
          </Link>
          <Link href="/koleksiyon" style={{ marginRight: '15px', color: 'white', textDecoration: 'none' }}>
            Koleksiyonum
          </Link>
          <Link href="/profil" style={{ color: 'white', textDecoration: 'none' }}>
            Profil
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer style={{ 
        backgroundColor: '#34495e', 
        color: 'white', 
        textAlign: 'center', 
        padding: '1rem',
        marginTop: '2rem'
      }}>
        <p>© 2023 BySerwerus DigiTalk Kütüphanesi - Tüm hakları saklıdır</p>
      </footer>
    </div>
  );
}
