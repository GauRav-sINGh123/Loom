import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image as ImageIcon, Smile, Link as LinkIcon } from "lucide-react";
import Image from "next/image";

export function CreatePost() {
  return (
    <Card className="bg-white/5 border-white/5 p-3 backdrop-blur-sm">
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="relative h-9 w-9">
            <Image
              src={"https://images.unsplash.com/photo-1494790108377-be9c29b29330"}
              alt="Your avatar"
              fill
              className="rounded-full object-cover ring-1 ring-white/20"
            />
          </div>
          <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-transparent border-0 resize-none text-white placeholder-gray-500 focus:outline-none focus:ring-0"
            rows={1}
          />
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <div className="flex -ml-2 space-x-0.5">
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-white">
              <ImageIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-white">
              <LinkIcon className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8 text-gray-400 hover:text-white">
              <Smile className="h-4 w-4" />
            </Button>
          </div>
          <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white">
            Post
          </Button>
        </div>
      </div>
    </Card>
  );
}