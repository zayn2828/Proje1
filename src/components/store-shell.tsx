import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Box,
  ChevronDown,
  FileSpreadsheet,
  Headphones,
  Menu,
  PackageCheck,
  Search,
  ShoppingBag,
  Truck,
  ShieldCheck,
  FileText,
  Lock,
} from "lucide-react";
import { logo, profile } from "@/lib/store";

export function StoreHeader() {
  return (
    <>
      <div className="promo">
        <span>Koli ve Palet Alımlarında %25'e Varan İndirim!</span>
        <nav>
          <span>Hızlı Koli/Palet Siparişi</span>
          <span>Numune Talep Et</span>
          <b>Kurumsal B2B Girişi</b>
        </nav>
        <span>
          <Headphones /> Müşteri Destek: 0850 300 40 50
        </span>
      </div>
      <header className="header wrap">
        <Link to="/" className="brand">
          <img src={logo} alt="PaketDepo" />
          <strong>
            PaketDepo
            <small>Ambalaj & Toptan Sarf</small>
          </strong>
        </Link>
        <button className="category">
          <Box /> Tümü <ChevronDown />
        </button>
        <div className="search">
          <input aria-label="Ürün ara" placeholder="Karton Bardak 7 oz, Streç Film..." />
          <button aria-label="Ara">
            <Search /> Ara
          </button>
        </div>
        <div className="head-action">
          <Truck />
          <span>Sipariş Takibi</span>
        </div>
        <div className="head-action">
          <FileSpreadsheet />
          <span>Excel Yükle</span>
        </div>
        <div className="user">
          <img src={profile} alt="Profil" />
          <span>
            <b>Selim Akın</b>
            <small>Cafe Mocha Ltd.</small>
          </span>
        </div>
        <Link to="/sepet" className="cart">
          <ShoppingBag />
          <span>
            3 Koli<small>4.850 ₺</small>
          </span>
        </Link>
      </header>
      <nav className="mainnav">
        <div className="wrap">
          <Link to="/urunler">
            <Menu /> Tüm Kategoriler
          </Link>
          <Link to="/urunler">Tüm Ürünler</Link>
          <Link to="/urunler">Çok Satan Koliler</Link>
          <Link to="/urunler">Özel Baskılı Ürünler</Link>
          <Link to="/urunler">Toptan & Palet İndirimleri</Link>
          <Link to="/urunler">Eko-Dostu & Biyobozunur</Link>
          <Link to="/sepet" className="excel">
            Hızlı Excel Siparişi
          </Link>
        </div>
      </nav>
    </>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <h3>
            PaketDepo <small>B2B & B2C</small>
          </h3>
          <p>
            Türkiye'nin lider endüstriyel gıda ambalajı ve tek kullanımlık hijyen ürünleri
            tedarikçisi. Koli, palet ve tam tır sevkiyat güvencesi.
          </p>
          <b className="flex items-center gap-1.5 text-primary">
            <ShieldCheck className="h-4 w-4" /> ISO 22000 & Gıda Onaylı Ürünler
          </b>
        </div>
        <div>
          <h4>Kurumsal & Toptan</h4>
          <a>B2B Kurumsal Başvuru</a>
          <a>Palet İndirim Oranları</a>
          <a>Ücretsiz Numune Talebi</a>
          <a>Logo Baskı Hizmetleri</a>
        </div>
        <div>
          <h4>Müşteri Güvenceleri</h4>
          <a className="flex items-center gap-1.5">
            <FileText className="h-4 w-4" /> Anında E-Fatura Kolaylığı
          </a>
          <a className="flex items-center gap-1.5">
            <Truck className="h-4 w-4" /> Ambar ve Paletli Hızlı Sevkiyat
          </a>
          <a className="flex items-center gap-1.5">
            <Lock className="h-4 w-4" /> 3D Secure Güvenli Altyapı
          </a>
        </div>
        <div>
          <h4>Bülten & İskonto Duyuruları</h4>
          <p>Yeni gelen ambalaj serileri ve koli indirimlerinden haberdar olun.</p>
          <div className="newsletter">
            <input placeholder="E-posta adresiniz" />
            <button>Kaydol</button>
          </div>
        </div>
      </div>
      <div className="wrap legal">
        © 2026 PaketDepo Ambalaj ve Sarf Malzemeleri San. Tic. A.Ş.
        <span>Gizlilik ve Çerez Politikası • Mesafeli Satış Sözleşmesi • KVKK</span>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <StoreHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export function TrustStrip() {
  return (
    <div className="trust">
      <div className="wrap">
        <span>
          <PackageCheck /> Gıda Temasına %100 Uygun (TR-Tarım Onaylı)
        </span>
        <span>
          <Truck /> Saat 15:00'e kadar verilen koli siparişleri aynı gün ambarda!
        </span>
        <span>
          Merkez Depo: <b>2.480 Palet Hazır Stok</b>
        </span>
        <Link to="/urunler">
          <b>Palet İskonto Cetveli →</b>
        </Link>
      </div>
    </div>
  );
}
