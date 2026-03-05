# Dokumentasi Lengkap Kode Project Web Portofolio

Dokumen ini menjelaskan secara detail setiap file kode di project web portofolio Vue 3.

---

# 1. File: `src/main.js`

File `main.js` adalah **entry point** (titik masuk) utama aplikasi Vue.

## Kode Lengkap

```javascript
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import route from './router'

const app = createApp(App)

app.use(route)
app.mount('#app')
```

## Penjelasan

### `import './assets/main.css'`
Meng-import file CSS global untuk styling dasar aplikasi termasuk Tailwind CSS.

### `import { createApp } from 'vue'`
Meng-import fungsi `createApp` dari Vue 3 untuk membuat instance aplikasi.

### `import App from './App.vue'`
Meng-import komponen utama `App.vue` sebagai root komponen.

### `import route from './router'`
Meng-import konfigurasi router untuk navigasi halaman.

### `const app = createApp(App)`
Membuat instance aplikasi Vue baru.

### `app.use(route)`
Mendaftarkan router sebagai plugin.

### `app.mount('#app')`
Me-mount aplikasi ke elemen DOM dengan id `app` di `index.html`.

---

# 2. File: `src/App.vue`

Komponen root aplikasi Vue.

## Kode Lengkap

```vue
<script setup>
import { useRoute } from 'vue-router'
import NavbarWeb from './components/NavbarWeb.vue'
import FooterWeb from './components/FooterWeb.vue'

const router = useRoute()
</script>

<template>
  <NavbarWeb v-if="router.meta.showLayout" />
  <router-view></router-view>
  <FooterWeb v-if="router.meta.showLayout" />
</template>
```

## Penjelasan

- `useRoute` untuk akses objek route
- `NavbarWeb` dan `FooterWeb` ditampilkan berdasarkan `meta.showLayout` dari router
- `<router-view>` menampilkan komponen berdasarkan URL

---

# 3. File: `src/views/MainPage.vue`

Halaman utama website portofolio.

## Kode Lengkap

```vue
<script setup>
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'
import { ImageAssets } from '@/data/ImageAssets.js'
import ButtonBg from '@/components/button/ButtonBg.vue'
import DataProject from '@/data/project/DataProject.js'
import DataBahasa from '@/data/skill/DataBahasa.js'
import DataFramework from '@/data/skill/DataFramework'
import DataDatabase from '@/data/skill/DataDatabase'
import DataTools from '@/data/skill/DataTools'

const image = ImageAssets

const el = ref(null)
onMounted(() => {
  new Typed(el.value, {
    strings: ['Frontend Developer', 'Backend Developer', 'Fullstack Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  })
})
</script>

<template>
  <div class="pt-16 md:px-16 overflow-hidden relative" id="home">
    <!-- Hero Section -->
    <section class="p-2">
      <div class="flex flex-col-reverse md:flex-row">
        <div class="md:w-1/2">
          <h5 class="text-primary">Hallo, Semua 👋</h5>
          <h2>Kenalin Aku, <span class="text-primary">Willy Candra</span></h2>
          <h4>Seorang <span ref="el" class="font-semibold text-primary"></span></h4>
          <p>Deskripsi diri...</p>
          <ButtonBg text="Hubungi Saya" href="https://mail.google.com/..." />
        </div>
        <div class="md:w-1/2">
          <img :src="image.gambarhero" />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="p-2 md:pt-16 mt-8" id="about">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
          <img :src="image.gambarabout" />
        </div>
        <div class="md:w-1/2">
          <h5 class="text-primary">Tentang Saya</h5>
          <h2>Yuk Kenalan</h2>
          <p>Bio lengkap...</p>
          
          <!-- Skill Bahasa -->
          <div v-for="item in DataBahasa" :key="item.id">
            <img :src="item.image" />
          </div>
          <!-- Skill Framework -->
          <div v-for="item in DataFramework" :key="item.id">
            <img :src="item.image" />
          </div>
          <!-- Skill Database -->
          <div v-for="item in DataDatabase" :key="item.id">
            <img :src="item.image" />
          </div>
          <!-- Skill Tools -->
          <div v-for="item in DataTools" :key="item.id">
            <img :src="item.image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Project Section -->
    <section class="p-2 my-10 md:pt-20" id="project">
      <div class="text-center">
        <h5>Project</h5>
        <h2>Project - Project</h2>
      </div>
      <div v-for="item in DataProject" :key="item.id">
        <img :src="item.gambar" />
        <h3>{{ item.nama_project }}</h3>
        <p>{{ item.dibuat }}</p>
        <p class="line-clamp-2">{{ item.deskripsi }}</p>
        <ButtonBg text="Lihat Detail" :href="`/project/${item.id}`" />
      </div>
    </section>
  </div>
</template>
```

