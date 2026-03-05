import { ImageAssets } from '../ImageAssets'

const DataProject = [
  {
    id: 1,
    thumbnail: ImageAssets.proofylink,
    gallery: [
      {
        id: 1,
        image: ImageAssets.proofylink_1,
      },
      {
        id: 2,
        image: ImageAssets.proofylink_2,
      },
      {
        id: 3,
        image: ImageAssets.proofylink_3,
      },
      {
        id: 4,
        image: ImageAssets.proofylink_4,
      },
      {
        id: 5,
        image: ImageAssets.proofylink_5,
      },
    ],
    projectName: 'Proofylink',
    description:
      'Proofylink adalah sebuah platform untuk melakukan cek skor kredit BI secara online yang dirancang bersama dengan PT. Solusi Anak Sakti (DJOIN)',
    role: 'Backend Developer',
    jobList: [
      'Membuat Api Authentication (Login, Register, Login via Google dan Reset Password)',
      'Membuat Api OTP Untuk Verifikasi Email',
      'Membuat Middleware API Dengan Laravel Sanctum',
      'Membuat API dan Workflow N8N Untuk OCR KTP',
      'Membuat API Transaksi Pembayaran Token Berserta Riwayat Dengan Integrasi XENDIT',
      'Membuat API Cek Skor Kredit BI Dengan Integrasi NAE',
      'Membuat API Generate PDF Hasil Cek Skor Kredit BI Dengan Integrasi GCS Sebagai Storage',
    ],
    createdAt: 'November 2025 - Februari 2026',
    workType: 'Bertim',
    tools: ['Laravel', 'N8N', 'Gitlab', 'PostgreSQL'],
  },

  {
    id: 2,
    thumbnail: ImageAssets.sina,
    gallery: [
      {
        id: 1,
        image: ImageAssets.sina_1,
      },
      {
        id: 2,
        image: ImageAssets.sina_2,
      },
      {
        id: 3,
        image: ImageAssets.sina_3,
      },
      {
        id: 4,
        image: ImageAssets.sina_4,
      },
      {
        id: 5,
        image: ImageAssets.sina_5,
      },
      {
        id: 6,
        image: ImageAssets.sina_6,
      },
      {
        id: 7,
        image: ImageAssets.sina_7,
      },
    ],
    projectName: 'Sina Website',
    description:
      'Sina adalah sebuah sistem yang digunakan untuk membantu pihak lembaga pendidikan seperti sekolah, dalam mencatat terkait administrasi',
    role: 'Frontend Developer',
    jobList: [
      'Membuat UI/UX untuk tampilan website setiap fitu, seperti CRUD, Rekapan Absen dan Rekapan Rapot.',
      'Membuat Frontend berdasarkan UI/UX yang telah dibuat, serta memastikan tampilan responsive',
    ],
    createdAt: 'Maret 2025 - Juli 2025',
    workType: 'Bertim',
    tools: ['React', 'Tailwind', 'Github'],
  },

  {
    id: 3,
    thumbnail: ImageAssets.agrofy,
    gallery: [
      {
        id: 1,
        image: ImageAssets.agrofy_1,
      },
      {
        id: 2,
        image: ImageAssets.agrofy_2,
      },
      {
        id: 3,
        image: ImageAssets.agrofy_3,
      },
      {
        id: 4,
        image: ImageAssets.agrofy_4,
      },
      {
        id: 5,
        image: ImageAssets.agrofy_5,
      },
      {
        id: 6,
        image: ImageAssets.agrofy_6,
      },
    ],
    projectName: 'Argofy',
    description:
      'Agrofy adalah sistem berbasis web yang dirancang untuk mengelola limbah pertanian secara efisien dan berkelanjutan. Platform ini menghubungkan petani, masyarakat, dan pemangku kepentingan terkait di satu tempat untuk edukasi, diskusi, dan pengolahan limbah menjadi produk bernilai tambah',
    role: 'Fullstack Developer',
    jobList: [
      'Membuat UI/UX untuk project agroofy',
      'Membuat Frontend yang sesuai dengan UI/UX dan memastikan responsive berjalan semestinya',
      'Membuat Backend dengan fitur-fitur yang telah direncanakan seperti : CRUD , Forum Diskusi, Forum Artikel/Video',
    ],
    createdAt: 'Agustus 2024 - Desember 2024',
    workType: 'Bertim',
    tools: ['React', 'Express', 'Tailwind', 'Github', 'Mysql'],
  },

  {
    id: 4,
    thumbnail: ImageAssets.absenwisuda,
    gallery: [
      {
        id: 1,
        image: ImageAssets.wisuda_1,
      },
      {
        id: 2,
        image: ImageAssets.wisuda_2,
      },
      {
        id: 3,
        image: ImageAssets.wisuda_3,
      },
      {
        id: 4,
        image: ImageAssets.wisuda_4,
      },
    ],
    projectName: 'Absen Wisudawan',
    description:
      'Sistem Absen Wisudawan yang digunakan oleh Kampus Politeknik Negeri Bali, untuk mencatat kehadiran wisudawan hanya dengan melakukan scan QR yang telah diberikan',
    role: 'Fullstack Developer',
    jobList: [
      'Membuat UI/UX untuk Sistem Absen Wisuda',
      'Membuat Frontend untuk tampilan website sesuai UI/UX dan memastikan responsive',
      'Membuat Backend sesuai dengan fitur yang ada seperti CRUD, Generate Barcode, dan Scanner Barcode',
      'Bertanggungjawab untuk melakukan deploy dan memastikan sistem dapat diakses',
    ],
    createdAt: 'Agustus 2024 - Oktober 2024',
    workType: 'Mandiri',
    tools: ['Laravel', 'Tailwind', 'Github', 'Mysql'],
  },

  {
    id: 5,
    thumbnail: ImageAssets.ukm,
    gallery: [
      {
        id: 1,
        image: ImageAssets.ukm_1,
      },
      {
        id: 2,
        image: ImageAssets.ukm_2,
      },
      {
        id: 3,
        image: ImageAssets.ukm_3,
      },
      {
        id: 4,
        image: ImageAssets.ukm_4,
      },
      {
        id: 5,
        image: ImageAssets.ukm_5,
      },
    ],
    projectName: 'UKM Profile',
    description:
      'Website UKM (Unit Kegiatan Mahasiswa) Computer Club, yang merupakah salah satu UKM dari kampus Politeknik Negeri Bali',
    role: 'Frontend Developer',
    jobList: [
      'Membuat UI/UX untuk Website Company UKM Computer Club pada figma',
      'Membuat Frontend untuk tampilan website berdasarkan UI/UX',
      'Bertanggung awab untuk mendeploy dan memastikan dapat diakses',
    ],
    createdAt: 'Agustus 2024 - Agustus 2024',
    workType: 'Bertim',
    tools: ['React', 'Tailwind', 'Github'],
  },

  {
    id: 6,
    thumbnail: ImageAssets.toeiclanding,
    gallery: [
      {
        id: 1,
        image: ImageAssets.toeic_1,
      },
      {
        id: 2,
        image: ImageAssets.toeic_2,
      },
      {
        id: 3,
        image: ImageAssets.toeic_3,
      },
      {
        id: 4,
        image: ImageAssets.toeic_4,
      },
      {
        id: 5,
        image: ImageAssets.toeic_5,
      },
      {
        id: 6,
        image: ImageAssets.toeic_6,
      },
      {
        id: 7,
        image: ImageAssets.toeic_7,
      },
      {
        id: 8,
        image: ImageAssets.toeic_8,
      },
    ],
    projectName: 'Tryout TOEIC',
    description:
      'Tryout TOEIC adalah sistem yang digunakan mahasiswa-mahasiswa semester tinggi di kampus Politeknik Negeri Bali untuk melakukan persiapan ujian TOEIC resmi. Sistem ini berfungsi sebagai uji coba',
    role: 'Fullstack Developer',
    jobList: [
      'Melakukan research terkait sistem',
      'Membuat Frontend untuk tampilan fitur authentication, dashboard admin (CRUD), dashboard petugas (CRUD)',
      'Membuat Backend untuk fitur authentication, CRUD, Send Mail',
      'Bertanggungjawab untuk deploy sistem dan memastikan sistem dapat diakses',
    ],
    createdAt: 'Maret 2024 - Agustus 2024',
    workType: 'Bertim',
    tools: ['Laravel', 'Tailwind', 'Github', 'Mysql'],
  },

  {
    id: 7,
    thumbnail: ImageAssets.balijobfinder,
    gallery: [
      {
        id: 1,
        image: ImageAssets.sina_1,
      },
      {
        id: 2,
        image: ImageAssets.sina_2,
      },
      {
        id: 3,
        image: ImageAssets.sina_3,
      },
      {
        id: 4,
        image: ImageAssets.sina_4,
      },
      {
        id: 5,
        image: ImageAssets.sina_5,
      },
      {
        id: 6,
        image: ImageAssets.sina_6,
      },
      {
        id: 7,
        image: ImageAssets.sina_7,
      },
    ],
    projectName: 'Balijobfinder',
    description:
      'Bali Job Finder merupakan sebuah website yang menyediakan Info lowongan pekerjaan dan sekaligus berfungsi sebagai perantara antara pelamar kerja dengan perusahaan sehingga akan memudahkan pelamar untuk mencari pekerjaan dan memudahkan perusahaan dalam mencari tenaga kerja yang tepat',
    role: 'Fullstack Developer',
    jobList: [
      'Membuat Frontend untuk sebuah tampilan fitur authentication, landing page, dan tampilan pdf untuk generate CV.',
      'Pada Backend membuat fitur untuk authentication, fitur profile, dan fitur generate CV otomatis berdasarkan profile',
      'Bertanggungjawab untuk mendeploy sistem dan memastikan sistem dapat diakses',
    ],
    createdAt: 'September 2023 - Juli 2023',
    workType: 'Bertim',
    tools: ['PHP', 'Bootstrap', 'Github', 'Mysql'],
  },

  {
    id: 8,
    thumbnail: ImageAssets.intechfest,
    gallery: [
      {
        id: 1,
        image: ImageAssets.intech_1,
      },
      {
        id: 2,
        image: ImageAssets.intech_2,
      },
      {
        id: 3,
        image: ImageAssets.intech_3,
      },
      {
        id: 4,
        image: ImageAssets.intech_4,
      },
      {
        id: 5,
        image: ImageAssets.intech_5,
      },
      {
        id: 6,
        image: ImageAssets.intech_6,
      },
      {
        id: 7,
        image: ImageAssets.intech_7,
      },
    ],
    projectName: 'Intechfest',
    description:
      'Sebuah Website Event untuk UKM Computer Club, yang merupakan webiste untuk mendaftar perlombaan terkait bidang teknologi',
    role: 'Backend Developer',
    jobList: [
      'Pada backend, saya berfokus membuat sebuah logika untuk role Panitia, yang mengarah ke CRUD.',
      'Saya juga bertanggung jawab untuk mendeploy sistem pada server hosting agar dapat diakses.',
    ],
    createdAt: 'Mei 2023 - Juli 2023',
    workType: 'Bertim',
    tools: ['Laravel', 'Tailwind', 'Github', 'Mysql'],
  },
]

export default DataProject
