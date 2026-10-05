export const logo = "/images/logo.svg";
export const profile = "/images/user-avatar.png";
export const homeImages = [
  "/images/banner-hero.png",
  "/images/cat-karton-bardak.png",
  "/images/cat-plastik-ambalaj.png",
  "/images/cat-hijyen-sarf.png",
];
export const catalogImages = [
  "/images/kraft-bardak-7oz.png",
  "/images/ripple-kahve-bardagi-8oz.png",
  "/images/smoothie-pet-bardak-14oz.png",
  "/images/otomat-bardak-12oz.png",
  "/images/espresso-kagit-bardak-4oz.png",
  "/images/corba-kasesi-500cc.png",
];
export const productImages = [
  "/images/ripple-detay-1.png",
  "/images/ripple-detay-2.png",
  "/images/ripple-detay-3.png",
];

export const products = [
  {
    name: "7 oz Çift Duvarlı Kraft Karton Bardak Isı Yalıtımlı",
    tag: "KRAFT KARTON",
    price: 880,
    unit: "0,44 ₺ / Adet",
    stock: "480 Koli",
    image: catalogImages[0],
  },
  {
    name: "8 oz Ripple Sıcak Kahve Bardağı Mat Siyah 3 Katmanlı",
    tag: "MAT SİYAH",
    price: 790,
    unit: "0,79 ₺ / Adet",
    stock: "310 Koli",
    image: catalogImages[1],
  },
  {
    name: "14 oz Şeffaf Bombeli Delikli Kapaklı Smoothie PET Bardak",
    tag: "ULTRA KRİSTAL PET",
    price: 1150,
    unit: "1,15 ₺ / Set",
    stock: "750 Koli",
    image: catalogImages[2],
  },
  {
    name: "12 oz Otomat Uyumlu PE Kaplamalı Sıcak Bardak",
    tag: "OTOMAT UYUMLU",
    price: 1140,
    unit: "0,38 ₺ / Adet",
    stock: "190 Koli",
    image: catalogImages[3],
  },
  {
    name: "4 oz Tek Duvarlı Espresso Kağıt Bardak Beyaz",
    tag: "ESPRESSO / TADIM",
    price: 290,
    unit: "0,29 ₺ / Adet",
    stock: "540 Koli",
    image: catalogImages[4],
  },
  {
    name: "500cc Sızdırmaz Plastik Çorba Kasesi ve Hava Tahliyeli Kapağı",
    tag: "MİKRODALGA UYUMLU",
    price: 925,
    unit: "1,85 ₺ / Set",
    stock: "620 Koli",
    image: catalogImages[5],
  },
];

export const money = (n: number) =>
  n.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + " ₺";
