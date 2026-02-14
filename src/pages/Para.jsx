import { Link } from "react-router-dom";

export default function Para() {
  return (
    <div className="page">
      <main className="wrap">
        <section className="card">
          <div className="inner">
            <h1 className="title">Kaashish… you said yes 🥹💖</h1>

            <div className="bubble para">
              <p>
                Okay first of all: I’m smiling so hard I might actually unlock a
                new facial muscle. Second of all: I’d like to apologize to every
                calendar in existence because I pulled up to Valentine’s like:
                “hello yes, one romance please… with extra delay.” 😭💌
              </p>

              <p>
                But listen—long distance has its own love language. Ours is:
                constant fights , not so good communication that deserve Grammy nominations,
                memes used as emotional support, and that one moment when we both
                stare at the screen pretending we’re not missing each other… and
                fail immediately I guess. 🫠✨
              </p>

              <p>
                So here’s the plan, Ms. Kaashish: I’m taking you on the cutest
                long‑distance Valentine date ever. Dress code: comfy‑cute. (Yes,
                hoodie counts. Hoodie is iconic.) 😌💗 We’ll do a video call date
                where we “accidentally” match vibes, eat snacks like we’re food
                critics, and I’ll try—keyword try—not to act cool when I’m
                actually just ridiculously happy it’s you. 🌸
              </p>

              <p>
                Also, I’m making a few promises:
                <br />• I will not let the distance win.
                <br />• I will send you the kind of messages that make you do the
                tiny smile thing.
                <br />• I will be responsibly dramatic when you’re being extra
                cute (so… always).
                <br />• And I will keep collecting little moments with you until
                the day we don’t need a screen in between. 💞
              </p>

              <p>
                And if you ever doubt how serious I am about you, just remember:
                I literally coded my way into asking you out. That’s not just
                romance. That’s nerdy dedication. That’s commitment with Wi‑Fi.
                😤💕
              </p>

              <p>
                So… happy (slightly late) Valentine’s, Kaashish.
                <br />
                Thank you for making my world softer, funnier, and a lot more “I
                can’t stop thinking about her.”
                <br />
                Now come here (virtually) so I can send you a thousand forehead
                kisses through the screen and one extremely respectful but
                enthusiastic: I like you. A lot. 🥺💖
              </p>
            </div>

            <div className="controls" style={{ justifyContent: "space-between" }}>
              <Link className="btn-next linkBtn" to="/">
                Replay ➜
              </Link>
             
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}