"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, User, LogOut,  Heart, MessageCircle, Share2,  Smile, Link as LinkIcon, MoreVertical } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
    <div className="min-h-screen bg-black text-white relative">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,51,51,0.5),transparent_70%)] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.8),transparent_2px),linear-gradient(to_bottom,rgba(0,0,0,0.8),transparent_2px)] bg-[size:40px_40px] opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 mt-3" />
      
      {/* Minimal Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex items-center justify-between h-14 px-4">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              Loom
            </Link>
            <div className="md:hidden flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-400 hover:text-white hover:bg-white/10">
                <Home className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-400 hover:text-white hover:bg-white/10">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-400 hover:text-white hover:bg-white/10">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 relative z-10">
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Sidebar - Hidden on mobile */}
            <div className="hidden md:block col-span-2">
              <div className="sticky top-20 space-y-8">
                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10 rounded-xl">
                    <Home className="mr-3 h-5 w-5 text-gray-400" />
                    Home
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10 rounded-xl">
                    <User className="mr-3 h-5 w-5 text-gray-400" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start text-white hover:bg-white/10 rounded-xl">
                    <LogOut className="mr-3 h-5 w-5 text-gray-400" />
                    Logout
                  </Button>
                </nav>             
              </div>
            </div>

            {/* Main Feed */}
            <div className="col-span-12 md:col-span-7 space-y-6">
              {/* Create Post */}
              <Card className="bg-white/5 border-white/10 p-5 backdrop-blur-xl rounded-2xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Image src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330"} width={48}  height={48} alt={"Your avatar" }
                         className="h-12 w-12 rounded-full ring-2 ring-white/20" />
                    <textarea
                      placeholder="What's on your mind?"
                      className="flex-1 bg-transparent border-0 resize-none text-white placeholder-gray-500 focus:outline-none focus:ring-0 text-lg"
                      rows={2}
                    />
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <div className="flex -ml-2 space-x-1">
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                        {/* <Image className="h-5 w-5" /> */}
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                        <LinkIcon className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                        <Smile className="h-5 w-5" />
                      </Button>
                    </div>
                    <Button className="bg-white/10 hover:bg-white/20 text-white border-0 rounded-xl px-6">
                      Post
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Posts */}
              {dummyPosts.map((post) => (
                <Card key={post.id} className="bg-white/5 border-white/10 overflow-hidden backdrop-blur-xl rounded-2xl">
                  <div className="p-5 space-y-4">
                    <div className="flex items-center space-x-4">
                      <img src={post.avatar} alt={post.author} 
                           className="h-12 w-12 rounded-full ring-2 ring-white/20" />
                      <div className="flex-1">
                        <h3 className="font-medium text-white">{post.author}</h3>
                        <p className="text-sm text-gray-500">2 hours ago</p>
                      </div>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10 rounded-xl">
                        <MoreVertical className="h-5 w-5" />
                      </Button>
                    </div>
                    <p className="text-gray-100 text-lg leading-relaxed">{post.content}</p>
                    {post.tags && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-sm text-gray-300 bg-white/10 px-3 py-1 rounded-xl hover:bg-white/20 cursor-pointer transition-all">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {post.image && (
                      <div className="relative -mx-5 mt-2">
                        <img src={post.image} alt="Post content" className="w-full" />
                      </div>
                    )}
                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex items-center space-x-6">
                        <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/10 rounded-xl">
                          <Heart className="mr-2 h-5 w-5" /> {post.likes}
                        </Button>
                        <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/10 rounded-xl">
                          <MessageCircle className="mr-2 h-5 w-5" /> {post.comments}
                        </Button>
                      </div>
                      <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-white/10 rounded-xl">
                        <Share2 className="mr-2 h-5 w-5" /> Share
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Right Sidebar - Hidden on mobile */}
            <div className="hidden md:block col-span-3">
              <div className="sticky top-20 space-y-6">
                <Card className="bg-white/5 border-white/10 p-5 backdrop-blur-xl rounded-2xl">
                  <div className="space-y-5">
                    <div className="flex items-center space-x-4">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" alt="Profile" 
                           className="h-16 w-16 rounded-full ring-4 ring-white/20" />
                      <div>
                        <h3 className="text-lg font-medium text-white">Sarah Chen</h3>
                        <p className="text-gray-500">@sarahchen</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                      <div className="text-center p-3 rounded-xl hover:bg-white/10 cursor-pointer transition-all">
                        <div className="font-semibold text-white text-lg">245</div>
                        <div className="text-sm text-gray-500">Posts</div>
                      </div>
                      <div className="text-center p-3 rounded-xl hover:bg-white/10 cursor-pointer transition-all">
                        <div className="font-semibold text-white text-lg">12k</div>
                        <div className="text-sm text-gray-500">Followers</div>
                      </div>
                      <div className="text-center p-3 rounded-xl hover:bg-white/10 cursor-pointer transition-all">
                        <div className="font-semibold text-white text-lg">1.2k</div>
                        <div className="text-sm text-gray-500">Following</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}