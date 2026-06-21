import { Reveal } from "@/components/reveal";
import { Eyebrow } from "@/components/eyebrow";
import { DisplayHeading } from "@/components/display-heading";
import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
};

/**
 * Quiet sub-page header — Eyebrow + large headline + 1-line lead.
 * No hero image, no oversized banner. Sits at the top of every inner route.
 */
export function PageHeader({ eyebrow, title, lead }: Props) {
  return (
    <section className="bg-bone pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="container-editorial">
        <div className="max-w-[44rem]">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <DisplayHeading size="display" className="mt-6">
              {title}
            </DisplayHeading>
          </Reveal>
          {lead && (
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-[36rem] text-[1.05rem] leading-[1.7] text-taupe">
                {lead}
              </p>
            </Reveal>
          )}
        </div>
      </div>
      <div className="container-editorial mt-12">
        <hr className="hairline" />
      </div>
    </section>
  );
}
