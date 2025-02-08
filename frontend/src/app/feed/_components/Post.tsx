 

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, MessageCircle, Share2, MoreVertical } from "lucide-react";
import Image from "next/image";

interface PostProps {
  post: {
    id: number;
    author: string;
    avatar: string;
    content: string;
    image?: string;
    likes: number;
    comments: number;
    tags?: string[];
  };
}

export function Post({ post }: PostProps) {
  return (
    <Card className="bg-white/5 border-white/5 overflow-hidden backdrop-blur-sm">
      <div className="p-3 space-y-3">
        <div className="flex items-center space-x-3">
          <div className="relative h-9 w-9">
            <Image
              src={post.avatar}
              alt={post.author}
              fill
              className="rounded-full object-cover ring-1 ring-white/20"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-white text-sm">{post.author}</h3>
            <p className="text-xs text-gray-500">2h ago</p>
          </div>
          <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-white">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-gray-100 text-sm leading-relaxed">{post.content}</p>
        {post.tags && (
          <div className="flex flex-wrap gap-1">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs text-gray-300 bg-white/10 px-2 py-0.5 rounded-md hover:bg-white/20 cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        )}
        {post.image && (
          <div className="relative h-[300px] -mx-3">
            <Image
              src={post.image}
              alt="Post content"
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <Heart className="mr-1.5 h-4 w-4" /> {post.likes}
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
              <MessageCircle className="mr-1.5 h-4 w-4" /> {post.comments}
            </Button>
          </div>
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <Share2 className="mr-1.5 h-4 w-4" /> Share
          </Button>
        </div>
      </div>
    </Card>
  );
}