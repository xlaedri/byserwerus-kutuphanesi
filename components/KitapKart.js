export default function KitapKart({ kitap }) {
  return (
    <div className="kitap-kart">
      <div className="kitap-resim">
        <div className="placeholder-resim">
          {kitap.baslik.charAt(0)}
        </div>
      </div>
      <div className="kitap-bilgi">
        <h3>{kitap.baslik}</h3>
        <p className="yazar">{kitap.yazar}</p>
        <div className="kitap-detay">
          <span className="yil">{kitap.yil}</span>
          <span className="kategori">{kitap.kategori}</span>
        </div>
        <button className="incele-btn">İncele</button>
      </div>

      <style jsx>{`
        .kitap-kart {
          background: white;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .kitap-kart:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }
        .placeholder-resim {
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 4rem;
          font-weight: bold;
        }
        .kitap-bilgi {
          padding: 20px;
        }
        .kitap-bilgi h3 {
          margin: 0 0 10px 0;
          color: #333;
          font-size: 1.2rem;
        }
        .yazar {
          color: #666;
          margin: 0 0 15px 0;
          font-style: italic;
        }
        .kitap-detay {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }
        .yil, .kategori {
          background: #f8f9fa;
          padding: 5px 10px;
          border-radius: 15px;
          font-size: 0.8rem;
          color: #666;
        }
        .incele-btn {
          width: 100%;
          padding: 10px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background 0.3s;
        }
        .incele-btn:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  )
}
