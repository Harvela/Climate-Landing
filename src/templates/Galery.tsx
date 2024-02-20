import { galeries } from '@/utils/galery';

const Galery = () => {
  return (
    <div
      id="services"
      className="relative z-20 bg-primary-300 px-4 py-12 lg:px-16"
    >
      <h1 className="mb-2 mt-5 text-lg font-bold text-white lg:text-xl">
        GALLERIE
      </h1>
      <div className="mt-12 grid grid-cols-2 gap-x-24 gap-y-16">
        {galeries.map((galery, index) => {
          return (
            <div
              key={index}
              className="flex h-[300px] flex-col items-center justify-center gap-8 rounded-md bg-white p-8"
            >
              {/* <img
                src={galery.icon}
                alt=''
                className="h-20 w-20"
              /> */}

              <p className="text-sm">{galery.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Galery };
