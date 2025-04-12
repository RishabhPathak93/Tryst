import ServiceTemplate from './ServiceTemplate';
import backgroundImage from '../../assets/images/skin.jpeg';

const SkinPage = () => {
  const skinServices = [
    {
      name: "Facial Treatments",
      description: "Luxurious facials customized for your skin type using premium products",
      price: "₹2499 onwards",
      details: [
        "Deep cleansing and intense hydration treatments",
        "Targeted solutions for fine lines and dark spots",
        "Skin brightening and rejuvenation therapies"
      ],
      duration: "60-90 mins",
      bestFor: "All skin types"
    },
    {
      name: "Chemical Peels",
      description: "Advanced skin rejuvenation for texture improvement and glow",
      price: "₹3999 onwards",
      details: [
        "Reduce appearance of fine lines and deep lines",
        "Combat dullness and uneven skin tone",
        "Professional-grade solutions for radiant skin"
      ],
      duration: "45-60 mins",
      bestFor: "Aging, dull skin"
    },
    {
      name: "Microdermabrasion",
      description: "Diamond tip treatment for refined and renewed skin surface",
      price: "₹2999 onwards",
      duration: "30-45 mins",
      bestFor: "Texture improvement"
    },
    {
      name: "Acne Treatment",
      description: "Medical-grade targeted solutions for clear skin",
      price: "₹2499 onwards",
      duration: "60 mins",
      bestFor: "Acne-prone skin"
    },
    {
      name: "Anti-Aging Treatment",
      description: "Premium age-reversing treatments with advanced technology",
      price: "₹4999 onwards",
      details: [
        "Turn back time with our specialized therapies",
        "Combat pigmentation and restore elasticity",
        "Personalized solutions for your skin concerns"
      ],
      duration: "90 mins",
      bestFor: "Mature skin"
    },
    {
      name: "Skin Consultation",
      description: "Comprehensive analysis with personalized treatment plan",
      price: "₹999 onwards",
      duration: "30 mins",
      bestFor: "First-time clients"
    },
    {
      name: "Massage Therapies",
      description: "Pure relaxation designed to melt away stress and soothe your senses",
      price: "₹3499 onwards",
      details: [
        "Performed by skilled, trusted professionals",
        "Personalized escape into deep relaxation",
        "Restore balance and feel completely renewed"
      ],
      duration: "60-120 mins",
      bestFor: "Stress relief"
    }
  ];

  return (
    <ServiceTemplate
      title="Skin Care Services"
      subtitle="Advanced skincare treatments for radiant, healthy skin"
      heroImage={backgroundImage}
      services={skinServices}
      additionalContent={
        <>
          <section className="py-16 bg-white">
            <div className="container max-w-4xl px-4 mx-auto">
              <div className="p-8 rounded-lg bg-almond/10">
                <h2 className="mb-6 text-3xl font-bold text-center font-lora text-salon-purple">SKIN CARE</h2>
                <div className="space-y-4 text-jet/90">
                  <p>Need a quick refresh or a deep, rejuvenating glow? Whether you're after an express clean-up or a high-performance skin treatment, we've got you covered. From gentle exfoliation and intense hydration to targeted solutions for fine lines, deep lines, dark spots, and dullness — explore our full range of skin treatments.</p>
                  <p>From essential care and brightening to advanced anti-aging and skin repair, your glow-up starts here! Want to turn back time? Explore our wide range of treatments...</p>
                </div>
                
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-center font-lora text-salon-purple">Skin Deep, Glow Real</h3>
                <div className="space-y-4 text-jet/90">
                  <p>At Tryst, your skincare journey begins with a complimentary consultation from our expert professionals — tailored to your unique skin type and concerns. Our thoughtfully curated treatments are designed to nourish, rejuvenate, and celebrate your natural beauty — no matter your age, gender, or skin type.</p>
                  <p>From deep cleansing and hydration to skin brightening, anti-aging, pigmentation correction, and rejuvenation therapies — we've got everything your skin craves.</p>
                  <p className="p-4 mt-6 text-lg font-medium text-center rounded bg-salon-purple/10 text-salon-purple">
                    ✨ Book your appointment today and take the first step toward healthy, radiant skin!
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-almond/10">
            <div className="container max-w-4xl px-4 mx-auto">
              <div className="p-8 rounded-lg bg-white/90">
                <h2 className="mb-6 text-3xl font-bold text-center font-lora text-salon-purple">MASSAGE THERAPIES</h2>
                <div className="space-y-4 text-jet/90">
                  <p>Step into a space of pure relaxation with our carefully curated massage therapies. Performed by skilled, trusted professionals, each treatment is designed to melt away stress, soothe your senses, and leave you feeling completely renewed.</p>
                </div>
                
                <h3 className="mt-8 mb-4 text-2xl font-semibold text-center font-lora text-salon-purple">Let go, unwind, and immerse yourself in pure indulgence</h3>
                <div className="space-y-4 text-jet/90">
                  <p>At Tryst, our expert massage therapies are thoughtfully crafted to melt away tension, restore balance, and leave you feeling renewed from head to toe. Each session is a personalized escape into deep relaxation and total rejuvenation.</p>
                  <p className="p-4 mt-6 text-lg font-medium text-center rounded bg-salon-purple/10 text-salon-purple">
                    ✨ Step into serenity — your moment of bliss awaits. Book today.
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

export default SkinPage;