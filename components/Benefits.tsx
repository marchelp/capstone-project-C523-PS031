import React from 'react';

const BenefitCard = ({ title, description }) => (
  <div className="bg-feature-bg bg-center bg-no-repeat py-24 p-6 rounded-lg shadow-md mb-8">
    <h2 className="text-xl font-semibold mb-4 text-green-500">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

const Benefits = () => {
  return (
    <section className="flex-col flexCenter bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container">
        <h2 className="text-4xl lg:text-5xl mb-8 text-gray-800 font-bold">Benefit Aplikasi</h2>
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
          <BenefitCard
            title="Meningkatkan Kesadaran"
            description="Aplikasi ini memainkan peran krusial dalam meningkatkan kesadaran masyarakat terhadap masalah sampah di lingkungan gunung dan taman nasional."
          />
          <BenefitCard
            title="Efisiensi Pengelolaan Sampah"
            description="Dengan pemantauan real-time dan verifikasi sampah, pengelolaan sampah dapat menjadi lebih efisien dan terarah."
          />
          <BenefitCard
            title="Penghargaan dan Insentif"
            description="Sistem poin memberikan insentif kepada pengguna untuk berpartisipasi aktif, menciptakan motivasi dan semangat konservasi."
          />
          <BenefitCard
            title="Kontribusi Terhadap Keberlanjutan"
            description="Melalui aplikasi ini, pengguna dapat berkontribusi pada pelestarian sumber daya alam dan ekosistem, memperkuat dampak positif terhadap lingkungan alam Indonesia."
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