## Penjelasan

- **Hero Section**: Perkenalan dengan typing animation, gambar hero, tombol hubungi
- **About Section**: Foto about, bio lengkap, 4 kategori skill (Bahasa, Framework, Database, Tools)
- **Project Section**: Card project dengan gambar, nama, tanggal, deskripsi, tombol detail
- **Typed.js**: Efek mengetik untuk profesi (Frontend/Backend/Fullstack)

---

# 4. File: `src/views/ProjectPage.vue`

Halaman detail project dengan gallery Swiper.

## Kode Lengkap

```vue
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { useProject } from '@/composables/useProject'
import { useSwiper } from '@/composables/useSwiper'

const { project, projectSkills } = useProject()
const { thumbsSwiper, setThumbsSwiper, modules } = useSwiper()
</script>

<template>
  <section class="pt-16 px-2 md:px-10" v-if="project">
    <h1 class="text-3xl md:text-5xl text-primary">{{ project.nama_project }}</h1>
    <p>{{ project.dibuat }}</p>

    <!-- Gallery Utama -->
    <swiper :loop="true" :navigation="true" :thumbs="{ swiper: thumbsSwiper }" :modules="modules">
      <swiper-slide v-for="(img, index) in project.img_lis" :key="index">
        <img :src="img.gambar" />
      </swiper-slide>
    </swiper>

    <!-- Thumbnail -->
    <swiper @swiper="setThumbsSwiper" :loop="true" :freeMode="true" :modules="modules">
      <swiper-slide v-for="(img, index) in project.img_lis" :key="index">
        <img :src="img.gambar" />
      </swiper-slide>
    </swiper>

    <!-- Deskripsi -->
    <div class="mt-8">
      <h3 class="text-2xl text-primary">Deskripsi Project</h3>
      <p>{{ project.deskripsi }}</p>
    </div>

    <!-- Fitur -->
    <div class="mt-8">
      <h3 class="text-2xl text-primary">Fitur Project</h3>
      <ol class="list-decimal">
        <li v-for="(item, index) in project.fitur" :key="index">{{ item }}</li>
      </ol>
    </div>

    <!-- Tools -->
    <div class="my-8">
      <h3 class="text-2xl text-primary">Tools yang Digunakan</h3>
      <div v-for="(skill, index) in projectSkills" :key="index">
        <img :src="skill.image" :alt="skill.name" />
        <span>{{ skill.name }}</span>
      </div>
    </div>

    <!-- Tombol Kembali -->
    <router-link to="/#project">Kembali</router-link>
  </section>
</template>
```

## Penjelasan

- Menggunakan **Swiper** untuk gallery gambar dengan thumbnail
- `useProject` composable untuk mengambil data project
- Menampilkan: judul, gallery, deskripsi, fitur (numbered list), tools yang digunakan

---

# 5. File: `src/components/NavbarWeb.vue`

Komponen navigasi responsif dengan dark mode.

## Kode Lengkap

