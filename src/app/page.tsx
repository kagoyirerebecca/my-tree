import Image from "next/image";
import Map from "@/app/components/map"; // Correct import path with lowercase 'map'
 // Import your Map component

export default function Home() {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <main className="relative flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-[375px] h-[667px] sm:rounded-lg shadow-lg border border-gray-300">
  {/* Map as background */}
  <div className="absolute inset-0 -z-10 h-full w-full">
    {/* Make sure the Map component itself is set to fill its container */}
    <Map 
      address="1600 Amphitheatre Parkway, Mountain View, CA" 
    />
  </div>

  {/* Other elements displayed on top of the map */}
  <div className="relative z-10">
    {/* Your content here */}
    <h1>Your content title</h1>
    <p>Any other information on top of the map.</p>
  </div>
</main>

    </div>
  );
}
