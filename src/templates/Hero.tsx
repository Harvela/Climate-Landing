import React from 'react';

import { Background } from '../background/Background';

const Hero: React.FC = () => {
  return (
    <Background color="">
      <div id="home" className="flex h-[90vh] w-full flex-col">
        <div className="relative h-[100vh] w-[50%]">
          <img
            src="/assets/images/home/background.jpg"
            alt="Hero"
            className="h-full w-full"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-[#063421]/60 p-16">
            <div className="mt-16 flex flex-col gap-8 text-white">
              <h2 className="text-[36px] font-semibold">
                On peut soit Avoir des dechets plastiques, poluer nos villes et
                oceans
              </h2>
              <p className="text-lg">
                50000 tonnes de plastiques, de salete ou de matiere premiere ou
                de matiere premieres et matieres{' '}
              </p>
              <div className="flex flex-row justify-between">
                <button className="h-[40px] w-[40%] rounded-lg border-2 border-white px-4">
                  Voir notre travail
                </button>
                <img
                  src="/assets/images/home/fleche.png"
                  alt="Hero"
                  className="h-32 w-32 items-end"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-0 h-full w-[50%] bg-primary-300 p-16">
          <div className="mt-16 flex flex-col gap-8 text-white">
            <img
              src="/assets/images/home/chaise.png"
              alt="Hero"
              className="m-auto"
            />
            <p className="text-lg">
              Ou construire des{' '}
              <span className="font-bold text-[#FFA1C8]">Chaises</span> <br />{' '}
              Et sauver la planete
            </p>
          </div>
        </div>
      </div>
    </Background>
  );
};

export { Hero };
