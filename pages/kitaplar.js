// pages/kitaplar.js
import Layout from '../components/Layout';

// Örnek kitap verileri
const kitaplar = [
  {
    id: 1,
    title: 'Sineklerin Tanrısı',
    author: 'William Golding',
    description: 'Bir grup çocuğun ıssız bir adada hayatta kalma mücadelesi ve insan doğasının derinliklerini keşfeden bir başyapıt.',
    image: '/images/sineklerin-tanrisi.jpg',
    kategori: 'Klasik Roman',
    sayfaSayisi: 224,
    yayinYili: 1954
  },
  {
    id: 2,
    title: 'Yabancı',
    author: 'Albert Camus',
    description: 'Varoluşçuluk akımının en önemli eserlerinden biri, hayatın anlamsızlığı ve toplum kurallarına yabancılaşma temasını işler.',
    image: '/images/yabancı.jpg',
    kategori: 'Felsefi Roman',
    sayfaSayisi: 159,
    yayinYili: 1942
  },
  {
    id: 3,
    title: 'Kürk Mantolu Madonna',
    author: 'Sabahattin Ali',
    description: 'Bir aşk hikayesi üzerinden bireyin toplumla olan çatışmasını ve yalnızlığını anlatan unutulmaz bir eser.',
    image: '/images/kurk-mantolu-madonna.jpg',
    kategori: 'Türk Edebiyatı',
    sayfaSayisi: 177,
    yayinYili: 1943
  }
];

export default function Kitaplar() {
  return (
    <Layout>
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Kütüphanemizdeki Kitaplar</h1>
        
        {/* Arama ve Filtreleme */}
        <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'center' }}>
          <input 
            type="text" 
            placeholder="Kitap adı, yazar veya kategori ara..." 
            style={{ padding: '10px', width: '300px', marginRight: '10px', border: '1px solid #ddd', borderRadius: '4px' }}
          />
          <select style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <option value="">Tüm Kategoriler</option>
            <option value="Klasik Roman">Klasik Roman</option>
            <option value="Felsefi Roman">Felsefi Roman</option>
            <option value="Türk Edebiyatı">Türk Edebiyatı</option>
          </select>
        </div>
        
        {/* Kitap Listesi */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {kitaplar.map(kitap => (
            <div key={kitap.id} style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '15px', 
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
              cursor: 'pointer'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <h3 style={{ marginTop: 0, color: '#2c3e50' }}>{kitap.title}</h3>
              <p style={{ color: '#7f8c8d', marginBottom: '10px' }}>{kitap.author}</p>
              <p style={{ fontSize: '14px' }}>{kitap.description}</p>
              <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ 
                  backgroundColor: '#e74c3c', 
                  color: 'white', 
                  padding: '4px 8px', 
                  borderRadius: '4px', 
                  fontSize: '12px' 
                }}>
                  {kitap.kategori}
                </span>
                <button style={{
                  padding: '8px 15px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}>
                  Detayları Görüntüle
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
