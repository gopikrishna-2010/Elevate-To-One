import { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, BarChart3, Check, ChevronRight, CircleUserRound,
  Compass, Github, GraduationCap, Instagram, LayoutDashboard, Linkedin,
  LockKeyhole, LogOut, Mail, Menu, MessageCircle, Rocket, Settings, ShieldCheck,
  Sparkles, Target, TrendingUp, UserRound, Users, X, Zap
} from "lucide-react";
import logo from "./assets/elevate-logo.png";

const DEMO_EMAIL = "demo@elevatetoone.com";
const DEMO_PASSWORD = "Demo@123";

const navItems = [
  ["Home", "#Home"],
  ["Journey", "#Journey"],
  ["Growth", "#growth"],
  ["Vision", "#vision"],
];

function Brand({ compact = false }) {
  return (
    <Link to="/" className="brand" aria-label="Elevate to One home">
      <img src={logo} alt="Elevate to One" className={compact ? "brand-logo compact" : "brand-logo"} />
    </Link>
  );
}

function PrimaryButton({ children, to, onClick, className = "" }) {
  const content = <>{children}<ArrowRight size={16} strokeWidth={2.3} /></>;
  if (to) return <Link to={to} className={`primary-btn ${className}`}>{content}</Link>;
  return <button onClick={onClick} className={`primary-btn ${className}`}>{content}</button>;
}

