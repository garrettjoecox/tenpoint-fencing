import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Shield, Users, Award, DollarSign } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-accent-foreground" />
            <h1 className="text-2xl font-bold text-foreground">TenPoint Fencing LLC</h1>
          </div>
          <a href="tel:405-615-0985">
            <Button className="bg-accent-foreground hover:bg-accent-foreground/90">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-foreground mb-6">Quality Fencing Solutions You Can Trust</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Family-owned and operated, TenPoint Fencing LLC provides reliable fencing solutions for residential,
            commercial, and agricultural properties with quality craftsmanship and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact">
              <Button size="lg" className="bg-accent-foreground hover:bg-accent-foreground/90">
                Get Free Estimate
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <img
            src="professional-fence-installation-team-working-on-re.png"
            alt="Professional fence installation"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-foreground mb-12">Why Choose TenPoint Fencing?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-accent-foreground mx-auto mb-4" />
                <CardTitle>Family-Owned & Operated</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  We treat every customer like family with personalized service and attention to detail.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-accent-foreground mx-auto mb-4" />
                <CardTitle>Military Discounts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Our way of saying thank you to those who have served our country.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-accent-foreground mx-auto mb-4" />
                <CardTitle>Durable & Long-Lasting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Built with quality materials designed to withstand the test of time.</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-accent-foreground mx-auto mb-4" />
                <CardTitle>Free Estimates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Know your options and costs before committing to any project.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-foreground mb-12">Our Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <img
                  src="beautiful-privacy-fence-around-residential-backyar.png"
                  alt="Privacy Fencing"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>Privacy Fences</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Create your private oasis with our custom privacy fencing solutions designed for comfort and security.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img
                  src="elegant-decorative-fence-with-ornamental-design.png"
                  alt="Decorative Fencing"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>Decorative Fences</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Enhance your property's curb appeal with beautiful decorative fencing that combines style and
                  function.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img
                  src="agricultural-livestock-fencing-on-farm-property.png"
                  alt="Agricultural Fencing"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>Agricultural / Livestock Fencing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Protect your livestock and crops with durable agricultural fencing built for farm and ranch
                  properties.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img
                  src="commercial-security-fence-around-business-property.png"
                  alt="Security Fencing"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>Security & Commercial Fencing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure your business with professional-grade commercial and security fencing solutions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <img
                  src="fence-repair-and-maintenance-work-being-performed.png"
                  alt="Fence Repairs"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <CardTitle>Fence Repairs & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Keep your existing fence in top condition with our professional repair and maintenance services.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-foreground mb-12">Ready to Build a Fence That Lasts?</h3>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h4 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h4>
              <p className="text-muted-foreground mb-8">
                Serving the OKC Area with quality fencing solutions. Contact us today for your free estimate!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-accent-foreground" />
                  <span className="text-foreground">(405) 615-0985</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent-foreground" />
                  <span className="text-foreground">TenPointFence@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-accent-foreground" />
                  <span className="text-foreground">Serving the OKC Area</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Request a Quote</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon!</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your full name" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email address" />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your fencing project..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-accent-foreground hover:bg-accent-foreground/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6" />
            <span className="text-xl font-bold">TenPoint Fencing LLC</span>
          </div>
          <p className="text-muted mb-2">Family-owned and operated fencing solutions</p>
          <p className="text-sm text-muted">© {new Date().getFullYear()} TenPoint Fencing LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
