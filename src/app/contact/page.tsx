import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { MailIcon, PhoneIcon } from "@/components/icons";
// Restore MapPinIcon from @/components/icons with the office card.
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Sunayana Commercial Private Limited at its Kolkata registered office, by email, or by phone for general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        heading="Get in Touch"
        lede="Reach us by email or write to our registered office in Kolkata."
      />

      <section className="bg-background">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Restore when the registered office address is finalized.
            <div className="flex items-start gap-4 rounded-2xl border border-hairline bg-surface p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-dim text-teal">
                <MapPinIcon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-base font-bold text-navy">
                  Registered Office
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-grey">
                  {site.registeredOffice}
                </p>
              </div>
            </div>
            */}

            <div className="flex items-start gap-4 rounded-2xl border border-hairline bg-surface p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-dim text-teal">
                <MailIcon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-base font-bold text-navy">
                  General Inquiries
                </h2>
                <a
                  href={`mailto:${site.supportEmail}`}
                  className="mt-2 inline-block text-sm font-medium text-teal hover:text-navy"
                >
                  {site.supportEmail}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-hairline bg-surface p-7">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-dim text-teal">
                <PhoneIcon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-base font-bold text-navy">
                  Support
                </h2>
                <a
                  href={`tel:${site.supportPhone}`}
                  className="mt-2 inline-block text-sm font-medium text-teal hover:text-navy"
                >
                  {site.supportPhone}
                </a>
              </div>
            </div>

          </div>

          {/* Restore the map when the registered office address is finalized.
          <div className="overflow-hidden rounded-2xl border border-hairline bg-surface">
            <iframe
              title="Sunayana Commercial Private Limited registered office location"
              src="https://www.google.com/maps?q=10th+Floor,+Poddar+Point,+113+Park+Street,+Kolkata+700016&output=embed"
              className="h-full min-h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          */}
        </Container>
      </section>
    </>
  );
}
