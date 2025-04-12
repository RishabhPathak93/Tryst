import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/hair.jpeg'

const HairPage = () => {
  const hairServices = [
    {
      name: "Haircut & Style",
      description: "Expert haircut and styling personalized to enhance your unique features",
      price: "@999 onwards"
    },
    {
      name: "Hair Coloring",
      description: `Time to color your world — your way! From subtle blends to bold statements, we've got the perfect shade for every mood. Let our top color experts bring your vision to life with ombré, balayage, highlights, or money pieces — all while keeping your hair healthy.`,
      price: "@2999 onwards",
      details: [
        "Go Bold with Color – Your Hair, Your Rules!",
        "Pick your vibe with our Sunkissed or À La Carte color options",
        "No damage, just pure hair happiness with major color energy"
      ]
    },
    {
      name: "Hair Treatments",
      description: `From Frizz to Fabulous — Reinvent Your Texture! Wave goodbye to hair worries with our range of expert treatments including Olaplex, keratin, and specialized hair spa.`,
      price: "@1999 onwards",
      details: [
        "Scalp rejuvenation and deep conditioning treatments",
        "Intensive nourishment with Davines and Nashi products",
        "Premium Hair Botox treatment (formaldehyde-free and safe)",
        "Advanced smoothing services for long-lasting shine"
      ]
    },
    {
      name: "Blowout & Styling",
      description: "Professional blow dry and styling for any occasion with lasting results",
      price: "@899 onwards"
    },
    {
      name: "Hair Extensions",
      description: "High-quality hair extensions for added length and volume",
      price: "@15000 onwards"
    },
    {
      name: "Bridal Hair",
      description: "Exquisite bridal hair styling for your special day",
      price: "@8000 onwards"
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
          <section className="hair-coloring-section">
            <h2>HAIR COLORING</h2>
            <p>Time to color your world — your way! From subtle blends to bold statements, we've got the perfect shade for every mood. Your hair, your rules, let's get you glowing — book today! Let our top color experts bring your vision to life with shades that suit your style...</p>
            
            <h3>Go Bold with Color – Your Hair, Your Rules!</h3>
            <p>At Tryst, we don't just color hair — we create head-turning magic! Whether you're vibing with ombré, craving bold streaks, or dreaming of balayage, foliage, highlights, or even money piece (yep, we do that too!) — we've got the skills to make it pop.</p>
            <p>Pick your vibe with our Sunkissed or À La Carte color options — both designed to keep your hair healthy while bringing major color energy. No damage, just pure hair happiness!</p>
          </section>

          <section className="hair-texture-section">
            <h2>HAIR TEXTURE</h2>
            <p>We get it — keeping your hair healthy can be a challenge! From hard water and product buildup to pollution and humidity, your hair faces it all. At our salon, we offer wide range of expert treatments — whether you're looking to strengthen, restore, or transform your hair's texture. Step into our salon and treat your hair to the care it truly deserves.</p>
            
            <h3>From Frizz to Fabulous — Reinvent Your Texture</h3>
            <p>Wave goodbye to hair worries with our range of expert treatments. Whether it's scalp rejuvenation, deep conditioning, or intensive nourishment with Davines and Nashi — we've got your hair's health covered. Need a strength boost? Our Olaplex-infused solutions work wonders from inside out.</p>
            <p>For smoother texture and long-lasting shine, explore our advanced smoothing services or treat yourself to our premium, professional Hair Botox treatment — formaldehyde-free, absolutely safe, and completely transformative.</p>
          </section>
        </>
      }
    />
  );
};

export default HairPage;