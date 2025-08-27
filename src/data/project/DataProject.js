import { ImageAssets } from '../ImageAssets'

const DataProject = [
  {
    id: 1,
    gambar: ImageAssets.sina,
    img_lis: [
      {
        id: 1,
        gambar: ImageAssets.sina_1,
      },
      {
        id: 2,
        gambar: ImageAssets.sina_2,
      },
      {
        id: 3,
        gambar: ImageAssets.sina_3,
      },
      {
        id: 4,
        gambar: ImageAssets.sina_4,
      },
      {
        id: 5,
        gambar: ImageAssets.sina_5,
      },
      {
        id: 6,
        gambar: ImageAssets.sina_6,
      },
      {
        id: 7,
        gambar: ImageAssets.sina_7,
      },
    ],
    nama_project: 'Sina Website',
    deskripsi:
      'Sina adalah sebuah sistem yang digunakan untuk membantu pihak lembaga pendidikan seperti sekolah, dalam mencatat terkait administrasi',
    role: 'Frontend Developer',
    fitur: [
      'CRUD Admin',
      'CRUD Guru',
      'CRUD Siswa',
      'CRUD Mata Pelajaran',
      'CRUD Kurikulum',
      'CRUD Tahun Akademik',
      'CRUD Jadwal',
      'Rekapan Rapot',
      'Rekapan Absen (Siswa dan Guru)',
      'CRUD Pengumuman / Berita',
    ],
    dibuat: 'Maret 2025 - Juli 2025',
    dikerjakan: 'Berkelompok / Bertim',
    tools: ['React', 'Tailwind', 'Github'],
  },
  {
    id: 2,
    gambar: ImageAssets.agrofy,
    img_lis: [
      {
        id: 1,
        gambar: ImageAssets.agrofy_1,
      },
      {
        id: 2,
        gambar: ImageAssets.agrofy_2,
      },
      {
        id: 3,
        gambar: ImageAssets.agrofy_3,
      },
      {
        id: 4,
        gambar: ImageAssets.agrofy_4,
      },
      {
        id: 5,
        gambar: ImageAssets.agrofy_5,
      },
      {
        id: 6,
        gambar: ImageAssets.agrofy_6,
      },
    ],
    nama_project: 'Argofy',
    deskripsi:
      'Agrofy adalah sistem berbasis web yang dirancang untuk mengelola limbah pertanian secara efisien dan berkelanjutan. Platform ini menghubungkan petani, masyarakat, dan pemangku kepentingan terkait di satu tempat untuk edukasi, diskusi, dan pengolahan limbah menjadi produk bernilai tambah',
    role: 'Fullstack Developer',
    fitur: [
      'Managemen Sampah',
      'Artikel dan Video Pemberdayaan',
      'Forum Diskusi',
      'Notifikasi Pesan',
      'Laporan',
    ],
    dibuat: 'Agustus 2024 - Desember 2024',
    dikerjakan: 'Berkelompok / Bertim',
    tools: ['React', 'Express', 'Tailwind', 'Github', 'Mysql'],
  },
  {
    id: 3,
    gambar: ImageAssets.absenwisuda,
    img_lis: [
      {
        id: 1,
        gambar: ImageAssets.wisuda_1,
      },
      {
        id: 2,
        gambar: ImageAssets.wisuda_2,
      },
      {
        id: 3,
        gambar: ImageAssets.wisuda_3,
      },
      {
        id: 4,
        gambar: ImageAssets.wisuda_4,
      },
    ],
    nama_project: 'Absen Wisudawan',
    deskripsi:
      'Sistem Absen Wisudawan yang digunakan oleh Kampus Politeknik Negeri Bali, untuk mencatat kehadiran wisudawan hanya dengan melakukan scan QR yang telah diberikan',
    role: 'Fullstack Developer',
    fitur: [
      'CRUD Wisudawan',
      'Create QR Code',
      'Send Undangan via Email',
      'Laporan Kehadiran Wisudawan',
      'Scan QR Code',
    ],
    dibuat: 'Agustus 2024 - Oktober 2024',
    dikerjakan: 'Mandiri / Sendiri',
    tools: ['Laravel', 'Tailwind', 'Github', 'Mysql'],
  },
  {
    id: 4,
    gambar: ImageAssets.ukm,
    img_lis: [
      {
        id: 1,
        gambar: ImageAssets.ukm_1,
      },
      {
        id: 2,
        gambar: ImageAssets.ukm_2,
      },
      {
        id: 3,
        gambar: ImageAssets.ukm_3,
      },
      {
        id: 4,
        gambar: ImageAssets.ukm_4,
      },
      {
        id: 5,
        gambar: ImageAssets.ukm_5,
      },
    ],
    nama_project: 'UKM Profile',
    deskripsi:
      'Website UKM (Unit Kegiatan Mahasiswa) Computer Club, yang merupakah salah satu UKM dari kampus Politeknik Negeri Bali',
    role: 'Frontend Developer',
    fitur: ['Menampilkan Informasi', 'Pendaftaran Via Gform'],
    dibuat: 'Agustus 2024 - Agustus 2024',
    dikerjakan: 'Berkelompok / Bertim',
    tools: ['React', 'Tailwind', 'Github'],
  },
  {
    id: 5,
    gambar: ImageAssets.toeiclanding,
    img_lis: [
      {
        id: 1,
        gambar: ImageAssets.toeic_1,
      },
      {
        id: 2,
        gambar: ImageAssets.toeic_2,
      },
      {
        id: 3,
        gambar: ImageAssets.toeic_3,
      },
      {
        id: 4,
        gambar: ImageAssets.toeic_4,
      },
      {
        id: 5,
        gambar: ImageAssets.toeic_5,
      },
      {
        id: 6,
        gambar: ImageAssets.toeic_6,
      },
      {
        id: 7,
        gambar: ImageAssets.toeic_7,
      },
      {
        id: 8,
        gambar: ImageAssets.toeic_8,
      },
    ],
    nama_project: 'Tryout TOEIC',
    deskripsi:
      'Tryout TOEIC adalah sistem yang digunakan mahasiswa-mahasiswa semester tinggi di kampus Politeknik Negeri Bali untuk melakukan persiapan ujian TOEIC resmi. Sistem ini berfungsi sebagai uji coba',
    role: 'Fullstack Developer',
    fitur: [
      'Manajemen Data Peserta',
      'Manajemen Data Petugas',
      'Manajemen Data Soal',
      'Pengerjaan Soal berbasis web',
      'Sertifikat (PDF)',
    ],
    dibuat: 'Maret 2024 - Agustus 2024',
    dikerjakan: 'Berkelompok / Bertim',
    tools: ['Laravel', 'Tailwind', 'Github', 'Mysql'],
  },
  {
    id: 6,
    gambar: ImageAssets.balijobfinder,
    img_lis: [
      {
        id: 1,
        gambar: ImageAssets.sina_1,
      },
      {
        id: 2,
        gambar: ImageAssets.sina_2,
      },
      {
        id: 3,
        gambar: ImageAssets.sina_3,
      },
      {
        id: 4,
        gambar: ImageAssets.sina_4,
      },
      {
        id: 5,
        gambar: ImageAssets.sina_5,
      },
      {
        id: 6,
        gambar: ImageAssets.sina_6,
      },
      {
        id: 7,
        gambar: ImageAssets.sina_7,
      },
    ],
    nama_project: 'Balijobfinder',
    deskripsi:
      'Bali Job Finder merupakan sebuah website yang menyediakan Info lowongan pekerjaan dan sekaligus berfungsi sebagai perantara antara pelamar kerja dengan perusahaan sehingga akan memudahkan pelamar untuk mencari pekerjaan dan memudahkan perusahaan dalam mencari tenaga kerja yang tepat',
    role: 'Fullstack Developer',
    fitur: [
      'Manajemen Data Pencari Kerja',
      'Manajemen Data Penyedia Kerja',
      'Manajemen Data Lowongan Pekerjaan',
      'Apply Pekerjaan Via Portal',
      'Generate CV Otomatis',
    ],
    dibuat: 'September 2023 - Juli 2023',
    dikerjakan: 'Berkelompok / Bertim',
    tools: ['PHP', 'Bootstrap', 'Github', 'Mysql'],
  },
  {
    id: 7,
    gambar: ImageAssets.intechfest,
    img_lis: [
      {
        id: 1,
        gambar: ImageAssets.intech_1,
      },
      {
        id: 2,
        gambar: ImageAssets.intech_2,
      },
      {
        id: 3,
        gambar: ImageAssets.intech_3,
      },
      {
        id: 4,
        gambar: ImageAssets.intech_4,
      },
      {
        id: 5,
        gambar: ImageAssets.intech_5,
      },
      {
        id: 6,
        gambar: ImageAssets.intech_6,
      },
      {
        id: 7,
        gambar: ImageAssets.intech_7,
      },
    ],
    nama_project: 'Intechfest',
    deskripsi:
      'Sebuah Website Event untuk UKM Computer Club, yang merupakan webiste untuk mendaftar perlombaan terkait bidang teknologi',
    role: 'Backend Developer',
    fitur: ['Manajemen Data Peserta', 'Manajemen Project Peserta', 'Pendaftaran via web'],
    dibuat: 'Mei 2023 - Juli 2023',
    dikerjakan: 'Berkelompok / Bertim',
    tools: ['Laravel', 'Tailwind', 'Github', 'Mysql'],
  },
]

export default DataProject
