import React from 'react';
import data from './db.json';
const page = () => {
  const quates = data.quotes;
  return (
    <div>
      <div className="quates max-w-[1000px] mx-auto mt-10 ">
        {quates.map((quate) => {
          return (
            <div className="quate text-white p-4 border-white border-dashed border rounded-md mb-4" key={quate.id}>
              <p className="font-alg text-2xl font-medium ">{quate.quote}</p>
              <span className="mt-4 text-end w-full block font-mono italic">{quate.author}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
