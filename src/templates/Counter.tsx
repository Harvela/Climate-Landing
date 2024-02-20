import React from 'react';
import CountUp from 'react-countup';

const counters = [
  {
    title: 'Dechets collectes',
    end: 10,
    postFix: 't',
  },
  {
    title: 'Produits fabriques',
    end: 430,
  },
  {
    title: 'Collaborateurs',
    end: 120,
  },
  {
    title: 'Villes et localites',
    end: 4,
  },
];

const Counter = () => (
  <div id="counter" className="bg-primary-100 px-16  py-12">
    <h1 className="mb-12 text-center text-lg font-bold text-primary-200 lg:text-xl">
      Nos statistiques
    </h1>
    <div className="grid grid-cols-4 gap-2">
      {counters.map((counter, index) => (
        <div
          className={`border-0 border-primary-200 text-center text-black${
            index !== counters.length - 1 ? 'border-r-2' : ''
          }`}
          key={index}
        >
          <h1 className="mb-0 mt-3 text-4xl font-bold">
            <span className="mr-4">
              <CountUp end={counter.end} duration={8} />
            </span>
            {counter.postFix}
          </h1>
          <h5 className="mb-1 text-lg">{counter.title}</h5>
        </div>
      ))}
    </div>
  </div>
);

export default Counter;
