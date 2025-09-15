import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import KitapKart from '../components/KitapKart'

const kitaplar = [
  { id: 1, baslik: 'Sineklerin Tanrısı', yazar: 'William Golding', yil: 1954, kategori: 'Roman' },
  { id: 2, baslik: 'Yabancı', yazar: 'Albert Camus', yil: 1942, kategori: 'Roman' },
  { id: 3, baslik: 'Kürk Mantolu Madonna', yazar: 'Sabahattin Ali', yil: 1943, kategori: 'Roman' },
  { id: 4, baslik: 'Suç ve Ceza', yazar: 'Fyodor Dostoyevski', yil: 1866, kategori: 'Roman' },
  { id: 5, baslik: '1984', yazar: 'George Orwell', yil: 1949, kategori: 'Bilim Kurgu' },
  { id: 6, baslik: 'Hayvan Çiftliği', yazar: 'George Orwell', yil: 1945, kategori: 'Roman' }
]

export default function Kitaplar() {
  const [filtre, setFiltre] = useState('')

  const filtrelenmisKitaplar = kitaplar.filter(kitap =>
    kitap.baslik.toLowerCase().includes(filtre.toLowerCase()) ||
    kitap.yazar.toLowerCase().includes(filtre.toLowerCase())
  )

  return (
    <Layout>
      <Head>
        <title>Kitaplar - BySerwerus Kütüphanesi</title>
      </Head>

      <Navbar />
      
      <main className="container">
        <h1>Kitaplarımız</h1>
        
        <div className="arama-cubugu">
          <input
            type="text"
            placeholder="Kitap veya yazar ara..."
            value={filtre}
            onChange={(e) => setFiltre(e.target.value)}
            className="arama-input"
          />
        </div>

        <div className="kitaplar-grid">
          {filtrelenmisKitaplar.map(kitap => (
            <KitapKart key={kitap.id} kitap={kitap} />
          ))}
        </div>

        {filtrelenmisKitaplar.length === 0 && (
          <div className="bos-liste">
            <p>Aradığınız kriterlere uygun kitap bulunamadı.</p>
          </div>
        )}
      </main>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .arama-cubugu {
          margin: 30px 0;
          text-align: center;
        }
        .arama-input {
          padding: 12px 20px;
          width: 100%;
          max-width: 400px;
          border: 2px solid #ddd;
          border-radius: 25px;
          font-size: 16px;
        }
        .arama-input:focus {
          outline: none;
          border-color: #667eea;
        }
        .kitaplar-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }
        .bos-liste {
          text-align: center;
          padding: 60px 20px;
          color: #666;
        }
      `}</style>
    </Layout>
  )
}
