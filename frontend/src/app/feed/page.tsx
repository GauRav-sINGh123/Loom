"use client";

import { Navigation } from "./_components/Navigation";
import { Sidebar } from "./_components/Sidebar";
import { CreatePost } from "./_components/CreatePost";
import { Post } from "./_components/Post";
import { SuggestedUsers } from "./_components/SuggestedUsers";

export default function Feed() {
  const dummyPosts = [
    {
      id: 1,
      author: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content: "Just launched my new photography portfolio! Check it out and let me know what you think 📸",
      image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d",
      likes: 142,
      comments: 28,
      tags: ["photography", "portfolio", "design"],
    },
    {
      id: 2,
      author: "Alex Rivera",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      content: "Working on some exciting new projects. Can't wait to share more details soon! 🚀",
      likes: 89,
      comments: 15,
      tags: ["design", "upcoming"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background pattern */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,51,51,0.3),transparent_70%)] opacity-40" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.5),transparent_2px),linear-gradient(to_bottom,rgba(0,0,0,0.5),transparent_2px)] bg-[size:50px_50px] opacity-10" />
      </div>
      
      <Navigation />

      <div className="pt-16 relative z-10">
        <div className="max-w-5xl mx-auto px-3">
          <div className="grid grid-cols-12 gap-4">
            <Sidebar />

            <div className="col-span-12 md:col-span-7 space-y-4">
              <CreatePost />
              {dummyPosts.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </div>

            <SuggestedUsers />
          </div>
        </div>
      </div>
    </div>
  );
}