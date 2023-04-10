import Header from "@/components/NavHeader";
import Link from "next/link";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="home-container">
        <div className="text-container">
          <p className="top-para">SO, YOU WANT TO TRAVEL TO</p>
          <h1 className="home-title">SPACE</h1>
          <p className="bot-para">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <button className="home-btn">
          <Link href="/destination/moon">EXPLORE</Link>
        </button>
      </section>
    </main>
  );
}
