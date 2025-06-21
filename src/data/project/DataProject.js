import { ImageAssets } from '../ImageAssets'

const DataProject = [
  {
    id: 1,
    gambar: ImageAssets.sina,
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
    dibuat: 'Maret 2025 - Sekarang',
    dikerjakan: 'Berkelompok / Bertim',
    tools: ['React', 'Tailwind', 'Github'],
  },
  {
    id: 2,
    gambar: ImageAssets.agrofy,
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
