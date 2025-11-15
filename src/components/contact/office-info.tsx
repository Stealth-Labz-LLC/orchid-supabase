import { Phone, Mail, Clock } from "lucide-react";

export function OfficeInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="rounded-2xl border bg-card p-8 shadow-lg">
        <h3 className="mb-6 text-2xl font-bold">Get in Touch</h3>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="mb-1 font-semibold">Phone</h4>
              <p className="text-sm text-muted-foreground">
                <a href="tel:919079003238" className="hover:text-primary">
                  +91 9079003238
                </a>
              </p>
              {/* <p className="text-sm text-muted-foreground">
                <a href="tel:+18005551234" className="hover:text-primary">
                  +1 (800) 555-1234 (Toll-free)
                </a>
              </p> */}
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 shadow-lg">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="mb-1 font-semibold">Email</h4>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:info@orchidsw.com" className="hover:text-primary">
                  info@orchidsw.com
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="mailto:dev@orchidsw.com" className="hover:text-primary">
                  dev@orchidsw.com
                </a>
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <div>
              <h4 className="mb-1 font-semibold">Business Hours</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
