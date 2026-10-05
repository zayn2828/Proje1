import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Building2,
  Check,
  CreditCard,
  FileSpreadsheet,
  FileText,
  LockKeyhole,
  Package,
  Phone,
  Trash2,
  Truck,
} from "lucide-react";
import { PageShell } from "@/components/store-shell";
import { Badge, Qty } from "@/components/ui";
import { catalogImages, money } from "@/lib/store";

export const Route = createFileRoute("/sepet")({
  head: () => ({
    meta: [
      { title: "Toptan Satınalma Sepeti — PaketDepo" },
      {
        name: "description",
        content:
          "Koli ve palet siparişinizi toplu olarak yönetin, iskonto ve teslimat seçeneklerini görün.",
      },
      { property: "og:title", content: "PaketDepo Toptan Satınalma Sepeti" },
      {
        property: "og:description",
        content: "Hızlı giriş, palet optimizasyonu ve kurumsal ödeme seçenekleri.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sepet" }],
  }),
  component: CartPage,
});

const initial = [
  {
    name: "8 oz Ripple Kraft Sıcak İçecek Bardağı",
    sku: "PKD-KRT-8RP",
    qty: 10,
    price: 782,
    image: catalogImages[0],
  },
  {
    name: "Gıda Tipi Otomatik Streç Film 45cm x 1500m",
    sku: "PKD-STR-45",
    qty: 5,
    price: 890,
    image: catalogImages[3],
  },
  {
    name: "Mavi Pudrasız Nitril Muayene & Gıda Eldiveni L Boy",
    sku: "PKD-ELD-NTL",
    qty: 20,
    price: 710,
    image: catalogImages[5],
  },
  {
    name: "Plastik Çatal Kaşık Bıçak Hijyenik Poşetli Set",
    sku: "PKD-SET-LUX",
    qty: 8,
    price: 450,
    image: catalogImages[2],
  },
];

