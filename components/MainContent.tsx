"use client"

import { useEffect, useMemo, useState } from "react"
import { ChevronLeft, ChevronRight, Music, Play, Video, X } from "lucide-react"
import Image from "next/image"
import { blogPosts, type BlogPost } from "@/lib/blog-posts"

interface MainContentProps {
  selectedPost: BlogPost | null
  setSelectedPost: (post: BlogPost | null) => void
}

type MediaItem = { type: "video" | "image"; src: string }

export function MainContent({ selectedPost, setSelectedPost }: MainContentProps) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  const getWordCount = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length
  }

  const totalWords = blogPosts.reduce((acc, post) => acc + getWordCount(post.content), 0)
  const mediaItems = useMemo<MediaItem[]>(() => {
    if (!selectedPost) {
      return []
    }

    const items: MediaItem[] = []
    if (selectedPost.video) {
      items.push({ type: "video", src: selectedPost.video })
    }
    if (selectedPost.images?.length) {
      selectedPost.images.forEach((src) => items.push({ type: "image", src }))
    } else if (!selectedPost.video && !selectedPost.audio) {
      items.push({ type: "image", src: selectedPost.image })
    }
    return items
  }, [selectedPost])

  useEffect(() => {
    setCurrentMediaIndex(0)
  }, [selectedPost])

  const showMediaNavigation = mediaItems.length > 1
  const currentMedia = mediaItems[currentMediaIndex]

  const goToPreviousMedia = () => {
    setCurrentMediaIndex((index) => (index === 0 ? mediaItems.length - 1 : index - 1))
  }

  const goToNextMedia = () => {
    setCurrentMediaIndex((index) => (index === mediaItems.length - 1 ? 0 : index + 1))
  }

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
                  {song.audio ? (
                    <div className="w-10 h-10 mr-3 bg-white/10 rounded flex items-center justify-center shrink-0">
                      <Music size={20} className="text-gray-300" />
                    </div>
                  ) : song.video ? (
                    <div className="w-10 h-10 mr-3 bg-white/10 rounded flex items-center justify-center shrink-0">
                      <Video size={20} className="text-gray-300" />
                    </div>
                  ) : (
                    <Image
                      src={song.image}
                      width={40}
                      height={40}
                      alt={`${song.title} cover`}
                      className="mr-3"
                    />
                  )}
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
              <div className="flex flex-col items-center gap-3 shrink-0">
                {selectedPost.audio ? (
                  <div className="w-48 sm:w-64 shrink-0 flex flex-col items-center gap-3">
                    <div className="w-32 h-32 sm:w-48 sm:h-48 bg-white/10 rounded-md flex items-center justify-center shadow-2xl">
                      <Music size={64} className="text-green-400" />
                    </div>
                    <audio
                      src={selectedPost.audio}
                      controls
                      className="w-full"
                      preload="metadata"
                    />
                  </div>
                ) : currentMedia ? (
                  <>
                    <div className="flex items-center gap-2">
                      {showMediaNavigation && (
                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 shrink-0"
                          onClick={goToPreviousMedia}
                          aria-label="Show previous media"
                        >
                          <ChevronLeft size={18} />
                        </button>
                      )}
                      {currentMedia.type === "video" ? (
                        <div className="w-48 sm:w-64 shrink-0 shadow-2xl rounded-md overflow-hidden bg-black">
                          <video
                            key={currentMedia.src}
                            src={currentMedia.src}
                            className="w-full rounded-md"
                            controls
                            playsInline
                            preload="metadata"
                          />
                        </div>
                      ) : (
                        <div className="relative w-32 h-32 sm:w-48 sm:h-48 shrink-0 shadow-2xl">
                          <Image
                            src={currentMedia.src}
                            fill
                            alt={selectedPost.title}
                            className="object-contain rounded-md"
                          />
                        </div>
                      )}
                      {showMediaNavigation && (
                        <button
                          type="button"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 shrink-0"
                          onClick={goToNextMedia}
                          aria-label="Show next media"
                        >
                          <ChevronRight size={18} />
                        </button>
                      )}
                    </div>
                    {showMediaNavigation && (
                      <span className="min-w-12 text-center text-xs font-medium text-gray-300">
                        {currentMediaIndex + 1} / {mediaItems.length}
                      </span>
                    )}
                  </>
                ) : null}
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
