import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/nail.jpeg';

const NailPage = () => {
  const nailServices = [
    {
      name: "Classic Manicure",
      description: "Premium manicure with cuticle care, shaping, buffing and polish",
      price: "₹999 onwards",
      duration: "45 mins",
      bestFor: "Regular maintenance",
      details: [
        "Cuticle treatment and nail shaping",
        "Hand massage with luxury lotion",
        "Choice of regular polish",
        "Standard finish"
      ]
    },
    {
      name: "Luxury Pedicure",
      description: "Relaxing pedicure treatment with extended massage and care",
      price: "₹1,499 onwards",
      duration: "60 mins",
      bestFor: "Foot rejuvenation",
      details: [
        "Exfoliating foot soak",
        "Callus treatment and nail shaping",
        "Extended lower leg massage",
        "Choice of regular polish"
      ]
    },
    {
      name: "Gel Polish Application",
      description: "Long-lasting gel nail application with chip-resistant finish",
      price: "₹1,799 onwards",
      duration: "75 mins",
      bestFor: "Durable wear",
      details: [
        "Includes full manicure",
        "Base coat application",
        "2-3 weeks of wear",
        "Specialized LED curing"
      ]
    },
    {
      name: "Signature Nail Art",
      description: "Custom nail art and creative designs for special occasions",
      price: "₹699 onwards",
      duration: "30+ mins",
      bestFor: "Special events",
      details: [
        "Hand-painted designs",
        "Ombre and glitter options",
        "French twist variations",
        "Stencils and stamping"
      ]
    },
    {
      name: "Acrylic Extensions",
      description: "Professional acrylic nail extensions with custom shaping",
      price: "₹2,499 onwards",
      duration: "90 mins",
      bestFor: "Length and strength",
      details: [
        "Custom length and shape",
        "Strong acrylic application",
        "Includes polish",
        "2-3 week fill recommended"
      ]
    },
    {
      name: "Nail Repair Service",
      description: "Specialized repair for damaged or broken nails",
      price: "₹899 onwards",
      duration: "30 mins",
      bestFor: "Nail emergencies",
      details: [
        "Crack and break repair",
        "Nail reinforcement",
        "Temporary solutions",
        "Preventative care"
      ]
    },
    {
      name: "Spa Manicure & Pedicure",
      description: "Ultimate pampering package for hands and feet",
      price: "₹2,999 onwards",
      duration: "120 mins",
      bestFor: "Complete indulgence",
      details: [
        "Paraffin wax treatment",
        "Extended massage session",
        "Exfoliating scrub",
        "Hot towel treatment"
      ]
    },
    {
      name: "Bridal Nail Package",
      description: "Special bridal preparation for wedding events",
      price: "₹4,199 onwards",
      duration: "150 mins",
      bestFor: "Wedding preparation",
      details: [
        "Manicure & pedicure combo",
        "Gel polish application",
        "Custom nail art",
        "Champagne service included"
      ]
    }
  ];

  return (
    <ServiceTemplate
      title="Nail Care Services"
      subtitle="Pamper your hands and feet with our professional nail care services"
      heroImage={backgroundImage}
      services={nailServices}
      additionalContent={
        <>
          <section className="py-16 bg-white">
            <div className="container max-w-4xl px-4 mx-auto">
              <div className="p-8 rounded-lg bg-almond/10">
                <h2 className="mb-6 text-3xl font-bold text-center font-lora text-salon-purple">Nail Art</h2>
                <div className="space-y-4 text-jet/90">
                  <p className="text-center">From boardrooms to bridal moments — or simply because it's your day — our expert nail artists are here to create stunning, occasion-ready nails that match your vibe perfectly.</p>
                </div>
                
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-center font-lora text-salon-purple">Tip Top & Toe-tally Fab</h3>
                <div className="space-y-4 text-jet/90">
                  <p>Whether you're keeping it classic or going full glam, our nail experts are here to turn your ideas into stunning designs. From custom shapes and detailed art to luxurious finishes for hands and feet — every session is a pampering experience.</p>
                  <p className="p-4 mt-6 text-lg font-medium text-center rounded bg-salon-purple/10 text-salon-purple">
                    ✨ Book your appointment now and let your nails steal the spotlight.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-almond/10">
            <div className="container max-w-4xl px-4 mx-auto">
              <div className="p-8 rounded-lg bg-white/90">
                <h2 className="mb-6 text-3xl font-bold text-center font-lora text-salon-purple">Hands & Feet</h2>
                <div className="space-y-4 text-jet/90">
                  <p>Your nails need care, attention, and a touch of beauty too. Elevate your self-care routine with our expert manicures and pedicures — from timeless, clean finishes to intricate, artistic designs. We'll make sure your hands and feet look and feel flawless, leaving you polished, pampered, and ready to shine.</p>
                </div>
                
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-center font-lora text-salon-purple">Style Starts at Your Fingertips</h3>
                <div className="space-y-4 text-jet/90">
                  <p>From gel finishes to classic French tips, get the shape, length, and style you love. Indulge in our signature, luxe pedicure treatments and more — tailored to pamper and perfect.</p>
                  <p className="p-4 mt-6 text-lg font-medium text-center rounded bg-salon-purple/10 text-salon-purple">
                    ✨ Choose your indulgence and book your appointment today for a truly lavish nail care experience.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      }
    />
  );
};

export default NailPage;