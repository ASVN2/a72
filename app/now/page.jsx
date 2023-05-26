import React from 'react';
import data from './db.json';
const page = () => {
  let tasks = data.tasks;
  // let fake = [...Array(10).keys()];

  const makebullets = (number) => {
    const completedBullets = [...Array(number).keys()].map((task) => {
      return <span className="inline-block w-[15px] h-[8px] mr-2 mt-2 bg-green-400 border border-gray-900 rounded-full"></span>;
    });

    const remainingBullets = [...Array(10 - number).keys()].map((task) => {
      return <span className="inline-block w-[15px] h-[8px] mr-2 mt-2 bg-gray-300 border border-gray-900 rounded-full"></span>;
    });

    return [...completedBullets, ...remainingBullets];
  };
  return (
    <div className="holder h-[80vh] flex flex-col  justify-center">
      <div className="max-w-[1000px] p-2 mx-auto text-6xl text-center mt-10 font-bold">🧠 Now</div>
      <div className="p mx-auto mt-4 text-center max-w-[40%] text-xl">Sharing my current endeavors and providing weekly updates on my ongoing areas of focus.</div>
      <div className="live mt-10 flex gap-4 p-2 px-4 mx-auto  rounded-full border border-white place-items-center w-fit">
        <div className="dot w-3 h-3 bg-red-600 relative fiding rounded-full"></div>
        <div className="life">Live</div>
      </div>
      <div className="tasks grid grid-cols-auto-fill-400 gap-4 max-w-[1000px] mt-20 p-2 mx-auto">
        {tasks &&
          tasks.map((task) => {
            return (
              <div className="task bg-gray-900 hover:bg-gray-800 hover:scale-105 cursor-pointer duration-200 border border-white p-4 rounded-md">
                <p className="flex gap-2 text-xl">
                  <span>{task.icon}</span>
                  {task.name}
                </p>
                {makebullets(task.done)}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default page;
