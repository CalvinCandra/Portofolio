# Instruksi Refactor — Responsive Project Grid & Filter Teknologi

Dokumen ini berisi instruksi lengkap untuk:

1. Mengubah layout project card menjadi responsive grid (3 kolom desktop, 2 tablet, 1 mobile)
2. Menambahkan filter button untuk menyaring project berdasarkan teknologi (Laravel / React)

---

## BAGIAN 1 — Responsive Grid Project Card

### Konteks

Target layout card project:

| Breakpoint                | Jumlah Kolom |
| ------------------------- | ------------ |
| Mobile (`< 768px`)        | 1 kolom      |
| Tablet (`768px - 1023px`) | 2 kolom      |
| Desktop (`>= 1024px`)     | 3 kolom      |

### File: `src/views/MainPage.vue`

Perubahan yang dilakukan **hanya**:

1. Tambah filter buttons di atas grid
2. Bungkus `v-for` card dengan grid wrapper
3. Ganti `DataProject` → `filteredProjects` di `v-for`
4. **Struktur dalam card tidak diubah sama sekali**

```vue
<!-- ❌ SEBELUM -->
<section class="p-2 my-10 md:pt-20" id="project">
  <div class="text-center">
    <h5>Project</h5>
    <h2>Project - Project</h2>
  </div>

  <!-- card langsung tanpa grid wrapper -->
  <div v-for="item in DataProject" :key="item.id">
    <!-- isi card tetap sama, tidak diubah -->
  </div>
</section>

<!-- ✅ SESUDAH -->
<section class="p-2 my-10 md:pt-20" id="project">

  <!-- Header — tidak diubah -->
  <div class="text-center">
    <h5>Project</h5>
    <h2>Project - Project</h2>
  </div>

  <!-- ✅ TAMBAHAN BARU: Filter Buttons -->
  <div class="flex gap-3 mb-6 flex-wrap">
    <button
      v-for="filter in filters"
      :key="filter"
      @click="activeFilter = filter"
      class="px-4 py-2 rounded-xl text-sm font-medium border transition-all duration-200"
      :class="activeFilter === filter
        ? 'bg-primary text-white border-primary'
        : 'bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary dark:bg-neutral-800 dark:text-gray-400 dark:border-neutral-700 dark:hover:border-primary dark:hover:text-primary'"
    >
      {{ filter }}
    </button>
  </div>

  <!-- ✅ TAMBAHAN BARU: Grid wrapper -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    <!-- isi card tetap sama persis seperti sebelumnya -->
    <!-- HANYA ubah DataProject → filteredProjects di v-for -->
    <div v-for="item in filteredProjects" :key="item.id">
      <!-- JANGAN UBAH APAPUN DI DALAM SINI -->
    </div>

    <!-- ✅ TAMBAHAN BARU: Fallback jika filter kosong -->
    <div
      v-if="filteredProjects.length === 0"
      class="col-span-full text-center py-16 text-gray-400 dark:text-gray-500"
    >
      <p>Tidak ada project dengan teknologi ini.</p>
    </div>

  </div>

</section>
```

---

## BAGIAN 2 — Logic Filter di `<script setup>`

Tambahkan kode berikut di `<script setup>` `MainPage.vue`:

```javascript
// ✅ Pastikan ref dan computed sudah diimport
import { ref, computed } from 'vue'

// ✅ State dan data filter
const activeFilter = ref('Semua')

const filters = ['Semua', 'Laravel', 'React']

// ✅ Computed — project yang sudah difilter
const filteredProjects = computed(() => {
  if (activeFilter.value === 'Semua') return DataProject
  return DataProject.filter((project) =>
    project.tools.map((t) => t.toLowerCase()).includes(activeFilter.value.toLowerCase()),
  )
})
```

> 💡 Filter bersifat case-insensitive — `'laravel'` di data tetap cocok dengan `'Laravel'` di filter, sehingga tidak perlu khawatir soal konsistensi kapitalisasi di `DataProject.js`.

---

## Struktur Akhir `<script setup>` MainPage.vue

Pastikan urutan import dan deklarasi seperti berikut:

```javascript
import { ref, computed } from 'vue'
import { useTyping } from '@/composables/Herosection/useTyping.js'
import { ImageAssets } from '@/data/ImageAssets.js'
import ButtonBg from '@/components/button/ButtonBg.vue'
import DataProject from '@/data/project/DataProject.js'
import DataBahasa from '@/data/skill/DataBahasa.js'
import DataFramework from '@/data/skill/DataFramework.js'
import DataDatabase from '@/data/skill/DataDatabase.js'
import DataTools from '@/data/skill/DataTools.js'

// Typing animation
const { el } = useTyping(['Frontend Developer', 'Backend Developer', 'Fullstack Developer'])

// Image assets
const image = ImageAssets

// Skill categories
const skillCategories = [
  { label: 'Bahasa Pemrograman', items: DataBahasa },
  { label: 'Framework', items: DataFramework },
  { label: 'Database', items: DataDatabase },
  { label: 'Tools', items: DataTools },
]

// Project filter
const activeFilter = ref('Semua')
const filters = ['Semua', 'Laravel', 'React']
const filteredProjects = computed(() => {
  if (activeFilter.value === 'Semua') return DataProject
  return DataProject.filter((project) =>
    project.tools.map((t) => t.toLowerCase()).includes(activeFilter.value.toLowerCase()),
  )
})
```

---

## Checklist

- [ ] Grid wrapper `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` sudah membungkus `v-for` card
- [ ] Di mobile tampil 1 kolom, tablet 2 kolom, desktop 3 kolom
- [ ] Struktur di dalam card **tidak ada yang diubah sama sekali**
- [ ] `v-for` sudah menggunakan `filteredProjects` bukan `DataProject`
- [ ] `activeFilter` default ke `'Semua'`
- [ ] `filters` array berisi `['Semua', 'Laravel', 'React']`
- [ ] Computed `filteredProjects` sudah dibuat dan dipakai di `v-for`
- [ ] Klik "Laravel" hanya menampilkan project yang `tools`-nya mengandung `'Laravel'`
- [ ] Klik "React" hanya menampilkan project yang `tools`-nya mengandung `'React'`
- [ ] Klik "Semua" menampilkan kembali semua project
- [ ] Button aktif memiliki style background primary
- [ ] Fallback "Tidak ada project" muncul jika hasil filter kosong
- [ ] Jalankan `npm run dev` dan test semua filter di desktop, tablet, dan mobile