```vue
<script setup>
import { useDropmenuNavbar } from '../composables/Navbar/useDropmenuNavbar.js'
import { ref, onMounted, onUnmounted } from 'vue'
import DarkMode from '../components/DarkMode.vue'

const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useDropmenuNavbar()
const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav class="fixed top-0 z-50 w-full px-4 py-3" :class="{ 'md:!bg-forbodylight md:!shadow-sm': scrolled }">
    <router-link to="/#home">
      <img src="/Logo.png" />
      <span class="text-primary">Willy Candra</span>
    </router-link>

    <!-- Menu Desktop -->
    <ul class="hidden md:flex">
      <li><router-link to="/#home">Beranda</router-link></li>
      <li><router-link to="/#about">Tentang Saya</router-link></li>
      <li><router-link to="/#project">Project</router-link></li>
      <li><DarkMode /></li>
    </ul>

    <!-- Tombol Mobile -->
    <div class="md:hidden">
      <button @click="toggleMobileMenu">☰</button>
    </div>

    <!-- Dropdown Mobile -->
    <Transition>
      <div v-show="isMobileMenuOpen" class="md:hidden">
        <ul>
          <li><router-link to="/#home" @click="closeMobileMenu">Beranda</router-link></li>
          <li><router-link to="/#about" @click="closeMobileMenu">Tentang Saya</router-link></li>
          <li><router-link to="/#project" @click="closeMobileMenu">Project</router-link></li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>
```

## Penjelasan

- **Responsive**: Menu horizontal di desktop, hamburger di mobile
- **Scroll Effect**: Navbar mendapat background setelah scroll > 50px
- **Dark Mode**: Integrasi dengan komponen DarkMode
- **Transisi**: Animasi smooth untuk dropdown mobile

---

# 6. File: `src/composables/useProject.js`

Composable untuk mengambil dan mengelola data project.

## Kode Lengkap

```javascript
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DataProject from '@/data/project/DataProject'
import DataBahasa from '@/data/skill/DataBahasa'
import DataFramework from '@/data/skill/DataFramework'
import DataDatabase from '@/data/skill/DataDatabase'
import DataTools from '@/data/skill/DataTools'

export function useProject() {
  const route = useRoute()
  const router = useRouter()
  const project = ref(null)
  let DaftarSkill = [...DataBahasa, ...DataFramework, ...DataDatabase, ...DataTools]

  const fetchProject = () => {
    const projectId = route.params.id
    const foundProject = DataProject.find((p) => p.id.toString() === projectId.toString())

    if (!foundProject) {
      router.push('/error')
      return
    }
    project.value = foundProject
  }

  const projectSkills = computed(() => {
    if (!project.value || !project.value.tools) return []
    return DaftarSkill.filter((skill) =>
      project.value.tools.map((tool) => tool.toLowerCase()).includes(skill.name.toLowerCase()),
    )
  })

  onMounted(fetchProject)
  watch(() => route.params.id, fetchProject)

  return { project, projectSkills }
}
```

## Penjelasan

- **`fetchProject()`**: Mengambil project berdasarkan ID dari URL
- **`projectSkills` (computed)**: Filter skill yang sesuai dengan tools project
- **`onMounted`**: Ambil data saat komponen mount
- **`watch`**: Update data jika URL berubah

---

# 7. File: `src/data/project/DataProject.js`

Data statis semua project.

## Kode Lengkap

