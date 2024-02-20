import { about } from '@/utils/about';

const AboutUs = () => {
  return (
    <div id="about" className="mt-[50px] px-4 py-12 lg:px-16">
      <h1 className="mb-2 text-center text-lg font-bold text-primary-200 lg:text-xl">
        QUI SOMMES-NOUS ?
      </h1>
      <div className="mt-8 grid grid-cols-2 gap-4">
        {about.map((a, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-center gap-8 rounded-md px-16 py-10"
              style={{ backgroundColor: `${a.backgroundColor}` }}
            >
              <img src={a.icon} alt={`${a.name} Logo`} className="h-20 w-20" />

              <div className="text-secondary-100">
                <h2 className="mb-4 text-[16px] font-bold">{a.name}</h2>
                <p className="text-[14px]">{a.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { AboutUs };
