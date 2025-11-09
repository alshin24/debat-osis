export interface Candidate {
  id: string
  name: string
  role: string
  image: string
}

export interface DebateTheme {
  id: string
  theme: string
  questions: string[]
}

export const candidates: Candidate[] = [
  {
    id: "1",
    name: "Muhammad Tamam Setiaji",
    role: "Ketua 01",
    image: "/male-student-in-formal-attire.jpg",
  },
  {
    id: "2",
    name: "Priyanka Janitra Almira",
    role: "Wakil 01",
    image: "/female-student-in-formal-attire.jpg",
  },
  {
    id: "3",
    name: "Novrika Awaliyah",
    role: "Ketua 02",
    image: "/male-student-debate-formal.jpg",
  },
  {
    id: "4",
    name: "Syaakira Azzahra",
    role: "Wakil 02",
    image: "/female-student-debate-formal.jpg",
  },
  {
    id: "5",
    name: "Matsurika Rosunul. F",
    role: "Ketua 03",
    image: "/young-man-business-portrait.jpg",
  },
  {
    id: "6",
    name: "Muhammad Azka Adimaputra",
    role: "Wakil 03",
    image: "/young-woman-business-portrait.jpg",
  },
]

export const debateThemes: DebateTheme[] = [
  {
    id: "1",
    theme: "Disiplin & Kepemimpinan",
    questions: [
      "Apakah OSIS wajib menjadi panutan moral bagi siswa lain? Apa tanggapanmu mengenai hal tersebut?",
      "Bagaimana OSIS meningkatkan kesadaran agar tata tertib dipahami sebagai kebutuhan, bukan beban?",
      "Bagaimana kalian menjaga keseimbangan antara disiplin dan kenyamanan siswa agar tata tertib tetap dijalankan dengan sukarela, bukan karena takut?",
      "Sebagai ketua dan wakil ketua OSIS, apa langkah pertama yang akan kalian ambil untuk menyelesaikan konflik antar divisi tanpa mengorbankan kelancaran acara?",
    ],
  },
  {
    id: "2",
    theme: "Kebersihan & Lingkungan",
    questions: [
      "Bagaimana menciptakan budaya saling menghargai usaha menjaga kebersihan?",
      "Langkah apa yang bisa diambil OSIS agar kesadaran menjaga kebersihan tumbuh dari diri siswa?",
      "Bagaimana OSIS mendorong kemandirian siswa dalam hal kebersihan?",
      "Bagaimana menanamkan kesadaran bahwa kebersihan adalah tanggung jawab bersama?",
      "Bagaimana OSIS bisa mengubah kebiasaan agar siswa lebih bijak terhadap makanan dan tidak membuangnya sembarangan?",
    ],
  },
  {
    id: "3",
    theme: "Kesejahteraan & Sosial Siswa",
    questions: [
      "Bagaimana langkah OSIS membantu menjembatani komunikasi antara guru dan siswa dengan tetap menjaga adab dan sopan santun?",
      "Bagaimana membuat kegiatan sosial OSIS lebih bermakna dan manfaatnya lebih nyata bagi masyarakat?",
      "Bagaimana OSIS bisa menciptakan lingkungan yang aman dan inklusif di lingkungan sekolah?",
      "Bagaimana langkah OSIS dapat menghidupkan kembali interaksi sosial antar siswa?",
      "Bagaimana menciptakan budaya menghargai satu sama lain di sekolah?",
    ],
  },
  {
    id: "4",
    theme: "Organisasi & Transparansi",
    questions: [
      "Bagaimana OSIS mengelola dana kegiatan agar tidak ada pemborosan, tetapi kegiatan tetap berjalan?",
      "Bagaimana kamu mempertanggungjawabkan keterlambatan proposal di depan siswa dan pembina OSIS?",
      "Apakah administrasi harus menjadi tanggung jawab bersama atau tetap menjadi tugas bidang tertentu?",
      "Bagaimana menentukan batas antara transparansi publik dan kerahasiaan organisasi agar OSIS tetap dipercaya namun tetap terkontrol?",
      "Bagaimana memastikan kegiatan berikutnya lebih tertib secara administratif?",
    ],
  },
  {
    id: "5",
    theme: "Hubungan Publik & Citra OSIS",
    questions: [
      "Apakah kerja sama dengan pihak luar yang menonjolkan logo sponsor mengancam independensi OSIS atau justru memperluas jejaring positif?",
      "Apa langkah konkret kalian untuk memperbaiki citra OSIS agar kembali dipercaya oleh siswa?",
      "Apa langkah konkret kalian untuk membuka komunikasi dua arah antara OSIS dan siswa agar tidak ada jarak?",
      "Bagaimana menyeimbangkan antara kepedulian sosial siswa dan tanggung jawab akademik yang harus dijaga?",
    ],
  },
];
