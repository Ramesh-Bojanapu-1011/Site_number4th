"use client";
import React from "react";
import styles from "./home.module.css";
import Headder from "@/components/Headder";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <>
      <Headder />
      <div className={styles.homeContainer}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}>
            <video autoPlay loop muted className={styles.heroVideo}>
              <source src="/video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.heroContent}>
              <h1>Find the Right Freelancer for Your Project</h1>
              <p>
                Connect with top talent, get work done faster, and grow your
                business.
              </p>
              <div className={styles.buttons}>
                <button className={styles.primary}>Hire Now</button>
                <button className={styles.secondary}>Browse Freelancers</button>
              </div>
            </div>
          </div>
        </section>

        {/* About Freelancing (Updated) */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutContent}>
            <h2>Why Freelancing?</h2>
            <p>
              In today’s fast-paced digital world, agility is key. Freelancers
              offer on-demand expertise, flexible collaboration, and a global
              talent pool—without the long-term overhead.
            </p>

            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <h3>Flexible Engagement</h3>
                <p>
                  Scale teams up or down instantly to match your project needs.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Cost-Efficient</h3>
                <p>
                  Hire by project, not by payroll. Reduce overhead
                  significantly.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Global Talent</h3>
                <p>
                  Access industry specialists across borders and time zones.
                </p>
              </div>
              <div className={styles.card}>
                <h3>Fast Execution</h3>
                <p>
                  Freelancers get things done quickly—without corporate delays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Top Categories */}
        <section className={styles.servicesSection}>
          <div className={styles.servicesContent}>
            <h2>Top Services</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                Web Development
                <span>Build websites, web apps & responsive UIs.</span>
              </div>
              <div className={styles.serviceCard}>
                Graphic Design
                <span>Logos, branding, and creative visuals.</span>
              </div>
              <div className={styles.serviceCard}>
                Content Writing
                <span>SEO blogs, product descriptions & more.</span>
              </div>
              <div className={styles.serviceCard}>
                Digital Marketing
                <span>Boost visibility with smart marketing.</span>
              </div>
              <div className={styles.serviceCard}>
                Virtual Assistance
                <span>Admin support, scheduling, research & more.</span>
              </div>
              <div className={styles.serviceCard}>
                Video Editing
                <span>Reels, promos & professional edits.</span>
              </div>
              <div className={styles.serviceCard}>
                App Development
                <span>Build mobile apps for iOS & Android.</span>
              </div>
              <div className={styles.serviceCard}>
                SEO Optimization
                <span>Rank higher with on-page & technical SEO.</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className={styles.howItWorksSection}>
          <div className={styles.howItWorksContent}>
            <h2>How It Works</h2>
            <div className={styles.stepsGrid}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3>Post a Job</h3>
                <p>Describe your project and what you're looking for.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3>Receive Proposals</h3>
                <p>Get matched with top freelancers who are ready to help.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3>Hire the Right Freelancer</h3>
                <p>Choose the best fit and get started immediately.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>4</div>
                <h3>Get Your Project Done</h3>
                <p>
                  Track progress, communicate easily, and receive quality work.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonialsSection}>
          <div className={styles.testimonialsContent}>
            <h2>What Our Users Say</h2>
            <div className={styles.testimonialGrid}>
              <div className={styles.testimonialCard}>
                <p>"Great platform to find talented freelancers quickly!"</p>
                <span>- Rajesh, Startup Founder</span>
              </div>
              <div className={styles.testimonialCard}>
                <p>"Helped me land consistent projects as a developer."</p>
                <span>- Priya, Web Developer</span>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Start Your Freelance Journey Today</h2>
            <button>Join Now</button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
