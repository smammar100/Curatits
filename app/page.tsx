import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { FeedbackButton } from "@/components/feedback-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="sticky top-0 z-10 border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-semibold">Curatit</span>
          </Link>
          <FeedbackButton />
        </div>
      </header>
      <main className="flex-1">
        <section className="py-24 text-center px-4">
          <div className="container mx-auto max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Inspiration, organized.</h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Discover and save top-performing social media posts for your next marketing campaign.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Input
                type="text"
                placeholder="Search for brands, campaigns, or styles..."
                className="pl-10 h-14 rounded-full shadow-sm text-base"
              />
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-2xl font-medium mb-12 text-center">Top-performing social media posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {posts.map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border shadow-sm hover:shadow-md transition-all duration-200 rounded-xl"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={`${post.company} social media post`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-8 h-8 relative mr-2">
                          <Image
                            src={post.logo || "/placeholder.svg"}
                            alt={post.company}
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                          />
                        </div>
                        <span className="font-medium">{post.company}</span>
                      </div>
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-muted-foreground"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        <span className="sr-only">Download</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg" className="rounded-full">
                Load more
              </Button>
            </div>
          </div>
        </section>

        <section className="h-screen flex flex-col items-center justify-between bg-white px-4 overflow-hidden">
          <div className="flex-1 flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground">
                &lt;replace with the text contents&gt;
              </h2>
              <p className="text-muted-foreground">Unsubscribe anytime.</p>
            </div>

            <div className="flex w-full max-w-md mb-16">
              <Input type="email" placeholder="Enter your email" className="rounded-r-none h-12 flex-1" />
              <Button className="rounded-l-none h-12 px-6">Subscribe</Button>
            </div>
          </div>

          <div className="relative w-full h-[40vh] flex items-end justify-center">
            {/* Image stack */}
            <div className="relative flex items-end justify-center w-full transform scale-125">
              {/* First image (leftmost) */}
              <div className="absolute h-[20vh] w-[15%] rounded-t-lg overflow-hidden bg-gray-100 -ml-[47%] z-10">
                <Image
                  src="/placeholder.svg?height=200&width=100"
                  alt="Gallery image 1"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Second image */}
              <div className="absolute h-[25vh] w-[15%] rounded-t-lg overflow-hidden bg-gray-200 -ml-[31%] z-20">
                <Image
                  src="/placeholder.svg?height=250&width=100"
                  alt="Gallery image 2"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Third image */}
              <div className="absolute h-[30vh] w-[15%] rounded-t-lg overflow-hidden bg-gray-300 -ml-[16%] z-30">
                <Image
                  src="/placeholder.svg?height=300&width=100"
                  alt="Gallery image 3"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Fourth image (center, largest) */}
              <div className="absolute h-[35vh] w-[15%] rounded-t-lg overflow-hidden bg-gray-400 z-40">
                <Image
                  src="/placeholder.svg?height=350&width=100"
                  alt="Gallery image 4"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Fifth image */}
              <div className="absolute h-[30vh] w-[15%] rounded-t-lg overflow-hidden bg-gray-300 ml-[16%] z-30">
                <Image
                  src="/placeholder.svg?height=300&width=100"
                  alt="Gallery image 5"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Sixth image */}
              <div className="absolute h-[25vh] w-[15%] rounded-t-lg overflow-hidden bg-gray-200 ml-[31%] z-20">
                <Image
                  src="/placeholder.svg?height=250&width=100"
                  alt="Gallery image 6"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Seventh image (rightmost) */}
              <div className="absolute h-[20vh] w-[15%] rounded-t-lg overflow-hidden bg-gray-100 ml-[47%] z-10">
                <Image
                  src="/placeholder.svg?height=200&width=100"
                  alt="Gallery image 7"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

// Generate 48 sample posts
const companies = [
  "Airbnb",
  "Spotify",
  "Nike",
  "Apple",
  "Starbucks",
  "Tesla",
  "Google",
  "Amazon",
  "Microsoft",
  "Adidas",
  "Coca-Cola",
  "Netflix",
  "Uber",
  "Instagram",
  "Twitter",
  "Facebook",
]

const posts = Array.from({ length: 48 }, (_, i) => {
  const company = companies[i % companies.length]
  return {
    company,
    image: `/placeholder.svg?height=400&width=400&text=Post+${i + 1}`,
    logo: `/placeholder.svg?height=32&width=32&text=${company[0]}`,
  }
})
