import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Download,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Printer,
} from "lucide-react";

import { Projects } from "@/components/projects";
import { Reveal, Section } from "@/components/section";
import { SiteNav } from "@/components/site-nav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { profile } from "@/config/profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: profile.seo.title },
      { name: "description", content: profile.seo.description },
      { property: "og:title", content: profile.seo.title },
      { property: "og:description", content: profile.seo.description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Finance and Performance Associate",
          description: profile.seo.description,
          email: `mailto:${profile.contact.email}`,
          address: { "@type": "PostalAddress", addressCountry: profile.contact.location },
          sameAs: [profile.contact.linkedin],
          worksFor: { "@type": "Organization", name: "UNOPS" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  // Résumé is intentionally disconnected for now: set profile.resume.url to enable the buttons.
  const resumeUrl = profile.resume.url;

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="no-print pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.07] via-primary/[0.02] to-transparent"
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {profile.hero.eyebrow}
            </p>
            <span aria-hidden className="mt-5 block h-px w-14 bg-primary/60" />
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
              {profile.hero.headline}
            </h1>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
              {profile.hero.subheadline}
            </p>
            <div className="no-print mt-8 flex flex-wrap gap-3">
              {resumeUrl ? (
                <Button asChild size="lg">
                  <a href={resumeUrl} target="_blank" rel="noreferrer noopener">
                    {profile.hero.ctaPrimary}
                    <FileText className="size-4" aria-hidden />
                  </a>
                </Button>
              ) : (
                <Button size="lg" disabled title="Résumé coming soon">
                  {profile.hero.ctaPrimary}
                  <FileText className="size-4" aria-hidden />
                </Button>
              )}
              <Button asChild size="lg" variant="outline">
                <a href="#projects">
                  {profile.hero.ctaSecondary}
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      {profile.stats.length > 0 && (
        <div className="no-print border-y border-border/60 bg-secondary/40">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 sm:px-8 lg:grid-cols-4">
            {profile.stats.map((s) => (
              <div key={s.label}>
                <p className="font-mono text-2xl font-semibold tabular-nums">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* About + timeline */}
      <Section id="experience" eyebrow="About" title={profile.about.heading}>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <img
              src={profile.photo.src}
              alt={profile.photo.alt}
              width={160}
              height={160}
              loading="lazy"
              className="mb-6 size-[160px] rounded-full border border-border object-cover shadow-sm"
            />
            <div className="space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground">
              {profile.about.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>

          <div className="lg:mt-[184px]">
            <ol className="relative pl-6">
              {profile.timeline.map((item, i) => (
                <Reveal key={item.role + item.period} delay={i * 0.03}>
                  <li className="relative mb-5 last:mb-0">
                    {i < profile.timeline.length - 1 && (
                      <span
                        aria-hidden
                        className="absolute w-px bg-border"
                        style={{ left: "-1.5875rem", top: "0.8125rem", bottom: "-2.0625rem" }}
                      />
                    )}
                    <span
                      aria-hidden
                      className="absolute -left-[1.9rem] top-2 size-2.5 rounded-full border border-border bg-primary"
                    />
                    <div className="flex items-baseline gap-x-3">
                      <span className="w-28 shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                        {item.period}
                      </span>
                      <div className="flex flex-col gap-y-0.5">
                        <span className="text-sm font-semibold">{item.role}</span>
                        <span className="text-sm text-muted-foreground">— {item.org}</span>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        eyebrow="Portfolio"
        title="Featured projects"
        className="no-print"
      >
        <Projects />
      </Section>

      {/* Skills */}
      <Section id="skills" eyebrow="Capabilities" title="Skills" className="py-10 sm:py-14">
        <div className="grid gap-8 sm:grid-cols-2">
          {profile.skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {group.title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge variant="secondary" className="font-normal">
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Credentials */}
      <Section eyebrow="Credentials" title="Certifications" className="py-10 sm:py-14">
        <ul className="flex flex-wrap gap-2">
          {profile.certifications.map((c) => (
            <li
              key={c.name}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm"
            >
              <Award className="size-4 text-muted-foreground" aria-hidden />
              {c.url ? (
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-primary hover:underline"
                >
                  {c.name}
                </a>
              ) : (
                <span>{c.name}</span>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {profile.cpd.heading}
          </h2>
          <ul className="mt-10 flex flex-wrap gap-2">
            {profile.cpd.courses.map((course) => (
              <li key={course.url}>
                <a
                  href={course.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm hover:text-primary hover:underline"
                >
                  <Award className="size-4 text-muted-foreground" aria-hidden />
                  {course.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {profile.education.heading}
          </h2>
          <ul className="mt-10 flex flex-wrap gap-2">
            {profile.education.entries.map((entry) => (
              <li key={entry.url}>
                <a
                  href={entry.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm hover:text-primary hover:underline"
                >
                  <GraduationCap className="size-4 text-muted-foreground" aria-hidden />
                  {entry.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Résumé */}
      <Section
        id="resume"
        eyebrow="Document"
        title={profile.resume.heading}
        className="py-10 sm:py-14"
      >
        <p className="max-w-2xl text-sm text-muted-foreground">{profile.resume.note}</p>
        <div className="no-print mt-6 flex flex-wrap gap-3">
          {resumeUrl ? (
            <>
              <Button asChild>
                <a href={resumeUrl} target="_blank" rel="noreferrer noopener">
                  View résumé
                  <FileText className="size-4" aria-hidden />
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={resumeUrl} download>
                  Download résumé
                  <Download className="size-4" aria-hidden />
                </a>
              </Button>
            </>
          ) : (
            <>
              <Button disabled title="Résumé coming soon">
                View résumé
                <FileText className="size-4" aria-hidden />
              </Button>
              <Button variant="outline" disabled title="Résumé coming soon">
                Download résumé
                <Download className="size-4" aria-hidden />
              </Button>
            </>
          )}
          <Button variant="outline" onClick={() => window.print()}>
            Export portfolio (PDF)
            <Printer className="size-4" aria-hidden />
          </Button>
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        eyebrow="Get in touch"
        title={profile.contact.heading}
        className="py-10 sm:py-14"
      >
        <p className="text-sm text-muted-foreground">{profile.contact.intro}</p>
        <ul className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          <li className="flex items-center gap-2">
            <Mail className="size-4 text-muted-foreground" aria-hidden />
            <a className="hover:text-primary hover:underline" href={`mailto:${profile.contact.email}`}>
              {profile.contact.email}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Linkedin className="size-4 text-muted-foreground" aria-hidden />
            <a
              className="hover:text-primary hover:underline"
              href={profile.contact.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              {profile.contact.linkedinLabel}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-4 text-muted-foreground" aria-hidden />
            {profile.contact.location}
          </li>
        </ul>
      </Section>
    </div>
  );
}
