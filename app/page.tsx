"use client"

import { useState } from "react"
import { Sidebar } from "../components/Sidebar"
import { MainContent } from "../components/MainContent"
import { PlayerControls } from "../components/PlayerControls"
import { blogPosts } from "@/lib/blog-posts"

export default function Home() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <MainContent selectedPost={selectedPost} setSelectedPost={setSelectedPost} />
      </div>
      <PlayerControls setSelectedPost={setSelectedPost} />
    </div>
  )
}
