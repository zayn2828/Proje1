import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  FileSpreadsheet,
  Grid2X2,
  Package,
  Phone,
  Zap,
} from "lucide-react";
import { PageShell, TrustStrip } from "@/components/store-shell";
import { AddButton, Badge, Qty } from "@/components/ui";
import { homeImages, money } from "@/lib/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PaketDepo — Toptan Ambalaj ve Sarf Malzemeleri" },
      {
        name: "description",
        content: "Restoran, kafe ve işletmeler için koli ve palet bazında toptan ambalaj tedariği.",
      },
      { property: "og:title", content: "PaketDepo Toptan Ambalaj" },
      {
        property: "og:description",
        content: "Fabrikadan doğrudan ambalaj ve sarf malzemeleri.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const sectors = [
  [
    "🍔",
    "142 Ürün Kolisi",
    "Fast Food & Burger",
    "Yağ geçirmez burger kağıtları, kraft patates kutuları, sızdırmaz sos kapları.",
  ],
  [
    "☕",
    "98 Ürün Kolisi",
    "Kafe & Kahve Dükkanı",
    "4/7/8/12/14 oz karton bardaklar, kapaklar, kraft bardak taşıyıcılar ve pipetler.",
  ],
  [
    "🍲",
    "210 Ürün Kolisi",
    "Catering & Tabldot",
    "3-4 gözlü mikrodalgaya uygun servis kapları, sanayi tipi streç film, folyo.",
  ],
  [
    "🥐",
    "85 Ürün Kolisi",
    "Fırın & Pastane",
    "Sedefli pasta altlıkları, pencereli baklava kutuları, kraft kese kağıtları.",
  ],
  [
    "🧤",
    "64 Ürün Kolisi",
    "Medikal & Hijyen",
    "Pudrasız nitril eldivenler, boneler, galoşlar ve endüstriyel rulolar.",
  ],
];

const best = [
  ["7 oz Standart Sıcak & Soğuk Karton Bardak", "KRAFT/KARTON", "3.000 Adet"],
  ["Gıda Tipi Streç Film 45cm x 1500 Metre", "PVC/PE STREÇ", "4 Rulo"],
  ["Ağır Hizmet Tipi Alüminyum Folyo 30cm x 150m", "ALÜMİNYUM", "6 Rulo"],
];

