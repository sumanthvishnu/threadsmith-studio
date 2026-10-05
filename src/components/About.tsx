import { Card, CardContent } from '@/components/ui/card';
import { Layers, PenTool, ShieldCheck } from 'lucide-react';

export function About() {
  const principles = [
    {
      icon: Layers,
      title: 'Cloth first',
      description:
        'We start from fabric weight and hand feel, not from a design file. The target for our first tees is heavy combed cotton around 260 GSM, in the 240 to 300 GSM band our sampling allows.',
    },
    {
      icon: PenTool,
      title: 'Decoration done properly',
      description:
        'Wash-fast prints and real embroidery, sometimes both on one shirt, sometimes embroidery alone. We would rather delay a drop than ship a print that fades.',
    },
    {
      icon: ShieldCheck,
      title: 'No pretending',
      description:
        'We do not show fake reviews, borrowed photography, or stock that does not exist. If something is a placeholder or a concept, it says so on the page.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 bg-neutral-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            About Threadsmith
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            A heavy-tee studio from Chennai, built by one founder who got tired
            of thin, disposable t-shirts.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The story</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Threadsmith started with a simple complaint: most tees look good
              for three washes and then give up. The collar sags, the print
              cracks, the fabric twists. Premium versions exist, but usually at
              prices that make a t-shirt feel like a luxury purchase.
            </p>
            <p>
              So the plan is narrow on purpose. Black, oversized, drop-shoulder
              tees on heavy combed cotton. Strong graphics applied as wash-fast
              prints. Real embroidery where a mark deserves thread instead of
              ink. Unisex fits, made to be worn hard.
            </p>
            <p>
              Threadsmith is a Chennai-based founder brand. We are sampling
              cloth and decoration with garment manufacturers right now, and
              the first drop opens only when the quality is right. Until then,
              this site shows honest placeholders and a waitlist, nothing more.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What we care about
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {principles.map((principle, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-neutral-900 flex items-center justify-center mb-4">
                    <principle.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 text-sm">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Where we are */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Where we are today</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Fabric and decoration sampling is in progress. Final artwork is
            being developed. There is no warehouse full of stock and no fake
            countdown timer here.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you want to know the moment the first drop opens, add a tee to
            your waitlist cart and leave your email. That is the whole deal.
          </p>
        </div>
      </section>
    </div>
  );
}
