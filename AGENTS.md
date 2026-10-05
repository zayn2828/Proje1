## PaketDepo Geliştirme Yönergeleri

### Mimari ve Yapı

- PaketDepo vitrin metinleri, ürün verileri ve görsel tanımları `src/lib/store.ts` dosyasında tutulur.
- Ortak bileşenler, üst menü ve alt bilgi (footer) `src/components/` dizini altında toplanmıştır; tüm alışveriş rotalarında görsel tutarlılık korunmalıdır.
- Yönlendirme tanımları `src/routes/` altında TanStack Router standartlarına uygun olarak yönetilir.
