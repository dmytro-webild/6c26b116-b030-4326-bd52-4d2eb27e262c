import { Outlet } from 'react-router-dom';

import { StyleProvider } from '@/components/ui/StyleProvider';
import SiteBackgroundSlot from '@/components/ui/SiteBackgroundSlot';
import NavbarFullscreen from "@/components/ui/NavbarFullscreen";
import FooterBrand from "@/components/sections/footer/FooterBrand";

export default function Layout() {
  return (
    <StyleProvider buttonVariant="default" siteBackground="none" heroBackground="none">
      <SiteBackgroundSlot />
      <NavbarFullscreen
                logo="Smile Dental"
                navItems={[
                  { name: "Services", href: "#services" },
                  { name: "Our Team", href: "#team" },
                ]}
                ctaButton={{ text: "Book Appointment", href: "#book" }}
              />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterBrand
                brand="Smile Dental"
                columns={[
                  {
                    items: [
                      { label: "Services", href: "#services" },
                      { label: "Checkups", href: "#services" },
                      { label: "Whitening", href: "#services" },
                    ],
                  },
                  {
                    items: [
                      { label: "Locations", href: "#locations" },
                      { label: "Hours", href: "#locations" },
                      { label: "Our Team", href: "#team" },
                    ],
                  },
                  {
                    items: [
                      { label: "Contact", href: "#contact" },
                      { label: "Careers", href: "#careers" },
                      { label: "Patient Portal", href: "#portal" },
                    ],
                  },
                ]}
              />
    </StyleProvider>
  );
}
