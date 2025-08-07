import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <div className={styles.heroSection}>
          <div className={styles.logoContainer}>
            <Image
              src="/Logo.png"
              alt="Logo"
              className={styles.logo}
              width={100}
              height={100}
            />
          </div>
          <div className={styles.content}>
            <h1>
              Welcome to <span className={styles.highlight}>Stackly</span>
            </h1>
            <p>
              Freelancing offers flexibility, independence, and the opportunity
              to work on exciting projects.
              <br />
              Join Stackly to explore freelancing opportunities and grow your
              career.
            </p>
            <Link href="/login" className={styles.ctaBtn}>
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
