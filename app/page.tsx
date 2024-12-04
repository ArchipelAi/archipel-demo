'use client';
import { FlowCard } from '@/components/flow-card';
import { title, subtitle } from '@/components/primitives';

const APP_FEATURES = [
  {
    available: true,
    title: 'Order a Pizza',
    description: 'Get AI order a pizza for you',
    imageSrc: 'pizza-card-image-2.png',
    href: 'pizza',
  },
  {
    available: false,
    title: 'Trade Stocks',
    description: 'Get to AI Invest',
    imageSrc: 'invest-card-image.png',
    href: '',
  },
  {
    available: false,
    title: 'Write a Blog',
    description: 'Create a blog post',
    imageSrc: 'blog-card-image.jpeg',
    href: '',
  },
  {
    available: false,
    title: '',
    description: 'Create your own flow',
    imageSrc: 'custom-card-image.png',
    href: '',
  },
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Leverage&nbsp;</span>
        <span className={title({ color: 'cyan' })}>AI&nbsp;</span>
        <br />
        <span className={title()}>to solve everyday problems for you</span>
        <div className={subtitle({ class: 'mt-4' })}>
          Select a flow to get started
        </div>
      </div>

      <div className="flex gap-3">
        <div className="gap-2 flex px-8">
          {APP_FEATURES.map((feature) => (
            <FlowCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
