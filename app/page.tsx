/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    name: "Store your PDF documents",
    description: "Keep all your PDF documents securely stored and easily accessible anytime, anywhere.",
    icon: GlobeIcon,
  },
  {
    name: "Blazing Fast Response",
    description: "Experience LIGHTNING-FAST answers to your queries!",
    icon: ZapIcon,
  },
  {
    name: "Chat Memorization",
    description: "Our SMART chat-box remembers your previous chats, providing seamless and personalized experience.",
    icon: BrainCogIcon,
  },
  {
    name: "Interactive PDF viewer",
    description: "Engage with your PDFs like never before using our intuitive and interactive viewer.",
    icon: EyeIcon,
  },
  {
    name: "Cloud Back-up",
    description: "Rest assured knowing your docs are safely backed-up on the cloud, protected from loss or damage.",
    icon: ServerCogIcon,
  },
  {
    name: "Responsive Across Devices",
    description: "Access and chat with your PDF documents seamlessly on any device: Laptop, Tablet, Desktop, or your smartphone.",
    icon: MonitorSmartphoneIcon,
  },
]
export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-purple-900">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-8 text-purple-900">Your Interactive Document Companion</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Transform Your PDFs Into Interactive Conversations</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-purple-900">Chat with PDF.</span>
              <br />
              <br /> Upload your documents and our chatbox will answer all your questions and summarize content. Our chatbox is ideal for{" "} 
              <span className="font-bold">everyone.</span>
              <span className="font-bold text-purple-900"> Chat with PDF</span>{" "}
              turns static documents into {" "}
              <span className="font-bold">dynamic conversations</span>,
              enhacing productivity 10x fold effortlessly!
            </p>
          </div>
          <Button asChild className="mt-7">
            <Link href="/dashboard">Sign Up Now</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <img 
              src="https://i.imgur.com/VciRSTI.jpeg" 
              alt="App Screenshot"
              width={2432}
              height={1442}
              className="mb-[-0%] ring-1 rounded-xl shadow-2xl ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/90 pt-[5%]"/>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div className="relative pl-9">
                <dt className=" inline font-semibold text-gray-900">
                  <feature.icon 
                  aria-hidden="true"
                  className="absolute left-1 top-1 h-5 w-5 text-purple-900"
                  />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ) )}
          </dl>
        </div>
      </div>
    </main>
  );
}
