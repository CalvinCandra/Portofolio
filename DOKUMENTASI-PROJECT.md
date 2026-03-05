# Dokumentasi Struktur Project Web Portofolio

Project ini adalah website portofolio personal yang dibangun menggunakan **Vue 3** dengan berbagai library dan tool modern. Berikut penjelasan lengkap struktur folder dan fungsi dari setiap file.

---

## 1. File Konfigurasi Utama

### `package.json`
File ini berisi konfigurasi project npm yang mendefinisikan:
- **Name**: `web-portofolio`
- **Dependencies**: Library utama yang digunakan project
  - `vue` (v3.5.13) - Framework frontend utama
  - `vue-router` (v4.5.1) - Untuk routing/halaman
  - `swiper` (v11.2.10) - Untuk slider/gallery gambar project
  - `tailwindcss` (v4.1.8) - Untuk styling CSS
  - `typed.js` (v2.1.0) - Untuk efek ketik pada teks (typing animation)
- **Scripts**: Perintah yang bisa dijalankan
  - `npm run dev` - Menjalankan development server
  - `npm run build` - Build project untuk production
  - `npm run lint` - Memeriksa dan memperbaiki code

### `vite.config.js`
File konfigurasi Vite (build tool) yang berisi:
- Konfigurasi plugin Vue
- Konfigurasi Tailwind CSS
- Alias path `@` yang menunjuk ke folder `src/`

### `index.html`
File HTML utama yang menjadi entry point aplikasi. Di dalam div `#app` inilah Vue akan merender komponennya.

---

## 2. Struktur Folder `src/`

```
src/
├── assets/          # File statis (CSS, gambar, logo)
├── components/     # Komponen Vue yang bisa digunakan ulang
├── composables/    # Vue Composables (reusable logic)
├── data/           # Data statis project (skill, project, gambar)
├── router/         # Konfigurasi routing
├── views/          # Halaman-halaman utama
├── App.vue         # Komponen root aplikasi
└── main.js         # Entry point aplikasi
```

---

## 3. Folder `src/assets/`

Folder ini menyimpan file statis yang tidak berubah.

### `assets/main.css`
File CSS global yang di-import di `main.js`. Berisi styling dasar menggunakan Tailwind CSS.

### `assets/logo.svg`
File logo SVG untuk website portofolio.

