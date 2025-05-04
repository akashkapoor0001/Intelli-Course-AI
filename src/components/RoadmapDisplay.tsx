import React from 'react';

interface Props {
  roadmap: {
    [month: string]: string[];
  };
}

const RoadmapDisplay: React.FC<Props> = ({ roadmap }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
      {Object.entries(roadmap).map(([month, tasks], idx) => (
        <div
          key={month}
          className="bg-gray-900 text-white p-6 rounded-xl shadow-xl border border-gray-700"
        >
          <h3 className="text-xl font-bold mb-4">{month}</h3>
          <ul className="list-disc list-inside space-y-2">
            {tasks.map((task, i) => (
              <li key={i}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default RoadmapDisplay;
