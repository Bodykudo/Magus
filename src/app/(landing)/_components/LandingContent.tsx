'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Emily Thompson',
    avatar: 'E',
    title: 'Graphic Designer',
    description:
      "Magus is a game-changer for my creative process! The AI-powered image generation is mind-blowing, and the chatbot is incredibly intelligent. It's become an indispensable tool in my workflow.",
  },
  {
    name: 'Alex Ramirez',
    avatar: 'A',
    title: 'Data Scientist',
    description:
      "As a data scientist, Magus has exceeded my expectations. The code generation capabilities are impressive, and the AI assistant provides valuable insights. It's like having a brilliant coding partner at my fingertips.",
  },
  {
    name: 'Sophia Chen',
    avatar: 'S',
    title: 'Music Producer',
    description:
      "Magus has revolutionized my music production process. The music generation feature is outstanding, helping me explore new melodies and harmonies effortlessly. It's a must-have for any musician!",
  },
  {
    name: 'Carlos Rodriguez',
    avatar: 'C',
    title: 'Video Editor',
    description:
      "I can't imagine my video editing without Magus. The AI-driven video generation saves me so much time, and the results are stunning. It's like having a virtual assistant that understands my creative vision.",
  },
  {
    name: 'Linda Johnson',
    avatar: 'L',
    title: 'Web Developer',
    description:
      "Magus is a developer's dream come true! The code generation feature is a lifesaver, and the intelligent assistant makes problem-solving a breeze. It has become an essential part of my toolkit.",
  },
  {
    name: 'David Smith',
    avatar: 'D',
    title: 'Content Creator',
    description:
      "Magus has transformed the way I create content. The AI magic behind image, video, and code generation is unparalleled. It's like having a versatile creative partner that never runs out of ideas!",
  },
];

export default function LandingContent() {
  return (
    <div className='px-10 pb-20'>
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
        Testimonials
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {testimonials.map((item, i) => (
          <Card key={i} className='bg-[#192339] border-none text-white'>
            <CardHeader>
              <CardTitle className='flex items-center gap-x-2'>
                <div>
                  <p className='text-lg'>{item.name}</p>
                  <p className='text-zinc-400 text-sm'>{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className='pt-4 px-0'>
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
