export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>BySerwerus DigiTalk Kütüphanesi</h1>
      <p>3D kitaplar ve sosyal özelliklerle dijital okuma deneyimi</p>
      <p>Site yapım aşamasındadır. Yakında hizmetinizde!</p>
      
      <div style={{ marginTop: '30px' }}>
        <h2>Öne Çıkan Kitaplar</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>Sineklerin Tanrısı - William Golding</li>
          <li style={{ marginBottom: '10px' }}>Yabancı - Albert Camus</li>
          <li style={{ marginBottom: '10px' }}>Kürk Mantolu Madonna - Sabahattin Ali</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <a 
          href="/kitaplar" 
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            marginTop: '20px'
          }}
        >
          Tüm Kitapları Görüntüle
        </a>
      </div>
    </div>
  );
}
