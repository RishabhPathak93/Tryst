import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/hair.jpeg';

const HairPage = () => {
  const hairServices = [
    {
      name: "Haircut & Style",
      description: "Expert haircut and styling personalized to enhance your unique features",
      price: "₹999 onwards",
      duration: "45-60 mins",
      bestFor: "All hair types"
    },
    {
      name: "Hair Coloring",
      description: "From subtle blends to bold statements, we've got the perfect shade for every mood",
      price: "₹2,999 onwards",
      duration: "2-3 hours",
      bestFor: "Color transformation",
      details: [
        "Ombré, balayage, highlights, or money pieces",
        "Sunkissed or À La Carte color options",
        "Healthy hair with major color energy"
      ]
    },
    {
      name: "Hair Treatments",
      description: "Specialized treatments to strengthen, restore, and transform your hair",
      price: "₹1,999 onwards",
      duration: "60-90 mins",
      bestFor: "Damaged hair",
      details: [
        "Olaplex, keratin, and hair spa treatments",
        "Scalp rejuvenation and deep conditioning",
        "Formaldehyde-free Hair Botox"
      ]
    },
    {
      name: "Blowout & Styling",
      description: "Professional blow dry and styling for any occasion with lasting results",
      price: "₹899 onwards",
      duration: "45 mins",
      bestFor: "Special events"
    },
    {
      name: "Hair Extensions",
      description: "High-quality extensions for added length and volume",
      price: "₹15,000 onwards",
      duration: "2-3 hours",
      bestFor: "Instant length"
    },
    {
      name: "Bridal Hair",
      description: "Exquisite bridal hair styling for your special day",
      price: "₹8,000 onwards",
      duration: "2-3 hours",
      bestFor: "Weddings"
    }
  ];

  return (
    <ServiceTemplate
      title="Hair Services"
      subtitle="Experience the art of hair transformation with our expert stylists"
      heroImage={backgroundImage}
      services={hairServices}
      additionalContent={
        <>
          <section className="py-8 bg-white">
            <div className="container max-w-4xl px-4 mx-auto">
              <div className="p-8 rounded-lg bg-almond/10">
                <h2 className="mb-6 text-3xl font-bold text-center font-lora text-salon-purple">HAIR COLORING</h2>
                <div className="space-y-4 text-jet/90">
                  <p className="text-center">Time to color your world — your way! From subtle blends to bold statements, we've got the perfect shade for every mood. Your hair, your rules, let's get you glowing — book today!</p>
                </div>
                
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-center font-lora text-salon-purple">Go Bold with Color – Your Hair, Your Rules!</h3>
                <div className="space-y-4 text-jet/90">
                  <p>At Tryst, we don't just color hair — we create head-turning magic! Whether you're vibing with ombré, craving bold streaks, or dreaming of balayage, highlights, or even money pieces — we've got the skills to make it pop.</p>
                  <p className="p-4 mt-6 text-lg font-medium text-center rounded bg-salon-purple/10 text-salon-purple">
                    ✨ Pick your vibe with our healthy coloring options!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-4 bg-almond/10">
            <div className="container max-w-4xl px-4 mx-auto">
              <div className="p-8 rounded-lg bg-white/90">
                <h2 className="mb-6 text-3xl font-bold text-center font-lora text-salon-purple">HAIR TEXTURE</h2>
                <div className="space-y-4 text-jet/90">
                  <p>We get it — keeping your hair healthy can be a challenge! From hard water to pollution, your hair faces it all. Step into our salon and treat your hair to the care it deserves.</p>
                </div>
                
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-center font-lora text-salon-purple">From Frizz to Fabulous — Reinvent Your Texture</h3>
                <div className="space-y-4 text-jet/90">
                  <p>Wave goodbye to hair worries with our expert treatments. Whether it's scalp rejuvenation, deep conditioning, or intensive nourishment — we've got your hair's health covered.</p>
                  <p className="p-4 mt-6 text-lg font-medium text-center rounded bg-salon-purple/10 text-salon-purple">
                    ✨ Transform your hair texture today!
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

export default HairPage;