export interface Candidate {
  id: string
  name: string
  role: string
  image: string
}

export interface DebateQuestion {
  no: number
  soal: string
  pertanyaan: string
}

export interface DebateTheme {
  id: string
  theme: string
  questions: DebateQuestion[]
}

export interface DebateSession {
  theme: DebateTheme
  question: DebateQuestion
  candidates: Candidate[]
  duration: number
}

export const candidates: Candidate[] = [
  {
    id: "1",
    name: "Muhammad Tamam Setiaji",
    role: "Ketua 01",
    image: "/tamam2.png",
  },
  {
    id: "2",
    name: "Priyanka Janitra Almira",
    role: "Wakil 01",
    image: "/priyanka.png",
  },
  {
    id: "3",
    name: "Novrika Awaliyah",
    role: "Ketua 02",
    image: "/novrika.png",
  },
  {
    id: "4",
    name: "Syaakira Azzahra",
    role: "Wakil 02",
    image: "/syaakira.png",
  },
  {
    id: "5",
    name: "Matsurika Rosunul. F",
    role: "Ketua 03",
    image: "/matsurika.png",
  },
  {
    id: "6",
    name: "Muhammad Azka Adimaputra",
    role: "Wakil 03",
    image: "/adimaputra.png",
  },
]

export const debateThemes: DebateTheme[] = [
  {
    id: "1",
    theme: "Organisasi",
    questions: [
      {
        no: 1,
        soal: "Salah satu pengurus OSIS sering terlambat dan menggunakan seragam tidak sesuai dengan peraturan sekolah, akibatnya siswa lain meniru dan mengatakan “Pengurus OSIS saja sering terlambat dan tidak menggunakan seragam sesuai peraturan sekolah”.",
        pertanyaan: "Apakah OSIS wajib menjadi panutan moral bagi siswa lain? Dan apa tanggapanmu mengenai hal tersebut ?",
      },
      {
        no: 2,
        soal: "OSIS menjalin kerja sama dengan komunitas luar sekolah untuk mengadakan festival atau kegiatan di sekolah. Namun, pihak luar menuntut agar acara menggunakan logo sponsor mereka lebih besar dibandingkan logo OSIS dari sekolah kita.",
        pertanyaan: "Apakah hal ini mengancam independensi OSIS atau justru memperluas jejaring positif?",
      },
      {
        no: 3,
        soal: "Dalam sebuah kegiatan besar sekolah, terjadi ketegangan antara divisi acara dan divisi perlengkapan karena saling menyalahkan terkait keterlambatan persiapan. Kegiatan terancam gagal jika masalah tidak segera diselesaikan.",
        pertanyaan: "Sebagai ketua dan wakil ketua OSIS, apa langkah pertama yang akan kalian ambil untuk menyelesaikan konflik tersebut tanpa mengorbankan kelancaran acara?",
      },
      {
        no: 4,
        soal: "Banyak siswa beranggapan bahwa OSIS hanya aktif saat pemilihan dan kegiatan besar saja. Hal ini menurunkan kepercayaan siswa terhadap OSIS.",
        pertanyaan: "Sebagai calon pemimpin OSIS, apa langkah konkret kalian untuk memperbaiki citra OSIS agar kembali dipercaya dan mengembalikan citra OSIS ?",
      },
      {
        no: 5,
        soal: "Banyak siswa menilai OSIS terlalu tertutup dan tidak mendengarkan aspirasi mereka. Beberapa bahkan membuat kritik terbuka di media sosial sekolah.",
        pertanyaan: "Apa langkah konkret kalian untuk membuka komunikasi dua arah antara OSIS dan siswa agar tidak ada jarak antara pengurus dan anggota sekolah?",
      },
    ],
  },
  {
    id: "2",
    theme: "Kebersihan",
    questions: [
      {
        no: 1,
        soal: "Sebagian siswa sering mengejek teman yang ikut piket atau membawa kantong sampah ke kelas karena dianggap “sok rajin.”",
        pertanyaan: "Bagaimana menciptakan budaya saling menghargai usaha menjaga kebersihan?",
      },
      {
        no: 2,
        soal: "Banyak siswa membuang sampah sembarangan meski papan peringatan sudah dipasang.",
        pertanyaan: "Langkah apa yang bisa diambil OSIS agar kesadaran ini tumbuh dari diri siswa?",
      },
      {
        no: 3,
        soal: "Sekolah terlalu bergantung pada petugas kebersihan, sementara siswa jarang terlibat dalam pengelolaan sampah.",
        pertanyaan: "Bagaimana OSIS mendorong kemandirian siswa dalam hal kebersihan?",
      },
      {
        no: 4,
        soal: "Ketika halaman sekolah kotor setelah acara, semua saling menyalahkan dan tidak ada yang mau membersihkan.",
        pertanyaan: "Bagaimana menanamkan Kesadaran bahwa kebersihan adalah tanggung jawab bersama?",
      },
      {
        no: 5,
        soal: "Setiap hari, banyak makanan sisa dari kantin, dan makanan bergizi gratis selalu bertebaran dimana mana.",
        pertanyaan: "Bagaimana OSIS bisa mengubah kebiasaan agar siswa lebih bijak terhadap makanan dan tidak membuangnya sembarangan?",
      },
    ],
  },
  {
    id: "3",
    theme: "Sosial",
    questions: [
      {
        no: 1,
        soal: "Sebagian siswa merasa takut berbicara dengan guru karena takut dianggap tidak sopan, sedangkan guru merasa siswa kurang hormat.",
        pertanyaan: "Bagaimana langkah OSIS membantu menjembatani komunikasi dan tetap menjaga keharmonisan antara guru dan siswa dengan tetap menjaga adab dan sopan santun ?",
      },
      {
        no: 2,
        soal: "Kegiatan bakti sosial hanya berupa foto-foto dan laporan, tanpa hasil nyata yang dirasakan masyarakat.",
        pertanyaan: "Bagaimana membuat kegiatan sosial OSIS lebih bermakna dan manfaat nya lebih nyata di rasakan oleh masyarakat ?",
      },
      {
        no: 3,
        soal: "Ada beberapa siswa yang sering di-bully secara verbal dan fisik di lingkungan sekolah.",
        pertanyaan: "Bagaimana OSIS bisa menciptakan lingkungan yang aman dan inklusif di lingkungan sekolah ?",
      },
      {
        no: 4,
        soal: "Saat istirahat, hampir semua siswa sibuk bermain ponsel daripada berbicara atau bermain bersama.",
        pertanyaan: "Bagaimana langkah OSIS dapat menghidupkan interaksi sosial antar siswa?",
      },
      {
        no: 5,
        soal: "Beberapa siswa ingin OSIS lebih sering mengadakan kegiatan sosial di luar sekolah, tetapi guru keberatan karena mengganggu fokus belajar.",
        pertanyaan: "Sebagai calon ketua dan wakil ketua, bagaimana kalian menyeimbangkan antara kepedulian sosial siswa dan tanggung jawab akademik yang harus dijaga?",
      },
    ],
  },
  {
    id: "4",
    theme: "Tata Tertib",
    questions: [
      {
        no: 1,
        soal: "Dalam kegiatan class meeting, beberapa siswa mulai tidak kondusif ditengah kegiatan, membuat situasi sulit dikendalikan.",
        pertanyaan: "Apa langkah yang tepat yang dapat dilakukan tanpa memperkeruh suasana?",
      },
      {
        no: 2,
        soal: "Ada kelompok siswa yang mengejek teman sekelas karena dianggap “kurang gaul.”",
        pertanyaan: "Bagaimana menciptakan budaya menghargai satu sama lain?",
      },
      {
        no: 3,
        soal: "Beberapa siswa menganggap aturan sekolah “terlalu ketat” dan mulai menyepelekannya.",
        pertanyaan: "Bagaimana OSIS meningkatkan kesadaran agar tata tertib dipahami sebagai kebutuhan, bukan beban?",
      },
      {
        no: 4,
        soal: "Banyak siswa melanggar aturan karena mengaku tidak tahu isi tata tertib sekolah.",
        pertanyaan: "Apakah sekolah seharusnya memberi sanksi kepada siswa yang melanggar tanpa tahu aturan, atau justru memperbaiki sistem sosialisasi tata tertib?",
      },
      {
        no: 5,
        soal: "Beberapa aturan baru diterapkan agar siswa lebih disiplin, seperti wajib datang 15 menit lebih awal dan mengumpulkan handphone. Namun, banyak siswa merasa terbebani.",
        pertanyaan: "Bagaimana kalian menjaga keseimbangan antara disiplin dan kenyamanan siswa agar tata tertib tetap dijalankan dengan sukarela, bukan karena takut?",
      },
    ],
  },
  {
    id: "5",
    theme: "Administratif",
    questions: [
      {
        no: 1,
        soal: "OSIS mengadakan kegiatan Pentas Seni sebagai ajang kreativitas siswa, tahun lalu, kegiatan tersebut berjalan meriah, namun dana yang digunakan melebihi anggaran karena pengeluaran tidak terkontrol, seperti dekorasi berlebihan dan konsumsi yang tidak sesuai jumlah peserta, akibatnya dana kegiatan terjadi pemborosan.",
        pertanyaan: "Bagaimana OSIS mengelola dana kegiatan agar tidak ada pemborosan, tapi kegiatan tetap berjalan ?",
      },
      {
        no: 2,
        soal: "Proposal kegiatan terlambat diserahkan kepada pihak sekolah, sehingga izin kegiatan ditolak. Padahal semua persiapan sudah matang dan panitia sudah bekerja keras.",
        pertanyaan: "Bagaimana kamu mempertanggungjawabkan hal ini didepan siswa dan pembina OSIS ?",
      },
      {
        no: 3,
        soal: "Dalam kepengurusan OSIS, tugas administratif sering kali hanya dibebankan kepada sekretaris dan bendahara, sedangkan bidang lain kurang terlibat.",
        pertanyaan: "Apakah menurut kalian, administrasi harus menjadi tanggung jawab bersama atau tetap menjadi tugas bidang tertentu? Bagaimana sistem pembagian kerja yang ideal menurut kalian?",
      },
      {
        no: 4,
        soal: "Ada wacana agar semua data OSIS — termasuk keuangan, rapat, dan keputusan — dibuat open access di papan pengumuman sekolah. Namun, beberapa pengurus menolak karena mengandung data sensitif.",
        pertanyaan: "Bagaimana kalian menentukan batas antara transparansi publik dan kerahasiaan organisasi agar OSIS tetap dipercaya namun tidak kehilangan kontrol administratifnya?",
      },
      {
        no: 5,
        soal: "Setelah acara class meeting selesai, ternyata tidak adanya copyan laporan Pertanggung Jawaban (LPJ) dan dokumentasi kegiatan yang tidak rapi.",
        pertanyaan: "Bagaiamana memastikan kegiatan berikutnya lebih tertib administratif ?",
      },
    ],
  },
];
