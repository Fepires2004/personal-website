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
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="bg-[#282828] text-white p-8 rounded-lg max-w-2xl w-full relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
              onClick={() => setSelectedPost(null)}
            >
              <X size={24} />
            </button>
            <div className="flex items-start space-x-6 mb-6">
              <Image
                src={selectedPost.image}
                width={120}
                height={120}
                alt={selectedPost.title}
                className="shadow-lg rounded"
              />
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedPost.title}</h2>
                <p className="text-gray-400">{selectedPost.artist} • {selectedPost.album}</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-lg leading-relaxed text-gray-200 whitespace-pre-wrap">
                {selectedPost.content}
              </p>
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                className="bg-white text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition"
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
