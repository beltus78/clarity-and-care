import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Shield, 
  Award, 
  Clock, 
  Users, 
  Heart, 
  Truck, 
  Star,
  CheckCircle,
  Globe,
  Lock
} from "lucide-react";

// Import images
import laboratoryImg from "@/assets/about/laboratory.jpg";
import teamImg from "@/assets/about/team.jpg";
import warehouseImg from "@/assets/about/warehouse.jpg";
import customerServiceImg from "@/assets/about/customer-service.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every medication undergoes rigorous quality control testing to ensure safety and efficacy."
    },
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Your health and wellbeing are at the center of everything we do."
    },
    {
      icon: Lock,
      title: "Privacy & Security",
      description: "Complete discretion and secure transactions with advanced encryption technology."
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Fast, dependable delivery and responsive customer support when you need it most."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Satisfied Customers" },
    { number: "10+", label: "Years Experience" },
    { number: "99.9%", label: "Quality Guarantee" },
    { number: "24/7", label: "Customer Support" }
  ];

  const certifications = [
    "MHRA Licensed",
    "GMP Certified",
    "ISO 9001:2015",
    "NHS Approved",
    "EU GDP Compliant"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Pills4Sale UK",
    "description": "UK's trusted source for premium pharmaceutical products with secure Bitcoin payments and fast delivery.",
    "url": "https://pills4sale.co.uk",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "GB"
    }
  };

  return (
    <main className="container mx-auto py-10">
      <SEO 
        title="About Pills4Sale UK — Your Trusted Pharmaceutical Partner" 
        description="Learn about Pills4Sale UK's commitment to quality pharmaceuticals, patient care, and secure medication delivery across the United Kingdom." 
        structuredDataJSON={structuredData}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-16"
      >
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.h1 
            className="text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            About Pills4Sale UK
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            For over a decade, Pills4Sale UK has been the trusted pharmaceutical partner for thousands 
            of customers across the United Kingdom. We combine cutting-edge technology with traditional 
            values of care, quality, and reliability to deliver exceptional pharmaceutical services.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {certifications.map((cert) => (
              <Badge key={cert} variant="outline" className="px-3 py-1">
                <CheckCircle className="h-3 w-3 mr-1" />
                {cert}
              </Badge>
            ))}
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </section>

        {/* Our Story Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2013, Pills4Sale UK emerged from a simple yet powerful vision: to make 
                essential medications accessible to everyone across the United Kingdom while maintaining 
                the highest standards of quality and safety.
              </p>
              <p>
                What started as a small pharmacy operation has grown into one of the UK's most trusted 
                pharmaceutical distributors, serving over 50,000 satisfied customers. Our journey has 
                been marked by continuous innovation, from being early adopters of secure cryptocurrency 
                payments to implementing advanced quality control measures.
              </p>
              <p>
                Today, we stand as a testament to the power of putting patients first, combining modern 
                technology with traditional pharmaceutical expertise to deliver exceptional care and service.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={laboratoryImg}
              alt="State-of-the-art pharmaceutical laboratory with quality control testing"
              className="rounded-lg shadow-lg w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </section>

        {/* Our Values */}
        <section>
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Team Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <img
              src={teamImg}
              alt="Professional pharmacy team of healthcare experts"
              className="rounded-lg shadow-lg w-full h-auto"
              loading="lazy"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl font-bold mb-6">Our Expert Team</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our team of licensed pharmacists, healthcare professionals, and customer service 
                specialists brings decades of combined experience in pharmaceutical care. Each team 
                member is committed to upholding the highest standards of professional excellence.
              </p>
              <p>
                Led by our qualified pharmacists who oversee every aspect of our operations, from 
                medication sourcing and quality control to patient consultation and care coordination. 
                Our customer service team is available 24/7 to provide support and guidance.
              </p>
              <p>
                Continuous professional development ensures our team stays current with the latest 
                pharmaceutical advances, regulatory requirements, and best practices in patient care.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Quality & Safety */}
        <section>
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Quality & Safety Standards
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">MHRA Licensed Operations</h3>
                    <p className="text-muted-foreground text-sm">
                      All operations are conducted under strict MHRA licensing requirements, 
                      ensuring compliance with UK pharmaceutical regulations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">GMP Manufacturing Standards</h3>
                    <p className="text-muted-foreground text-sm">
                      All medications sourced from GMP-certified manufacturers with complete 
                      chain of custody documentation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">International Quality Standards</h3>
                    <p className="text-muted-foreground text-sm">
                      ISO 9001:2015 certified quality management systems ensuring consistent 
                      excellence in all operations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src={warehouseImg}
                alt="Secure pharmaceutical warehouse with temperature-controlled storage"
                className="rounded-lg shadow-lg w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>
        </section>

        {/* Technology & Innovation */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={customerServiceImg}
              alt="Modern customer service center with digital pharmaceutical systems"
              className="rounded-lg shadow-lg w-full h-auto"
              loading="lazy"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Technology & Innovation</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We leverage cutting-edge technology to enhance every aspect of pharmaceutical care. 
                Our advanced inventory management systems ensure optimal medication storage conditions 
                and real-time tracking throughout the supply chain.
              </p>
              <p>
                As pioneers in cryptocurrency payments for pharmaceuticals, we offer secure Bitcoin 
                transactions with live exchange rates, providing customers with modern, private 
                payment options while maintaining full regulatory compliance.
              </p>
              <p>
                Our digital platforms integrate seamlessly with customer needs, offering intuitive 
                interfaces, comprehensive medication information, and responsive customer support 
                across all channels.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Commitment Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 md:p-12">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Pills4Sale UK, we understand that access to quality medications is fundamental to 
              health and wellbeing. Our commitment extends beyond simply dispensing medications – 
              we're dedicated to being your trusted healthcare partner, providing the expertise, 
              support, and care you deserve.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <span className="font-medium">Excellence in Service</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-medium">Patient-Centered Care</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="font-medium">Reliable Delivery</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/products">Explore Our Products</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </main>
  );
};

export default About;