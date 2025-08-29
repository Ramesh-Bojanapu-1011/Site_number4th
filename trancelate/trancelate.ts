import { LocateFixed } from "lucide-react";

const translations = {
  en: {
    header: {
      home: "Home",
      home1: "Home1",
      home2: "Home2",
      about: "About",
      services: "Services",
      allServices: "All Services",
      webAppDevelopment: "Web & App Development",
      uiuxDesign: "UI/UX & Graphic Design",
      contentWriting: "Content Writing",
      digitalMarketing: "Digital Marketing & SEO",
      videoProduction: "Video Production & Animation",
      cloudDevops: "Cloud & DevOps Services",
      blog: "Blog",
      contactUs: "Contact Us",
    },
    login: {
      login: "Login",
      register: "Register",
      forgotPassword: "Forgot Password",
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      password: "Password",
      confirmPassword: "Confirm Password",
      backToLogin: "Back to Login",
      enterRegisteredEmail: "Enter your registered email",
      enterNewPassword: "Enter new password",
      confirmNewPassword: "Confirm new password",
      updatePassword: "Update Password",
    },
    home1: {
      heroTitle: "Find the Right Freelancer for Your Project",
      heroDesc:
        "Connect with top talent, get work done faster, and grow your business.",
      hireNow: "Hire Now",
      browseFreelancers: "Browse Freelancers",
      whyFreelancing: "Why Freelancing?",
      whyDesc:
        "In today’s fast-paced digital world, agility is key. Freelancers offer on-demand expertise, flexible collaboration, and a global talent pool—without the long-term overhead.",
      flexible: "Flexible Engagement",
      flexibleDesc:
        "Scale teams up or down instantly to match your project needs.",
      cost: "Cost-Efficient",
      costDesc:
        "Hire by project, not by payroll. Reduce overhead significantly.",
      global: "Global Talent",
      globalDesc: "Access industry specialists across borders and time zones.",
      fast: "Fast Execution",
      fastDesc: "Freelancers get things done quickly—without corporate delays.",
      topServices: "Top Services",
      webDev: "Web Development",
      webDevDesc: "Build websites, web apps & responsive UIs.",
      design: "Graphic Design",
      designDesc: "Logos, branding, and creative visuals.",
      writing: "Content Writing",
      writingDesc: "SEO blogs, product descriptions & more.",
      marketing: "Digital Marketing",
      marketingDesc: "Boost visibility with smart marketing.",
      va: "Virtual Assistance",
      vaDesc: "Admin support, scheduling, research & more.",
      video: "Video Editing",
      videoDesc: "Reels, promos & professional edits.",
      appDev: "App Development",
      appDevDesc: "Build mobile apps for iOS & Android.",
      seo: "SEO Optimization",
      seoDesc: "Rank higher with on-page & technical SEO.",
      howItWorks: "How It Works",
      postJob: "Post a Job",
      postJobDesc: "Describe your project and what you're looking for.",
      receive: "Receive Proposals",
      receiveDesc: "Get matched with top freelancers who are ready to help.",
      hire: "Hire the Right Freelancer",
      hireDesc: "Choose the best fit and get started immediately.",
      done: "Get Your Project Done",
      doneDesc: "Track progress, communicate easily, and receive quality work.",
      testimonials: "What Our Users Say",
      t1: '"Great platform to find talented freelancers quickly!"',
      t1By: "- Rajesh, Startup Founder",
      t2: '"Helped me land consistent projects as a developer."',
      t2By: "- Priya, Web Developer",
      cta: "Start Your Freelance Journey Today",
      join: "Join Now",
    },
    home2: {
      heroTitle: "Creative Freelance Solutions",
      heroDesc:
        "Crafting modern websites, clean designs & smart marketing for your brand.",
      letsTalk: "Let’s Talk",
      whatIOffer: "What I Offer",
      services: [
        {
          title: "Web Development",
          desc: "Responsive and scalable websites using the latest technologies.",
          icon: "💻",
        },
        {
          title: "UI/UX Design",
          desc: "Beautiful and intuitive designs focused on great user experiences.",
          icon: "🎨",
        },
        {
          title: "SEO & Marketing",
          desc: "Rank higher, drive traffic, and convert more customers.",
          icon: "🚀",
        },
      ],
      recentProjects: "Recent Projects",
      project: (item: number) => `Project ${item}`,
      projectDesc: "Live website / application showcase",
      who: "Who’s Behind the Work",
      whoDesc:
        "A passionate freelancer with a focus on innovation, clean design, and real-world results. With a background in web development and marketing, I help brands grow with smart online presence.",
      happyClients: "Happy Clients",
      testimonials: [
        {
          quote:
            "Delivered top-quality work, on time. Great communication throughout!",
          author: "— Alex M., CEO",
        },
        {
          quote:
            "Amazing design skills and super responsive. Highly recommend!",
          author: "— Rina S., Startup Founder",
        },
      ],
      build: "Let’s Build Something Great",
      buildDesc:
        "Reach out to start your next project or to request a free consultation.",
      contactMe: "Contact Me",
    },
    about: {
      heroTitle: "About Our Freelance Platform",
      heroDesc:
        "Empowering businesses and freelancers to connect, collaborate, and grow together in a modern digital world.",
      missionTitle: "Our Mission",
      missionDesc:
        "To make high-quality talent accessible to everyone, everywhere. We believe in flexible work, creative freedom, and building lasting partnerships between clients and freelancers.",
      valuesTitle: "Our Values",
      values: [
        {
          title: "Trust & Transparency",
          desc: "We foster open communication and honest feedback for every project.",
        },
        {
          title: "Innovation",
          desc: "We embrace new ideas and technologies to deliver the best results.",
        },
        {
          title: "Collaboration",
          desc: "We believe great things happen when talented people work together.",
        },
      ],
      teamTitle: "Meet Our Talent",
      team: [
        {
          icon: "💻",
          title: "Web Developers",
          desc: "Front-end, back-end, and full-stack experts ready to build your vision.",
        },
        {
          icon: "🎨",
          title: "Designers",
          desc: "UI/UX, branding, and creative professionals for stunning visuals.",
        },
        {
          icon: "🚀",
          title: "Marketers",
          desc: "SEO, content, and digital marketing specialists to grow your business.",
        },
      ],
    },
    services: {
      heroTitle: "Our Freelance Services",
      heroDesc:
        "Explore a wide range of professional freelance services tailored to your business needs.",
      coreTitle: "Our Core Services",
      servicesList: [
        {
          title: "Web & App Development",
          link: "/web-app-development",
          desc: "Custom websites, web apps, and mobile solutions built with the latest technologies for performance and scalability.",
          img: "/services/service-dev.jpg",
        },
        {
          title: "UI/UX & Graphic Design",
          link: "/ui-ux-design",
          desc: "Modern, user-focused designs for web, mobile, and branding. Logos, banners, and complete visual identity packages.",
          img: "/services/service-design.jpg",
        },
        {
          title: "Content Writing",
          link: "/content-writing",
          desc: "SEO blogs, website copy, product descriptions, and creative content to engage your audience and boost your brand.",
          img: "/services/service-content.jpg",
        },
        {
          title: "Digital Marketing & SEO",
          link: "/digital-marketing",
          desc: "Grow your online presence with expert SEO, social media management, PPC, and email marketing strategies.",
          img: "/services/service-marketing.jpg",
        },
        {
          title: "Video Production & Animation",
          link: "/video-production",
          desc: "Promotional videos, explainer animations, and professional editing to tell your story and captivate your audience.",
          img: "/services/service-video.jpg",
        },
        {
          title: "Cloud & DevOps Services",
          link: "/cloud-devops-services",
          desc: "Scalable cloud infrastructure, CI/CD pipelines, and automation solutions to ensure smooth deployment and performance.",
          img: "/services/service-cloud.jpg",
        },
      ],
      getStarted: "Get Started",
      whyTitle: "Why Choose Us?",
      whyList: [
        {
          title: "Verified Talent",
          desc: "All freelancers are vetted for quality and reliability.",
        },
        {
          title: "Flexible Engagement",
          desc: "Scale your team up or down as your project needs change.",
        },
        {
          title: "Transparent Pricing",
          desc: "No hidden fees. Clear, upfront pricing for every service.",
        },
      ],
      processTitle: "How It Works",
      processList: [
        {
          title: "Post a Project",
          desc: "Describe your needs and get matched with top freelancers.",
        },
        {
          title: "Review Proposals",
          desc: "Compare offers, portfolios, and reviews to choose the best fit.",
        },
        {
          title: "Collaborate",
          desc: "Work together, track progress, and communicate easily.",
        },
        {
          title: "Get Results",
          desc: "Receive quality work and pay securely when satisfied.",
        },
      ],
      testimonialsTitle: "What Clients Say",
      testimonials: [
        {
          quote:
            "Outstanding experience! The freelancer delivered exactly what I needed.",
          author: "— Priya S., Business Owner",
        },
        {
          quote:
            "Fast, reliable, and creative. Highly recommend for any project.",
          author: "— Rajesh K., Startup Founder",
        },
      ],
      ctaTitle: "Ready to Start Your Project?",
      ctaDesc: "Join our platform and connect with top freelance talent today.",
    },
    blog: {
      heroTitle: "Freelance Blog & Insights",
      heroDesc:
        "Tips, guides, and stories to help you succeed in your freelancing journey.",
      futureTitle: "Why Freelancing is the Future of Work",
      futureDesc1:
        "Freelancing offers flexibility, independence, and the opportunity to work on diverse projects from anywhere in the world. As businesses increasingly embrace remote work, the demand for skilled freelancers continues to grow. Whether you're a developer, designer, writer, or marketer, freelancing empowers you to shape your own career path and achieve a better work-life balance.",
      futureDesc2:
        "Stay tuned to our blog for the latest trends, tips, and resources to help you thrive as a freelancer in today's digital economy.",
      latestTitle: "Latest Freelancing Posts",
      posts: [
        {
          title: "How to Start Freelancing: A Beginner's Guide",
          excerpt:
            "Learn the essential steps to launch your freelance career, from building a portfolio to finding your first clients.",
          link: "/how-to-start-freelancing",
        },
        {
          title: "Top 5 Skills Every Freelancer Needs in 2025",
          excerpt:
            "Discover the most in-demand skills for freelancers and how to stay ahead in a competitive market.",
          link: "/top-5-skills-every-freelancer-needs",
        },
        {
          title: "Balancing Multiple Projects as a Freelancer",
          excerpt:
            "Tips and strategies for managing your time, clients, and workload effectively as a freelancer.",
          link: "/balancing-multiple-projects",
        },
      ],
      readMore: "Read More",
      benefitsTitle: "Benefits of Freelancing",
      benefits: [
        {
          icon: "🌍",
          title: "Work from Anywhere",
          desc: "Enjoy the freedom to work remotely and set your own schedule.",
        },
        {
          icon: "💼",
          title: "Diverse Projects",
          desc: "Choose projects that match your skills and interests for a fulfilling career.",
        },
        {
          icon: "💸",
          title: "Unlimited Earning Potential",
          desc: "Scale your income by working with multiple clients and setting your own rates.",
        },
      ],
      faqTitle: "Freelancing FAQ",
      faq: [
        {
          q: "How do I find clients as a freelancer?",
          a: "Start by building a strong portfolio, networking on platforms like LinkedIn, and joining freelance marketplaces. Consistent outreach and delivering quality work will help you attract more clients over time.",
        },
        {
          q: "How do I set my freelance rates?",
          a: "Research industry standards, consider your experience, and factor in project complexity. Don’t undervalue your skills—charge what you’re worth and adjust as you gain more experience.",
        },
        {
          q: "What are the biggest challenges in freelancing?",
          a: "Common challenges include finding consistent work, managing time, and handling taxes. Building good habits and using productivity tools can help you overcome these obstacles.",
        },
      ],
      newsletterTitle: "Stay Updated with Freelance Tips",
      newsletterDesc:
        "Subscribe to our newsletter for the latest freelancing advice, resources, and exclusive offers.",
    },
    contact: {
      heroTitle: "Contact Us",
      heroDesc:
        "We'd love to hear from you! Reach out for project inquiries, support, or just to say hello.",
      formTitle: "Send a Message",
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
      success: "Message sent successfully!",
      faqTitle: "Frequently Asked Questions",
      faq: [
        {
          q: "How quickly will I get a response?",
          a: "We aim to respond to all inquiries within 24 hours.",
        },
        {
          q: "Can I request a custom service?",
          a: "Absolutely! Just describe your needs in the form and we’ll tailor a solution for you.",
        },
        {
          q: "Is my information safe?",
          a: "Yes, your privacy is important to us. We never share your details without consent.",
        },
      ],
      locationTitle: "Our Location",
    },
    webapp: {
      heroTitle: "Web App Development Services for Modern Businesses",
      heroDesc:
        "Build scalable, secure, and high-performance web applications tailored to your business needs.",
      getStarted: "Get Started",
      servicesTitle: "Our Web App Development Services",
      servicesList: [
        {
          title: "Custom Web Applications",
          desc: "Tailored web solutions to fit your unique business needs and goals.",
        },
        {
          title: "Progressive Web Apps (PWAs)",
          desc: "Fast, reliable, and engaging apps that work seamlessly across devices.",
        },
        {
          title: "E-commerce Platforms",
          desc: "Robust online stores with secure payments and scalable architecture.",
        },
        {
          title: "API Development & Integration",
          desc: "Powerful APIs to connect your web app with third-party services.",
        },
        {
          title: "UI/UX Design",
          desc: "Modern, user-friendly interfaces for a seamless user experience.",
        },
        {
          title: "Maintenance & Support",
          desc: "Ongoing updates, monitoring, and support for your web applications.",
        },
      ],
      whyTitle: "Why Choose Our Web App Development?",
      whyList: [
        {
          icon: "💻",
          title: "Cutting-Edge Tech",
          desc: "We use the latest frameworks and tools for top performance.",
        },
        {
          icon: "🔒",
          title: "Security First",
          desc: "Best practices to keep your data and users safe at all times.",
        },
        {
          icon: "⚡",
          title: "Fast Delivery",
          desc: "Agile processes for rapid development and quick launches.",
        },
      ],
      processTitle: "Our Process",
      processList: [
        {
          title: "Discovery & Planning",
          desc: "We analyze your requirements and design a custom solution.",
        },
        {
          title: "Development",
          desc: "Our team builds your web app using best-in-class technologies.",
        },
        {
          title: "Testing & Launch",
          desc: "We rigorously test and deploy your app for a flawless launch.",
        },
      ],
      testimonialsTitle: "What Our Clients Say",
      testimonials: [
        {
          name: "Sandeep R.",
          feedback:
            "Our custom web app was delivered on time and exceeded our expectations!",
        },
        {
          name: "Priya D.",
          feedback:
            "Professional, responsive, and highly skilled team. Highly recommended!",
        },
      ],
      ctaTitle: "Ready to Build Your Next Web App?",
      ctaDesc:
        "Contact us today to discuss your project and get a free consultation. Let’s turn your ideas into reality!",
      contactUs: "Contact Us",
    },
    uiux: {
      heroTitle: "UI/UX Design Services for Exceptional Digital Experiences",
      heroDesc:
        "Elevate your product with user-centered design, beautiful interfaces, and seamless experiences that drive engagement.",
      getStarted: "Get Started",
      servicesTitle: "Our UI/UX Design Services",
      servicesList: [
        {
          title: "User Research & Analysis",
          desc: "Understand your users’ needs and behaviors to inform design decisions.",
        },
        {
          title: "Wireframing & Prototyping",
          desc: "Visualize ideas quickly with interactive wireframes and prototypes.",
        },
        {
          title: "UI Design",
          desc: "Create visually stunning and brand-consistent user interfaces.",
        },
        {
          title: "UX Design",
          desc: "Design seamless, intuitive experiences that delight users.",
        },
        {
          title: "Usability Testing",
          desc: "Validate designs with real users and optimize for best results.",
        },
        {
          title: "Design Systems",
          desc: "Develop scalable design systems for consistent product experiences.",
        },
      ],
      whyTitle: "Why Choose Our UI/UX Design?",
      whyList: [
        {
          icon: "🎨",
          title: "Creative & Modern",
          desc: "Fresh, innovative designs tailored to your brand and users.",
        },
        {
          icon: "🧑‍💻",
          title: "User-Centered",
          desc: "Every decision is based on real user needs and feedback.",
        },
        {
          icon: "⚡",
          title: "Fast & Reliable",
          desc: "Quick delivery and ongoing support for your project’s success.",
        },
      ],
      processTitle: "Our Process",
      processList: [
        {
          title: "Discovery & Research",
          desc: "We analyze your goals, users, and competition to inform design.",
        },
        {
          title: "Design & Prototype",
          desc: "We create wireframes, prototypes, and high-fidelity UI designs.",
        },
        {
          title: "Testing & Delivery",
          desc: "Usability testing, feedback, and final delivery of design assets.",
        },
      ],
      testimonialsTitle: "What Our Clients Say",
      testimonials: [
        {
          name: "Amit P.",
          feedback:
            "Our app’s usability and look improved dramatically. The design team is creative and detail-oriented!",
        },
        {
          name: "Lisa M.",
          feedback:
            "Professional, modern, and user-focused. Highly recommend for any UI/UX project!",
        },
      ],
      ctaTitle: "Ready to Transform Your Product’s Experience?",
      ctaDesc:
        "Contact us today to discuss your UI/UX design needs and get a free consultation. Let’s create something amazing together!",
      contactUs: "Contact Us",
    },
    contentwriting: {
      heroTitle: "Professional Content Writing Services",
      heroDesc:
        "Boost your brand with high-quality, SEO-friendly content crafted by expert writers. We help you engage, inform, and convert your audience.",
      getStarted: "Get Started",
      servicesTitle: "Our Content Writing Services",
      servicesList: [
        {
          title: "Blog & Article Writing",
          desc: "Engaging, SEO-optimized blog posts and articles tailored to your audience.",
        },
        {
          title: "Website Content",
          desc: "Clear, persuasive website copy that converts visitors into customers.",
        },
        {
          title: "Product Descriptions",
          desc: "Compelling product descriptions that boost sales and highlight features.",
        },
        {
          title: "Social Media Content",
          desc: "Creative posts and captions to grow your brand on all platforms.",
        },
        {
          title: "Technical Writing",
          desc: "Accurate, user-friendly documentation and manuals for your products.",
        },
        {
          title: "Editing & Proofreading",
          desc: "Polished, error-free content that maintains your brand’s voice.",
        },
      ],
      whyTitle: "Why Choose Our Content Writing?",
      whyList: [
        {
          icon: "💡",
          title: "Creative & Original",
          desc: "Every piece is unique and tailored to your brand’s voice.",
        },
        {
          icon: "⚡",
          title: "Fast Turnaround",
          desc: "Quick delivery without compromising on quality.",
        },
        {
          icon: "🔍",
          title: "SEO Optimized",
          desc: "Content designed to rank higher and drive more traffic.",
        },
      ],
      processTitle: "Our Process",
      processList: [
        {
          title: "Consultation",
          desc: "We discuss your goals, audience, and content needs.",
        },
        {
          title: "Content Creation",
          desc: "Our writers craft engaging, original content for your project.",
        },
        {
          title: "Review & Delivery",
          desc: "You review the content and request any revisions before final delivery.",
        },
      ],
      testimonialsTitle: "What Our Clients Say",
      testimonials: [
        {
          name: "Sarah K.",
          feedback:
            "The content writing service exceeded my expectations! My website traffic increased significantly.",
        },
        {
          name: "James L.",
          feedback:
            "Professional, timely, and creative. Highly recommend for any business needing quality content.",
        },
      ],
      ctaTitle: "Ready to Elevate Your Content?",
      ctaDesc:
        "Contact us today to discuss your project and get a free quote. Let’s create content that drives results!",
      contactUs: "Contact Us",
    },
    digitalmarketing: {
      heroTitle: "Digital Marketing Services to Grow Your Business",
      heroDesc:
        "Reach your target audience, boost engagement, and drive sales with our comprehensive digital marketing solutions.",
      getStarted: "Get Started",
      servicesTitle: "Our Digital Marketing Services",
      servicesList: [
        {
          title: "SEO Optimization",
          desc: "Improve your website’s visibility and ranking on search engines.",
        },
        {
          title: "Social Media Marketing",
          desc: "Grow your brand and engage your audience across all social platforms.",
        },
        {
          title: "Pay-Per-Click (PPC) Advertising",
          desc: "Drive targeted traffic and maximize ROI with effective ad campaigns.",
        },
        {
          title: "Content Marketing",
          desc: "Attract and retain customers with valuable, relevant content.",
        },
        {
          title: "Email Marketing",
          desc: "Nurture leads and boost conversions with personalized email campaigns.",
        },
        {
          title: "Analytics & Reporting",
          desc: "Track, measure, and optimize your digital marketing performance.",
        },
      ],
      whyTitle: "Why Choose Our Digital Marketing?",
      whyList: [
        {
          icon: "📈",
          title: "Proven Results",
          desc: "We deliver measurable growth and ROI for your business.",
        },
        {
          icon: "🎯",
          title: "Targeted Strategies",
          desc: "Customized campaigns to reach your ideal customers.",
        },
        {
          icon: "🤝",
          title: "Dedicated Support",
          desc: "Personalized service and ongoing optimization for success.",
        },
      ],
      processTitle: "Our Process",
      processList: [
        {
          title: "Discovery & Strategy",
          desc: "We learn about your business and craft a custom marketing plan.",
        },
        {
          title: "Execution",
          desc: "We launch and manage campaigns across all relevant channels.",
        },
        {
          title: "Analysis & Optimization",
          desc: "We monitor results and continuously optimize for better performance.",
        },
      ],
      testimonialsTitle: "What Our Clients Say",
      testimonials: [
        {
          name: "Ravi T.",
          feedback:
            "Our online presence skyrocketed thanks to their digital marketing expertise!",
        },
        {
          name: "Emily W.",
          feedback:
            "Professional, creative, and results-driven. Highly recommend for any business!",
        },
      ],
      ctaTitle: "Ready to Boost Your Digital Presence?",
      ctaDesc:
        "Contact us today to discuss your digital marketing goals and get a free strategy session. Let’s grow your business together!",
      contactUs: "Contact Us",
    },
    videoproduction: {
      heroTitle: "Professional Video Production Services",
      heroDesc:
        "Captivate your audience and elevate your brand with high-quality, creative video solutions tailored to your needs.",
      getStarted: "Get Started",
      servicesTitle: "Our Video Production Services",
      servicesList: [
        {
          title: "Corporate Videos",
          desc: "Professional videos to showcase your brand, products, or services.",
        },
        {
          title: "Promotional Videos",
          desc: "Engaging promos to boost your marketing campaigns and reach wider audiences.",
        },
        {
          title: "Event Coverage",
          desc: "Capture the highlights of your events with high-quality video production.",
        },
        {
          title: "Explainer Videos",
          desc: "Simplify complex ideas with clear, animated explainer videos.",
        },
        {
          title: "Social Media Videos",
          desc: "Short, impactful videos designed for maximum engagement on social platforms.",
        },
        {
          title: "Editing & Post-Production",
          desc: "Polished editing, color grading, and sound design for a professional finish.",
        },
      ],
      whyTitle: "Why Choose Our Video Production?",
      whyList: [
        {
          icon: "🎬",
          title: "Creative Storytelling",
          desc: "We turn your ideas into compelling visual stories that connect.",
        },
        {
          icon: "⚡",
          title: "Fast Turnaround",
          desc: "Timely delivery without sacrificing quality or creativity.",
        },
        {
          icon: "🎥",
          title: "Full-Service Team",
          desc: "From concept to final cut, we handle every step of production.",
        },
      ],
      processTitle: "Our Process",
      processList: [
        {
          title: "Consultation & Planning",
          desc: "We discuss your goals, audience, and vision for the video.",
        },
        {
          title: "Production",
          desc: "Our team films and captures all necessary footage with professional equipment.",
        },
        {
          title: "Editing & Delivery",
          desc: "We edit, polish, and deliver your final video ready for any platform.",
        },
      ],
      testimonialsTitle: "What Our Clients Say",
      testimonials: [
        {
          name: "Amit P.",
          feedback:
            "The video team brought our vision to life! The final product was stunning and effective.",
        },
        {
          name: "Lisa M.",
          feedback:
            "Creative, reliable, and fast. Our event video was a huge hit with our audience!",
        },
      ],
      ctaTitle: "Ready to Bring Your Story to Life?",
      ctaDesc:
        "Contact us today to discuss your video project and get a free consultation. Let’s create something amazing together!",
      contactUs: "Contact Us",
    },
    howtofreelance: {
      bannerAlt: "How to Start Freelancing",
      heroTitle: "How to Start Freelancing: A Beginner's Guide",
      heroDesc:
        "Kickstart your freelance career with these essential steps and tips for success.",
      stepsTitle: "Step-by-Step Guide to Starting Freelancing",
      steps: [
        {
          title: "Identify Your Skills:",
          desc: "Assess what services you can offer—writing, design, development, marketing, etc.",
        },
        {
          title: "Build a Portfolio:",
          desc: "Create examples of your work to showcase your abilities. Use personal projects or volunteer work if you’re just starting out.",
        },
        {
          title: "Set Up Your Online Presence:",
          desc: "Make a professional profile on platforms like LinkedIn, Upwork, or Fiverr. Consider building a personal website.",
        },
        {
          title: "Find Your First Clients:",
          desc: "Start with your network, apply to freelance jobs, and pitch your services to potential clients.",
        },
        {
          title: "Deliver Quality Work:",
          desc: "Communicate clearly, meet deadlines, and exceed client expectations to build a strong reputation.",
        },
        {
          title: "Keep Learning & Growing:",
          desc: "Stay updated with industry trends and continuously improve your skills.",
        },
      ],
      proTipTitle: "Pro Tip:",
      proTipDesc:
        "Don’t be afraid to start small. Every project is a learning opportunity and a step toward building your freelance business!",
    },
    top5skills: {
      heroTitle: "Top 5 Skills Every Freelancer Needs in 2025",
      heroDesc:
        "Stay ahead in the freelance world by mastering these essential skills for the future.",
      skillsTitle: "The Must-Have Skills for Freelancers in 2025",
      skills: [
        {
          title: "Digital Marketing:",
          desc: "Understanding SEO, social media, and content marketing is crucial for promoting your services and helping clients grow their businesses.",
        },
        {
          title: "Tech Savvy:",
          desc: "Stay updated with the latest tools, platforms, and software relevant to your field—whether it’s web development, design, or project management.",
        },
        {
          title: "Communication:",
          desc: "Clear, professional communication (written and verbal) is key to building trust and managing client relationships.",
        },
        {
          title: "Adaptability:",
          desc: "The freelance landscape changes rapidly. Being flexible and open to learning new skills will keep you competitive.",
        },
        {
          title: "Time Management:",
          desc: "Juggling multiple projects and deadlines requires strong organizational skills and self-discipline.",
        },
      ],
      proTipTitle: "Pro Tip:",
      proTipDesc:
        "Invest in continuous learning—online courses, webinars, and networking—to keep your skills sharp and relevant in 2025 and beyond!",
    },
    balancingprojects: {
      heroTitle: "Balancing Multiple Projects as a Freelancer",
      heroDesc:
        "Tips and strategies for managing your time, clients, and workload effectively.",
      tipsTitle: "How to Juggle Multiple Freelance Projects",
      tips: [
        {
          title: "Prioritize Tasks:",
          desc: "Use a task manager or to-do list to organize your daily and weekly priorities.",
        },
        {
          title: "Set Realistic Deadlines:",
          desc: "Communicate clear timelines with clients and avoid overcommitting.",
        },
        {
          title: "Block Your Time:",
          desc: "Allocate specific time slots for each project to maintain focus and productivity.",
        },
        {
          title: "Use Tools & Automation:",
          desc: "Leverage project management and automation tools to streamline your workflow.",
        },
        {
          title: "Take Breaks & Avoid Burnout:",
          desc: "Schedule regular breaks and downtime to recharge and maintain creativity.",
        },
      ],
      proTipTitle: "Pro Tip:",
      proTipDesc:
        "Regularly review your workload and adjust your schedule as needed. Don’t hesitate to say no to new projects if your plate is full!",
    },
    devopsservices: {
      heroTitle: "Expert DevOps Services for Modern Businesses",
      heroDesc:
        "Accelerate your software delivery, improve reliability, and scale effortlessly with our end-to-end DevOps solutions.",
      getStarted: "Get Started",
      servicesTitle: "Our DevOps Services",
      servicesList: [
        {
          title: "CI/CD Pipeline Setup",
          desc: "Automate your build, test, and deployment processes for faster releases.",
        },
        {
          title: "Cloud Infrastructure Management",
          desc: "Design, deploy, and manage scalable cloud environments (AWS, Azure, GCP).",
        },
        {
          title: "Containerization & Orchestration",
          desc: "Dockerize your applications and manage them with Kubernetes or similar tools.",
        },
        {
          title: "Infrastructure as Code (IaC)",
          desc: "Automate infrastructure provisioning using Terraform, Ansible, or CloudFormation.",
        },
        {
          title: "Monitoring & Logging",
          desc: "Implement robust monitoring and logging for proactive issue detection.",
        },
        {
          title: "Security & Compliance",
          desc: "Integrate security best practices and compliance checks into your DevOps workflows.",
        },
      ],
      whyTitle: "Why Choose Our DevOps Services?",
      whyList: [
        {
          icon: "🚀",
          title: "Faster Delivery",
          desc: "Automated pipelines and processes for rapid, reliable releases.",
        },
        {
          icon: "☁️",
          title: "Cloud Expertise",
          desc: "Certified professionals in AWS, Azure, and Google Cloud.",
        },
        {
          icon: "🔒",
          title: "Security First",
          desc: "DevSecOps approach to keep your systems safe and compliant.",
        },
      ],
      processTitle: "Our Process",
      processList: [
        {
          title: "Assessment & Planning",
          desc: "We analyze your current setup and design a tailored DevOps strategy.",
        },
        {
          title: "Implementation",
          desc: "We set up pipelines, infrastructure, and automation tools for your project.",
        },
        {
          title: "Monitoring & Support",
          desc: "Continuous monitoring, optimization, and support for ongoing success.",
        },
      ],
      testimonialsTitle: "What Our Clients Say",
      testimonials: [
        {
          name: "Priya S.",
          feedback:
            "The DevOps team streamlined our deployment process and improved our cloud reliability!",
        },
        {
          name: "Alex M.",
          feedback:
            "Excellent service, fast delivery, and deep technical expertise. Highly recommended!",
        },
      ],
      ctaTitle: "Ready to Transform Your DevOps?",
      ctaDesc:
        "Contact us today to discuss your DevOps needs and get a free consultation. Let’s build a faster, more reliable future together!",
      contactUs: "Contact Us",
    },
    dashboard: {
      statCards: {
        totalEarnings: "Total Earnings",
        activeClients: "Active Clients",
        projectsCompleted: "Projects Completed",
        profileViews: "Profile Views",
      },
      charts: {
        projectsEarningsOverview: "Projects & Earnings Overview",
        projects: "Projects",
        earnings: "Earnings",
        earningsTrend: "Earnings Trend",
      },
      months: {
        jan: "Jan",
        feb: "Feb",
        mar: "Mar",
        apr: "Apr",
        may: "May",
        jun: "Jun",
      },
      tableHeaders: {
        projectId: "Project ID",
        client: "Client",
        project: "Project",
        amount: "Amount",
        status: "Status",
      },
      status: {
        completed: "Completed",
        pending: "Pending",
        inProgress: "In Progress",
      },
      recentProjectsTitle: "Recent Projects",
      recentProjects: [
        {
          id: "P-001",
          client: "Acme Corp",
          project: "Website Redesign",
          amount: "$2,000",
          status: "Completed",
        },
        {
          id: "P-002",
          client: "Beta LLC",
          project: "Mobile App",
          amount: "$3,500",
          status: "In Progress",
        },
        {
          id: "P-003",
          client: "Gamma Inc",
          project: "SEO Optimization",
          amount: "$1,200",
          status: "Pending",
        },
      ],
      pieChartTitle: "Freelance Categories",
      pieData: [
        { name: "Web Dev", value: 40, color: "#3b82f6" },
        { name: "Design", value: 25, color: "#f59e0b" },
        { name: "Writing", value: 15, color: "#10b981" },
        { name: "Marketing", value: 10, color: "#8b5cf6" },
        { name: "Video", value: 10, color: "#ef4444" },
      ],
    },
    footer: {
      description:
        "Connecting businesses with top talent worldwide to get projects done efficiently and effectively.",
      quickLinks: "Quick Links",
      links: [
        { name: "Home1", link: "/home1" },
        { name: "Home2", link: "/home2" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/services" },
        { name: "Blog", link: "/blog" },
        { name: "Contact", link: "/contact-us" },
      ],
      forFreelancers: "For Freelancers",
      freelancerLinks: [
        { num: 1, name: "Web & App Development", link: "/web-app-development" },
        { num: 2, name: "UI/UX & Graphic Design", link: "/ui-ux-design" },
        { num: 3, name: "Content Writing", link: "/content-writing" },
        { num: 4, name: "Digital Marketing", link: "/digital-marketing" },
        { num: 5, name: "Video Production", link: "/video-production" },
        {
          num: 6,
          name: "Cloud & DevOps Services",
          link: "/cloud-devops-services",
        },
      ],
      contactUs: "Contact Us",
      contactDetails: [
        { num: 1, name: "+192 123 4567" },
        {
          num: 2,
          name: "info@enkonix.in",
          icon: "<MailCheck size={15} className='mr-2' />",
        },
        {
          num: 3,
          name: "123 Enkonix Street, City, Country",
          icon: "<LocateFixed size={15} className='mr-2' />",
        },
      ],
      copyright: "FreelancerHub. All rights reserved.",
    },
  },
  ar: {
    header: {
      home: "الرئيسية",
      home1: "الصفحة الرئيسية 1",
      home2: "الصفحة الرئيسية 2",
      about: "من نحن",
      services: "الخدمات",
      allServices: "جميع الخدمات",
      webAppDevelopment: "تطوير الويب والتطبيقات",
      uiuxDesign: "تصميم واجهة المستخدم وتجربة المستخدم",
      contentWriting: "كتابة المحتوى",
      digitalMarketing: "التسويق الرقمي وتحسين محركات البحث",
      videoProduction: "إنتاج الفيديو والرسوم المتحركة",
      cloudDevops: "خدمات السحابة و DevOps",
      blog: "المدونة",
      contactUs: "اتصل بنا",
    },

    login: {
      login: "تسجيل الدخول",
      register: "إنشاء حساب",
      forgotPassword: "نسيت كلمة المرور",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      confirmPassword: "تأكيد كلمة المرور",
      backToLogin: "العودة لتسجيل الدخول",
      enterRegisteredEmail: "أدخل البريد الإلكتروني المسجل",
      enterNewPassword: "أدخل كلمة مرور جديدة",
      confirmNewPassword: "تأكيد كلمة المرور الجديدة",
      updatePassword: "تحديث كلمة المرور",
    },
    home1: {
      heroTitle: "ابحث عن المستقل المناسب لمشروعك",
      heroDesc: "تواصل مع أفضل المواهب، أنجز العمل بسرعة، ونمِ عملك.",
      hireNow: "وظف الآن",
      browseFreelancers: "تصفح المستقلين",
      whyFreelancing: "لماذا العمل الحر؟",
      whyDesc:
        "في عالم اليوم الرقمي السريع، المرونة هي الأساس. يوفر المستقلون خبرة عند الطلب وتعاونًا مرنًا ومواهب عالمية دون أعباء طويلة الأجل.",
      flexible: "مرونة التعاقد",
      flexibleDesc: "قم بتوسيع أو تقليص الفريق فورًا حسب احتياجات مشروعك.",
      cost: "فعالية التكلفة",
      costDesc: "وظف حسب المشروع وليس الرواتب. قلل التكاليف بشكل كبير.",
      global: "مواهب عالمية",
      globalDesc: "الوصول إلى متخصصين عبر الحدود والمناطق الزمنية.",
      fast: "تنفيذ سريع",
      fastDesc: "ينجز المستقلون العمل بسرعة دون تأخير الشركات.",
      topServices: "أفضل الخدمات",
      webDev: "تطوير الويب",
      webDevDesc: "بناء مواقع وتطبيقات ويب وواجهات متجاوبة.",
      design: "تصميم جرافيكي",
      designDesc: "شعارات، هوية بصرية، وتصاميم إبداعية.",
      writing: "كتابة المحتوى",
      writingDesc: "مقالات SEO، وصف المنتجات والمزيد.",
      marketing: "التسويق الرقمي",
      marketingDesc: "زيادة الظهور بالتسويق الذكي.",
      va: "مساعدة افتراضية",
      vaDesc: "دعم إداري، جدولة، أبحاث والمزيد.",
      video: "تحرير الفيديو",
      videoDesc: "مونتاج احترافي، إعلانات ومقاطع قصيرة.",
      appDev: "تطوير التطبيقات",
      appDevDesc: "بناء تطبيقات موبايل لـ iOS وAndroid.",
      seo: "تحسين محركات البحث",
      seoDesc: "ترتيب أعلى مع تحسين SEO تقني وداخلي.",
      howItWorks: "كيف يعمل الموقع",
      postJob: "انشر وظيفة",
      postJobDesc: "صف مشروعك وما تبحث عنه.",
      receive: "استلم العروض",
      receiveDesc: "تواصل مع أفضل المستقلين الجاهزين للمساعدة.",
      hire: "وظف المستقل المناسب",
      hireDesc: "اختر الأنسب وابدأ فورًا.",
      done: "أنجز مشروعك",
      doneDesc: "تابع التقدم وتواصل بسهولة واستلم عملك بجودة.",
      testimonials: "آراء المستخدمين",
      t1: '"منصة رائعة للعثور على مستقلين موهوبين بسرعة!"',
      t1By: "- راجش، مؤسس شركة ناشئة",
      t2: '"ساعدتني في الحصول على مشاريع باستمرار كمطور."',
      t2By: "- بريا، مطور ويب",
      cta: "ابدأ رحلتك في العمل الحر اليوم",
      join: "انضم الآن",
    },
    home2: {
      heroTitle: "حلول عمل حر إبداعية",
      heroDesc: "تصميم مواقع حديثة، تصاميم نظيفة وتسويق ذكي لعلامتك التجارية.",
      letsTalk: "تواصل معنا",
      whatIOffer: "ماذا أقدم",
      services: [
        {
          title: "تطوير الويب",
          desc: "مواقع متجاوبة وقابلة للتطوير بأحدث التقنيات.",
          icon: "💻",
        },
        {
          title: "تصميم UI/UX",
          desc: "تصاميم جميلة وسهلة الاستخدام تركز على تجربة المستخدم.",
          icon: "🎨",
        },
        {
          title: "SEO وتسويق",
          desc: "ترتيب أعلى، زيادة الزيارات، وتحويل المزيد من العملاء.",
          icon: "🚀",
        },
      ],
      recentProjects: "أحدث المشاريع",
      project: (item: number) => `مشروع ${item}`,
      projectDesc: "عرض موقع أو تطبيق مباشر",
      who: "من وراء العمل",
      whoDesc:
        "مستقل شغوف يركز على الابتكار، التصميم النظيف، والنتائج الواقعية. بخبرة في تطوير الويب والتسويق أساعد العلامات التجارية على النمو بحضور ذكي على الإنترنت.",
      happyClients: "عملاء سعداء",
      testimonials: [
        {
          quote:
            "تم التسليم بجودة عالية وفي الوقت المحدد. تواصل ممتاز طوال المشروع!",
          author: "— أليكس م.، مدير تنفيذي",
        },
        {
          quote: "مهارات تصميم مذهلة واستجابة سريعة. أنصح به بشدة!",
          author: "— رينا س.، مؤسسة شركة ناشئة",
        },
      ],
      build: "لنصنع شيئًا رائعًا",
      buildDesc: "تواصل لبدء مشروعك القادم أو لطلب استشارة مجانية.",
      contactMe: "تواصل معي",
    },
    about: {
      heroTitle: "عن منصتنا للعمل الحر",
      heroDesc:
        "نمكن الشركات والمستقلين من التواصل والتعاون والنمو معًا في عالم رقمي حديث.",
      missionTitle: "مهمتنا",
      missionDesc:
        "جعل المواهب عالية الجودة متاحة للجميع، في كل مكان. نحن نؤمن بالعمل المرن، والحرية الإبداعية، وبناء شراكات طويلة الأمد بين العملاء والمستقلين.",
      valuesTitle: "قيمنا",
      values: [
        {
          title: "الثقة والشفافية",
          desc: "نحن نعزز التواصل المفتوح والتغذية الراجعة الصادقة في كل مشروع.",
        },
        {
          title: "الابتكار",
          desc: "نحن نتبنى الأفكار والتقنيات الجديدة لتقديم أفضل النتائج.",
        },
        {
          title: "التعاون",
          desc: "نؤمن أن الأشياء العظيمة تحدث عندما يعمل الأشخاص الموهوبون معًا.",
        },
      ],
      teamTitle: "تعرف على مواهبنا",
      team: [
        {
          icon: "💻",
          title: "مطورو الويب",
          desc: "خبراء في الواجهة الأمامية والخلفية والتطوير الكامل لبناء رؤيتك.",
        },
        {
          icon: "🎨",
          title: "المصممون",
          desc: "متخصصون في واجهة وتجربة المستخدم، العلامات التجارية، والإبداع البصري.",
        },
        {
          icon: "🚀",
          title: "المسوقون",
          desc: "خبراء في تحسين محركات البحث والمحتوى والتسويق الرقمي لنمو أعمالك.",
        },
      ],
    },
    services: {
      heroTitle: "خدماتنا المستقلة",
      heroDesc:
        "استكشف مجموعة واسعة من الخدمات الاحترافية المصممة خصيصًا لتلبية احتياجات عملك.",
      coreTitle: "خدماتنا الأساسية",
      servicesList: [
        {
          title: "تطوير المواقع والتطبيقات",
          link: "/web-app-development",
          desc: "مواقع مخصصة، تطبيقات ويب وحلول للهواتف المحمولة مبنية بأحدث التقنيات لتحقيق الأداء وقابلية التوسع.",
          img: "/services/service-dev.jpg",
        },
        {
          title: "تصميم UI/UX والجرافيك",
          link: "/ui-ux-design",
          desc: "تصاميم حديثة تركز على المستخدم للويب والجوال والعلامات التجارية. شعارات، لافتات، وحزم هوية بصرية كاملة.",
          img: "/services/service-design.jpg",
        },
        {
          title: "كتابة المحتوى",
          link: "/content-writing",
          desc: "مقالات SEO، نصوص للمواقع، أوصاف المنتجات، ومحتوى إبداعي لجذب جمهورك وتعزيز علامتك التجارية.",
          img: "/services/service-content.jpg",
        },
        {
          title: "التسويق الرقمي وتحسين محركات البحث",
          link: "/digital-marketing",
          desc: "نمّ حضورك الرقمي مع خبراء SEO، إدارة وسائل التواصل الاجتماعي، الحملات الإعلانية، واستراتيجيات التسويق عبر البريد الإلكتروني.",
          img: "/services/service-marketing.jpg",
        },
        {
          title: "إنتاج الفيديو والرسوم المتحركة",
          link: "/video-production",
          desc: "فيديوهات ترويجية، رسوم توضيحية متحركة، وتحرير احترافي لرواية قصتك وجذب جمهورك.",
          img: "/services/service-video.jpg",
        },
        {
          title: "خدمات السحابة و DevOps",
          link: "/cloud-devops-services",
          desc: "بنية تحتية سحابية قابلة للتوسع، خطوط CI/CD، وحلول أتمتة لضمان النشر السلس والأداء العالي.",
          img: "/services/service-cloud.jpg",
        },
      ],
      getStarted: "ابدأ الآن",
      whyTitle: "لماذا تختارنا؟",
      whyList: [
        {
          title: "مواهب موثوقة",
          desc: "جميع المستقلين يتم التحقق من جودتهم وموثوقيتهم.",
        },
        {
          title: "مرونة في التعاقد",
          desc: "يمكنك زيادة أو تقليل حجم فريقك حسب احتياجات مشروعك.",
        },
        {
          title: "تسعير شفاف",
          desc: "لا توجد رسوم خفية. تسعير واضح ومباشر لكل خدمة.",
        },
      ],
      processTitle: "كيف تعمل منصتنا؟",
      processList: [
        {
          title: "انشر مشروعًا",
          desc: "صف احتياجاتك واحصل على أفضل المستقلين.",
        },
        {
          title: "مراجعة العروض",
          desc: "قارن بين العروض، المحافظ، والتقييمات لاختيار الأنسب.",
        },
        { title: "تعاون", desc: "اعمل معًا، تابع التقدم، وتواصل بسهولة." },
        {
          title: "احصل على النتائج",
          desc: "استلم عملًا عالي الجودة وادفع بأمان عند رضاك.",
        },
      ],
      testimonialsTitle: "ماذا يقول العملاء",
      testimonials: [
        {
          quote: "تجربة رائعة! المستقل قدم ما احتجت بالضبط.",
          author: "— بريا س.، صاحبة عمل",
        },
        {
          quote: "سريع، موثوق، ومبدع. أوصي به بشدة لأي مشروع.",
          author: "— راجيش ك.، مؤسس شركة ناشئة",
        },
      ],
      ctaTitle: "هل أنت مستعد لبدء مشروعك؟",
      ctaDesc: "انضم إلى منصتنا وتواصل مع أفضل المواهب المستقلة اليوم.",
    },
    blog: {
      heroTitle: "مدونة العمل الحر والرؤى",
      heroDesc: "نصائح وأدلة وقصص لمساعدتك على النجاح في رحلتك في العمل الحر.",
      futureTitle: "لماذا العمل الحر هو مستقبل العمل",
      futureDesc1:
        "يوفر العمل الحر المرونة والاستقلالية وفرصة العمل على مشاريع متنوعة من أي مكان في العالم. مع تزايد اعتماد الشركات على العمل عن بُعد، يستمر الطلب على المستقلين المهرة في النمو. سواء كنت مطورًا أو مصممًا أو كاتبًا أو مسوقًا، فإن العمل الحر يمكّنك من تشكيل مسارك المهني وتحقيق توازن أفضل بين العمل والحياة.",
      futureDesc2:
        "تابع مدونتنا للحصول على أحدث الاتجاهات والنصائح والموارد التي تساعدك على الازدهار كمستقل في الاقتصاد الرقمي اليوم.",
      latestTitle: "أحدث مقالات العمل الحر",
      posts: [
        {
          title: "كيف تبدأ العمل الحر: دليل للمبتدئين",
          excerpt:
            "تعرّف على الخطوات الأساسية لإطلاق مسيرتك في العمل الحر، من بناء معرض أعمالك إلى إيجاد عملائك الأوائل.",
          link: "/how-to-start-freelancing",
        },
        {
          title: "أهم 5 مهارات يحتاجها كل مستقل في عام 2025",
          excerpt:
            "اكتشف أكثر المهارات المطلوبة للمستقلين وكيفية البقاء في الصدارة في سوق تنافسي.",
          link: "/top-5-skills-every-freelancer-needs",
        },
        {
          title: "كيفية الموازنة بين مشاريع متعددة كمستقل",
          excerpt:
            "نصائح واستراتيجيات لإدارة وقتك وعملائك وحجم عملك بفعالية كمستقل.",
          link: "/balancing-multiple-projects",
        },
      ],
      readMore: "اقرأ المزيد",
      benefitsTitle: "فوائد العمل الحر",
      benefits: [
        {
          icon: "🌍",
          title: "العمل من أي مكان",
          desc: "استمتع بحرية العمل عن بُعد وتحديد جدولك الخاص.",
        },
        {
          icon: "💼",
          title: "مشاريع متنوعة",
          desc: "اختر المشاريع التي تتناسب مع مهاراتك واهتماماتك لمسيرة مهنية مُرضية.",
        },
        {
          icon: "💸",
          title: "إمكانات دخل غير محدودة",
          desc: "نمِ دخلك من خلال العمل مع عدة عملاء وتحديد أسعارك الخاصة.",
        },
      ],
      faqTitle: "الأسئلة الشائعة حول العمل الحر",
      faq: [
        {
          q: "كيف أجد عملاء كمستقل؟",
          a: "ابدأ ببناء معرض أعمال قوي، وتواصل على منصات مثل لينكدإن، وانضم إلى أسواق العمل الحر. المتابعة المستمرة وتقديم عمل بجودة عالية سيساعدك على جذب المزيد من العملاء مع مرور الوقت.",
        },
        {
          q: "كيف أحدد أسعار عملي الحر؟",
          a: "ابحث عن معايير الصناعة، وخذ في الاعتبار خبرتك، ومدى تعقيد المشروع. لا تقلل من قيمة مهاراتك—اشحن بما تستحقه وقم بالتعديل مع اكتساب المزيد من الخبرة.",
        },
        {
          q: "ما هي أكبر التحديات في العمل الحر؟",
          a: "تشمل التحديات الشائعة العثور على عمل مستمر، وإدارة الوقت، والتعامل مع الضرائب. بناء عادات جيدة واستخدام أدوات الإنتاجية يمكن أن يساعدك على التغلب على هذه العقبات.",
        },
      ],
      newsletterTitle: "ابقَ على اطلاع بنصائح العمل الحر",
      newsletterDesc:
        "اشترك في نشرتنا الإخبارية للحصول على أحدث النصائح والموارد والعروض الحصرية للعمل الحر.",
    },
    contact: {
      heroTitle: "اتصل بنا",
      heroDesc:
        "يسعدنا سماعك! تواصل معنا للاستفسارات حول المشاريع، الدعم، أو حتى لإلقاء التحية.",
      formTitle: "أرسل رسالة",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      subject: "الموضوع",
      message: "رسالتك",
      send: "إرسال الرسالة",
      success: "تم إرسال الرسالة بنجاح!",
      faqTitle: "الأسئلة الشائعة",
      faq: [
        {
          q: "كم من الوقت سأنتظر للحصول على رد؟",
          a: "نهدف للرد على جميع الاستفسارات خلال 24 ساعة.",
        },
        {
          q: "هل يمكنني طلب خدمة مخصصة؟",
          a: "بالتأكيد! فقط صف احتياجاتك في النموذج وسنقوم بتخصيص حل لك.",
        },
        {
          q: "هل معلوماتي آمنة؟",
          a: "نعم، خصوصيتك مهمة لنا. نحن لا نشارك بياناتك دون موافقتك.",
        },
      ],
      locationTitle: "موقعنا",
    },
    webapp: {
      heroTitle: "خدمات تطوير تطبيقات الويب للأعمال الحديثة",
      heroDesc:
        "ابنِ تطبيقات ويب قابلة للتوسع وآمنة وعالية الأداء مصممة خصيصًا لاحتياجات عملك.",
      getStarted: "ابدأ الآن",
      servicesTitle: "خدمات تطوير تطبيقات الويب لدينا",
      servicesList: [
        {
          title: "تطبيقات ويب مخصصة",
          desc: "حلول ويب مصممة لتلبية احتياجات عملك وأهدافك الفريدة.",
        },
        {
          title: "تطبيقات ويب تقدمية (PWAs)",
          desc: "سريعة وموثوقة وجذابة تعمل بسلاسة عبر الأجهزة المختلفة.",
        },
        {
          title: "منصات التجارة الإلكترونية",
          desc: "متاجر إلكترونية قوية مع مدفوعات آمنة وهيكلية قابلة للتوسع.",
        },
        {
          title: "تطوير ودمج واجهات برمجة التطبيقات (APIs)",
          desc: "واجهات قوية لربط تطبيقك بخدمات الطرف الثالث.",
        },
        {
          title: "تصميم واجهة وتجربة المستخدم (UI/UX)",
          desc: "واجهات حديثة وسهلة الاستخدام لتجربة سلسة.",
        },
        {
          title: "الصيانة والدعم",
          desc: "تحديثات مستمرة ومراقبة ودعم لتطبيقاتك.",
        },
      ],
      whyTitle: "لماذا تختار خدمات تطوير تطبيقات الويب لدينا؟",
      whyList: [
        {
          icon: "💻",
          title: "تقنيات حديثة",
          desc: "نستخدم أحدث الأطر والأدوات لتحقيق أفضل أداء.",
        },
        {
          icon: "🔒",
          title: "الأمان أولاً",
          desc: "أفضل الممارسات لحماية بياناتك ومستخدميك دائمًا.",
        },
        {
          icon: "⚡",
          title: "تسليم سريع",
          desc: "عمليات رشيقة للتطوير السريع والإطلاق السلس.",
        },
      ],
      processTitle: "عمليتنا",
      processList: [
        {
          title: "الاكتشاف والتخطيط",
          desc: "نقوم بتحليل متطلباتك وتصميم حل مخصص.",
        },
        {
          title: "التطوير",
          desc: "يقوم فريقنا ببناء تطبيقك باستخدام أحدث التقنيات.",
        },
        {
          title: "الاختبار والإطلاق",
          desc: "نختبر بدقة وننشر تطبيقك لإطلاق مثالي.",
        },
      ],
      testimonialsTitle: "ماذا يقول عملاؤنا",
      testimonials: [
        {
          name: "سانديب ر.",
          feedback:
            "تم تسليم تطبيق الويب المخصص في الوقت المحدد وتجاوز توقعاتنا!",
        },
        {
          name: "بريا د.",
          feedback:
            "فريق محترف وسريع الاستجابة وذو مهارات عالية. أنصح به بشدة!",
        },
      ],
      ctaTitle: "هل أنت مستعد لبناء تطبيق الويب التالي الخاص بك؟",
      ctaDesc:
        "اتصل بنا اليوم لمناقشة مشروعك والحصول على استشارة مجانية. دعنا نحول أفكارك إلى واقع!",
      contactUs: "اتصل بنا",
    },
    uiux: {
      heroTitle: "خدمات تصميم UI/UX لتجارب رقمية استثنائية",
      heroDesc:
        "ارتقِ بمنتجك من خلال التصميم الموجه للمستخدم، والواجهات الجميلة، والتجارب السلسة التي تزيد التفاعل.",
      getStarted: "ابدأ الآن",
      servicesTitle: "خدمات تصميم UI/UX الخاصة بنا",
      servicesList: [
        {
          title: "أبحاث وتحليل المستخدم",
          desc: "فهم احتياجات وسلوكيات المستخدمين لتوجيه قرارات التصميم.",
        },
        {
          title: "التخطيطات والنماذج الأولية",
          desc: "تصور الأفكار بسرعة من خلال نماذج تفاعلية.",
        },
        {
          title: "تصميم الواجهة (UI)",
          desc: "إنشاء واجهات مستخدم مذهلة ومتسقة مع هوية العلامة التجارية.",
        },
        {
          title: "تصميم تجربة المستخدم (UX)",
          desc: "تصميم تجارب سلسة وبديهية تسعد المستخدمين.",
        },
        {
          title: "اختبار سهولة الاستخدام",
          desc: "تحقق من التصاميم مع المستخدمين الفعليين وتحسينها لتحقيق أفضل النتائج.",
        },
        {
          title: "أنظمة التصميم",
          desc: "تطوير أنظمة تصميم قابلة للتوسع لتجارب منتجات متسقة.",
        },
      ],
      whyTitle: "لماذا تختار خدمات UI/UX الخاصة بنا؟",
      whyList: [
        {
          icon: "🎨",
          title: "إبداعي وحديث",
          desc: "تصاميم مبتكرة وعصرية مصممة خصيصًا لعلامتك التجارية ومستخدميك.",
        },
        {
          icon: "🧑‍💻",
          title: "مركز على المستخدم",
          desc: "كل قرار يعتمد على احتياجات المستخدم الحقيقية وردود الفعل.",
        },
        {
          icon: "⚡",
          title: "سريع وموثوق",
          desc: "تسليم سريع ودعم مستمر لنجاح مشروعك.",
        },
      ],
      processTitle: "عمليتنا",
      processList: [
        {
          title: "الاكتشاف والبحث",
          desc: "نحلل أهدافك ومستخدميك والمنافسين لتوجيه التصميم.",
        },
        {
          title: "التصميم والنمذجة",
          desc: "ننشئ تخطيطات، نماذج أولية، وتصاميم UI عالية الدقة.",
        },
        {
          title: "الاختبار والتسليم",
          desc: "اختبار قابلية الاستخدام، جمع الملاحظات، والتسليم النهائي لموارد التصميم.",
        },
      ],
      testimonialsTitle: "ماذا يقول عملاؤنا",
      testimonials: [
        {
          name: "أميت ب.",
          feedback:
            "تحسنت قابلية استخدام تطبيقنا ومظهره بشكل كبير. الفريق مبدع واهتمامه بالتفاصيل رائع!",
        },
        {
          name: "ليزا م.",
          feedback:
            "احترافية، عصرية، وموجهة للمستخدم. أوصي بها لأي مشروع UI/UX!",
        },
      ],
      ctaTitle: "هل أنت مستعد لتحويل تجربة منتجك؟",
      ctaDesc:
        "تواصل معنا اليوم لمناقشة احتياجات تصميم UI/UX الخاصة بك واحصل على استشارة مجانية. لنصنع شيئًا رائعًا معًا!",
      contactUs: "اتصل بنا",
    },
    contentwriting: {
      heroTitle: "خدمات كتابة المحتوى الاحترافية",
      heroDesc:
        "عزز علامتك التجارية بمحتوى عالي الجودة متوافق مع محركات البحث، يقدمه كُتاب خبراء. نحن نساعدك على جذب جمهورك وإعلامه وتحويله إلى عملاء.",
      getStarted: "ابدأ الآن",
      servicesTitle: "خدمات كتابة المحتوى لدينا",
      servicesList: [
        {
          title: "كتابة المدونات والمقالات",
          desc: "مقالات ومدونات جذابة ومتوافقة مع السيو مصممة خصيصًا لجمهورك.",
        },
        {
          title: "محتوى المواقع الإلكترونية",
          desc: "نصوص مقنعة وواضحة تحول الزوار إلى عملاء.",
        },
        {
          title: "أوصاف المنتجات",
          desc: "أوصاف منتجات مقنعة تزيد المبيعات وتبرز المميزات.",
        },
        {
          title: "محتوى وسائل التواصل الاجتماعي",
          desc: "منشورات وإبداعات مميزة لنمو علامتك التجارية على جميع المنصات.",
        },
        {
          title: "الكتابة التقنية",
          desc: "وثائق وأدلة مستخدم دقيقة وسهلة الفهم لمنتجاتك.",
        },
        {
          title: "التحرير والتدقيق اللغوي",
          desc: "محتوى مصقول وخالٍ من الأخطاء يحافظ على هوية علامتك التجارية.",
        },
      ],
      whyTitle: "لماذا تختار خدمات كتابة المحتوى لدينا؟",
      whyList: [
        {
          icon: "💡",
          title: "إبداع وأصالة",
          desc: "كل محتوى فريد ومصمم خصيصًا لصوت علامتك التجارية.",
        },
        {
          icon: "⚡",
          title: "تنفيذ سريع",
          desc: "تسليم سريع دون المساس بالجودة.",
        },
        {
          icon: "🔍",
          title: "متوافق مع السيو",
          desc: "محتوى مصمم ليتصدر نتائج البحث ويزيد من حركة المرور.",
        },
      ],
      processTitle: "خطوات عملنا",
      processList: [
        {
          title: "الاستشارة",
          desc: "نناقش أهدافك وجمهورك واحتياجاتك من المحتوى.",
        },
        {
          title: "إنشاء المحتوى",
          desc: "يعمل كُتابنا على صياغة محتوى جذاب وأصلي لمشروعك.",
        },
        {
          title: "المراجعة والتسليم",
          desc: "تقوم بمراجعة المحتوى وطلب التعديلات قبل التسليم النهائي.",
        },
      ],
      testimonialsTitle: "آراء عملائنا",
      testimonials: [
        {
          name: "سارة ك.",
          feedback:
            "خدمة كتابة المحتوى فاقت توقعاتي! حركة المرور على موقعي ازدادت بشكل ملحوظ.",
        },
        {
          name: "جيمس ل.",
          feedback:
            "احترافية، سريعة، وإبداعية. أنصح بها لأي عمل يحتاج إلى محتوى عالي الجودة.",
        },
      ],
      ctaTitle: "هل أنت مستعد للارتقاء بمحتواك؟",
      ctaDesc:
        "اتصل بنا اليوم لمناقشة مشروعك والحصول على عرض مجاني. دعنا نصنع محتوى يحقق النتائج!",
      contactUs: "اتصل بنا",
    },
    digitalmarketing: {
      heroTitle: "خدمات التسويق الرقمي لتنمية عملك",
      heroDesc:
        "وصل إلى جمهورك المستهدف، وزد من التفاعل، وزد المبيعات من خلال حلولنا الشاملة للتسويق الرقمي.",
      getStarted: "ابدأ الآن",
      servicesTitle: "خدماتنا في التسويق الرقمي",
      servicesList: [
        {
          title: "تحسين محركات البحث (SEO)",
          desc: "حسّن ظهور موقعك وترتيبه في محركات البحث.",
        },
        {
          title: "التسويق عبر وسائل التواصل الاجتماعي",
          desc: "نمِّ علامتك التجارية وتفاعل مع جمهورك عبر جميع المنصات الاجتماعية.",
        },
        {
          title: "إعلانات الدفع لكل نقرة (PPC)",
          desc: "وجّه زيارات مستهدفة وزد من العائد على الاستثمار من خلال حملات إعلانية فعالة.",
        },
        {
          title: "التسويق بالمحتوى",
          desc: "اجذب واحتفظ بالعملاء من خلال محتوى قيّم وملائم.",
        },
        {
          title: "التسويق عبر البريد الإلكتروني",
          desc: "نمِّ العلاقات مع العملاء وزد التحويلات عبر حملات بريد إلكتروني مخصصة.",
        },
        {
          title: "التحليلات والتقارير",
          desc: "تتبع وقِس وحسّن أداء حملات التسويق الرقمي الخاصة بك.",
        },
      ],
      whyTitle: "لماذا تختار خدماتنا في التسويق الرقمي؟",
      whyList: [
        {
          icon: "📈",
          title: "نتائج مثبتة",
          desc: "نقدم نمواً قابلاً للقياس وعائداً على الاستثمار لأعمالك.",
        },
        {
          icon: "🎯",
          title: "استراتيجيات مستهدفة",
          desc: "حملات مخصصة للوصول إلى عملائك المثاليين.",
        },
        {
          icon: "🤝",
          title: "دعم مخصص",
          desc: "خدمة شخصية وتحسين مستمر لتحقيق النجاح.",
        },
      ],
      processTitle: "عملية عملنا",
      processList: [
        {
          title: "الاكتشاف والاستراتيجية",
          desc: "نتعرف على عملك ونضع خطة تسويقية مخصصة.",
        },
        {
          title: "التنفيذ",
          desc: "نطلق وندير الحملات عبر جميع القنوات المناسبة.",
        },
        {
          title: "التحليل والتحسين",
          desc: "نراقب النتائج ونُحسن الأداء باستمرار.",
        },
      ],
      testimonialsTitle: "ماذا يقول عملاؤنا",
      testimonials: [
        {
          name: "رافي ت.",
          feedback:
            "وجودنا على الإنترنت ارتفع بشكل كبير بفضل خبرتهم في التسويق الرقمي!",
        },
        {
          name: "إميلي و.",
          feedback: "احترافية وإبداع ونتائج رائعة. أوصي بهم بشدة لأي عمل!",
        },
      ],
      ctaTitle: "هل أنت مستعد لتعزيز حضورك الرقمي؟",
      ctaDesc:
        "اتصل بنا اليوم لمناقشة أهدافك في التسويق الرقمي واحصل على جلسة استراتيجية مجانية. لننمو معًا!",
      contactUs: "اتصل بنا",
    },
    videoproduction: {
      heroTitle: "خدمات إنتاج فيديو احترافية",
      heroDesc:
        "أسر قلوب جمهورك وارتقِ بعلامتك التجارية مع حلول فيديو عالية الجودة ومبتكرة مصممة خصيصًا لاحتياجاتك.",
      getStarted: "ابدأ الآن",
      servicesTitle: "خدمات إنتاج الفيديو لدينا",
      servicesList: [
        {
          title: "فيديوهات الشركات",
          desc: "فيديوهات احترافية لعرض علامتك التجارية أو منتجاتك أو خدماتك.",
        },
        {
          title: "الفيديوهات الترويجية",
          desc: "مقاطع دعائية جذابة لتعزيز حملاتك التسويقية والوصول إلى جمهور أوسع.",
        },
        {
          title: "تغطية الأحداث",
          desc: "توثيق أبرز لحظات فعالياتك بجودة عالية.",
        },
        {
          title: "الفيديوهات التوضيحية",
          desc: "تبسيط الأفكار المعقدة عبر فيديوهات توضيحية متحركة وواضحة.",
        },
        {
          title: "فيديوهات وسائل التواصل",
          desc: "مقاطع قصيرة ومؤثرة لتحقيق أقصى تفاعل على المنصات الاجتماعية.",
        },
        {
          title: "المونتاج وما بعد الإنتاج",
          desc: "تحرير متقن، تصحيح ألوان، وتصميم صوتي لنتيجة احترافية.",
        },
      ],
      whyTitle: "لماذا تختار خدماتنا في إنتاج الفيديو؟",
      whyList: [
        {
          icon: "🎬",
          title: "سرد قصصي إبداعي",
          desc: "نحوّل أفكارك إلى قصص بصرية مؤثرة وملهمة.",
        },
        {
          icon: "⚡",
          title: "تنفيذ سريع",
          desc: "تسليم في الوقت المحدد دون المساومة على الجودة.",
        },
        {
          icon: "🎥",
          title: "فريق متكامل",
          desc: "من الفكرة إلى النسخة النهائية، ندير كل مراحل الإنتاج.",
        },
      ],
      processTitle: "خطوات عملنا",
      processList: [
        {
          title: "الاستشارة والتخطيط",
          desc: "نناقش أهدافك، جمهورك، ورؤيتك للفيديو.",
        },
        {
          title: "الإنتاج",
          desc: "يقوم فريقنا بتصوير جميع اللقطات باستخدام معدات احترافية.",
        },
        {
          title: "المونتاج والتسليم",
          desc: "نقوم بالتحرير والتلميع وتسليم الفيديو النهائي الجاهز للنشر.",
        },
      ],
      testimonialsTitle: "آراء عملائنا",
      testimonials: [
        {
          name: "أميت ب.",
          feedback:
            "فريق الفيديو جعل رؤيتنا واقعًا! المنتج النهائي كان مذهلًا وفعّالًا.",
        },
        {
          name: "ليزا م.",
          feedback:
            "مبدعون وموثوقون وسريعون. كان فيديو الحدث ناجحًا للغاية مع جمهورنا!",
        },
      ],
      ctaTitle: "هل أنت مستعد لإحياء قصتك؟",
      ctaDesc:
        "تواصل معنا اليوم لمناقشة مشروع الفيديو الخاص بك واحصل على استشارة مجانية. لنبنِ شيئًا مذهلًا معًا!",
      contactUs: "اتصل بنا",
    },
    howtofreelance: {
      bannerAlt: "كيفية بدء العمل الحر",
      heroTitle: "كيفية بدء العمل الحر: دليل للمبتدئين",
      heroDesc:
        "ابدأ حياتك المهنية في العمل الحر بهذه الخطوات الأساسية والنصائح للنجاح.",
      stepsTitle: "دليل خطوة بخطوة لبدء العمل الحر",
      steps: [
        {
          title: "حدد مهاراتك:",
          desc: "قيّم الخدمات التي يمكنك تقديمها—الكتابة، التصميم، التطوير، التسويق، وغيرها.",
        },
        {
          title: "ابنِ معرض أعمالك:",
          desc: "أنشئ أمثلة من عملك لعرض قدراتك. استخدم المشاريع الشخصية أو العمل التطوعي إذا كنت مبتدئًا.",
        },
        {
          title: "أنشئ حضورك على الإنترنت:",
          desc: "قم بعمل ملف احترافي على منصات مثل LinkedIn، Upwork، أو Fiverr. فكر أيضًا في بناء موقع شخصي.",
        },
        {
          title: "ابحث عن عملائك الأوائل:",
          desc: "ابدأ بشبكتك، تقدم للوظائف الحرة، واعرض خدماتك للعملاء المحتملين.",
        },
        {
          title: "قدّم عملًا عالي الجودة:",
          desc: "تواصل بوضوح، التزم بالمواعيد النهائية، وتجاوز توقعات العملاء لبناء سمعة قوية.",
        },
        {
          title: "استمر في التعلم والنمو:",
          desc: "ابقَ على اطلاع باتجاهات الصناعة وحسّن مهاراتك باستمرار.",
        },
      ],
      proTipTitle: "نصيحة احترافية:",
      proTipDesc:
        "لا تخف من البدء بخطوات صغيرة. كل مشروع هو فرصة للتعلم وخطوة نحو بناء عملك الحر!",
    },
    top5skills: {
      heroTitle: "أفضل 5 مهارات يحتاجها كل مستقل في عام 2025",
      heroDesc:
        "ابق في صدارة عالم العمل الحر من خلال إتقان هذه المهارات الأساسية للمستقبل.",
      skillsTitle: "المهارات الأساسية للمستقلين في عام 2025",
      skills: [
        {
          title: "التسويق الرقمي:",
          desc: "فهم تحسين محركات البحث (SEO) ووسائل التواصل الاجتماعي والتسويق بالمحتوى أمر بالغ الأهمية للترويج لخدماتك ومساعدة العملاء على تنمية أعمالهم.",
        },
        {
          title: "القدرة التقنية:",
          desc: "ابقَ مطلعًا على أحدث الأدوات والمنصات والبرامج المتعلقة بمجالك — سواء كان تطوير الويب أو التصميم أو إدارة المشاريع.",
        },
        {
          title: "التواصل:",
          desc: "التواصل الواضح والمهني (كتابي وشفهي) هو المفتاح لبناء الثقة وإدارة علاقات العملاء.",
        },
        {
          title: "القدرة على التكيف:",
          desc: "يتغير مشهد العمل الحر بسرعة. المرونة والانفتاح على تعلم مهارات جديدة سيبقيانك في المنافسة.",
        },
        {
          title: "إدارة الوقت:",
          desc: "التعامل مع مشاريع ومواعيد نهائية متعددة يتطلب مهارات تنظيمية قوية وانضباطًا ذاتيًا.",
        },
      ],
      proTipTitle: "نصيحة احترافية:",
      proTipDesc:
        "استثمر في التعلم المستمر — الدورات عبر الإنترنت والندوات والتواصل — للحفاظ على مهاراتك حادة وذات صلة في عام 2025 وما بعده!",
    },
    balancingprojects: {
      heroTitle: "موازنة المشاريع المتعددة كفريلانسر",
      heroDesc: "نصائح واستراتيجيات لإدارة وقتك، عملائك، وعبء العمل بشكل فعال.",
      tipsTitle: "كيف تدير مشاريع فريلانسر متعددة",
      tips: [
        {
          title: "تحديد الأولويات:",
          desc: "استخدم مدير مهام أو قائمة مهام لتنظيم أولوياتك اليومية والأسبوعية.",
        },
        {
          title: "حدد مواعيد نهائية واقعية:",
          desc: "تواصل بوضوح مع العملاء بشأن الجداول الزمنية وتجنب الإفراط في الالتزامات.",
        },
        {
          title: "تخصيص وقت محدد:",
          desc: "خصص فترات زمنية محددة لكل مشروع للحفاظ على التركيز والإنتاجية.",
        },
        {
          title: "استخدام الأدوات والأتمتة:",
          desc: "استفد من أدوات إدارة المشاريع والأتمتة لتبسيط سير عملك.",
        },
        {
          title: "خذ استراحات وتجنب الإرهاق:",
          desc: "حدد استراحات منتظمة ووقت للراحة لاستعادة النشاط والحفاظ على الإبداع.",
        },
      ],
      proTipTitle: "نصيحة احترافية:",
      proTipDesc:
        "راجع عبء عملك بانتظام وعدّل جدولك عند الحاجة. لا تتردد في رفض المشاريع الجديدة إذا كان جدولك ممتلئًا!",
    },
    devopsservices: {
      heroTitle: "خدمات DevOps احترافية للأعمال الحديثة",
      heroDesc:
        "سرّع تسليم البرامج، حسّن الموثوقية، وقم بالتوسع بسهولة مع حلول DevOps الشاملة لدينا.",
      getStarted: "ابدأ الآن",
      servicesTitle: "خدمات DevOps لدينا",
      servicesList: [
        {
          title: "إعداد خط أنابيب CI/CD",
          desc: "أتمتة عمليات البناء والاختبار والنشر لإصدار أسرع.",
        },
        {
          title: "إدارة البنية التحتية السحابية",
          desc: "تصميم ونشر وإدارة بيئات سحابية قابلة للتوسع (AWS, Azure, GCP).",
        },
        {
          title: "الحاويات والتنسيق",
          desc: "تحويل تطبيقاتك إلى Docker وإدارتها باستخدام Kubernetes أو أدوات مشابهة.",
        },
        {
          title: "البنية التحتية كرمز (IaC)",
          desc: "أتمتة توفير البنية التحتية باستخدام Terraform أو Ansible أو CloudFormation.",
        },
        {
          title: "المراقبة والتسجيل",
          desc: "تنفيذ أنظمة مراقبة وتسجيل قوية لاكتشاف المشكلات بشكل استباقي.",
        },
        {
          title: "الأمان والامتثال",
          desc: "دمج أفضل ممارسات الأمان وفحوصات الامتثال في تدفقات عمل DevOps.",
        },
      ],
      whyTitle: "لماذا تختار خدمات DevOps الخاصة بنا؟",
      whyList: [
        {
          icon: "🚀",
          title: "تسليم أسرع",
          desc: "خطوط أنابيب وعمليات مؤتمتة لإصدارات موثوقة وسريعة.",
        },
        {
          icon: "☁️",
          title: "خبرة سحابية",
          desc: "محترفون معتمدون في AWS وAzure وGoogle Cloud.",
        },
        {
          icon: "🔒",
          title: "الأمان أولاً",
          desc: "نهج DevSecOps للحفاظ على أنظمتك آمنة ومتوافقة.",
        },
      ],
      processTitle: "عمليتنا",
      processList: [
        {
          title: "التقييم والتخطيط",
          desc: "نقوم بتحليل إعدادك الحالي وتصميم إستراتيجية DevOps مخصصة.",
        },
        {
          title: "التنفيذ",
          desc: "نقوم بإعداد خطوط أنابيب وبنية تحتية وأدوات أتمتة لمشروعك.",
        },
        {
          title: "المراقبة والدعم",
          desc: "مراقبة وتحسين ودعم مستمر لضمان النجاح المستمر.",
        },
      ],
      testimonialsTitle: "ماذا يقول عملاؤنا",
      testimonials: [
        {
          name: "بريا س.",
          feedback:
            "قام فريق DevOps بتبسيط عملية النشر لدينا وتحسين موثوقية السحابة!",
        },
        {
          name: "أليكس م.",
          feedback: "خدمة ممتازة، تسليم سريع، وخبرة تقنية عميقة. أوصي بشدة!",
        },
      ],
      ctaTitle: "هل أنت مستعد لتحويل DevOps الخاص بك؟",
      ctaDesc:
        "تواصل معنا اليوم لمناقشة احتياجاتك في DevOps والحصول على استشارة مجانية. دعنا نبني مستقبلًا أسرع وأكثر موثوقية معًا!",
      contactUs: "اتصل بنا",
    },
    dashboard: {
      statCards: {
        totalEarnings: "إجمالي الأرباح",
        activeClients: "العملاء النشطون",
        projectsCompleted: "المشاريع المكتملة",
        profileViews: "مشاهدات الملف الشخصي",
      },
      charts: {
        projectsEarningsOverview: "نظرة عامة على المشاريع والأرباح",
        projects: "المشاريع",
        earnings: "الأرباح",
        earningsTrend: "اتجاه الأرباح",
      },
      months: {
        jan: "يناير",
        feb: "فبراير",
        mar: "مارس",
        apr: "أبريل",
        may: "مايو",
        jun: "يونيو",
      },
      tableHeaders: {
        projectId: "معرّف المشروع",
        client: "العميل",
        project: "المشروع",
        amount: "المبلغ",
        status: "الحالة",
      },
      status: {
        completed: "مكتمل",
        pending: "قيد الانتظار",
        inProgress: "قيد التنفيذ",
      },
      recentProjectsTitle: "أحدث المشاريع",
      recentProjects: [
        {
          id: "P-001",
          client: "شركة Acme",
          project: "إعادة تصميم الموقع",
          amount: "$2,000",
          status: "مكتمل",
        },
        {
          id: "P-002",
          client: "شركة Beta",
          project: "تطبيق الهاتف المحمول",
          amount: "$3,500",
          status: "قيد التنفيذ",
        },
        {
          id: "P-003",
          client: "شركة Gamma",
          project: "تحسين محركات البحث",
          amount: "$1,200",
          status: "قيد الانتظار",
        },
      ],
      pieChartTitle: "فئات العمل الحر",
      pieData: [
        { name: "تطوير الويب", value: 40, color: "#3b82f6" },
        { name: "التصميم", value: 25, color: "#f59e0b" },
        { name: "الكتابة", value: 15, color: "#10b981" },
        { name: "التسويق", value: 10, color: "#8b5cf6" },
        { name: "الفيديو", value: 10, color: "#ef4444" },
      ],
    },
    footer: {
      description:
        "ربط الشركات مع أفضل المواهب حول العالم لإنجاز المشاريع بكفاءة وفعالية.",
      quickLinks: "روابط سريعة",
      links: [
        { name: "الصفحة الرئيسية 1", link: "/home1" },
        { name: "الصفحة الرئيسية 2", link: "/home2" },
        { name: "من نحن", link: "/about" },
        { name: "الخدمات", link: "/services" },
        { name: "المدونة", link: "/blog" },
        { name: "اتصل بنا", link: "/contact-us" },
      ],
      forFreelancers: "للمستقلين",
      freelancerLinks: [
        {
          num: 1,
          name: "تطوير الويب والتطبيقات",
          link: "/web-app-development",
        },
        {
          num: 2,
          name: "تصميم واجهة المستخدم والجرافيك",
          link: "/ui-ux-design",
        },
        { num: 3, name: "كتابة المحتوى", link: "/content-writing" },
        { num: 4, name: "التسويق الرقمي", link: "/digital-marketing" },
        { num: 5, name: "إنتاج الفيديو", link: "/video-production" },
        {
          num: 6,
          name: "خدمات السحابة و DevOps",
          link: "/cloud-devops-services",
        },
      ],
      contactUs: "اتصل بنا",
      contactDetails: [
        { num: 1, name: "+192 123 4567" },
        { num: 2, name: "info@enkonix.in" },
        { num: 3, name: "123 شارع إنكونيكس، المدينة، الدولة" },
      ],
      copyright: "FreelancerHub. جميع الحقوق محفوظة.",
    },
  },
  he: {
    header: {
      home: "דף הבית",
      home1: "בית 1",
      home2: "בית 2",
      about: "אודות",
      services: "שירותים",
      allServices: "כל השירותים",
      webAppDevelopment: "פיתוח אתרים ואפליקציות",
      uiuxDesign: "עיצוב UI/UX ועיצוב גרפי",
      contentWriting: "כתיבת תוכן",
      digitalMarketing: "שיווק דיגיטלי וקידום אתרים",
      videoProduction: "הפקת וידאו ואנימציה",
      cloudDevops: "שירותי ענן ו-DevOps",
      blog: "בלוג",
      contactUs: "צור קשר",
    },
    login: {
      login: "התחברות",
      register: "הרשמה",
      forgotPassword: "שכחת סיסמה",
      firstName: "שם פרטי",
      lastName: "שם משפחה",
      email: "אימייל",
      password: "סיסמה",
      confirmPassword: "אישור סיסמה",
      backToLogin: "חזרה להתחברות",
      enterRegisteredEmail: "הכנס אימייל רשום",
      enterNewPassword: "הכנס סיסמה חדשה",
      confirmNewPassword: "אשר סיסמה חדשה",
      updatePassword: "עדכן סיסמה",
    },

    home1: {
      heroTitle: "מצא את הפרילנסר המתאים לפרויקט שלך",
      heroDesc: "התחבר לטאלנטים מובילים, עבוד מהר יותר, ותצמח את העסק שלך.",
      hireNow: "העסק עכשיו",
      browseFreelancers: "עיין בפרילנסרים",
      whyFreelancing: "למה פרילנסינג?",
      whyDesc:
        "בעולם הדיגיטלי המהיר של היום, גמישות היא המפתח. פרילנסרים מציעים מומחיות לפי דרישה, שיתוף פעולה גמיש, ומאגר כישרונות גלובלי – ללא התחייבות ארוכת טווח.",
      flexible: "התקשרות גמישה",
      flexibleDesc: "הגדל או הקטן צוותים מיידית לפי צרכי הפרויקט.",
      cost: "חסכוני",
      costDesc: "העסק לפי פרויקט, לא לפי משכורת. הפחת עלויות משמעותית.",
      global: "כישרון גלובלי",
      globalDesc: "גש למומחים ברחבי העולם ובאזורי זמן שונים.",
      fast: "ביצוע מהיר",
      fastDesc: "פרילנסרים מבצעים משימות במהירות – ללא עיכובים ארגוניים.",
      topServices: "שירותים מובילים",
      webDev: "פיתוח אתרים",
      webDevDesc: "בניית אתרים, אפליקציות ואתרי רספונסיב.",
      design: "עיצוב גרפי",
      designDesc: "לוגואים, מיתוג ועיצובים יצירתיים.",
      writing: "כתיבת תוכן",
      writingDesc: "בלוגים SEO, תיאורי מוצרים ועוד.",
      marketing: "שיווק דיגיטלי",
      marketingDesc: "הגבר נראות עם שיווק חכם.",
      va: "עוזר וירטואלי",
      vaDesc: "תמיכה אדמיניסטרטיבית, תיאום, מחקר ועוד.",
      video: "עריכת וידאו",
      videoDesc: "סרטונים, פרומואים ועריכות מקצועיות.",
      appDev: "פיתוח אפליקציות",
      appDevDesc: "בניית אפליקציות מובייל ל-iOS ואנדרואיד.",
      seo: "אופטימיזציית SEO",
      seoDesc: "התקדם בדירוג עם SEO טכני ופנימי.",
      howItWorks: "איך זה עובד",
      postJob: "פרסם עבודה",
      postJobDesc: "תאר את הפרויקט ומה שאתה מחפש.",
      receive: "קבל הצעות",
      receiveDesc: "מצא פרילנסרים מובילים שמוכנים לעזור.",
      hire: "העסק את הפרילנסר הנכון",
      hireDesc: "בחר את המתאים ביותר והתחל מיד.",
      done: "סיים את הפרויקט שלך",
      doneDesc: "עקוב אחרי התקדמות, תקשר בקלות, וקבל עבודה איכותית.",
      testimonials: "מה המשתמשים שלנו אומרים",
      t1: '"פלטפורמה נהדרת למציאת פרילנסרים מוכשרים במהירות!"',
      t1By: "- רג'ש, מייסד סטארטאפ",
      t2: '"עזרה לי לקבל פרויקטים באופן קבוע כמפתח."',
      t2By: "- פריה, מפתח אתרים",
      cta: "התחל את מסע הפרילנס שלך היום",
      join: "הצטרף עכשיו",
    },
    home2: {
      heroTitle: "פתרונות פרילנס יצירתיים",
      heroDesc: "בניית אתרים מודרניים, עיצובים נקיים ושיווק חכם למותג שלך.",
      letsTalk: "בוא נדבר",
      whatIOffer: "מה אני מציע",
      services: [
        {
          title: "פיתוח אתרים",
          desc: "אתרים רספונסיביים וניתנים להרחבה בטכנולוגיות המתקדמות ביותר.",
          icon: "💻",
        },
        {
          title: "עיצוב UI/UX",
          desc: "עיצובים יפים ואינטואיטיביים עם דגש על חוויית משתמש.",
          icon: "🎨",
        },
        {
          title: "SEO ושיווק",
          desc: "התקדם בדירוג, הבא תנועה, והמר יותר לקוחות.",
          icon: "🚀",
        },
      ],
      recentProjects: "פרויקטים אחרונים",
      project: (item: number) => `פרויקט ${item}`,
      projectDesc: "הצגת אתר / אפליקציה חיה",
      who: "מי מאחורי העבודה",
      whoDesc:
        "פרילנסר נלהב המתמקד בחדשנות, עיצוב נקי ותוצאות אמיתיות. עם רקע בפיתוח אתרים ושיווק, אני עוזר למותגים לצמוח עם נוכחות חכמה ברשת.",
      happyClients: "לקוחות מרוצים",
      testimonials: [
        {
          quote: "עבודה איכותית, בזמן. תקשורת מצוינת לאורך כל הדרך!",
          author: '— אלכס מ., מנכ"ל',
        },
        {
          quote: "כישורי עיצוב מדהימים ומענה מהיר. ממליץ בחום!",
          author: "— רינה ס., מייסדת סטארטאפ",
        },
      ],
      build: "בואו נבנה משהו נהדר",
      buildDesc: "פנו אליי כדי להתחיל את הפרויקט הבא שלכם או לבקש ייעוץ חינם.",
      contactMe: "צור קשר",
    },
    about: {
      heroTitle: "על הפלטפורמה שלנו לפרילנסרים",
      heroDesc:
        "מעצימים עסקים ופרילנסרים להתחבר, לשתף פעולה ולצמוח יחד בעולם דיגיטלי מודרני.",
      missionTitle: "המשימה שלנו",
      missionDesc:
        "להנגיש כישרונות איכותיים לכל אחד, בכל מקום. אנו מאמינים בעבודה גמישה, חופש יצירתי ובבניית שותפויות מתמשכות בין לקוחות לפרילנסרים.",
      valuesTitle: "הערכים שלנו",
      values: [
        {
          title: "אמון ושקיפות",
          desc: "אנו מטפחים תקשורת פתוחה ומשוב כנה בכל פרויקט.",
        },
        {
          title: "חדשנות",
          desc: "אנו מאמצים רעיונות וטכנולוגיות חדשות כדי לספק את התוצאות הטובות ביותר.",
        },
        {
          title: "שיתוף פעולה",
          desc: "אנחנו מאמינים שדברים גדולים קורים כשאנשים מוכשרים עובדים יחד.",
        },
      ],
      teamTitle: "הכירו את הכישרונות שלנו",
      team: [
        {
          icon: "💻",
          title: "מפתחי אתרים",
          desc: "מומחים בצד לקוח, צד שרת ופול-סטאק המוכנים לבנות את החזון שלך.",
        },
        {
          icon: "🎨",
          title: "מעצבים",
          desc: "מומחי UI/UX, מיתוג ואנשי יצירה עבור ויזואלים מרהיבים.",
        },
        {
          icon: "🚀",
          title: "משווקים",
          desc: "מומחי SEO, תוכן ושיווק דיגיטלי שיצמיחו את העסק שלך.",
        },
      ],
    },
    services: {
      heroTitle: "שירותי הפרילנס שלנו",
      heroDesc:
        "גלה מגוון רחב של שירותי פרילנס מקצועיים המותאמים לצרכי העסק שלך.",
      coreTitle: "השירותים המרכזיים שלנו",
      servicesList: [
        {
          title: "פיתוח אתרים ואפליקציות",
          link: "/web-app-development",
          desc: "אתרים מותאמים אישית, אפליקציות אינטרנט ופתרונות מובייל עם הטכנולוגיות המתקדמות ביותר לביצועים וסקיילביליות.",
          img: "/services/service-dev.jpg",
        },
        {
          title: "עיצוב UI/UX ועיצוב גרפי",
          link: "/ui-ux-design",
          desc: "עיצובים מודרניים ממוקדי משתמש לאינטרנט, מובייל ומיתוג. לוגואים, באנרים וחבילות זהות מותג מלאה.",
          img: "/services/service-design.jpg",
        },
        {
          title: "כתיבת תוכן",
          link: "/content-writing",
          desc: "בלוגים מותאמי SEO, תוכן לאתרים, תיאורי מוצרים ותוכן יצירתי כדי למשוך את הקהל שלך ולחזק את המותג.",
          img: "/services/service-content.jpg",
        },
        {
          title: "שיווק דיגיטלי וקידום אתרים",
          link: "/digital-marketing",
          desc: "הגדל את הנוכחות הדיגיטלית שלך עם מומחי SEO, ניהול מדיה חברתית, פרסום ממומן ואסטרטגיות דיוור.",
          img: "/services/service-marketing.jpg",
        },
        {
          title: "הפקת וידאו ואנימציה",
          link: "/video-production",
          desc: "סרטוני תדמית, אנימציות הסבר ועריכה מקצועית לסיפור הסיפור שלך ולכיבוש הקהל.",
          img: "/services/service-video.jpg",
        },
        {
          title: "שירותי ענן ו-DevOps",
          link: "/cloud-devops-services",
          desc: "תשתיות ענן ניתנות להרחבה, קווי CI/CD ופתרונות אוטומציה להבטחת פריסה חלקה וביצועים גבוהים.",
          img: "/services/service-cloud.jpg",
        },
      ],
      getStarted: "התחל עכשיו",
      whyTitle: "למה לבחור בנו?",
      whyList: [
        { title: "כישרון מאומת", desc: "כל הפרילנסרים נבדקים לאיכות ואמינות." },
        {
          title: "גמישות בהתקשרות",
          desc: "התאם את גודל הצוות שלך בהתאם לצרכי הפרויקט.",
        },
        {
          title: "תמחור שקוף",
          desc: "ללא עמלות נסתרות. תמחור ברור ומדויק לכל שירות.",
        },
      ],
      processTitle: "איך זה עובד?",
      processList: [
        {
          title: "פרסם פרויקט",
          desc: "תאר את הצרכים שלך וקבל התאמה לפרילנסרים מובילים.",
        },
        {
          title: "בדוק הצעות",
          desc: "השווה הצעות, תיקי עבודות וביקורות כדי לבחור את המתאים ביותר.",
        },
        {
          title: "שתף פעולה",
          desc: "עבדו יחד, עקוב אחרי ההתקדמות ותקשר בקלות.",
        },
        {
          title: "קבל תוצאות",
          desc: "קבל עבודה איכותית ושלם בצורה מאובטחת כשאתה מרוצה.",
        },
      ],
      testimonialsTitle: "מה הלקוחות אומרים",
      testimonials: [
        {
          quote: "חוויה מצוינת! הפרילנסר סיפק בדיוק מה שהייתי צריך.",
          author: "— פריה ס., בעלת עסק",
        },
        {
          quote: "מהיר, אמין ויצירתי. ממליץ בחום לכל פרויקט.",
          author: "— ראג'ש ק., מייסד סטארטאפ",
        },
      ],
      ctaTitle: "מוכן להתחיל את הפרויקט שלך?",
      ctaDesc: "הצטרף לפלטפורמה שלנו והתחבר לכישרונות פרילנס מובילים כבר היום.",
    },
    blog: {
      heroTitle: "בלוג ותובנות על פרילנס",
      heroDesc: "טיפים, מדריכים וסיפורים שיעזרו לך להצליח במסע הפרילנס שלך.",
      futureTitle: "למה פרילנס הוא עתיד העבודה",
      futureDesc1:
        "פרילנס מעניק גמישות, עצמאות והזדמנות לעבוד על פרויקטים מגוונים מכל מקום בעולם. ככל שיותר עסקים מאמצים עבודה מרחוק, הביקוש לפרילנסרים מיומנים ממשיך לגדול. בין אם אתה מפתח, מעצב, כותב או משווק, הפרילנס מאפשר לך לעצב את מסלול הקריירה שלך ולהשיג איזון טוב יותר בין עבודה לחיים.",
      futureDesc2:
        "הישאר מעודכן בבלוג שלנו לטרנדים, טיפים ומשאבים שיעזרו לך לפרוח כפרילנסר בכלכלה הדיגיטלית של היום.",
      latestTitle: "פוסטים אחרונים על פרילנס",
      posts: [
        {
          title: "איך להתחיל פרילנס: מדריך למתחילים",
          excerpt:
            "למד את הצעדים החיוניים כדי להשיק את קריירת הפרילנס שלך, מהקמת תיק עבודות ועד למציאת הלקוחות הראשונים.",
          link: "/how-to-start-freelancing",
        },
        {
          title: "5 הכישורים החשובים שכל פרילנסר צריך ב-2025",
          excerpt:
            "גלה את הכישורים המבוקשים ביותר לפרילנסרים וכיצד להישאר מוביל בשוק תחרותי.",
          link: "/top-5-skills-every-freelancer-needs",
        },
        {
          title: "איזון בין מספר פרויקטים כפרילנסר",
          excerpt:
            "טיפים ואסטרטגיות לניהול זמן, לקוחות ועומס עבודה ביעילות כפרילנסר.",
          link: "/balancing-multiple-projects",
        },
      ],
      readMore: "קרא עוד",
      benefitsTitle: "יתרונות הפרילנס",
      benefits: [
        {
          icon: "🌍",
          title: "עבודה מכל מקום",
          desc: "תהנה מהחופש לעבוד מרחוק ולקבוע את לוח הזמנים שלך.",
        },
        {
          icon: "💼",
          title: "פרויקטים מגוונים",
          desc: "בחר פרויקטים שמתאימים לכישורים ולתחומי העניין שלך לקריירה מספקת.",
        },
        {
          icon: "💸",
          title: "פוטנציאל הכנסה בלתי מוגבל",
          desc: "הגדל את ההכנסה שלך על ידי עבודה עם מספר לקוחות וקביעת מחירים משלך.",
        },
      ],
      faqTitle: "שאלות נפוצות על פרילנס",
      faq: [
        {
          q: "איך אני מוצא לקוחות כפרילנסר?",
          a: "התחל בבניית תיק עבודות חזק, נטוורקינג בפלטפורמות כמו לינקדאין, והצטרפות לשווקי פרילנס. התמדה וסיפוק עבודה איכותית יעזרו לך למשוך יותר לקוחות לאורך זמן.",
        },
        {
          q: "איך אני קובע את התעריפים שלי?",
          a: "בדוק את סטנדרטי התעשייה, שקול את הניסיון שלך ואת מורכבות הפרויקט. אל תמעיט בערך שלך—חייב מה שמגיע לך והתאם תוך כדי צבירת ניסיון.",
        },
        {
          q: "מה האתגרים הגדולים ביותר בפרילנס?",
          a: "האתגרים הנפוצים כוללים מציאת עבודה עקבית, ניהול זמן והתמודדות עם מיסים. בניית הרגלים טובים ושימוש בכלי פרודוקטיביות יכולים לעזור להתגבר על מכשולים אלה.",
        },
      ],
      newsletterTitle: "הישאר מעודכן עם טיפים לפרילנס",
      newsletterDesc:
        "הירשם לניוזלטר שלנו לטיפים, משאבים והצעות בלעדיות על פרילנס.",
    },
    contact: {
      heroTitle: "צור קשר",
      heroDesc:
        "נשמח לשמוע ממך! פנה אלינו לשאלות על פרויקטים, תמיכה או סתם כדי לומר שלום.",
      formTitle: "שלח הודעה",
      name: "שמך",
      email: "האימייל שלך",
      subject: "נושא",
      message: "ההודעה שלך",
      send: "שלח הודעה",
      success: "ההודעה נשלחה בהצלחה!",
      faqTitle: "שאלות נפוצות",
      faq: [
        {
          q: "תוך כמה זמן אקבל תשובה?",
          a: "אנחנו משתדלים לחזור לכל פנייה תוך 24 שעות.",
        },
        {
          q: "האם אפשר לבקש שירות מותאם אישית?",
          a: "בהחלט! פשוט תאר את הצרכים שלך בטופס ואנו נתאים עבורך פתרון.",
        },
        {
          q: "האם המידע שלי בטוח?",
          a: "כן, הפרטיות שלך חשובה לנו. אנחנו לעולם לא משתפים את פרטיך ללא הסכמתך.",
        },
      ],
      locationTitle: "המיקום שלנו",
    },
    webapp: {
      heroTitle: "שירותי פיתוח אפליקציות ווב לעסקים מודרניים",
      heroDesc:
        "בנה אפליקציות ווב ניתנות להרחבה, מאובטחות וביצועיות המותאמות לצרכי העסק שלך.",
      getStarted: "התחל עכשיו",
      servicesTitle: "שירותי פיתוח אפליקציות הווב שלנו",
      servicesList: [
        {
          title: "אפליקציות ווב מותאמות אישית",
          desc: "פתרונות ווב מותאמים לצרכים ולמטרות הייחודיות של העסק שלך.",
        },
        {
          title: "אפליקציות ווב פרוגרסיביות (PWA)",
          desc: "מהירות, אמינות ומעורבות שעובדות בצורה חלקה בכל המכשירים.",
        },
        {
          title: "פלטפורמות מסחר אלקטרוני",
          desc: "חנויות מקוונות חזקות עם תשלומים מאובטחים ותשתית ניתנת להרחבה.",
        },
        {
          title: "פיתוח ואינטגרציית API",
          desc: "ממשקי API עוצמתיים לחיבור האפליקציה שלך לשירותי צד שלישי.",
        },
        {
          title: "עיצוב UI/UX",
          desc: "ממשקים מודרניים ונוחים לחוויית משתמש חלקה.",
        },
        {
          title: "תחזוקה ותמיכה",
          desc: "עדכונים שוטפים, ניטור ותמיכה לאפליקציות שלך.",
        },
      ],
      whyTitle: "למה לבחור בשירותי פיתוח הווב שלנו?",
      whyList: [
        {
          icon: "💻",
          title: "טכנולוגיות מתקדמות",
          desc: "אנחנו משתמשים במסגרות וכלים העדכניים ביותר לביצועים מיטביים.",
        },
        {
          icon: "🔒",
          title: "אבטחה תחילה",
          desc: "שיטות עבודה מומלצות לשמירה על הנתונים והמשתמשים שלך בכל עת.",
        },
        {
          icon: "⚡",
          title: "אספקה מהירה",
          desc: "תהליכים אג׳יליים לפיתוח מהיר והשקות מהירות.",
        },
      ],
      processTitle: "התהליך שלנו",
      processList: [
        {
          title: "גילוי ותכנון",
          desc: "אנחנו מנתחים את הדרישות שלך ומעצבים פתרון מותאם.",
        },
        {
          title: "פיתוח",
          desc: "הצוות שלנו בונה את האפליקציה שלך באמצעות טכנולוגיות מתקדמות.",
        },
        {
          title: "בדיקות והשקה",
          desc: "אנחנו מבצעים בדיקות קפדניות ומשיקים את האפליקציה להשקה מושלמת.",
        },
      ],
      testimonialsTitle: "מה הלקוחות שלנו אומרים",
      testimonials: [
        {
          name: "סאנדיפ ר.",
          feedback:
            "אפליקציית הווב המותאמת שלנו נמסרה בזמן ועברה את הציפיות שלנו!",
        },
        {
          name: "פרייה ד.",
          feedback: "צוות מקצועי, מהיר תגובה ובעל כישורים גבוהים. מומלץ בחום!",
        },
      ],
      ctaTitle: "מוכן לבנות את אפליקציית הווב הבאה שלך?",
      ctaDesc:
        "צור איתנו קשר היום כדי לדון בפרויקט שלך ולקבל ייעוץ חינם. בוא נהפוך את הרעיונות שלך למציאות!",
      contactUs: "צור קשר",
    },
    uiux: {
      heroTitle: "שירותי עיצוב UI/UX לחוויות דיגיטליות יוצאות דופן",
      heroDesc:
        "שדרג את המוצר שלך עם עיצוב ממוקד משתמש, ממשקים יפים וחוויות חלקות שמגבירות מעורבות.",
      getStarted: "התחל עכשיו",
      servicesTitle: "שירותי עיצוב ה-UI/UX שלנו",
      servicesList: [
        {
          title: "מחקר וניתוח משתמשים",
          desc: "הבנת צרכי המשתמשים והתנהגותם כדי להנחות החלטות עיצוב.",
        },
        {
          title: "סקיצות ואבות-טיפוס",
          desc: "המחשת רעיונות במהירות עם אבות-טיפוס אינטראקטיביים.",
        },
        {
          title: "עיצוב ממשק משתמש (UI)",
          desc: "יצירת ממשקים ויזואליים מרהיבים ועקביים עם המותג.",
        },
        {
          title: "עיצוב חוויית משתמש (UX)",
          desc: "עיצוב חוויות אינטואיטיביות וחלקות שמשמחות את המשתמשים.",
        },
        {
          title: "בדיקות שימושיות",
          desc: "בדיקת העיצובים עם משתמשים אמיתיים ואופטימיזציה לתוצאות הטובות ביותר.",
        },
        {
          title: "מערכות עיצוב",
          desc: "פיתוח מערכות עיצוב ניתנות להרחבה לחוויות מוצר עקביות.",
        },
      ],
      whyTitle: "למה לבחור בשירותי ה-UI/UX שלנו?",
      whyList: [
        {
          icon: "🎨",
          title: "יצירתי ומודרני",
          desc: "עיצובים חדשניים ומרעננים המותאמים למותג ולמשתמשים שלך.",
        },
        {
          icon: "🧑‍💻",
          title: "ממוקד משתמש",
          desc: "כל החלטה מבוססת על צרכי המשתמש האמיתיים ומשובם.",
        },
        {
          icon: "⚡",
          title: "מהיר ואמין",
          desc: "אספקה מהירה ותמיכה שוטפת להצלחת הפרויקט שלך.",
        },
      ],
      processTitle: "התהליך שלנו",
      processList: [
        {
          title: "גילוי ומחקר",
          desc: "אנחנו מנתחים את המטרות שלך, המשתמשים והתחרות כדי להנחות את העיצוב.",
        },
        {
          title: "עיצוב ואבטיפוס",
          desc: "אנחנו יוצרים סקיצות, אבות-טיפוס ועיצובים ברזולוציה גבוהה.",
        },
        {
          title: "בדיקה והעברה",
          desc: "בדיקות שימושיות, משוב והעברת נכסי העיצוב הסופיים.",
        },
      ],
      testimonialsTitle: "מה הלקוחות שלנו אומרים",
      testimonials: [
        {
          name: "אמית פ.",
          feedback:
            "השימושיות והמראה של האפליקציה שלנו השתפרו בצורה דרמטית. הצוות יצירתי ושם לב לפרטים!",
        },
        {
          name: "ליסה מ.",
          feedback: "מקצועי, מודרני וממוקד משתמש. מומלץ בחום לכל פרויקט UI/UX!",
        },
      ],
      ctaTitle: "מוכן לשנות את חוויית המוצר שלך?",
      ctaDesc:
        "צור איתנו קשר עוד היום כדי לדון בצרכי עיצוב ה-UI/UX שלך ולקבל ייעוץ חינם. בואו ניצור משהו מדהים יחד!",
      contactUs: "צור קשר",
    },
    contentwriting: {
      heroTitle: "שירותי כתיבת תוכן מקצועיים",
      heroDesc:
        "חזק את המותג שלך עם תוכן איכותי, מותאם ל-SEO, שנכתב על ידי כותבים מומחים. אנחנו נעזור לך למשוך, ליידע ולהמיר את הקהל שלך.",
      getStarted: "התחל עכשיו",
      servicesTitle: "שירותי כתיבת התוכן שלנו",
      servicesList: [
        {
          title: "כתיבת בלוגים ומאמרים",
          desc: "מאמרים ופוסטים בבלוג מרתקים ומותאמים לקהל היעד שלך.",
        },
        {
          title: "תוכן לאתרי אינטרנט",
          desc: "טקסט ברור ומשכנע שהופך מבקרים ללקוחות.",
        },
        {
          title: "תיאורי מוצרים",
          desc: "תיאורי מוצרים משכנעים שמגבירים מכירות ומדגישים יתרונות.",
        },
        {
          title: "תוכן לרשתות חברתיות",
          desc: "פוסטים יצירתיים וכותרות שמגדילים את המותג שלך בכל הפלטפורמות.",
        },
        {
          title: "כתיבה טכנית",
          desc: "תיעוד ומדריכים מדויקים ונוחים לשימוש עבור המוצרים שלך.",
        },
        {
          title: "עריכה והגהה",
          desc: "תוכן מלוטש וללא טעויות ששומר על קול המותג שלך.",
        },
      ],
      whyTitle: "למה לבחור בשירותי כתיבת התוכן שלנו?",
      whyList: [
        {
          icon: "💡",
          title: "יצירתי ומקורי",
          desc: "כל תוכן הוא ייחודי ומותאם לקול המותג שלך.",
        },
        {
          icon: "⚡",
          title: "זמן אספקה מהיר",
          desc: "אספקה מהירה מבלי להתפשר על האיכות.",
        },
        {
          icon: "🔍",
          title: "מותאם ל-SEO",
          desc: "תוכן שמיועד לדרג גבוה יותר ולהביא יותר תנועה.",
        },
      ],
      processTitle: "התהליך שלנו",
      processList: [
        {
          title: "התייעצות",
          desc: "אנחנו דנים במטרות שלך, קהל היעד וצרכי התוכן.",
        },
        {
          title: "יצירת תוכן",
          desc: "הכותבים שלנו יוצרים תוכן מקורי ומרתק לפרויקט שלך.",
        },
        {
          title: "סקירה ואספקה",
          desc: "אתה סוקר את התוכן ומבקש תיקונים לפני האספקה הסופית.",
        },
      ],
      testimonialsTitle: "מה הלקוחות שלנו אומרים",
      testimonials: [
        {
          name: "שרה ק.",
          feedback:
            "שירות כתיבת התוכן עלה על הציפיות שלי! התנועה לאתר שלי גדלה בצורה משמעותית.",
        },
        {
          name: "ג'יימס ל.",
          feedback:
            "מקצועי, מהיר ויצירתי. ממליץ מאוד לכל עסק שצריך תוכן איכותי.",
        },
      ],
      ctaTitle: "מוכן לשדרג את התוכן שלך?",
      ctaDesc:
        "צור איתנו קשר היום כדי לדון בפרויקט שלך ולקבל הצעת מחיר חינם. בוא ניצור תוכן שמביא תוצאות!",
      contactUs: "צור קשר",
    },
    digitalmarketing: {
      heroTitle: "שירותי שיווק דיגיטלי לצמיחת העסק שלך",
      heroDesc:
        "הגיעו לקהל היעד שלכם, הגבירו מעורבות והגדילו מכירות עם פתרונות השיווק הדיגיטלי המקיפים שלנו.",
      getStarted: "התחל עכשיו",
      servicesTitle: "שירותי השיווק הדיגיטלי שלנו",
      servicesList: [
        {
          title: "אופטימיזציית SEO",
          desc: "שפרו את הנראות והדירוג של האתר שלכם במנועי חיפוש.",
        },
        {
          title: "שיווק ברשתות חברתיות",
          desc: "גדלו את המותג שלכם וצרו מעורבות עם הקהל שלכם בכל הפלטפורמות.",
        },
        {
          title: "פרסום PPC (תשלום לפי קליק)",
          desc: "הניעו תנועה ממוקדת והגדילו את התשואה על ההשקעה באמצעות קמפיינים יעילים.",
        },
        {
          title: "שיווק באמצעות תוכן",
          desc: "משכו ושמרו לקוחות באמצעות תוכן בעל ערך ורלוונטי.",
        },
        {
          title: "שיווק בדואר אלקטרוני",
          desc: "טפחו לידים והגדילו המרות באמצעות קמפיינים מותאמים אישית.",
        },
        {
          title: "אנליטיקה ודוחות",
          desc: "עקבו, מדדו ואופטימו את ביצועי השיווק הדיגיטלי שלכם.",
        },
      ],
      whyTitle: "למה לבחור בשירותי השיווק הדיגיטלי שלנו?",
      whyList: [
        {
          icon: "📈",
          title: "תוצאות מוכחות",
          desc: "אנחנו מספקים צמיחה מדידה ותשואה לעסק שלכם.",
        },
        {
          icon: "🎯",
          title: "אסטרטגיות ממוקדות",
          desc: "קמפיינים מותאמים אישית כדי להגיע ללקוחות האידיאליים שלכם.",
        },
        {
          icon: "🤝",
          title: "תמיכה אישית",
          desc: "שירות מותאם אישית ואופטימיזציה מתמשכת להצלחה.",
        },
      ],
      processTitle: "התהליך שלנו",
      processList: [
        {
          title: "גילוי ואסטרטגיה",
          desc: "אנחנו לומדים על העסק שלכם ובונים תוכנית שיווק מותאמת.",
        },
        {
          title: "ביצוע",
          desc: "אנחנו משיקים ומנהלים קמפיינים בכל הערוצים הרלוונטיים.",
        },
        {
          title: "ניתוח ואופטימיזציה",
          desc: "אנחנו עוקבים אחרי התוצאות ומשפרים באופן מתמשך.",
        },
      ],
      testimonialsTitle: "מה הלקוחות שלנו אומרים",
      testimonials: [
        {
          name: "ראווי ט.",
          feedback:
            "הנוכחות שלנו באינטרנט זינקה בזכות המומחיות שלהם בשיווק דיגיטלי!",
        },
        {
          name: "אמילי ו.",
          feedback: "מקצועיים, יצירתיים וממוקדי תוצאות. ממליצה בחום לכל עסק!",
        },
      ],
      ctaTitle: "מוכנים לשפר את הנוכחות הדיגיטלית שלכם?",
      ctaDesc:
        "צרו קשר עוד היום כדי לדון במטרות השיווק הדיגיטלי שלכם ולקבל פגישת אסטרטגיה בחינם. נצמח יחד!",
      contactUs: "צור קשר",
    },
    videoproduction: {
      heroTitle: "שירותי הפקת וידאו מקצועיים",
      heroDesc:
        "ריתקו את הקהל שלכם והעצימו את המותג עם פתרונות וידאו יצירתיים ואיכותיים המותאמים לצרכים שלכם.",
      getStarted: "התחל עכשיו",
      servicesTitle: "שירותי הפקת הווידאו שלנו",
      servicesList: [
        {
          title: "סרטוני תדמית לעסקים",
          desc: "סרטונים מקצועיים להצגת המותג, המוצרים או השירותים שלכם.",
        },
        {
          title: "סרטוני פרסום",
          desc: "קליפים שיווקיים מרתקים לחיזוק הקמפיינים שלכם ולהגעה לקהלים רחבים יותר.",
        },
        {
          title: "תיעוד אירועים",
          desc: "תיעוד רגעי השיא של האירועים שלכם בהפקת וידאו איכותית.",
        },
        {
          title: "סרטוני הסבר",
          desc: "הסבר פשוט וברור לרעיונות מורכבים באמצעות סרטוני אנימציה.",
        },
        {
          title: "סרטונים לרשתות חברתיות",
          desc: "קליפים קצרים ומשפיעים המותאמים למקסימום מעורבות ברשתות.",
        },
        {
          title: "עריכה ופוסט פרודקשן",
          desc: "עריכה מקצועית, תיקוני צבע ועיצוב סאונד לתוצאה מושלמת.",
        },
      ],
      whyTitle: "למה לבחור בהפקת הווידאו שלנו?",
      whyList: [
        {
          icon: "🎬",
          title: "סיפור יצירתי",
          desc: "אנחנו הופכים את הרעיונות שלכם לסיפורים ויזואליים סוחפים.",
        },
        {
          icon: "⚡",
          title: "זמן אספקה מהיר",
          desc: "אספקה בזמן בלי להתפשר על איכות ויצירתיות.",
        },
        {
          icon: "🎥",
          title: "צוות מלא",
          desc: "מהרעיון ועד לגרסה הסופית – אנחנו מנהלים את כל שלבי ההפקה.",
        },
      ],
      processTitle: "התהליך שלנו",
      processList: [
        {
          title: "ייעוץ ותכנון",
          desc: "אנחנו דנים במטרות, בקהל היעד ובחזון שלכם לסרטון.",
        },
        {
          title: "הפקה",
          desc: "הצוות שלנו מצלם את כל הצילומים הדרושים בציוד מקצועי.",
        },
        {
          title: "עריכה והעברה",
          desc: "אנחנו עורכים, משדרגים ומוסרים את הסרטון הסופי המוכן לכל פלטפורמה.",
        },
      ],
      testimonialsTitle: "מה הלקוחות שלנו אומרים",
      testimonials: [
        {
          name: "עמית פ.",
          feedback:
            "צוות הווידאו הגשים לנו את החזון! התוצאה הייתה מהממת ויעילה.",
        },
        {
          name: "ליסה מ.",
          feedback: "יצירתיים, אמינים ומהירים. סרטון האירוע היה הצלחה מסחררת!",
        },
      ],
      ctaTitle: "מוכנים להביא את הסיפור שלכם לחיים?",
      ctaDesc:
        "צרו איתנו קשר עוד היום לדיון על פרויקט הווידאו שלכם ולקבלת ייעוץ חינם. בואו ניצור משהו מדהים יחד!",
      contactUs: "צור קשר",
    },
    howtofreelance: {
      bannerAlt: "איך להתחיל לעבוד כפרילנסר",
      heroTitle: "איך להתחיל לעבוד כפרילנסר: מדריך למתחילים",
      heroDesc:
        "התחל את הקריירה הפרילנסרית שלך עם הצעדים והטיפים החיוניים להצלחה.",
      stepsTitle: "מדריך שלב אחר שלב להתחלת פרילנס",
      steps: [
        {
          title: "זהה את הכישורים שלך:",
          desc: "בחן אילו שירותים אתה יכול להציע—כתיבה, עיצוב, פיתוח, שיווק ועוד.",
        },
        {
          title: "בנה תיק עבודות:",
          desc: "צור דוגמאות לעבודות שלך כדי להציג את היכולות שלך. השתמש בפרויקטים אישיים או בעבודות התנדבות אם אתה רק מתחיל.",
        },
        {
          title: "הקם נוכחות מקוונת:",
          desc: "צור פרופיל מקצועי בפלטפורמות כמו LinkedIn, Upwork או Fiverr. שקול גם לבנות אתר אישי.",
        },
        {
          title: "מצא את הלקוחות הראשונים שלך:",
          desc: "התחל עם הרשת האישית שלך, הגש מועמדות לעבודות פרילנס ופנה ללקוחות פוטנציאליים.",
        },
        {
          title: "ספק עבודה איכותית:",
          desc: "תקשר בצורה ברורה, עמוד בלוחות זמנים וחרוג מציפיות הלקוח כדי לבנות מוניטין חזק.",
        },
        {
          title: "המשך ללמוד ולהתפתח:",
          desc: "הישאר מעודכן במגמות השוק ושפר את הכישורים שלך באופן מתמיד.",
        },
      ],
      proTipTitle: "טיפ מקצועי:",
      proTipDesc:
        "אל תפחד להתחיל בקטן. כל פרויקט הוא הזדמנות ללמוד וצעד נוסף לבניית עסק הפרילנס שלך!",
    },
    top5skills: {
      heroTitle: "5 המיומנויות החשובות ביותר שכל פרילנסר צריך ב־2025",
      heroDesc:
        "הישארו צעד אחד קדימה בעולם הפרילנס על ידי שליטה במיומנויות החיוניות הללו לעתיד.",
      skillsTitle: "המיומנויות שחייבות להיות לכל פרילנסר בשנת 2025",
      skills: [
        {
          title: "שיווק דיגיטלי:",
          desc: "הבנה של SEO, רשתות חברתיות ושיווק תוכן היא חיונית כדי לקדם את השירותים שלכם ולעזור ללקוחות לפתח את העסק שלהם.",
        },
        {
          title: "ידע טכנולוגי:",
          desc: "הישארו מעודכנים עם הכלים, הפלטפורמות והתוכנות החדשות ביותר הרלוונטיות לתחום שלכם — בין אם מדובר בפיתוח אתרים, עיצוב או ניהול פרויקטים.",
        },
        {
          title: "תקשורת:",
          desc: "תקשורת ברורה ומקצועית (בכתב ובעל פה) היא המפתח לבניית אמון ולניהול קשרי לקוחות.",
        },
        {
          title: "יכולת הסתגלות:",
          desc: "עולם הפרילנס משתנה במהירות. גמישות ופתיחות ללמידת מיומנויות חדשות ישמרו אתכם תחרותיים.",
        },
        {
          title: "ניהול זמן:",
          desc: "התמודדות עם מספר פרויקטים ומועדים מחייבת כישורי ארגון חזקים ומשמעת עצמית.",
        },
      ],
      proTipTitle: "טיפ מקצועי:",
      proTipDesc:
        "השקיעו בלמידה מתמשכת — קורסים אונליין, וובינרים ונטוורקינג — כדי לשמור על המיומנויות שלכם חדות ורלוונטיות ב־2025 ומעבר לכך!",
    },
    balancingprojects: {
      heroTitle: "איזון בין מספר פרויקטים כפרילנסר",
      heroDesc:
        "טיפים ואסטרטגיות לניהול הזמן, הלקוחות ועומס העבודה שלך בצורה יעילה.",
      tipsTitle: "איך לתמרן בין מספר פרויקטים כפרילנסר",
      tips: [
        {
          title: "תעדוף משימות:",
          desc: "השתמש במנהל משימות או ברשימת מטלות כדי לארגן את סדרי העדיפויות היומיים והשבועיים שלך.",
        },
        {
          title: "קבע דדליינים ריאליים:",
          desc: "תקשר ללקוחות לוחות זמנים ברורים ואל תתחייב יתר על המידה.",
        },
        {
          title: "חסימת זמן:",
          desc: "הקדש פרקי זמן ספציפיים לכל פרויקט כדי לשמור על ריכוז ופרודוקטיביות.",
        },
        {
          title: "שימוש בכלים ואוטומציה:",
          desc: "נצל כלי ניהול פרויקטים ואוטומציה כדי לייעל את זרימת העבודה שלך.",
        },
        {
          title: "לקחת הפסקות ולהימנע משחיקה:",
          desc: "קבע הפסקות קבועות וזמן מנוחה כדי לחדש אנרגיה ולשמור על יצירתיות.",
        },
      ],
      proTipTitle: "טיפ מקצועי:",
      proTipDesc:
        "בחן באופן קבוע את עומס העבודה שלך והתאם את לוח הזמנים לפי הצורך. אל תהסס לומר לא לפרויקטים חדשים אם אתה עמוס!",
    },
    devopsservices: {
      heroTitle: "שירותי DevOps מקצועיים לעסקים מודרניים",
      heroDesc:
        "האץ את אספקת התוכנה שלך, שפר את האמינות וגדל בקלות עם פתרונות DevOps מקצה לקצה.",
      getStarted: "התחל עכשיו",
      servicesTitle: "שירותי ה-DevOps שלנו",
      servicesList: [
        {
          title: "הקמת CI/CD Pipeline",
          desc: "אוטומציה של תהליכי בנייה, בדיקה והפצה לשחרורים מהירים יותר.",
        },
        {
          title: "ניהול תשתית ענן",
          desc: "עיצוב, פריסה וניהול סביבות ענן ניתנות להתרחבות (AWS, Azure, GCP).",
        },
        {
          title: "קונטיינרים ואורקסטרציה",
          desc: "הפוך את היישומים שלך ל-Docker וניהול בעזרת Kubernetes או כלים דומים.",
        },
        {
          title: "תשתית כקוד (IaC)",
          desc: "אוטומציה של הקצאת תשתיות באמצעות Terraform, Ansible או CloudFormation.",
        },
        {
          title: "ניטור ולוגים",
          desc: "יישום ניטור ורישום חזק לזיהוי בעיות באופן יזום.",
        },
        {
          title: "אבטחה ועמידה בתקנים",
          desc: "שילוב שיטות אבטחה מיטביות ובדיקות תאימות בזרימות DevOps.",
        },
      ],
      whyTitle: "למה לבחור בשירותי ה-DevOps שלנו?",
      whyList: [
        {
          icon: "🚀",
          title: "אספקה מהירה יותר",
          desc: "תהליכים וצנרות אוטומטיים לשחרורים אמינים ומהירים.",
        },
        {
          icon: "☁️",
          title: "מומחיות ענן",
          desc: "אנשי מקצוע מוסמכים ב-AWS, Azure ו-Google Cloud.",
        },
        {
          icon: "🔒",
          title: "אבטחה תחילה",
          desc: "גישה של DevSecOps לשמירה על מערכותיך בטוחות ותואמות.",
        },
      ],
      processTitle: "התהליך שלנו",
      processList: [
        {
          title: "הערכה ותכנון",
          desc: "אנו מנתחים את ההגדרה הנוכחית שלך ומעצבים אסטרטגיית DevOps מותאמת אישית.",
        },
        {
          title: "יישום",
          desc: "אנו מקימים צנרות, תשתיות וכלי אוטומציה עבור הפרויקט שלך.",
        },
        {
          title: "ניטור ותמיכה",
          desc: "ניטור מתמשך, אופטימיזציה ותמיכה להצלחה מתמשכת.",
        },
      ],
      testimonialsTitle: "מה הלקוחות שלנו אומרים",
      testimonials: [
        {
          name: "פריה ס.",
          feedback:
            "צוות ה-DevOps ייעל את תהליך ההפצה שלנו ושיפר את אמינות הענן!",
        },
        {
          name: "אלכס מ.",
          feedback:
            "שירות מצוין, אספקה מהירה ומומחיות טכנית עמוקה. מומלץ מאוד!",
        },
      ],
      ctaTitle: "מוכנים לשנות את ה-DevOps שלכם?",
      ctaDesc:
        "צרו קשר עוד היום כדי לדון בצרכים שלכם ולקבל ייעוץ חינם. בואו נבנה יחד עתיד מהיר ואמין יותר!",
      contactUs: "צור קשר",
    },
    dashboard: {
      statCards: {
        totalEarnings: "סך ההכנסות",
        activeClients: "לקוחות פעילים",
        projectsCompleted: "פרויקטים שהושלמו",
        profileViews: "צפיות בפרופיל",
      },
      charts: {
        projectsEarningsOverview: "סקירה של פרויקטים והכנסות",
        projects: "פרויקטים",
        earnings: "הכנסות",
        earningsTrend: "מגמת הכנסות",
      },
      months: {
        jan: "ינו'",
        feb: "פבר'",
        mar: "מרץ",
        apr: "אפר'",
        may: "מאי",
        jun: "יוני",
      },
      tableHeaders: {
        projectId: "מזהה פרויקט",
        client: "לקוח",
        project: "פרויקט",
        amount: "סכום",
        status: "סטטוס",
      },
      status: {
        completed: "הושלם",
        pending: "ממתין",
        inProgress: "בתהליך",
      },
      recentProjectsTitle: "פרויקטים אחרונים",
      recentProjects: [
        {
          id: "P-001",
          client: "חברת Acme",
          project: "עיצוב מחדש של אתר",
          amount: "$2,000",
          status: "הושלם",
        },
        {
          id: "P-002",
          client: "חברת Beta",
          project: "אפליקציה לנייד",
          amount: "$3,500",
          status: "בתהליך",
        },
        {
          id: "P-003",
          client: "חברת Gamma",
          project: "אופטימיזציית SEO",
          amount: "$1,200",
          status: "ממתין",
        },
      ],
      pieChartTitle: "קטגוריות פרילנס",
      pieData: [
        { name: "פיתוח אתרים", value: 40, color: "#3b82f6" },
        { name: "עיצוב", value: 25, color: "#f59e0b" },
        { name: "כתיבה", value: 15, color: "#10b981" },
        { name: "שיווק", value: 10, color: "#8b5cf6" },
        { name: "וידאו", value: 10, color: "#ef4444" },
      ],
    },
    footer: {
      description:
        "מחברים עסקים עם כישרונות מובילים ברחבי העולם כדי לבצע פרויקטים ביעילות ובצורה אפקטיבית.",
      quickLinks: "קישורים מהירים",
      links: [
        { name: "בית 1", link: "/home1" },
        { name: "בית 2", link: "/home2" },
        { name: "אודות", link: "/about" },
        { name: "שירותים", link: "/services" },
        { name: "בלוג", link: "/blog" },
        { name: "צור קשר", link: "/contact-us" },
      ],
      forFreelancers: "לפרילנסרים",
      freelancerLinks: [
        {
          num: 1,
          name: "פיתוח אתרים ואפליקציות",
          link: "/web-app-development",
        },
        { num: 2, name: "עיצוב UI/UX ועיצוב גרפי", link: "/ui-ux-design" },
        { num: 3, name: "כתיבת תוכן", link: "/content-writing" },
        { num: 4, name: "שיווק דיגיטלי", link: "/digital-marketing" },
        { num: 5, name: "הפקת וידאו", link: "/video-production" },
        { num: 6, name: "שירותי ענן ו-DevOps", link: "/cloud-devops-services" },
      ],
      contactUs: "צור קשר",
      contactDetails: [
        { num: 1, name: "+192 123 4567" },
        { num: 2, name: "info@enkonix.in" },
        { num: 3, name: "123 רחוב אנקוניקס, עיר, מדינה" },
      ],
      copyright: "FreelancerHub. כל הזכויות שמורות.",
    },
  },
};

export default translations;
