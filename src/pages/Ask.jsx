import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import { FloatingHearts } from "../utils/hearts.jsx";

export default function Ask() {
  const navigate = useNavigate();

  const steps = useMemo(
    () => [
      "I am sorry I am the Latest Late person to ask you for this… 🫣💗",
      "But I was just building suspense…… 😌✨",
      "Definitely not panicking about being late. (Definitely.) 😳💘",
      "👉👈 Soooo………",
      "Will you forgive this slightly late valentine and say yess 🥹💖🥹💖🥹",
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const atLast = idx === steps.length - 1;

  const [noScale, setNoScale] = useState(1);
  const [yesScale, setYesScale] = useState(1);

  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  function next() {
    setIdx((p) => Math.min(p + 1, steps.length - 1));
    setStatus("");
  }

  function handleNo() {
    setNoScale((s) => Math.max(0.3, s * 0.8));
    setYesScale((s) => Math.min(2.2, s * 1.12));

    const msgs = [
      "hmmm… that button looks unsure 👀",
      "are you suuure sure? 🥺",
      "ok but… just look at the YES button 😭💗",
      "it’s getting harder to press no 😌",
    ];
    setStatus(msgs[Math.floor(Math.random() * msgs.length)]);
  }

  function burstConfetti() {
    confetti({
      particleCount: 140,
      spread: 75,
      origin: { y: 0.75 },
      colors: ["#ff4d8d", "#ff7bb0", "#ffd1e6", "#ffffff", "#7cffc7"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 110,
        spread: 110,
        startVelocity: 42,
        origin: { x: 0.2, y: 0.7 },
        colors: ["#ff4d8d", "#ff7bb0", "#ffd1e6", "#ffffff", "#7cffc7"],
      });
    }, 120);

    setTimeout(() => {
      confetti({
        particleCount: 110,
        spread: 110,
        startVelocity: 42,
        origin: { x: 0.8, y: 0.7 },
        colors: ["#ff4d8d", "#ff7bb0", "#ffd1e6", "#ffffff", "#7cffc7"],
      });
    }, 220);
  }

  function handleYes() {
    if (busy) return;
    setBusy(true);
    setStatus("OKAY YAYYYY… 💖");

    burstConfetti();

    // Let her enjoy the confetti for a moment, then go to paragraph page
    setTimeout(() => navigate("/para"), 850);
  }

  return (
    <div className="page">
      <FloatingHearts />

      <main className="wrap">
        <section className="card">
          <div className="inner">
            <h1 className="title">A tiny confession… 💌</h1>
            <p className="subtitle">
              <span className="pill">Valentine’s Edition 💗</span>
            </p>

            <div className="bubble">{steps[idx]}</div>

            <div className="controls">
              {!atLast ? (
                <button className="btn-next" onClick={next}>
                  Next ➜
                </button>
              ) : (
                <>
                  <button
                    className="btn-yes"
                    onClick={handleYes}
                    disabled={busy}
                    style={{ transform: `scale(${yesScale})` }}
                  >
                    <span>Yes!! 💖</span>
                  </button>

                  <button
                    className="btn-no"
                    onClick={handleNo}
                    disabled={busy}
                    style={{ transform: `scale(${noScale})` }}
                  >
                    no.
                  </button>
                </>
              )}
            </div>

            <div className="footerNote">{status}</div>
          </div>
        </section>
      </main>
    </div>
  );
}