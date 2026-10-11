import {
  Trophy,
  Award,
  Code2,
  Users,
  Presentation,
  Globe,
  Goal,
  ArrowUpRight,
  GraduationCap,
  BadgeCheck,
  Briefcase,
  Check,
} from "lucide-react";
import Section from "./SectionHeading";
import {
  about,
  experience,
  achievements,
  education,
  leadership,
  featuredCert,
  certifications,
} from "../data/portfolio";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="about-grid">
        <div className="prose">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
          <h3>Areas of interest</h3>
          <ul className="chips">
            {about.interests.map((i) => (
              <li key={i} className="chip">
                {i}
              </li>
            ))}
          </ul>
        </div>
        <aside className="panel" aria-label="Professional highlights">
          <h3>What I work on</h3>
          <ul className="ticks">
            {about.highlights.map((h) => (
              <li key={h}>
                <Check size={18} aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      sub="Where I’ve worked, most recent first."
    >
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.company} className={"job" + (e.current ? " current" : "")}>
            <span className="dot" aria-hidden="true" />
            <article className="job-card">
              <div className="job-top">
                <div>
                  <h3>{e.company}</h3>
                  <p className="job-role">{e.role}</p>
                </div>
                <p className="job-meta">
                  <span className="mono">{e.period}</span>
                  <span>{e.place}</span>
                  {e.current && (
                    <span className="live">
                      <i aria-hidden="true" />
                      Current role
                    </span>
                  )}
                </p>
              </div>
              <ul className="job-points">
                {e.points.map(([k, v]) => (
                  <li key={k}>
                    <strong>{k}</strong>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

const ICONS = {
  trophy: Trophy,
  award: Award,
  code: Code2,
  users: Users,
  presentation: Presentation,
  globe: Globe,
  ball: Goal,
};

export function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      sub="Contests, hackathons, awards and a football captaincy."
    >
      <div className="ach-grid">
        {achievements.map((a) => {
          const Icon = ICONS[a.icon];
          return (
            <article
              key={a.text}
              className={"ach" + (a.featured ? " featured" : "")}
            >
              <Icon size={a.featured ? 30 : 22} aria-hidden="true" />
              <p>{a.text}</p>
              {a.link && (
                <a
                  className="text-link"
                  href={a.link.href}
                  {...(a.link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {a.link.label} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              )}
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="edu-list">
        {education.map((e) => (
          <li key={e.school} className="edu">
            <GraduationCap size={22} aria-hidden="true" />
            <div className="edu-main">
              <h3>{e.school}</h3>
              <p>{e.degree}</p>
              <p className="muted">{e.place}</p>
            </div>
            <div className="edu-side">
              <span className="mono">{e.period}</span>
              <strong>{e.score}</strong>
            </div>
          </li>
        ))}
      </ul>
      <h3 className="sub-title">Leadership</h3>
      <ul className="lead-list">
        {leadership.map((l) => (
          <li key={l.role}>
            <Briefcase size={18} aria-hidden="true" />
            <div>
              <strong>{l.role}</strong>
              <span>{l.org}</span>
              {l.note && (
                <span className="tag-note">
                  <Goal size={14} aria-hidden="true" /> {l.note}
                </span>
              )}
            </div>
            <span className="mono">{l.period}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Certifications() {
  return (
    <Section
      id="certifications"
      title="Certifications"
      sub="Certifications and courses from my resume."
    >
      <a
        href={featuredCert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="cert-feature cert-feature-link"
        aria-label="View Claude Certified Associate certificate"
      >
        <BadgeCheck size={36} aria-hidden="true" />
        <div>
          <p className="muted">{featuredCert.issuer}</p>
          <h3>{featuredCert.name}</h3>
          <p>{featuredCert.note}</p>
          {featuredCert.link && <span className="cert-view">View Certificate ↗</span>}
        </div>
      </a>

<ul className="cert-grid">
  {certifications.map((c) => {
    const CertificateContent = (
      <>
        <span className="muted">{c.issuer}</span>
        <strong>{c.name}</strong>
        {c.link && <span className="cert-view">View Certificate ↗</span>}
      </>
    );

    return (
      <li key={c.issuer + c.name} className="cert">
        {c.link ? (
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-link"
            aria-label={`View ${c.name} certificate from ${c.issuer}`}
          >
            {CertificateContent}
          </a>
        ) : (
          <div className="cert-content">{CertificateContent}</div>
        )}
      </li>
    );
  })}
</ul>

    </Section>
  );
}
