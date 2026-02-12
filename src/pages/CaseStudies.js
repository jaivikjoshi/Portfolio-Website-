import React from 'react';
import { motion } from 'framer-motion';
import '../styles/CaseStudies.css';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'kindred-notes',
      title: 'Kindred Notes',
      subtitle: 'Lightweight social product for uplifting messages',
      overview: 'Kindred Notes is a lightweight social product that helps people send and receive uplifting messages ("kind notes") in a simple, low-friction way. I built the MVP end-to-end as a freelance full-stack developer, taking it from feature specs to a deployed web app and a working backend.',
      goal: 'Ship a usable MVP that could: onboard users quickly; let users create, send, and receive notes; personalize the experience using interest tags; re-engage users with email notifications; surface basic product metrics so the founder could track traction.',
      users: '725 early users (initial pilot)',
      role: 'Freelance Full-Stack Developer — I owned the implementation across frontend, backend, database, auth, notifications, and deployment, plus technical documentation for handoff.',
      techStack: ['Angular (TypeScript)', 'AngularFire', 'NGRX', 'Node.js', 'Express', 'Firebase Auth', 'Firestore', 'SendGrid', 'Firebase Hosting', 'Heroku', 'GitHub'],
      sections: [
        {
          title: 'Onboarding + Profiles',
          problem: 'The MVP needed fast sign-up while still capturing enough preference data to personalize notes.',
          solution: 'Implemented Firebase Auth with email/password + Google + Facebook, and captured display name + interest tags during onboarding.',
          outcome: 'Onboarded 25 users with minimal friction and immediate personalization.',
        },
        {
          title: 'Notes Creation + Delivery',
          problem: 'Notes had to feel personal but structured enough for querying, filtering, and metrics.',
          solution: 'Built a notes composer and a Firestore-backed model using 3 collections (users, notes, tags). Added REST endpoints for create/read flows and tag-based retrieval.',
          outcome: 'Users could create and receive notes, and the data model stayed simple and scalable for the MVP.',
        },
        {
          title: 'Personalization via Tags',
          problem: 'Without personalization, notes would feel random and retention would drop.',
          solution: 'Implemented tag selection and tag-based filtering/sorting for the feed so users see content aligned to interests.',
          outcome: 'Notes discovery became "for me" instead of generic.',
        },
        {
          title: 'Re-engagement Emails',
          problem: 'Early-stage products need a simple re-engagement loop.',
          solution: 'Integrated SendGrid dynamic templates and scheduled a backend cron to send "new note" emails.',
          outcome: 'Automated notifications supported recurring usage without manual ops.',
        },
        {
          title: 'In-App Metrics',
          problem: 'The founder needed visibility into adoption and activity without a separate analytics stack.',
          solution: 'Queried Firestore to compute dashboard metrics (platform totals + user sent/received counts).',
          outcome: 'Product health was visible in-app, enabling faster iteration.',
        },
        {
          title: 'Deployment + Handoff',
          problem: 'MVPs often fail after handoff because setup isn\'t reproducible.',
          solution: 'Deployed frontend on Firebase Hosting and backend on Heroku, and wrote a development/deployment guide (env vars, scripts, workflows).',
          outcome: 'The project was easy to run locally and maintain after delivery.',
        },
      ],
      keyDecisions: [
        {
          title: 'Firebase-first architecture',
          text: 'I chose Firebase Auth + Firestore because it minimized infrastructure overhead while still giving: secure, battle-tested authentication; fast iteration on schema; straightforward deployment for an MVP.',
        },
        {
          title: 'NGRX for predictable state',
          text: 'The product had multiple user states (auth, profile/tags, notes lists, metrics). NGRX kept state transitions explicit and reduced UI edge-case bugs.',
        },
        {
          title: 'Simple REST boundary',
          text: 'Even with Firestore in the stack, I exposed key flows via Express REST endpoints to keep business logic centralized (notifications, aggregation, and future scaling).',
        },
      ],
      keyContributions: [
        'End-to-end MVP ownership: frontend, backend, auth, DB, notifications, deployment, and handoff docs',
        'Firebase-first architecture with multi-provider auth and Firestore-backed note flows',
        'Personalization (tags), re-engagement emails (SendGrid cron), and in-app metrics dashboard',
        'Clear technical documentation for reproducible local dev and deployment',
      ],
      results: [
        { value: 'MVP', label: 'Shipped deployed MVP' },
        { value: '25', label: 'Users onboarded' },
        { value: '725', label: 'Pilot users' },
      ],
      nextSteps: [
        'Add moderation/reporting and basic content filtering',
        'Introduce rate limiting + abuse prevention',
        'Add analytics events (retention cohorts, activation rate)',
        'Optimize Firestore reads with indexes and pagination',
        'Add A/B testing for onboarding and notification timing',
      ],
    },
  ];

  return (
    <div className="casestudies-container">
      <motion.h1 
        className="casestudies-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Case Studies
      </motion.h1>

      <div className="casestudies-content">
        {caseStudies.map((study, index) => (
          <motion.article 
            key={study.id}
            className="case-study-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
          >
            {/* Header */}
            <div className="case-header">
              <div className="case-header-bar">
                <span className="case-header-title">{study.title}</span>
              </div>
              <div className="case-meta">
                <p className="case-subtitle">{study.subtitle}</p>
                <div className="case-meta-row">
                  <span>ROLE: {study.role}</span>
                </div>
                <div className="case-meta-row">
                  <span>USERS: {study.users}</span>
                </div>
                <p className="case-overview">{study.overview}</p>
                <p className="case-goal">
                  <strong>Goal:</strong> {study.goal}
                </p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="case-section">
              <h4 className="case-section-title">Tech Stack</h4>
              <div className="case-tags">
                {study.techStack.map(tech => (
                  <span key={tech} className="case-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* What I Built */}
            <div className="case-section">
              <h4 className="case-section-title">What I Built</h4>
              {study.sections.map((section, i) => (
                <div key={i} className="case-ps-block">
                  <h5 className="case-ps-title">{section.title}</h5>
                  <p><span className="case-ps-label">Problem:</span> {section.problem}</p>
                  <p><span className="case-ps-label">Solution:</span> {section.solution}</p>
                  <p><span className="case-ps-label">Outcome:</span> {section.outcome}</p>
                </div>
              ))}
            </div>

            {/* Key Engineering Decisions */}
            <div className="case-section">
              <h4 className="case-section-title">Key Engineering Decisions</h4>
              {study.keyDecisions.map((d, i) => (
                <div key={i} className="case-decision">
                  <h5 className="case-decision-title">{d.title}</h5>
                  <p>{d.text}</p>
                </div>
              ))}
            </div>

            {/* Key Contributions */}
            <div className="case-section">
              <h4 className="case-section-title">Key Contributions</h4>
              <ul className="case-contrib-list">
                {study.keyContributions.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div className="case-section">
              <h4 className="case-section-title">Results</h4>
              <div className="case-metrics">
                {study.results.map((r, i) => (
                  <div key={i} className="case-metric">
                    <span className="case-metric-value">{r.value}</span>
                    <span className="case-metric-label">{r.label}</span>
                  </div>
                ))}
              </div>
              <ul className="case-results-list">
                <li>Shipped a deployed MVP with core note flows</li>
                <li>Onboarded 25 early users</li>
                <li>Delivered personalization, notifications, and metrics without heavy infrastructure</li>
                <li>Left behind clear documentation for future development</li>
              </ul>
            </div>

            {/* What I'd Do Next */}
            <div className="case-section case-section-last">
              <h4 className="case-section-title">What I'd Do Next</h4>
              <ul className="case-next-list">
                {study.nextSteps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
