// pages/index.js
import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        color: 'white', 
        padding: '80px 20px', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>BySerwerus DigiTalk Kütüphanesi</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 30px' }}>
          3D kitaplar ve sosyal özelliklerle zenginleştirilmiş benzersiz bir dijital okuma deneyimi
        </p>
        <Link href="/kitaplar" style={{
          display: 'inline-block',
          padding: '12px 30px',
          backgroundColor: '#e74c3c',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '30px',
          fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          Keşfetmeye Başla
        </Link>
      </div>

      <div style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Neler Sunuyoruz?</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📚</div>
            <h3>3D Kitap Deneyimi</h3>
            <p>Kitapları benzersiz 3D görüntüleme teknolojisiyle inceleyin, sayfaları çevirin ve okuma deneyiminizi zenginleştirin.</p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>👥</div>
            <h3>Sosyal Etkileşim</h3>
            <p>Arkadaşlarınızla kitapları tartışın, yorumlar yapın ve okuma grupları oluşturun.</p>
          </div>
          
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📱</div>
            <h3>Kişiselleştirilmiş Koleksiyon</h3>
            <p>Kendi sanal kütüphanenizi oluşturun, okuma listenizi yönetin ve ilerlemenizi takip edin.</p>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#f8f9fa', padding: '60px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Öne Çıkan Kitaplar</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {/* Örnek kitap kartları */}
            {[
              { title: 'Sineklerin Tanrısı', author: 'William Golding', category: 'Klasik Roman' },
              { title: 'Yabancı', author: 'Albert Camus', category: 'Felsefi Roman' },
              { title: 'Kürk Mantolu Madonna', author: 'Sabahattin Ali', category: 'Türk Edebiyatı' },
              { title: 'Suç ve Ceza', author: 'Fyodor Dostoyevski', category: 'Klasik Roman' }
            ].map((book, index) => (
              <div key={index} style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                padding: '20px', 
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <h3 style={{ marginTop: 0 }}>{book.title}</h3>
                <p style={{ color: '#7f8c8d' }}>{book.author}</p>
                <span style={{ 
                  display: 'inline-block', 
                  backgroundColor: '#e74c3c', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '12px' 
                }}>
                  {book.category}
                </span>
                <button style={{
                  display: 'block',
                  width: '100%',
                  padding: '10px',
                  marginTop: '15px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  İncele
                </button>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/kitaplar" style={{
              display: 'inline-block',
              padding: '12px 30px',
              backgroundColor: '#2c3e50',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '30px',
              fontWeight: 'bold'
            }}>
              Tüm Kitapları Görüntüle
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
