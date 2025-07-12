import React from 'react';
import { CheckCircle, Plane, Clock } from 'lucide-react';

function App() {
  return (
    <div className="font-montserrat bg-gray-100 text-gray-900">
      {/* Header Section */}
      <section className="bg-[#152237] border-b border-blue-900 text-white text-center px-4 py-4">
        <img src="/VLR_Horizontal.png" alt="Velox Air" className="w-60 mx-auto" />
      </section>

      {/* A350 Image Section */}
      <section className="bg-white py-6 text-center">
        <img
          src="/A350_velox.png"
          alt="Velox A350"
          className="mt-[-20px] mx-auto max-w-[90%] md:max-w-3xl drop-shadow-lg"
        />
      </section>

      {/* Gradient Transition */}
      <div className="h-4 bg-gradient-to-b from-gray-200 to-transparent -mt-4"></div>      

      {/* About Us */}
      <section className="p-10 bg-white text-center">
        <h1 className="text-4xl font-bold mb-4">Velox Air Virtual Airline</h1>
        <p className="mt-2 text-lg font-bold mb-2">Soaring through Microsoft Flight Simulator skies</p>
        <p className="max-w-2xl mx-auto">
          Velox Air is a fictional virtual airline in Microsoft Flight Simulator 2024. Founded at Paris Charles de Gaulle (LFPG),
          we fly a diverse range of aircraft like the Airbus A321LR, A320neo, and A380 on our world tour, connecting destinations across continents.
        </p>
      </section>

      {/* Fleet Section */}
      <section className="p-10 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Our Fleet</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          
          {/* A321LR */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="/lufthansa-a321lr.jpg" alt="Lufthansa A321LR" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Airbus A321LR</h3>
            <p className="text-sm text-gray-600">Lufthansa Livery (Germany)</p>
          </div>

          {/* A320neo */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="/british-a320neo.jpg" alt="British Airways A320neo" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Airbus A320neo</h3>
            <p className="text-sm text-gray-600">British Airways Livery (United Kingdom)</p>
          </div>

          {/* A380 */}
          <div className="bg-white shadow-md rounded-lg p-4">
            <img src="/emirates-a380.jpg" alt="Emirates A380" className="w-full h-40 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold">Airbus A380</h3>
            <p className="text-sm text-gray-600">Emirates Livery (UAE)</p>
          </div>

        </div>
      </section>


      {/* World Tour Progress */}
      <section className="p-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">World Tour Progress</h2>
        <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
          Flying eastward from Europe to Asia — one leg at a time (Stage 1).
        </p>

        <div className="flex flex-col items-center space-y-4">
          {[
            {
              from: 'Brussels (EBBR)',
              to: 'Paris (LFPG)',
              status: 'Completed',
              distance: '184 NM',
              time: '0h 45m',
              date: '09 Jul 2025'
            },
            {
              from: 'Paris (LFPG)',
              to: 'Sofia (LBSF)',
              status: 'Completed',
              distance: '1,010 NM',
              time: '2h 15m',
              date: '10 Jul 2025'
            },
            {
              from: 'Sofia (LBSF)',
              to: 'Antalya (LTAI)',
              status: 'Completed',
              distance: '527 NM',
              time: '1h 09m',
              date: '11 Jul 2025'
            },
            {
              from: 'Antalya (LTAI)',
              to: 'Amman (OJAI)',
              status: 'Completed',
              distance: '518 NM',
              time: '1h 13m',
              date: '11 Jul 2025'
            },
            {
              from: 'Amman (OJAI)',
              to: 'Jeddah (OEJN)',
              status: 'Current'
            },
            {
              from: 'Jeddah (OEJN)',
              to: 'Dubai (OMDB)',
              status: 'Upcoming'
            },
            {
              from: 'Dubai (OMDB)',
              to: 'Mumbai (VABB)',
              status: 'Upcoming'
            },
          ].map(({ from, to, status, distance, time , date}, index) => {
            const isCompleted = status === 'Completed';
            const isCurrent = status === 'Current';

            const icon = isCompleted ? (
              <CheckCircle className="text-green-600 w-4 h-4" />
            ) : isCurrent ? (
              <Plane className="text-yellow-600 w-4 h-4 animate-pulse" />
            ) : (
              <Clock className="text-gray-500 w-4 h-4" />
            );

            const bgColor = isCompleted
              ? 'bg-green-100 border-green-300'
              : isCurrent
              ? 'bg-yellow-100 border-yellow-300'
              : 'bg-gray-100 border-gray-300';

            return (
              <div key={index} className="w-full max-w-xl">
                <div className={`grid grid-cols-3 items-center p-4 rounded-lg border ${bgColor}`}>
                  <a
                    href={`https://www.google.com/maps/search/${from}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-left underline underline-offset-2 hover:text-blue-600"
                  >
                    {from}
                  </a>
                  <div className="flex justify-center items-center">
                    {icon}
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/${to}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-right underline underline-offset-2 hover:text-blue-600"
                  >
                    {to}
                  </a>
                </div>
                {isCompleted && (
                  <div className="text-xs text-gray-600 mt-1 text-center">
                    {distance} &bull; {time} &bull; {date}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Route Map Section */}
      <section className="p-10 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Live Route Map</h2>
        <p className="text-gray-600 mb-4">Follow our world tour progress in real-time on FSHub.</p>

        {/* Optional static map screenshot */}
        <img
          src="/velox-worldtour-map.png"
          alt="World Tour Route Map"
          className="mx-auto rounded-lg shadow-lg mb-4 max-w-3xl"
        />

        <a
          href="https://fshub.io/pilot/25296/profile"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800"
        >
          View on FSHub
        </a>
      </section>
      
      {/* Codeshare Partners */}
      <section className="p-10 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Codeshare Partners</h2>
        <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
          Velox Air operates virtual codeshare flights using official MSFS 2024 liveries, proudly representing our global airline partners.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { name: 'Lufthansa', logo: 'Lufthansa.png' },
            { name: 'British Airways', logo: 'British_Airways.png' },
            { name: 'IndiGo', logo: 'IndiGo.png' },
            { name: 'Air India', logo: 'Air_India.png' },
            { name: 'Riyadh Air', logo: 'Riyadh_Air.png' },
            { name: 'Air France', logo: 'Air_France.png' },
            { name: 'United Airlines', logo: 'United.png' },
            { name: 'Gulf Air', logo: 'Gulf_Air.png' },
            { name: 'Kuwait Airways', logo: 'Kuwait_Airways.png' },
            { name: 'Qatar Airways', logo: 'Qatar_Airways.png' },
            { name: 'Emirates', logo: 'Emirates.png' },
            { name: 'Air Canada', logo: 'Air_Canada.png' },
            { name: 'All Nippon Airways', logo: 'All_Nippon_Airways.png' },
          ].map(({ name, logo }) => (
            <div
              key={name}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm flex flex-col items-center"
            >
              <img
                src={`/${logo}`}
                alt={`${name} Logo`}
                className="h-10 object-contain mb-2"
              />
              <span className="text-sm font-medium text-gray-700">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us */}
      <section className="p-10 bg-blue-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Crew</h2>
        <p>We're open to fellow sim pilots from casual simmers to career-mode enthusiasts.</p>
        <a href="https://fshub.io/airline/VLR/overview" className="inline-block mt-4 px-6 py-2 bg-blue-900 text-white rounded hover:bg-blue-800">
          Join us on FSHub
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6">
        <p>&copy; 2025 Velox Air | A Virtual Airline for MSFS 2024</p>
      </footer>
    </div>
  );
}

export default App;
