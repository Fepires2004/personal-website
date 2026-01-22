"use client"

import { Home, Search, Library, PlusSquare, Heart, Download } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"

const playlists = [
  "Chill Vibes",
  "Workout Mix",
  "90s Throwback",
  "Indie Acoustic",
  "Focus Playlist",
  "Road Trip Tunes",
  "Rainy Day Jazz",
  "Summer Hits",
  "Classical Essentials",
  "Hip Hop Favorites",
]

export function Sidebar() {
  const handleSidebarClick = () => {
    alert("You know that's not gonna work, this is vibecoded!")
  }

  return (
    <div 
      className="w-60 bg-black text-gray-300 flex flex-col h-screen cursor-pointer"
      onClick={handleSidebarClick}
    >
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white mb-6">IDS2141</h1>
        <nav>
          <ul className="space-y-2">
            <li>
              <div className="flex items-center space-x-2 hover:text-white">
                <Home size={24} />
                <span>Home</span>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2 hover:text-white">
                <Search size={24} />
                <span>Search</span>
              </div>
            </li>
            <li>
              <div className="flex items-center space-x-2 hover:text-white">
                <Library size={24} />
                <span>Your Library</span>
              </div>
            </li>
          </ul>
        </nav>
        <div className="mt-8 space-y-4">
          <div className="flex items-center space-x-2 hover:text-white">
            <PlusSquare size={24} />
            <span>Create Playlist</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-white">
            <Heart size={24} />
            <span>Liked Songs</span>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-6">
            <h2 className="text-sm uppercase font-semibold mb-4">Playlists</h2>
            <ul className="space-y-2">
              {playlists.map((playlist, index) => (
                <li key={index}>
                  <div className="hover:text-white">
                    {playlist}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 hover:text-white">
          <Download size={24} />
          <span>Install App</span>
        </div>
      </div>
    </div>
  )
}
