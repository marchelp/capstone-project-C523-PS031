import React from 'react';
const InstructionCard = ({ step, description }) => (
  <div className="bg-white py-6 px-4 rounded-lg shadow-md mb-6">
    <div className="flex items-center justify-center bg-green-500 text-white font-bold rounded-full h-12 w-12 mb-4">
      <span>{step}</span>
    </div>
    <p className="text-gray-700 leading-7">{description}</p>
  </div>
);

const UsageInstructions = () => (
  <section className="bg-feature-bg bg-cover bg-center bg-no-repeat py-24">
    <div className="max-container">
      <h2 className="text-4xl lg:text-5xl mb-8 text-gray-800 font-bold">Petunjuk Penggunaan Aplikasi</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <InstructionCard
          step={1}
          description="Unduh aplikasi 'Setor Sampah' dari toko aplikasi yang tersedia di perangkat Anda."
        />
        <InstructionCard
          step={2}
          description="Buat akun dengan mengisi informasi yang diperlukan dan verifikasi email atau nomor telepon Anda."
        />
        <InstructionCard
          step={3}
          description="Gunakan peta interaktif untuk menemukan lokasi-lokasi gunung dan taman nasional yang membutuhkan penanganan sampah."
        />
        <InstructionCard
          step={4}
          description="Pergi ke lokasi tersebut, setor sampah, dan unggah foto sampah untuk diverifikasi."
        />
        <InstructionCard
          step={5}
          description="Setiap setoran sampah yang diverifikasi akan memberikan poin yang dapat ditukarkan dengan hadiah atau digunakan untuk mendukung proyek konservasi."
        />
      </div>
    </div>
  </section>
);

export default UsageInstructions;
