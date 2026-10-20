import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Content } from "@radix-ui/react-dialog";
import { ArrowRight, X } from "lucide-react";
import { CTA } from "@/components/cta";
import {
  Dialog,
  DialogClose,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";

export function BeginnerCoursePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay className="z-[100] bg-ink/50" />
        <Content
          aria-describedby={undefined}
          className="fixed left-1/2 top-1/2 z-[101] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-md border border-line bg-bone px-7 py-12 text-center shadow-lg sm:px-12"
        >
          <DialogClose asChild>
            <CTA
              variant="link"
              aria-label="Pop-up schließen"
              title="Schließen"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center p-0 after:hidden"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </CTA>
          </DialogClose>
          <DialogTitle className="font-display text-3xl font-normal leading-[1.2] tracking-normal text-ink sm:text-4xl">
            Melde Dich jetzt zum <em>Yoga Anfängerkurs</em> an
          </DialogTitle>
          <CTA asChild className="mt-8">
            <Link to="/kurse/anfaengerkurs" onClick={() => setOpen(false)}>
              Zum Anfängerkurs
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </CTA>
        </Content>
      </DialogPortal>
    </Dialog>
  );
}