function Header() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const go = (path) => {
    setMenu(false);
    navigate(path);
  };

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Brand compact />

        <nav className="desktop-nav">
          {navItems.map(([label, href]) => (
            <a key={label} href={location.pathname === "/" ? href : `/${href}`} className="nav-item">
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="login-btn" onClick={() => go("/login")}>Log in</button>
          <button className="start-btn" onClick={() => go("/signup")}>
            Start your journey
            <span className="start-arrow"><ArrowRight size={15} /></span>
          </button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMenu(!menu)} aria-label="Open navigation">
          {menu ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-menu"
          >
            {navItems.map(([label, href]) => (
              <a key={label} href={location.pathname === "/" ? href : `/${href}`} onClick={() => setMenu(false)}>
                {label}
              </a>
            ))}
            <button onClick={() => go("/login")} className="mobile-login">Log in</button>
            <button onClick={() => go("/signup")} className="mobile-start">Start your journey <ArrowRight size={16} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function SectionLabel({ children }) {
  return <div className="section-label"><span />{children}</div>;
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid" />
      <div className="hero-orb orb-a" />
      <div className="hero-orb orb-b" />

      <div className="hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .65 }}
          className="hero-copy"
        >
          <div className="hero-kicker">
            <span className="live-dot" />
            Career growth + personal growth
          </div>

          <h1>
            Build the future
            <span> you.</span>
          </h1>

          <p>
            A focused space to develop your skills, sharpen your strategy,
            build real-world confidence and move toward the version of yourself
            you want to become.
          </p>

          <div className="hero-actions">
            <PrimaryButton to="/signup">Start your journey</PrimaryButton>
            <a href="#journey" className="outline-btn">
              See how it works
              <ChevronRight size={17} />
            </a>
          </div>

          <div className="hero-proof">
            <div><Check size={14} /> Skill development</div>
            <div><Check size={14} /> Career direction</div>
            <div><Check size={14} /> Personal growth</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30, scale: .97 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: .8, delay: .08 }}
          className="hero-visual"
        >
          <div className="visual-backdrop" />
          <div className="profile-card">
            <div className="profile-top">
              <div>
                <div className="tiny-label">YOUR ELEVATE PROFILE</div>
                <h3>Growth overview</h3>
              </div>
              <div className="status-pill"><span /> On track</div>
            </div>

            <div className="profile-main">
              <div className="score-ring">
                <div className="score-inner">
                  <strong>68</strong>
                  <span>%</span>
                  <small>progress</small>
                </div>
              </div>

              <div className="profile-metrics">
                <Metric label="Career" value="72%" width="72%" />
                <Metric label="Skills" value="64%" width="64%" />
                <Metric label="Personal" value="54%" width="54%" />
              </div>
            </div>

            <div className="next-card">
              <div className="next-icon"><Rocket size={17} /></div>
              <div>
                <span>Next milestone</span>
                <strong>Build your first proof project</strong>
              </div>
              <ArrowUpRight size={17} />
            </div>

            <div className="mini-journey">
              {["Discover", "Assess", "Learn", "Build", "Grow"].map((item, i) => (
                <div key={item} className={i < 3 ? "journey-step done" : "journey-step"}>
                  <div className="step-dot">{i < 3 ? <Check size={10} /> : i + 1}</div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="floating-note note-one">
            <Sparkles size={16} />
            <span>Small progress compounds.</span>
          </div>

          <div className="floating-note note-two">
            <TrendingUp size={16} />
            <span>+12% this month</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom-line">
        <span>THROUGH SKILL</span>
        <i />
        <span>STRATEGY</span>
        <i />
        <span>SUPPORT</span>
      </div>
    </section>
  );
}

function Metric({ label, value, width }) {
  return (
    <div className="metric">
      <div><span>{label}</span><b>{value}</b></div>
      <div className="metric-track"><div style={{ width }} /></div>
    </div>
  );
}

const journey = [
  { n: "01", icon: Compass, title: "Discover", text: "Understand where you are, what you care about and where you want to go." },
  { n: "02", icon: Target, title: "Assess", text: "See your strengths, skill gaps and the habits that affect your progress." },
  { n: "03", icon: GraduationCap, title: "Learn", text: "Follow a focused roadmap instead of jumping between disconnected resources." },
  { n: "04", icon: Zap, title: "Build", text: "Turn knowledge into projects, proof and experience that actually show your ability." },
  { n: "05", icon: Sparkles, title: "Grow", text: "Review, improve and keep moving as your goals and opportunities evolve." },
];

function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <div className="section-heading">
          <SectionLabel>The Elevate Journey</SectionLabel>
          <h2>Progress needs a direction.</h2>
          <p>Five connected stages that turn ambition into consistent action.</p>
        </div>

        <div className="journey-grid">
          {journey.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .2 }}
                transition={{ delay: i * .06 }}
                className="journey-card"
              >
                <div className="journey-card-top">
                  <div className="icon-tile"><Icon size={18} /></div>
                  <span>{item.n}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="card-line" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Growth() {
  const items = [
    {
      icon: TrendingUp,
      label: "CAREER GROWTH",
      title: "Know what to learn. Know what to build.",
      text: "Turn career uncertainty into a practical sequence of skills, projects and milestones.",
      points: ["Career direction", "Skill-gap mapping", "Learning roadmaps", "Project-based growth"],
    },
    {
      icon: UserRound,
      label: "PERSONAL GROWTH",
      title: "Build the person behind the profile.",
      text: "Technical ability is only one part of a strong career. Develop the human skills that compound over time.",
      points: ["Communication", "Confidence", "Leadership", "Productivity & habits"],
    },
  ];

  return (
    <section id="growth" className="section growth-section">
      <div className="container">
        <div className="section-heading">
          <SectionLabel>Two sides. One journey.</SectionLabel>
          <h2>Career growth & personal growth belong together.</h2>
          <p>Elevate to One is designed around both — not one at the expense of the other.</p>
        </div>

        <div className="growth-grid">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * .08 }}
                className="growth-card"
              >
                <div className="growth-card-icon"><Icon size={21} /></div>
                <div className="growth-label">{item.label}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="point-grid">
                  {item.points.map(point => (
                    <div key={point}><Check size={15} />{point}</div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section id="vision" className="section">
      <div className="container">
        <div className="vision-card">
          <div className="vision-art">
            <div className="vision-ring ring-one" />
            <div className="vision-ring ring-two" />
            <img src={logo} alt="" />
          </div>

          <div className="vision-copy">
            <SectionLabel>Our vision</SectionLabel>
            <h2>Don't just prepare for a career. Prepare yourself for it.</h2>
            <p>
              Elevate to One exists to bring skill, strategy and support into one
              journey — helping people move with more clarity and intention.
            </p>
            <PrimaryButton to="/signup">Join the journey</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Brand />
        <div className="footer-links">
          <a href="#journey">Journey</a>
          <a href="#growth">Growth</a>
          <a href="#vision">Vision</a>
          <Link to="/login">Log in</Link>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href="#" aria-label="Instagram"><Instagram size={17} /></a>
          <a href="#" aria-label="GitHub"><Github size={17} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Elevate to One</span>
        <span>Through skill, strategy & support.</span>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Journey />
        <Growth />
        <Vision />
      </main>
      <Footer />
    </>
  );
}

function AuthPage({ mode }) {
  const isLogin = mode === "login";
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") || "").trim();
    const password = String(form.get("password") || "");

    if (isLogin) {
      if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
        localStorage.setItem("elevateUser", JSON.stringify({
          name: "Demo User",
          email: DEMO_EMAIL,
        }));
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Use the demo credentials shown below.");
      }
      return;
    }

    const name = String(form.get("name") || "").trim();
    const confirmPassword = String(form.get("confirmPassword") || "");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    localStorage.setItem("elevateUser", JSON.stringify({
      name: name || "New User",
      email,
    }));

    setMessage("Account created for this frontend demo. Opening your dashboard…");
    setTimeout(() => navigate("/dashboard"), 600);
  };

  return (
    <div className="auth-page">
      <div className="auth-noise" />
      <div className="auth-glow glow-left" />
      <div className="auth-glow glow-right" />

      <div className="auth-layout">
        <div className="auth-brand-side">
          <Brand />
          <div className="auth-brand-copy">
            <SectionLabel>Elevate your next chapter</SectionLabel>
            <h1>
              One journey.
              <span> A clearer direction.</span>
            </h1>
            <p>
              Keep your career goals, skills and personal growth moving in the
              same direction.
            </p>
            <div className="auth-side-points">
              <div><ShieldCheck size={17} /> Your progress, your pace.</div>
              <div><Target size={17} /> Clear milestones instead of noise.</div>
              <div><Users size={17} /> Built around skill, strategy & support.</div>
            </div>
          </div>
        </div>

        <div className="auth-form-side">
          <Link to="/" className="mobile-auth-logo"><Brand /></Link>

          <div className="auth-card">
            <div className="auth-card-head">
              <div className="auth-icon">{isLogin ? <LockKeyhole size={19} /> : <Sparkles size={19} />}</div>
              <div>
                <h2>{isLogin ? "Welcome back" : "Start your journey"}</h2>
                <p>{isLogin ? "Sign in to continue your progress." : "Create your Elevate to One profile."}</p>
              </div>
            </div>

            {error && <div className="form-alert error">{error}</div>}
            {message && <div className="form-alert success">{message}</div>}

            <form onSubmit={submit} className="auth-form">
              {!isLogin && (
                <label>
                  Full name
                  <div className="field">
                    <UserRound size={17} />
                    <input name="name" required placeholder="Your name…" autoComplete="name" />
                  </div>
                </label>
              )}

              <label>
                Email address
                <div className="field">
                  <Mail size={17} />
                  <input name="email" required type="email" placeholder="you@example.com…" autoComplete="email" />
                </div>
              </label>

              <label>
                Password
                <div className="field">
                  <LockKeyhole size={17} />
                  <input
                    name="password"
                    required
                    minLength={6}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete={isLogin ? "current-password" : "new-password"}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </label>

              {!isLogin && (
                <label>
                  Confirm password
                  <div className="field">
                    <LockKeyhole size={17} />
                    <input
                      name="confirmPassword"
                      required
                      minLength={6}
                      type="password"
                      placeholder="••••••••"
                      autoComplete="new-password"
                    />
                  </div>
                </label>
              )}

              {isLogin && (
                <div className="auth-options">
                  <label className="remember">
                    <input type="checkbox" /> Remember me
                  </label>
                  <button type="button">Forgot password?</button>
                </div>
              )}

              <button className="auth-submit" type="submit">
                {isLogin ? "Log in" : "Create account"}
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="divider"><span />or<span /></div>

            <button className="google-btn">
              <span>G</span> Continue with Google
            </button>

            {isLogin && (
              <div className="demo-box">
                <div className="demo-title"><ShieldCheck size={14} /> Demo credentials</div>
                <div><span>Email</span><b>{DEMO_EMAIL}</b></div>
                <div><span>Password</span><b>{DEMO_PASSWORD}</b></div>
              </div>
            )}

            <p className="switch-auth">
              {isLogin ? "New to Elevate to One?" : "Already have an account?"}
              <button onClick={() => navigate(isLogin ? "/signup" : "/login")}>
                {isLogin ? "Create an account" : "Log in"}
              </button>
            </p>

            <p className="auth-demo-note">
              Frontend demo only — real authentication will be connected to the backend later.
            </p>
          </div>

          <Link to="/" className="back-home">← Back to Elevate to One</Link>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  const [active, setActive] = useState("Overview");
  const [goals, setGoals] = useState([
    { title: "Complete Python module", done: true },
    { title: "Practice communication", done: false },
    { title: "Build one portfolio project", done: false },
    { title: "Update GitHub profile", done: false },
  ]);

  const rawUser = localStorage.getItem("elevateUser");
  const user = rawUser ? JSON.parse(rawUser) : null;

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  const toggleGoal = (index) => {
    setGoals(prev => prev.map((goal, i) => i === index ? { ...goal, done: !goal.done } : goal));
  };

  const logout = () => {
    localStorage.removeItem("elevateUser");
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <aside className="dashboard-sidebar">
        <Brand />

        <div className="dashboard-user">
          <div className="avatar">{user.name?.charAt(0)?.toUpperCase() || "D"}</div>
          <div>
            <strong>{user.name || "Demo User"}</strong>
            <span>{user.email}</span>
          </div>
        </div>

        <nav className="dashboard-nav">
          {[
            [LayoutDashboard, "Overview"],
            [TrendingUp, "Career growth"],
            [UserRound, "Personal growth"],
            [Target, "Goals"],
            [CircleUserRound, "Profile"],
          ].map(([Icon, label]) => (
            <button key={label} className={active === label ? "active" : ""} onClick={() => setActive(label)}>
              <Icon size={17} /> {label}
            </button>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <button onClick={() => setActive("Settings")}><Settings size={17} /> Settings</button>
          <button onClick={logout}><LogOut size={17} /> Log out</button>
        </div>
      </aside>

      <main className="dashboard-main">
        <div className="dashboard-mobile-top">
          <Brand compact />
          <button onClick={logout}><LogOut size={17} /></button>
        </div>

        <div className="dashboard-heading">
          <div>
            <span className="dashboard-eyebrow">YOUR ELEVATE SPACE</span>
            <h1>Good to see you, {user.name?.split(" ")[0] || "there"}.</h1>
            <p>Here’s what your growth looks like right now.</p>
          </div>
          <div className="dashboard-date">Journey status <b>Active</b></div>
        </div>

        <div className="stat-grid">
          <DashboardStat icon={TrendingUp} label="Career progress" value="68%" note="+8% this month" />
          <DashboardStat icon={Zap} label="Skill development" value="64%" note="3 skills in focus" />
          <DashboardStat icon={Sparkles} label="Personal growth" value="54%" note="2 goals active" />
          <DashboardStat icon={Target} label="Goals completed" value="7" note="of 12 this month" />
        </div>

        <div className="dashboard-grid">
          <section className="dash-panel goals-panel">
            <div className="panel-heading">
              <div><span>Today</span><h2>Your focus</h2></div>
              <span className="completion">{goals.filter(g => g.done).length}/{goals.length} completed</span>
            </div>

            <div className="goal-list">
              {goals.map((goal, i) => (
                <button key={goal.title} className={`goal-row ${goal.done ? "completed" : ""}`} onClick={() => toggleGoal(i)}>
                  <span className="goal-check">{goal.done && <Check size={13} />}</span>
                  <span>{goal.title}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="dash-panel milestone-panel">
            <div className="panel-heading">
              <div><span>Next milestone</span><h2>Full Stack Developer</h2></div>
              <Rocket size={20} className="panel-accent" />
            </div>
            <p>Build stronger frontend and backend fundamentals through practical projects.</p>
            <div className="big-progress"><div /></div>
            <div className="progress-meta"><span>Journey progress</span><b>68%</b></div>
            <PrimaryButton to="/#journey" className="small-primary">Continue journey</PrimaryButton>
          </section>
        </div>

        <section className="dash-panel journey-panel">
          <div className="panel-heading">
            <div><span>Your roadmap</span><h2>From discovery to growth</h2></div>
            <span className="completion">3 of 5 stages</span>
          </div>
          <div className="dashboard-roadmap">
            {["Discover", "Assess", "Learn", "Build", "Grow"].map((item, i) => (
              <div key={item} className={`roadmap-stage ${i < 3 ? "done" : ""}`}>
                <div className="roadmap-node">{i < 3 ? <Check size={14} /> : i + 1}</div>
                <strong>{item}</strong>
                <span>{i < 3 ? "Completed" : "Upcoming"}</span>
              </div>
            ))}
          </div>
        </section>

        <div className="dashboard-bottom-grid">
          <section className="dash-panel">
            <div className="panel-heading">
              <div><span>Career</span><h2>Skill snapshot</h2></div>
            </div>
            <Metric label="Frontend development" value="78%" width="78%" />
            <Metric label="Backend development" value="62%" width="62%" />
            <Metric label="Problem solving" value="71%" width="71%" />
          </section>

          <section className="dash-panel">
            <div className="panel-heading">
              <div><span>Support</span><h2>Need direction?</h2></div>
              <MessageCircle size={19} className="panel-accent" />
            </div>
            <p className="support-copy">Your future path gets clearer when the next action is clear.</p>
            <button className="support-btn">Explore your next step <ArrowUpRight size={15} /></button>
          </section>
        </div>
      </main>
    </div>
  );
}

function DashboardStat({ icon: Icon, label, value, note }) {
  return (
    <div className="dashboard-stat">
      <div className="stat-icon"><Icon size={17} /></div>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/signup" element={<AuthPage mode="signup" />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
