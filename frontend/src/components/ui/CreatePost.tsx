'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ImagePlus, X } from 'lucide-react'

export default function CreatePost() {
  const [content, setContent] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 2* 1024 * 1024) {
        setError('Image size should be less than 5MB')
        return
      }
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      setError(null)
    }
  }

  const removeImage = () => {
    setImage(null)
    setImagePreview(null)
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!content.trim() && !image) {
      setError('Please add some content or an image to your post')
      return
    }
    
    // Here you would typically send the data to your backend
    console.log('Submitting post:', { content, image })
    
    // Reset form after submission
    setContent('')
    setImage(null)
    setImagePreview(null)
    setError(null)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Create a Post</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="What's on your mind?"
            value={content}
            onChange={handleContentChange}
            className="min-h-[100px]"
          />
          {imagePreview && (
            <div className="mt-4 relative">
              <img src={imagePreview || "/placeholder.svg"} alt="Preview" className="max-w-full h-auto rounded" />
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2"
                onClick={removeImage}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </CardContent>
        <CardFooter className="flex justify-between">
          <div>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
            <label htmlFor="image-upload">
              <Button type="button" variant="outline" size="icon">
                <ImagePlus className="h-4 w-4" />
              </Button>
            </label>
          </div>
          <Button type="submit">Post</Button>
        </CardFooter>
      </form>
    </Card>
  )
}