### `assets/img/`
Folder gambar yang berisi:
- **skill/** - Logo skill/teknologi (HTML, CSS, JS, PHP, React, Vue, Laravel, dll)
- **project/** - Screenshot project
- **list/** - Gambar detail project (subfolder per project)
- **herosection.png** - Gambar untuk section hero
- **about.png** - Gambar untuk section about
- **Design.png** - Ornamen/desain visual

---

## 4. Folder `src/components/`

Berisi komponen Vue yang bisa digunakan ulang di berbagai tempat.

### `components/NavbarWeb.vue`
Komponen navigasi utama yang berisi:
- Logo dan nama
- Menu navigasi (Beranda, Tentang Saya, Project)
- Dark mode toggle
- Mobile menu dropdown
- Efek scroll untuk mengubah background navbar

**Fitur Utama:**
- Responsive design (desktop & mobile)
- Smooth scroll ke section dengan hash URL
- Toggle mobile menu
- Sticky navbar dengan efek scroll

### `components/FooterWeb.vue`
Komponen footer yang berisi:
- Logo dan nama
- Link navigasi (Beranda, Tentang Saya, Project)
- Link media sosial (Github, Linkedin, Instagram)
- Copyright text

### `components/DarkMode.vue`
Komponen toggle dark mode yang:
- Menyimpan preferensi theme di `localStorage`
- Mendeteksi preferensi sistem (dark/light mode)
- Toggle class `dark` pada element `<html>`
- Menampilkan icon matahari/bulan sesuai mode

### `components/button/ButtonBg.vue`
Komponen button reusable dengan props:
- `text` - Teks yang ditampilkan
- `href` - Link tujuan
- `isExternal` - Apakah link eksternal

Mendukung:
- Link internal (menggunakan `RouterLink`)
- Link eksternal (menggunakan tag `<a>` dengan `target="_blank"`)

### `components/button/ButtonBorder.vue`
Komponen button dengan style border (outline).

---

## 5. Folder `src/composables/`

Berisi Vue Composables - fungsi reusable yang menggunakan Composition API.

### `composables/useProject.js`
Composable untuk mengambil dan mengelola data project:
- Mengambil project berdasarkan ID dari URL parameter
- Computed property untuk mapping skill/tools yang digunakan
- Redirect ke halaman error jika project tidak ditemukan

**Fungsi:**
- `fetchProject()` - Mengambil data project dari ID
- `projectSkills` - Mengembalikan array skill yang sesuai dengan tools project

### `composables/useSwiper.js`
Composable untuk konfigurasi Swiper (gallery slider):
- `thumbsSwiper` - Reference ke thumbnail swiper
- `setThumbsSwiper()` - Function untuk set swiper instance
- `modules` - Array module Swiper (FreeMode, Navigation, Thumbs)

### `composables/Herosection/useTyping.js`
Composable untuk efek typing animation:
- Menggunakan library Typed.js
- Membuat instance Typed baru
- Membersihkan instance saat komponen unmount

### `composables/Navbar/useDropmenuNavbar.js`
Composable untuk manage mobile menu:
- `isMobileMenuOpen` - State untuk status menu open/close
- `toggleMobileMenu()` - Toggle menu
- `closeMobileMenu()` - Tutup menu

### `composables/Navbar/useActiveSection.js`
Composable untuk tracking section aktif di navbar.

---

## 6. Folder `src/data/`

Berisi data statis yang digunakan di aplikasi.

### `data/ImageAssets.js`
File yang meng-import semua gambar dan mengekspornya dalam object `ImageAssets`. Ini memudahkan import gambar di tempat lain tanpa perlu记得 path lengkap.

**Berisi:**
- Gambar skill (HTML, CSS, JS, PHP, Laravel, React, Vue, dll)
- Gambar project utama
- Gambar detail project (per project)
- Gambar hero dan about section

### `data/project/DataProject.js`
Data statis project yang berisi array object dengan detail:
- `id` - ID project
- `gambar` - Gambar utama
- `img_lis` - Array gambar detail/project gallery
- `nama_project` - Nama project
- `deskripsi` - Deskripsi project
- `role` - Peran (Frontend/Backend/Fullstack)
- `fitur` - List fitur project
- `dibuat` - Tanggal pembuatan
- `dikerjakan` - Cara pengerjaan (mandiri/team)
- `tools` - Tools yang digunakan

**Project yang ada:**
1. Sina Website - Sistem administrasi sekolah
2. Agrofy - Sistem pengelolaan limbah pertanian
3. Absen Wisudawan - Sistem kehadiran wisuda via QR
4. UKM Profile - Website profil UKMK
5. Tryout TOEIC - Sistem tryout TOEIC
6. Balijobfinder - Portal lowongan pekerjaan
7. Intechfest - Website event perlombaan

### `data/skill/`
Folder berisi data skill yang di-export dari ImageAssets:

#### `DataBahasa.js`
Skill bahasa pemrograman: HTML, CSS, JavaScript, PHP

#### `DataFramework.js`
Framework: Laravel, React, Express, Vue, Tailwind, Bootstrap

#### `DataDatabase.js`
Database: MySQL, MongoDB

#### `DataTools.js`
Tools development: Github, N8N

---

## 7. Folder `src/router/`

### `router/index.js`
Konfigurasi Vue Router yang berisi:
- Import halaman-halaman
- Definisi routes:
  - `/` - MainPage (halaman utama)
  - `/project/:id` - ProjectPage (detail project)
  - `/:pathMatch(.*)*` - NotFound (halaman 404)
- Konfigurasi scroll behavior (smooth scroll ke hash)
- Meta field `showLayout` untuk menampilkan/menyembunyikan navbar & footer

---

## 8. Folder `src/views/`

Berisi halaman-halaman utama aplikasi.

### `views/MainPage.vue`
Halaman utama yang berisi:
- **Hero Section**: Foto, nama, typing animation pekerjaan
- **About Section**: Deskripsi diri, foto, skill
- **Project Section**: Card project yang bisa diklik

**Menggunakan:**
- Typed.js untuk efek ketik
- Data dari `DataProject.js`
- Data skill dari folder `data/skill/`
- ButtonBg component

### `views/ProjectPage.vue`
Halaman detail project yang menampilkan:
- Judul dan tanggal pembuatan
- Gallery gambar dengan Swiper (main + thumbnails)
- Deskripsi project
- List fitur
- Tools yang digunakan
- Tombol kembali

**Menggunakan:**
- Swiper untuk gallery
- `useProject` composable untuk data project
- `useSwiper` composable untuk konfigurasi swiper

### `views/Errors/NotFound.vue`
Halaman error 404 ketika halaman tidak ditemukan. Menampilkan:
- Kode error 404
- Pesan "Halaman tidak ditemukan"
- Tombol kembali ke beranda

---

## 9. File Utama

### `src/main.js`
Entry point aplikasi Vue yang:
- Meng-import CSS global
- Membuat Vue app instance
- Menggunakan router
- Mount app ke element `#app`

### `src/App.vue`
Komponen root yang:
- Menampilkan Navbar (jika `showLayout: true`)
- Merender halaman melalui `<router-view>`
- Menampilkan Footer (jika `showLayout: true`)

---

## 10. Teknologi yang Digunakan

| Teknologi | Fungsi |
|-----------|--------|
| Vue 3 | Framework frontend utama |
| Vue Router | Routing dan navigasi |
| Tailwind CSS | Styling CSS |
| Swiper | Gallery/slider gambar |
| Typed.js | Efek typing animation |
| Vite | Build tool dan dev server |
| ESLint | Code linting |
| Prettier | Code formatting |

---

## Cara Menjalankan Project

```bash
# Install dependencies
npm install

# Development mode
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview

# Lint dan fix code
npm run lint
```

---

## Struktur URL

- `/` - Halaman utama (Home, About, Project)
- `/project/:id` - Detail project tertentu
- `/*` - Halaman 404 Not Found
