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
    theme: "Tata Tertib",
    questions: [
      {
        no: 1,
        soal: "Class meeting berlangsung kacau karena beberapa siswa berkelahi.",
        pertanyaan: "Apa kebijakan yang tepat tanpa memperkeruh suasana?",
      },
      {
        no: 2,
        soal: "Setelah acara sekolah selesai lapangan penuh sampah, siswa langsung pulang.",
        pertanyaan: "Langkah konkret apa yang bisa diterapkan untuk mencegah hal ini?",
      },
      {
        no: 3,
        soal: "Ada kelompok siswa yang mengejek teman karena dianggap 'kurang gaul'.",
        pertanyaan: "Bagaimana menciptakan budaya saling menghargai?",
      },
      {
        no: 4,
        soal: "Beberapa siswa menganggap aturan sekolah terlalu ketat.",
        pertanyaan: "Bagaimana meningkatkan kesadaran bahwa tata tertib adalah kebutuhan, bukan beban?",
      },
      {
        no: 5,
        soal: "Dalam pelanggaran seragam guru menyalahkan OSIS karena tidak menegur, OSIS merasa itu tugas guru.",
        pertanyaan: "Siapa yang paling bertanggung jawab dalam menegakkan disiplin?",
      },
    ],
  },
  {
    id: "2",
    theme: "Kebersihan",
    questions: [
      {
        no: 1,
        soal: "Siswa yang rajin piket sering diejek 'sok rajin'.",
        pertanyaan: "Bagaimana menciptakan budaya saling menghargai usaha menjaga kebersihan?",
      },
      {
        no: 2,
        soal: "Banyak siswa tetap membuang sampah sembarangan meski ada papan peringatan.",
        pertanyaan: "Langkah apa yang bisa membuat kesadaran kebersihan tumbuh dari diri siswa?",
      },
      {
        no: 3,
        soal: "Sekolah terlalu bergantung pada petugas kebersihan.",
        pertanyaan: "Bagaimana mendorong kemandirian siswa dalam menjaga kebersihan?",
      },
      {
        no: 4,
        soal: "Setelah acara halaman kotor tetapi semua saling menyalahkan dan tidak ada yang membersihkan.",
        pertanyaan: "Bagaimana menanamkan bahwa kebersihan adalah tanggung jawab bersama?",
      },
      {
        no: 5,
        soal: "Banyak makanan sisa terbuang dari kantin dan program makanan gratis.",
        pertanyaan: "Bagaimana OSIS mengubah kebiasaan agar siswa tidak menyia-nyiakan makanan?",
      },
    ],
  },
  {
    id: "3",
    theme: "Organisasi",
    questions: [
      {
        no: 1,
        soal: "Salah satu pengurus OSIS sering terlambat dan memakai seragam tidak sesuai aturan sehingga siswa lain menirunya.",
        pertanyaan:
          "Apakah OSIS wajib menjadi panutan moral bagi siswa lain? Bagaimana cara mengembalikan citra OSIS di mata siswa maupun guru?",
      },
      {
        no: 2,
        soal: "OSIS menjalin kerja sama dengan komunitas luar untuk festival, tetapi sponsor meminta logo mereka diperbesar dan logo OSIS dihapus.",
        pertanyaan: "Apakah hal ini mengancam independensi OSIS atau memperluas jejaring positif?",
      },
      {
        no: 3,
        soal: "Rapat OSIS rutin dan resmi tetapi keputusan penting sering tertunda sehingga program kerja terhambat.",
        pertanyaan: "Apakah struktur formal menghambat efektivitas kerja?",
      },
      {
        no: 4,
        soal: "Pemilihan OSIS dimenangkan oleh kandidat populer di media sosial meskipun programnya tidak matang, setelah terpilih OSIS menjadi tidak aktif.",
        pertanyaan: "Apakah pemilihan langsung menghasilkan pemimpin yang berkualitas?",
      },
      {
        no: 5,
        soal: "Kegiatan OSIS masih manual dan kurang memanfaatkan teknologi, sehingga dianggap tidak mengikuti perkembangan zaman.",
        pertanyaan: "Bagaimana agar OSIS tetap relevan dan efektif di era digital?",
      },
    ],
  },
  {
    id: "4",
    theme: "Sosial",
    questions: [
      {
        no: 1,
        soal: "Ada siswa yang dikucilkan karena latar belakang ekonomi.",
        pertanyaan: "Bagaimana OSIS membangun rasa peduli dan menghargai perbedaan?",
      },
      {
        no: 2,
        soal: "Siswa merasa takut berbicara dengan guru, sementara guru merasa siswa kurang sopan.",
        pertanyaan: "Bagaimana OSIS menjembatani komunikasi agar tetap harmonis?",
      },
      {
        no: 3,
        soal: "Bakti sosial hanya menjadi kegiatan formal yang berfokus pada dokumentasi.",
        pertanyaan: "Bagaimana membuat kegiatan sosial lebih bermakna bagi masyarakat?",
      },
      {
        no: 4,
        soal: "Ada siswa yang mengalami bullying verbal dan fisik.",
        pertanyaan: "Bagaimana OSIS menciptakan lingkungan sekolah yang aman dan inklusif?",
      },
      {
        no: 5,
        soal: "Saat istirahat siswa lebih fokus pada ponsel daripada berinteraksi.",
        pertanyaan: "Bagaimana OSIS menghidupkan kembali interaksi sosial antar siswa?",
      },
    ],
  },
  {
    id: "5",
    theme: "Administratif",
    questions: [
      {
        no: 1,
        soal: "Pentas seni berjalan meriah tetapi dana melebihi anggaran karena pengeluaran tidak terkontrol.",
        pertanyaan: "Bagaimana mengelola dana kegiatan agar tidak terjadi pemborosan tetapi kegiatan tetap berjalan?",
      },
      {
        no: 2,
        soal: "Dalam audit bulanan terdapat selisih Rp 200.000 antara catatan bendahara dan uang kas.",
        pertanyaan: "Langkah pertama apa yang harus dilakukan?",
      },
      {
        no: 3,
        soal: "Setelah class meeting tidak ada salinan LPJ dan dokumentasi tidak rapi.",
        pertanyaan: "Bagaimana memastikan kegiatan berikutnya lebih tertib administratif?",
      },
      {
        no: 4,
        soal: "OSIS dituduh tidak transparan karena laporan keuangan tidak pernah ditampilkan kepada ketua kelas.",
        pertanyaan: "Bagaimana menjaga transparansi tanpa menimbulkan kesalahpahaman?",
      },
      {
        no: 5,
        soal: "Proposal kegiatan terlambat diserahkan sehingga izin ditolak meskipun persiapan sudah matang.",
        pertanyaan: "Bagaimana mempertanggungjawabkan hal ini di depan siswa dan pembina?",
      },
    ],
  },
]
