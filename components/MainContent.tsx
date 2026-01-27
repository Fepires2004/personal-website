"use client"

import { Play, X } from "lucide-react"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-posts"

interface MainContentProps {
  selectedPost: typeof blogPosts[0] | null
  setSelectedPost: (post: typeof blogPosts[0] | null) => void
}

export function MainContent({ selectedPost, setSelectedPost }: MainContentProps) {
  const getWordCount = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length
  }

  const totalWords = blogPosts.reduce((acc, post) => acc + getWordCount(post.content), 0)

  return (
    <div className="flex-1 bg-gradient-to-b from-blue-900 to-black text-white p-8 overflow-y-auto relative">
      <div className="flex items-center space-x-4 mb-8">
        <Image
          src="/Bertram_Gilfoyle.png"
          width={200}
          height={200}
          alt="Playlist cover"
          className="w-52 h-52 shadow-lg"
        />
        <div>
          <p className="text-sm font-semibold">Blog</p>
          <h1 className="text-5xl font-bold mt-2 mb-4">Fernando De Abreu Pires</h1>
          <p className="text-sm text-gray-300">Created by Fernando • {blogPosts.length} posts, {totalWords.toLocaleString()} words</p>
        </div>
      </div>
      <div className="mb-8">
        <a 
          href="https://www.linkedin.com/in/fernando-de-abreu-pires/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-green-400 inline-block transition transform hover:scale-105"
        >
          <Play fill="currentColor" size={20} className="inline mr-2" />
          Play
        </a>
      </div>
      <table className="w-full text-left text-sm text-gray-300">
        <thead>
          <tr className="border-b border-gray-700">
            <th className="pb-3">#</th>
            <th className="pb-3">TITLE</th>
            <th className="pb-3">DATE</th>
            <th className="pb-3">DURATION</th>
          </tr>
        </thead>
        <tbody>
          {blogPosts.map((song, index) => (
            <tr 
              key={index} 
              className="hover:bg-white/10 cursor-pointer group"
              onClick={() => setSelectedPost(song)}
            >
              <td className="py-3">{index + 1}</td>
              <td className="py-3">
                <div className="flex items-center">
                  <Image
                    src={song.image}
                    width={40}
                    height={40}
                    alt={`${song.title} cover`}
                    className="mr-3"
                  />
                  <div>
                    <p className="text-white group-hover:underline">{song.title}</p>
                    <p>{song.artist}</p>
                  </div>
                </div>
              </td>
              <td className="py-3">{song.album}</td>
              <td className="py-3">{getWordCount(song.content)} words</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedPost && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-[#282828] text-white p-6 md:p-10 rounded-xl w-full max-w-4xl max-h-[90vh] relative shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20 p-2 hover:bg-white/10 rounded-full"
              onClick={() => setSelectedPost(null)}
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col sm:flex-row items-center sm:items-end space-y-4 sm:space-y-0 sm:space-x-6 mb-8 shrink-0">
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 shrink-0 shadow-2xl">
                <Image
                  src={selectedPost.image}
                  fill
                  alt={selectedPost.title}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400 mb-1">Blog Post</p>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-2 leading-tight">{selectedPost.title}</h2>
                <p className="text-gray-300 text-sm sm:text-base font-medium">{selectedPost.artist} • {selectedPost.album}</p>
              </div>
            </div>
            <div className="border-t border-gray-700/50 pt-8 overflow-y-auto flex-1 custom-scrollbar">
              <p className="text-base sm:text-lg leading-relaxed text-gray-300 whitespace-pre-wrap font-light">
                {selectedPost.content}
              </p>
            </div>
            <div className="mt-6 flex justify-end shrink-0">
              <button 
                className="bg-white text-black font-bold py-3 px-10 rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg"
                onClick={() => setSelectedPost(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
