import TeamLogoutButton from "@/components/TeamLogoutButton";
import UpdatesBoard from "@/components/UpdatesBoard";
import { currentPlans, fileLinks, upcomingMeetings } from "@/lib/team-content";
import { listUpdates } from "@/lib/team-updates";

export const dynamic = "force-dynamic";

export default async function TeamPortal() {
  const updates = await listUpdates();

  return (
    <>
      <section className="section section--hero gutter">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 16,
          }}
        >
          <h1 className="h1">Team</h1>
          <TeamLogoutButton />
        </div>
      </section>

      <section className="section split-rule grid-fit-340 gutter">
        <div className="stack" style={{ gap: 20 }}>
          <h2 className="mono">Current plans</h2>
          <ul className="stack" style={{ gap: 12 }}>
            {currentPlans.map((plan) => (
              <li key={plan} className="lead" style={{ fontSize: "clamp(15px,1.4vw,18px)" }}>
                {plan}
              </li>
            ))}
          </ul>
        </div>

        <div className="stack" style={{ gap: 20 }}>
          <h2 className="mono">Upcoming meetings</h2>
          <div className="hairline-list">
            {upcomingMeetings.map((meeting) => (
              <div key={meeting.title} className="stack" style={{ gap: 4, padding: "12px 0" }}>
                <span className="mono-meta">
                  {meeting.date} · {meeting.time} · {meeting.location}
                </span>
                <span style={{ fontWeight: 500 }}>{meeting.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gutter">
        <h2 className="mono" style={{ marginBottom: 20 }}>
          Files & links
        </h2>
        <div className="hairline-list">
          {fileLinks.map((file) => (
            <a
              key={file.label}
              href={file.url}
              target="_blank"
              rel="noreferrer"
              style={{ display: "flex", justifyContent: "space-between", padding: "12px 0" }}
            >
              <span style={{ fontWeight: 500 }}>{file.label}</span>
              {file.note && <span className="mono-meta">{file.note}</span>}
            </a>
          ))}
        </div>
      </section>

      <section className="section section--no-border gutter">
        <h2 className="mono" style={{ marginBottom: 20 }}>
          Updates
        </h2>
        <UpdatesBoard updates={updates} />
      </section>
    </>
  );
}
