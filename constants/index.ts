// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/', key: 'how_hilink_work', label: 'About' },
  { href: '/', key: 'services', label: 'Setor Sampah' },
  { href: '/', key: 'contact_us', label: 'Contact Us' },
];


// FEATURES SECTION
export const FEATURES = [
  {
    title: 'Pemantauan Real-time Sampah',
    icon: '/map.svg',
    variant: 'green',
    description:
      'Aplikasi "Setor Sampah" dilengkapi dengan fitur pemantauan real-time yang memungkinkan pengguna untuk melihat jumlah sampah yang telah terkumpul di berbagai lokasi gunung dan taman nasional di Indonesia. Data ini disajikan secara visual melalui peta interaktif, memungkinkan pengguna untuk memahami sejauh mana penumpukan sampah di setiap area. Pemantauan real-time ini membantu memicu kesadaran masyarakat tentang tingkat kebersihan dan menjadi dasar informasi bagi pemangku kepentingan dalam pengelolaan sampah.',
  },
  {
    title: 'Verifikasi dan Kategorisasi Sampah',
    icon: '/calendar.svg',
    variant: 'green',
    description:
      "Aplikasi ini memungkinkan pengguna untuk mengunggah foto sampah yang mereka kumpulkan dan mendapatkan verifikasi secara real-time. Sistem cerdas dalam aplikasi akan mengkategorikan jenis sampah berdasarkan gambar yang diunggah. Informasi ini tidak hanya membantu dalam pemantauan yang lebih akurat, tetapi juga membuka peluang untuk analisis lebih lanjut tentang pola sampah yang dominan di berbagai lokasi. Verifikasi ini juga mendorong transparansi dan keakuratan pelaporan.",
  },
  {
    title: 'Penghargaan dan Poin Konservasi',
    icon: '/tech.svg',
    variant: 'green',
    description:
      'Untuk memberikan insentif kepada pengguna, aplikasi "Setor Sampah" menyertakan sistem poin dan penghargaan. Setiap kali pengguna berhasil "setor sampah," mereka akan mendapatkan poin yang dapat ditukarkan dengan hadiah atau diarahkan untuk dukungan proyek konservasi. Ini tidak hanya memotivasi pengguna untuk berpartisipasi secara aktif dalam pengelolaan sampah, tetapi juga menciptakan komunitas yang peduli dengan lingkungan. Poin konservasi juga dapat memperkuat kesadaran masyarakat tentang pentingnya pelestarian sumber daya alam dan ekosistem.',
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: 'Learn More',
    links: [
      'Beranda',
      'About',
      'Setor Sampah',
      'Kontak',
    ],
  },
  {
    title: 'Partner',
    links: ['Kampus Merdeka', 'MBKM', 'Dicoding'],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Admin Officer', value: '123-456-7890' },
    { label: 'Email Officer', value: 'setorsampah@gmail.com' },
  ],
};

export const SOCIALS = {
  title: 'Social',
  links: [
    '/facebook.svg',
    '/instagram.svg',
    '/twitter.svg',
    '/youtube.svg',
  ],
};
