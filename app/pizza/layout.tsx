import { title } from '@/components/primitives';
import { Link } from '@nextui-org/link';

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <Link href="/" color='danger'>Back</Link>
        <h1 className={title()}>Order a Pizza</h1>
      </div>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <div className="inline-block">{children}</div>
      </section>
    </div>
  );
}