function CartPage() {
  const [items, setItems] = useState(initial);
  const total = useMemo(() => items.reduce((s, x) => s + x.qty * x.price, 0), [items]);

  const update = (i: number, v: number) =>
    setItems((a) => a.map((x, j) => (j === i ? { ...x, qty: v } : x)));

  return (
    <PageShell>
      <div className="cart-page wrap">
        <div className="cart-heading">
          <div>
            <small>
              B2B PORTAL / TOPTAN SATINALMA / <b>KOLİ & PALET SEPETİ</b>
            </small>
            <h1>Toptan Satınalma Sepeti & Hızlı Giriş</h1>
          </div>
          <div className="cart-tabs">
            <button className="active">
              <Package /> Aktif Sepet & Koli/Palet Özeti ({items.length})
            </button>
            <button>
              <FileSpreadsheet /> Hızlı Excel / Kod ile Toplu Sipariş
            </button>
          </div>
        </div>

        <section className="quick-add">
          <label>
            Ürün Kodu, Barkod veya İsim Ara
            <input placeholder="Örn: PKD-STR-45 veya Kraft Bardak..." />
          </label>
          <label>
            Koli Miktarı
            <Qty value={10} onChange={() => {}} />
          </label>
          <button className="btn primary">Hızlı Ekle</button>
          <button className="btn secondary">
            <FileSpreadsheet /> Toplu Excel Şablonu (.xlsx) <Badge tone="amber">Hazır</Badge>
          </button>
        </section>

        <div className="cart-layout">
          <div>
            <section className="cart-list">
              <header>
                <h3>
                  Sepetteki Ürünler{" "}
                  <Badge tone="blue">
                    {items.length} Kalem - {items.reduce((s, x) => s + x.qty, 0)} Koli
                  </Badge>
                </h3>
                <span className="flex items-center gap-3">
                  <button
                    onClick={() => setItems([])}
                    className="flex items-center gap-1 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" /> Tümünü Temizle
                  </button>
                  <button className="flex items-center gap-1">
                    <FileText className="h-4 w-4" /> Proforma Fatura Yazdır
                  </button>
                </span>
              </header>

              {items.map((x, i) => (
                <article key={x.sku}>
                  <img src={x.image} alt={x.name} />
                  <div className="item-info">
                    <Badge tone={i % 2 ? "blue" : "amber"}>
                      {i === 0 ? "KRAFT KARTON" : "POLİETİLEN"}
                    </Badge>
                    <small>SKU: {x.sku}</small>
                    <h3>{x.name}</h3>
                    <p>Koli İçi: 1.000 Adet • Hacim: {55 + i * 5} Desi</p>
                  </div>
                  <div>
                    <Qty value={x.qty} onChange={(v) => update(i, v)} />
                    <small>{x.qty} Koli</small>
                  </div>
                  <div className="item-price">
                    <s>{money(x.price * 1.1)}</s>
                    <strong>{money(x.qty * x.price)}</strong>
                    <small>Birim: {money(x.price)} / Koli</small>
                  </div>
                  <button
                    className="icon-btn"
                    onClick={() => setItems((a) => a.filter((_, j) => j !== i))}
                    aria-label="Ürünü sil"
                  >
                    ×
                  </button>
                </article>
              ))}

              <div className="cart-nudge">
                Sepetinize <b>7 Koli daha</b> eklerseniz toplam 50 Koli ile tam 2 Palet indirim
                kademesine geçeceksiniz! <Link to="/urunler">Katalogdan Tamamla →</Link>
              </div>
            </section>

            <section className="logistics">
              <h3>
                <Truck /> Lojistik, Palet ve Hacim Optimizasyonu
              </h3>
              <span>
                <b>1. Palet: %100 Dolu</b>
                <b>2. Palet: %80 Dolulukta</b>
              </span>
              <div className="progress">
                <i />
                <i />
              </div>
              <div className="shipping-options">
                <button>
                  <Package />
                  <b>Standart Kargo Dağıtım</b>
                  <small>Parça koli gönderimleri</small>
                  <strong>1.250 ₺</strong>
                </button>
                <button className="selected">
                  <Building2 />
                  <b>Ambar / Paletli Taşımacılık</b>
                  <small>Hasarsız palet sevkiyatı</small>
                  <strong>ÜCRETSİZ</strong>
                </button>
                <button>
                  <Truck />
                  <b>PaketDepo Özmal Filosu</b>
                  <small>Ertesi gün teslim</small>
                  <strong>450 ₺</strong>
                </button>
              </div>
            </section>
          </div>

          <aside className="order-summary">
            <div className="summary-card">
              <h2>
                Sipariş Özeti <Badge tone="blue">TR-B2B-89241</Badge>
              </h2>
              <p>
                Ara Toplam (Brüt)
                <b>{money(total)}</b>
              </p>
              <p className="saving">
                Kademeli Toptan İndirim Kazancı
                <b>-{money(total * 0.1)}</b>
              </p>
              <p>
                Paletli Sevkiyat Katkısı
                <b>0,00 ₺ (Ücretsiz)</b>
              </p>
              <p>
                Hesaplanan KDV (%20)
                <b>{money(total * 0.18)}</b>
              </p>
              <div className="grand">
                <span>ÖDENECEK TUTAR</span>
                <strong>{money(total * 1.08)}</strong>
                <Badge>KDV Dahil</Badge>
              </div>
              <div className="invoice">
                <b>Kurumsal Fatura Bilgileri</b>
                <span>
                  Cafe Mocha Gıda Hizmetleri Ltd. Şti.
                  <small>✓ E-Fatura Mükellefi</small>
                </span>
              </div>
              <h4>Ödeme Tercihi</h4>
              <div className="payment">
                <button className="active">
                  <CreditCard />
                  Kredi Kartı
                  <small>9 Taksit</small>
                </button>
                <button>
                  <Building2 />
                  Havale / EFT
                  <small>%3 İndirim</small>
                </button>
                <button>
                  Cari / DBS
                  <small>30 Gün Vade</small>
                </button>
              </div>
              <label>
                Şirket Sipariş No (PO No) veya Teslimat Notu
                <input placeholder="Örn: PO-2026/082 - Depo Kapı 3 Teslim" />
              </label>
              <button className="btn primary checkout">
                <LockKeyhole /> Siparişi Onayla & Fatura Adımına Geç
              </button>
              <div className="secure flex items-center justify-center gap-3">
                <span className="flex items-center gap-1">
                  <Check className="h-3.5 w-3.5" /> ISO 22000 Gıda Onayı
                </span>
                <span>•</span>
                <span>256-Bit SSL Güvenliği</span>
              </div>
            </div>

            <div className="representative">
              <Phone className="h-5 w-5 self-center" />
              <span>
                <small>B2B PORTFÖY TEMSİLCİNİZ</small>
                <b>Emre Dinçer (Kurumsal Satış)</b>
                0850 300 40 50 / info@paketdepo.com.tr
              </span>
            </div>
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
