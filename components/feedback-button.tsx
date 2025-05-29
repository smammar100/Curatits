"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquareIcon as MessageSquarePen } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function FeedbackButton() {
  const [open, setOpen] = useState(false)
  const [rating, setRating] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    // For now, we'll just close the dialog
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2">
          <MessageSquarePen className="h-4 w-4" />
          <span>Share feedback</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium">📝 Curatit Feedback Form</DialogTitle>
          <DialogDescription className="text-base">
            We'd love your feedback! Help us make Curatit even better for you.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="role">1. What best describes your role?</Label>
            <Select>
              <SelectTrigger id="role">
                <SelectValue placeholder="Select your role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="designer">👩‍🎨 Designer</SelectItem>
                <SelectItem value="marketer">📣 Marketer</SelectItem>
                <SelectItem value="developer">🧑‍💻 Developer</SelectItem>
                <SelectItem value="founder">🎯 Founder / Product Owner</SelectItem>
                <SelectItem value="creator">✍️ Content Creator</SelectItem>
                <SelectItem value="strategist">🧠 Strategist</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="improvement">2. What's one thing you wish Curatit did better?</Label>
            <Textarea id="improvement" placeholder="Share your thoughts..." className="min-h-[80px]" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="brand">3. Suggest a brand you'd like to see posts from:</Label>
            <Input id="brand" placeholder="e.g., Notion, Figma, Liquid Death, Monzo, Glossier" />
          </div>

          <div className="space-y-2">
            <Label>4. How would you rate your experience so far?</Label>
            <RadioGroup className="flex justify-between" value={rating || ""} onValueChange={setRating}>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="1" id="r1" className="sr-only" />
                <Label
                  htmlFor="r1"
                  className={`text-2xl cursor-pointer ${rating === "1" ? "opacity-100" : "opacity-50"}`}
                >
                  😞
                </Label>
                <span className="text-xs">1</span>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="2" id="r2" className="sr-only" />
                <Label
                  htmlFor="r2"
                  className={`text-2xl cursor-pointer ${rating === "2" ? "opacity-100" : "opacity-50"}`}
                >
                  😕
                </Label>
                <span className="text-xs">2</span>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="3" id="r3" className="sr-only" />
                <Label
                  htmlFor="r3"
                  className={`text-2xl cursor-pointer ${rating === "3" ? "opacity-100" : "opacity-50"}`}
                >
                  😐
                </Label>
                <span className="text-xs">3</span>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="4" id="r4" className="sr-only" />
                <Label
                  htmlFor="r4"
                  className={`text-2xl cursor-pointer ${rating === "4" ? "opacity-100" : "opacity-50"}`}
                >
                  🙂
                </Label>
                <span className="text-xs">4</span>
              </div>
              <div className="flex flex-col items-center">
                <RadioGroupItem value="5" id="r5" className="sr-only" />
                <Label
                  htmlFor="r5"
                  className={`text-2xl cursor-pointer ${rating === "5" ? "opacity-100" : "opacity-50"}`}
                >
                  😄
                </Label>
                <span className="text-xs">5</span>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full rounded-full bg-[#FF7A5A] hover:bg-[#FF6A4A] text-white">
            Send Feedback
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
