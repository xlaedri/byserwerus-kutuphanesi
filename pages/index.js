import Head from 'next/head'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>BySerwerus Kütüphanesi</title>
        <meta name="description" content="3D kitaplar ve sosyal özelliklerle dijital kütüphane" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className="container">
        <section className="hero">
          <h1>BySerwerus Kütüphanesi</h1>
          <p>3D kitaplar ve sosyal özelliklerle dijital okuma deneyimi</p>
        </section>

        <section className="features">
          <div className="feature-card">
            <h3>3D Kitap Deneyimi</h3>
            <p>Kitapları gerçekçi 3D ortamında okuyun</p>
          </div>
          <div className="feature-card">
            <h3>Sosyal Etkileşim</h3>
            <p>Diğer okurlarla bağlantı kurun ve kitapları tartışın</p>
          </div>
          <div className="feature-card">
            <h3>Kişisel Kütüphane</h3>
            <p>Okuduğunuz kitapları kolayca yönetin</p>
          </div>
        </section>

        <section className="cta">
          <h2>Hemen Keşfetmeye Başlayın</h2>
          <button className="primary-button">Kitaplığı Görüntüle</button>
        </section>
      </main>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .hero {
          text-align: center;
          padding: 60px 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 15px;
          margin-bottom: 40px;
        }
        .hero h1 {
          font-size: 3rem;
          margin-bottom: 20px;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin-bottom: 40px;
        }
        .feature-card {
          padding: 30px;
          background: #f8f9fa;
          border-radius: 10px;
          text-align: center;
        }
        .cta {
          text-align: center;
          padding: 40px;
          background: #e9ecef;
          border-radius: 15px;
        }
        .primary-button {
          background: #007bff;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 1.1rem;
          cursor: pointer;
          transition: background 0.3s;
        }
        .primary-button:hover {
          background: #0056b3;
        }
      `}</style>
    </Layout>
  )
}