```javascript
import { ImageAssets } from '../ImageAssets'

const DataProject = [
  {
    id: 1,
    gambar: ImageAssets.sina,
    img_lis: [
      { id: 1, gambar: ImageAssets.sina_1 },
      { id: 2, gambar: ImageAssets.sina_2 },
      { id: 3, gambar: ImageAssets.sina_3 },
      { id: 4, gambar: ImageAssets.sina_4 },
      { id: 5, gambar: ImageAssets.sina_5 },
      { id: 6, gambar: ImageAssets.sina_6 },
      { id: 7, gambar: ImageAssets.sina_7 },
    ],
    nama_project: 'Sina Website',
    deskripsi: 'Sistem administrasi sekolah',
    role: 'Frontend Developer',
    fitur: ['CRUD Admin', 'CRUD Guru', 'CRUD Siswa', 'CRUD Mata Pelajaran', 'CRUD Kurikulum', 'CRUD Jadwal', 'Rekapan Rapot', 'Rekapan Absen'],
    dibuat: 'Maret 2025 - Juli 2025',
    dikerjakan: 'Berkelompok / Bertim',
    tools: ['React', 'Tailwind', 'Github'],
  },
  {
    id: 2,
    nama_project: 'Argofy',
    deskripsi: 'Sistem pengelolaan limbah pertanian',
    role: 'Fullstack Developer',
    fitur: ['Managemen Sampah', 'Artikel', 'Forum Diskusi', 'Notifikasi', 'Laporan'],
    dibuat: 'Agustus 2024 - Desember 2024',
    dikerjakan: 'Berkelompok / Bertim',
    tools: ['React', 'Express', 'Tailwind', 'Github', 'Mysql'],
  },
  {
    id: 3,
    nama_project: 'Absen Wisudawan',
    deskripsi: 'Sistem absen wisudawan dengan scan QR',
    role: 'Fullstack Developer',
    fitur: ['CRUD Wisudawan', 'QR Code', 'Email Undangan', 'Laporan', 'Scan QR'],
    dibuat: 'Agustus 2024 - Oktober 2024',
    mengerjakan: 'Mandiri / Sendiri',
    tools: ['Laravel', 'Tailwind', 'Github', 'Mysql'],
  },
  {
    id: 4,
    nama_project: 'UKM Profile',
    deskripsi: 'Website profil UKM Computer Club',
    role: 'Frontend Developer',
    fitur: ['Menampilkan Informasi', 'Pendaftaran Via Gform'],
    dibuat: 'Agustus 2024',
    mengerjakan: 'Berkelompok / Bertim',
    tools: ['React', 'Tailwind', 'Github'],
  },
  {
    id: 5,
    nama_project: 'Tryout TOEIC',
    deskripsi: 'Sistem tryout TOEIC untuk mahasiswa',
    role: 'Fullstack Developer',
    fitur: ['Manajemen Peserta', 'Manajemen Petugas', 'Manajemen Soal', 'Pengerjaan Online', 'Sertifikat PDF'],
    dibuat: 'Maret 2024 - Agustus 2024',
    mengerjakan: 'Berkelompok / Bertim',
    tools: ['Laravel', 'Tailwind', 'Github', 'Mysql'],
  },
  {
    id: 6,
    nama_project: 'Balijobfinder',
    deskripsi: 'Portal lowongan pekerjaan di Bali',
    role: 'Fullstack Developer',
    fitur: ['Data Pencari Kerja', 'Data Penyedia Kerja', 'Lowongan', 'Apply Online', 'Generate CV'],
    dibuat: 'September 2023',
    mengerjakan: 'Berkelompok / Bertim',
    tools: ['PHP', 'Bootstrap', 'Github', 'Mysql'],
  },
  {
    id: 7,
    nama_project: 'Intechfest',
    deskripsi: 'Website event perlombaan teknologi',
    role: 'Backend Developer',
    fitur: ['Manajemen Peserta', 'Manajemen Project', 'Pendaftaran Online'],
    dibuat: 'Mei 2023 - Juli 2023',
    mengerjakan: 'Berkelompok / Bertim',
    tools: ['Laravel', 'Tailwind', 'Github', 'Mysql'],
  },
]

export default DataProject
```

## Struktur Data

| Field | Tipe | Fungsi |
|-------|------|--------|
| `id` | Number | ID unik project |
| `gambar` | Image | Gambar utama |
| `img_lis` | Array | Gallery gambar |
| `nama_project` | String | Nama project |
| `deskripsi` | String | Deskripsi |
| `role` | String | Peran developer |
| `fitur` | Array | List fitur |
| `dibuat` | String | Tanggal制作 |
| `dikerjakan` | String | Cara pengerjaan |
| `tools` | Array | Tools yang digunakan |

---

# Hubungan Antar File

```
main.js (Entry Point)
    ↓
App.vue (Root)
    ├── NavbarWeb.vue
    │   └── DarkMode.vue
    ├── <router-view>
    │   ├── MainPage.vue
    │   │   ├── ImageAssets.js
    │   │   ├── DataProject.js
    │   │   └── DataSkill*.js
    │   └── ProjectPage.vue
    │       ├── useProject.js
    │       └── useSwiper.js
    └── FooterWeb.vue
```

---

# Teknologi yang Digunakan

| Teknologi | Fungsi |
|-----------|--------|
| Vue 3 | Framework frontend |
| Vue Router | Navigasi |
| Tailwind CSS | Styling |
| Swiper | Gallery slider |
| Typed.js | Typing animation |
| Vite | Build tool |
