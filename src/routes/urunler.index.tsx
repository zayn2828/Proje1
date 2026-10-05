import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Filter, Grid2X2, List, SlidersHorizontal, Package } from "lucide-react";
import { PageShell } from "@/components/store-shell";
import { AddButton, Badge, Qty } from "@/components/ui";
import { money, products } from "@/lib/store";

export const Route = createFileRoute("/urunler/")({
  head: () => ({
    meta: [
      { title: "Tek Kullanımlık Bardaklar — PaketDepo" },
      {
        name: "description",
        content: "Koli ve palet bazında sıcak ve soğuk içecek bardakları.",
      },
      { property: "og:title", content: "Toptan Tek Kullanımlık Bardaklar" },
      {
        property: "og:description",
        content: "148 ürün, hazır stok ve hacimli alım indirimleri.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/urunler" }],
  }),
  component: Catalog,
});

const filterGroups: Array<[string, string[]]> = [
  [
    "Sevkiyat & Stok",
    [
      "Merkez Depoda Hazır (112)",
      "Fabrika Siparişi (3-5 Gün) (36)",
      "Ücretsiz Numuneli Ürünler (84)",
    ],
  ],
  [
    "Hammadde / Malzeme Türü",
    [
      "Kraft Kağıt & Karton",
      "Kristal Şeffaf PET",
      "Isıya Dayanıklı PP",
      "Biyobozunur PLA / Mısır",
      "Alüminyum Folyo / Kap",
    ],
  ],
  [
    "Hacim & Boyut (oz / ml)",
    [
      "4 oz (110 ml)",
      "7 oz (180 ml)",
      "8 oz (240 ml)",
      "12 oz (350 ml)",
      "14 oz (410 ml)",
      "16 oz (480 ml)",
    ],
  ],
  ["Koli İçi Miktar", ["300 - 500 Adet/Koli", "1.000 Adet/Koli", "2.000 Adet/Koli", "3.000+ Adet"]],
  [
    "Teknik Nitelikler",
    ["Çift Duvarlı", "Dalgalı Yüzey", "Sızdırmaz Contalı Kapak", "Tarım Bakanlığı Onaylı"],
  ],
];

function Catalog() {
  const [counts, setCounts] = useState(products.map(() => 1));
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <PageShell>
      <div className="catalog-page wrap">
        <div className="crumb">
          <Link to="/">Ana Sayfa</Link> / Gıda Paketleme / Sıcak & Soğuk İçecek Bardakları
        </div>

        <section className="catalog-title">
          <div>
            <div className="flex gap-2 mb-2">
              <Badge>GIDA TEMASINA UYGUN</Badge>
              <Badge tone="amber">Palet Alımında Net %10 Ekstra İndirim</Badge>
            </div>
            <h1>Tek Kullanımlık Bardaklar & Sıcak/Soğuk İçecek Kapları</h1>
            <p>
              Endüstriyel kahve zincirleri, catering operasyonları ve fast-food işletmeleri için
              koli ve palet bazlı toptan tedarik.
            </p>
          </div>
          <dl>
            <div>
              <dt>Toplam Portföy</dt>
              <dd>148 Ürün</dd>
            </div>
            <div>
              <dt>Min. Sipariş</dt>
              <dd>1 Koli</dd>
            </div>
            <div>
              <dt>Hızlı Sevkiyat</dt>
              <dd>24 Saatte</dd>
            </div>
          </dl>
        </section>

        <div className="catalog-toolbar">
          <button className="mobile-filter" onClick={() => setFilterOpen(!filterOpen)}>
            <Filter /> Filtreler
          </button>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-xs text-muted-foreground">FİLTRELER:</span>
            <Badge tone="blue">Kraft & Karton ×</Badge>
            <Badge tone="blue">Hemen Stokta ×</Badge>
          </div>
          <div className="flex items-center gap-3">
            <span>Fiyatlar:</span>
            <button className="active">KDV Hariç</button>
            <button>KDV Dahil</button>
            <span className="ml-2">Sırala:</span>
            <select aria-label="Ürün sıralama">
              <option>En Çok Satan Koliler</option>
              <option>Fiyat: Artan</option>
              <option>Fiyat: Azalan</option>
            </select>
            <button aria-label="Izgara Görünümü">
              <Grid2X2 />
            </button>
            <button aria-label="Liste Görünümü">
              <List />
            </button>
          </div>
        </div>

        <div className="catalog-layout">
          <aside className={filterOpen ? "filters open" : "filters"}>
            {filterGroups.map((g, gi) => (
              <fieldset key={g[0]}>
                <legend>
                  {g[0]} <SlidersHorizontal />
                </legend>
                {g[1].map((x, i) => (
                  <label key={x}>
                    <input
                      type="checkbox"
                      defaultChecked={
                        (gi === 0 && i === 0) ||
                        (gi === 1 && i === 0) ||
                        (gi === 3 && i === 1) ||
                        (gi === 4 && i === 3)
                      }
                    />
                    {x}
                  </label>
                ))}
              </fieldset>
            ))}
            <fieldset>
              <legend>Koli Fiyat Aralığı (₺)</legend>
              <div className="range-label">
                <b>350 ₺</b>
                <b>3.800 ₺</b>
              </div>
              <input
                type="range"
                min="350"
                max="3800"
                defaultValue="2100"
                aria-label="Fiyat aralığı"
              />
              <button className="btn secondary">Filtreyi Uygula</button>
            </fieldset>
          </aside>

          <section className="catalog-results">
            <div className="pallet-banner">
              <span>
                <b>Karma Palet Avantajı</b>
                Aynı sevkiyatta 10 koli ve üzeri alımlarda ambar nakliyesi ücretsiz!
              </span>
              <button>Palet Tablosunu İncele</button>
            </div>

            <div className="product-grid">
              {products.map((p, i) => (
                <article className="product-card" key={p.name}>
                  <div className="product-meta">
                    <Badge tone={i % 2 ? "blue" : "amber"}>{p.tag}</Badge>
                    <small>SKU: PKD-{i + 1002}</small>
                  </div>
                  <Link to="/urunler/ripple-kraft-bardak">
                    <img src={p.image} alt={p.name} />
                  </Link>
                  <span className="stock">Stokta: {p.stock}</span>
                  <small>{i % 2 ? "KAHVE, TADIM & SHOT" : "SICAK KAHVE & ÇAY"}</small>
                  <Link to="/urunler/ripple-kraft-bardak">
                    <h2>{p.name}</h2>
                  </Link>
                  <Badge tone="blue">Koli: {i === 0 ? "2.000" : "1.000"} Adet</Badge>
                  <div className="product-price">
                    <span>
                      Birim Maliyet<b>{p.unit}</b>
                    </span>
                    <strong>{money(p.price)}</strong>
                  </div>
                  <div className="buy-row">
                    <Qty
                      value={counts[i] ?? 1}
                      onChange={(v) => setCounts((c) => c.map((x, j) => (j === i ? v : x)))}
                    />
                    <AddButton />
                  </div>
                  <button className="sample">
                    <Package className="h-3 w-3 inline mr-1" /> Ücretsiz Numune Talep Et
                  </button>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageShell>
  );
}