function Home() {
  const [qty, setQty] = useState(10);

  return (
    <PageShell>
      <TrustStrip />
      <section className="hero wrap">
        <div>
          <Badge tone="amber">TOPTAN AMBALAJ & TEK KULLANIMLIK FABRİKA DEPOSU</Badge>
          <h1>
            Restoran, Kafe ve İşletmeniz İçin <em>Fabrikadan Doğrudan</em> Ambalaj Tedariği
          </h1>
          <p>
            Aracı ve toptancı komisyonu olmadan; koli, palet ve konteyner bazında toptan gıda
            kapları, sarf malzemeleri ve hijyen ambalajları. Sabit fiyat garantisi ve 81 il ambar
            teslimatı.
          </p>
          <div className="benefits">
            <span>
              <b>%25'e Varan</b> Koli & Palet İskontosu
            </span>
            <span>
              <b>Aynı Gün</b> Ambar & Kargo Çıkışı
            </span>
            <span>
              <b>ISO 22000</b> Gıda Temas Sertifikası
            </span>
          </div>
          <div className="hero-actions">
            <Link className="btn primary" to="/urunler">
              <Grid2X2 /> Kataloğu İncele
            </Link>
            <Link className="btn amber-btn" to="/sepet">
              <Zap /> Hızlı Koli Siparişi
            </Link>
            <Link to="/urunler" className="btn secondary">
              <Package /> Ücretsiz Numune Paketi İste
            </Link>
          </div>
          <div className="assurances flex items-center gap-4 text-xs mt-5 text-muted-foreground">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Kurumsal E-Fatura
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> Vadeli Cari Hesap
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-primary" /> İade ve Değişim Garantisi
            </span>
          </div>
        </div>

        <aside className="calculator">
          <h3>
            <Calculator /> Hızlı İskonto & Koli Hesaplayıcı
          </h3>
          <p>Hacimli alımda anında net kâr marjınızı görün</p>
          <label>
            Ürün Grubu Seçin
            <select>
              <option>7 oz Karton Bardak (3.000 Adet/Koli)</option>
              <option>8 oz Ripple Kahve Bardağı (1.000 Adet/Koli)</option>
              <option>Gıda Tipi Streç Film 45cm (4 Rulo/Koli)</option>
            </select>
          </label>
          <label>Koli Adedi</label>
          <Qty value={qty} onChange={setQty} />
          <div className="tiers">
            <button className={qty === 1 ? "active" : ""} onClick={() => setQty(1)}>
              1 Koli
            </button>
            <button className={qty === 5 ? "active" : ""} onClick={() => setQty(5)}>
              5 Koli (%10)
            </button>
            <button className={qty === 10 ? "active" : ""} onClick={() => setQty(10)}>
              10 Koli (%15)
            </button>
            <button className={qty === 25 ? "active" : ""} onClick={() => setQty(25)}>
              25 Koli (%20)
            </button>
          </div>
          <div className="calc-total">
            <span>
              Liste Tutarı (KDV Hariç): <s>{money(qty * 1140)}</s>
            </span>
            <span>
              Koli Hacim İskontosu: <b>-{money(qty * 171)}</b>
            </span>
            <strong>{money(qty * 969)}</strong>
            <small>Net İskontolu Toplam</small>
          </div>
          <AddButton label="Bu Fiyatla Sepete Ekle" />
        </aside>
      </section>

      <section className="sector-band">
        <div className="wrap section-head">
          <div>
            <small>KATEGORİ & SEKTÖR NAVİGASYONU</small>
            <h2>Sektörünüze Özel Ambalaj & Sarf Koleksiyonları</h2>
          </div>
          <p>
            Restoran konseptinize en uygun ambalaj tiplerini tek tıkla koli bazında sipariş edin.
          </p>
        </div>
        <div className="wrap sector-grid">
          {sectors.map((x) => (
            <Link to="/urunler" className="sector-card" key={x[2]}>
              <i>{x[0]}</i>
              <small>{x[1]}</small>
              <h3>{x[2]}</h3>
              <p>{x[3]}</p>
              <b>
                Koleksiyonu Gör <ArrowRight />
              </b>
            </Link>
          ))}
        </div>
      </section>

      <section className="wrap products-section">
        <div className="section-head">
          <div>
            <small>DOĞRUDAN DEPO ÇIKIŞLI TOPTAN KOLİLER</small>
            <h2>Çok Satan Avantajlı Koli Paketleri</h2>
          </div>
          <div className="pills">
            <button className="active">Tüm Koliler</button>
            <button>Karton Bardak</button>
            <button>Streç & Folyo</button>
          </div>
        </div>
        <div className="featured-grid">
          {best.map((p, i) => (
            <article className="featured" key={p[0]}>
              <div className="photo">
                <img src={homeImages[i]} alt={p[0]} />
                <Badge>{p[1]}</Badge>
                <span>{840 - i * 320} Koli Stokta</span>
              </div>
              <small>SKU: PKD-{i + 302}</small>
              <h3>{p[0]}</h3>
              <p>Profesyonel işletmeler için yüksek kalite, hijyenik ve dayanıklı ürün.</p>
              <div>
                <b>Koli: {p[2]}</b>
                <AddButton />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Tek Seferde 1 Palet ve Üzeri Alım Yapıyor musunuz?</h2>
            <p>
              Özel ambar navlun indirimi ve tır bazlı kotasyon için kurumsal satış temsilciniz ile
              görüşün.
            </p>
          </div>
          <a className="btn light" href="tel:08503004050">
            <Phone /> 0850 300 40 50
          </a>
          <Link to="/sepet" className="btn amber-btn">
            Toptan Fiyat Teklifi Al
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
