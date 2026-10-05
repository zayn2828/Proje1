import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  CheckCircle2,
  Layers3,
  PenTool,
  Ruler,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Zap,
} from "lucide-react";
import { PageShell } from "@/components/store-shell";
import { Badge, Qty } from "@/components/ui";
import { money, productImages } from "@/lib/store";

export const Route = createFileRoute("/urunler/ripple-kraft-bardak")({
  head: () => ({
    meta: [
      { title: "8 oz Ripple Kraft Sıcak Kahve Bardağı — PaketDepo" },
      {
        name: "description",
        content: "Isı yalıtımlı 3 katmanlı ripple kraft bardak, koli içi 1.000 adet.",
      },
      { property: "og:title", content: "8 oz Ripple Kraft Sıcak Kahve Bardağı" },
      {
        property: "og:description",
        content: "Kademeli toptan iskonto ve aynı gün sevkiyat.",
      },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/urunler/ripple-kraft-bardak" }],
  }),
  component: ProductPage,
});

const rows = [
  ["1 - 4 Koli", "Standart", "0,85 ₺", "850,00 ₺"],
  ["5 - 19 Koli", "%8 İndirim", "0,78 ₺", "782,00 ₺"],
  ["20 - 49 Koli", "%15 İndirim", "0,72 ₺", "722,50 ₺"],
  ["50+ Koli | 1 Palet+", "%22 İndirim", "0,66 ₺", "663,00 ₺"],
];

function ProductPage() {
  const [qty, setQty] = useState(5);
  const [selected, setSelected] = useState(0);
  const [tab, setTab] = useState("Teknik Özellikler");

  return (
    <PageShell>
      <div className="product-page wrap">
        <div className="crumb">
          <Link to="/">Ana Sayfa</Link> › <Link to="/urunler">Karton Bardaklar</Link> ›{" "}
          <span>8 oz Ripple Bardaklar</span> › <b>PKD-KRT-8RP-K1000</b>
        </div>

        <div className="detail-grid">
          <section>
            <div className="main-photo">
              <Badge tone="amber">%22 PALET İNDİRİMİ</Badge>
              <img src={productImages[selected]} alt="8 oz Ripple Kraft Sıcak Kahve Bardağı" />
            </div>
            <div className="thumbs">
              {productImages.map((im, i) => (
                <button
                  className={selected === i ? "active" : ""}
                  onClick={() => setSelected(i)}
                  key={im}
                >
                  <img src={im} alt={`Ürün görseli ${i + 1}`} />
                </button>
              ))}
            </div>
            <div className="certs">
              <h3>
                <ShieldCheck /> SERTİFİKASYON & TEST RAPORLARI
              </h3>
              <div>
                <span>
                  🍴 <b>Tarım Bakanlığı Onayı</b>
                </span>
                <span>
                  ✓ <b>ISO 22000 & BRCGS</b>
                </span>
                <span>
                  ♻ <b>%100 Geri Dönüştürülebilir</b>
                </span>
                <span>
                  ♨ <b>3 Katmanlı Isı Bariyeri</b>
                </span>
              </div>
            </div>
          </section>

          <section className="purchase-card">
            <div className="sku">
              <Badge tone="blue">SKU: PKD-KRT-8RP-K1000</Badge>
              <span>İstanbul İkitelli Depo: 480 Koli Hazır</span>
            </div>
            <h1>8 oz Ripple Kraft Sıcak Kahve Bardağı</h1>
            <p>
              Isı Yalıtımlı 3 Katmanlı Dalgalı Gövde • Koli İçi: 1.000 Adet (20 Paket x 50 Adet)
            </p>

            <div className="price-setting">
              <span>Fiyat Gösterim Ayarı</span>
              <b>KDV Hariç • KDV Dahil (%10)</b>
            </div>

            <h3>Kademeli Toptan İskonto Tablosu</h3>
            <table>
              <thead>
                <tr>
                  <th>Sipariş Hacmi</th>
                  <th>İskonto</th>
                  <th>Adet Birim</th>
                  <th>Koli Fiyatı</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr className={i === 1 ? "selected" : ""} key={r[0]}>
                    {r.map((x, j) => (
                      <td key={x}>{j === 1 && i > 0 ? <Badge>{x}</Badge> : <b>{x}</b>}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="quantity-panel">
              <div>
                <b>Koli Adedi Belirleyin:</b>
                <small>1 Koli = 1.000 Bardak</small>
              </div>
              <Qty value={qty} onChange={setQty} />
              <button onClick={() => setQty(1)}>1 Koli</button>
              <button onClick={() => setQty(5)}>5 Koli</button>
              <button className="active" onClick={() => setQty(24)}>
                1 Palet (24)
              </button>
              <p>
                ✓ Seviye 2 İndirimi Aktif: <b>{money(qty * 68)} Tasarruf Sağladınız!</b>
              </p>
            </div>

            <div className="addon">
              <img src={productImages[1]} alt="Kapak" />
              <span>
                <b>80mm Siyah Bombeli Bardak Kapağı</b>
                <small>Koli İçi: 1.000 Adet</small>
                <strong>+320,00 ₺ / Koli</strong>
              </span>
              <label>
                <input type="checkbox" /> Birlikte Ekle
              </label>
            </div>

            <div className="purchase-total">
              <small>
                Tahmini Sipariş Tutarı:
                <b>İstanbul ve Marmara aynı gün ambar teslimatı</b>
              </small>
              <strong>{money(qty * 782)}</strong>
            </div>

            <div className="purchase-actions">
              <Link to="/sepet" className="btn primary">
                <ShoppingCart /> Sepete Ekle
              </Link>
              <Link to="/sepet" className="btn amber-btn">
                <Zap className="h-4 w-4" /> Hemen Satın Al
              </Link>
            </div>

            <div className="custom-print">
              <PenTool className="h-5 w-5 text-primary self-center mr-2" />
              <b>Özel Logo & Kurumsal Baskı Çözümleri</b>
              <span>Minimum 5.000 adet için ücretsiz mockup alın.</span>
              <a href="tel:08503004050">Bilgi Al</a>
            </div>
          </section>
        </div>

        <section className="detail-tabs">
          <nav>
            {[
              "Teknik Özellikler",
              "Paletleme & Lojistik",
              "Sevkiyat & Teslimat Şartları",
              "Kurumsal Yorumlar (48)",
            ].map((t) => (
              <button className={tab === t ? "active" : ""} onClick={() => setTab(t)} key={t}>
                {t}
              </button>
            ))}
          </nav>
          {tab === "Teknik Özellikler" ? (
            <div className="spec-grid">
              <div>
                <h2>
                  <Ruler /> Milimetrik Ölçüler ve Gramaj Bilgisi
                </h2>
                {[
                  ["Hacim", "8 oz (Yaklaşık 200 - 240 ml)"],
                  [
                    "Kağıt Gramajı & Bariyer",
                    "280 gsm Saf Kraft + 18 PE İç Kaplama + 110 gsm Dalga Katmanı",
                  ],
                  ["Ağız Dış Çapı", "80,0 mm (± 0.2 mm)"],
                  ["Taban Çapı", "53,0 mm"],
                  ["Yükseklik", "92,0 mm"],
                  ["Koli Ebatları", "41 × 33 × 52 cm"],
                  ["Koli Brüt Ağırlık", "9,80 kg"],
                ].map((x) => (
                  <p key={x[0]}>
                    <span>{x[0]}</span>
                    <b>{x[1]}</b>
                  </p>
                ))}
              </div>
              <article>
                <h2>
                  <Layers3 /> Neden Ripple Wall Bardak?
                </h2>
                <p>
                  Geleneksel tek duvarlı karton bardaklarda sıcak içecekler için ekstradan bardağa
                  geçirilen bardak ceketine gerek duyulur. Özel hava kanallı oluklu dalga katmanı
                  içeceğin sıcaklığını tutarken kullanıcının elini yakmaz.
                </p>
                <div className="metrics">
                  <b>
                    0 Ekstra
                    <small>Karton Sleeve Gereksinimi</small>
                  </b>
                  <b>
                    %40
                    <small>Daha Uzun Isı Koruma</small>
                  </b>
                  <b>
                    Sıfır
                    <small>Deformasyon & Sızıntı</small>
                  </b>
                </div>
              </article>
            </div>
          ) : (
            <div className="tab-content">
              <Truck />
              <h2>{tab}</h2>
              <p>
                İstanbul içi aynı gün kendi filomuzla teslimat; Türkiye geneli anlaşmalı ambarlarla
                güvenli palet sevkiyatı sağlanır.
              </p>
              <div className="flex items-center gap-2 mt-4 text-primary font-medium">
                <CheckCircle2 className="h-5 w-5" /> Hasarsız teslimat güvencesi ve kurumsal destek
                dahildir.
              </div>
            </div>
          )}
        </section>
      </div>
    </PageShell>
  );
}
