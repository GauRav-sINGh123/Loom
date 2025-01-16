import Image from 'next/image'
import { Heart, MessageCircle } from 'lucide-react'

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PostCard() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="p-4">
        <div className="relative aspect-video w-full mb-4">
          <Image
            src="/placeholder.svg?height=300&width=400"
            alt="Post image"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p className="text-sm text-gray-600">
          This is a simple post with some content. Check out this amazing view!
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center px-4 py-2 bg-gray-50">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="flex items-center space-x-1 px-2">
            <Heart className="h-4 w-4" />
            <span>42</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-1 px-2">
            <MessageCircle className="h-4 w-4" />
            <span>7</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

