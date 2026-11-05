import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [composerData, setComposerData] = useState({
    senderName: '',
    senderEmail: '',
    subject: '',
    message: ''
  });
  const [submissionFeedback, setSubmissionFeedback] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('chandan881677@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleComposerSubmit = (e) => {
    e.preventDefault();

    const recipient = 'chandan881677@gmail.com';
    const emailSubject = encodeURIComponent(
      composerData.subject || `Inquiry from ${composerData.senderName || 'Developer Portfolio'}`
    );
    const bodyContent = encodeURIComponent(
      `Hi Chandan,\n\nName: ${composerData.senderName}\nEmail: ${composerData.senderEmail}\n\nMessage:\n${composerData.message}\n`
    );

    // Open user's default email client with prefilled details
    window.location.href = `mailto:${recipient}?subject=${emailSubject}&body=${bodyContent}`;

    setSubmissionFeedback('Opening your email client to send your message to Chandan.');
    setTimeout(() => {
      setSubmissionFeedback(null);
      setComposerData({ senderName: '', senderEmail: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <SectionHeader
          badge="Get in Touch"
          icon="bi-chat-heart-fill"
          title="Have an Idea? Let's Build"
          highlight="Something Great."
          subtitle="Open for React.js, Frontend, and MERN Developer opportunities. Let's discuss how I can bring value to your engineering team."
        />

        <div className="contact-outer-card">
          <div className="contact-split-grid">
            {/* Left Column: Direct Contact Channels */}
            <div className="contact-info-col">
              <div>
                <h3 className="contact-hero-heading">
                  Let's connect and create impact together.
                </h3>
                <p className="contact-invitation">
                  Whether you have an open frontend role, a project discussion, or would like to
                  review my technical background, feel free to reach out directly through any of
                  the channels below.
                </p>

                <div className="contact-channels-list">
                  {/* Email Channel */}
                  <div className="contact-channel-item">
                    <div className="channel-icon-emblem">
                      <i className="bi bi-envelope-fill"></i>
                    </div>
                    <div className="channel-content">
                      <div className="channel-label-small">Primary Email</div>
                      <a href="mailto:chandan881677@gmail.com" className="channel-link-text">
                        chandan881677@gmail.com
                      </a>
                    </div>
                    <button
                      type="button"
                      className="channel-copy-btn"
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                      aria-label="Copy email address"
                    >
                      <i className={`bi ${copiedEmail ? 'bi-check-lg text-success' : 'bi-clipboard'}`}></i>
                    </button>
                  </div>

                  {/* Phone Channel */}
                  <div className="contact-channel-item">
                    <div className="channel-icon-emblem">
                      <i className="bi bi-telephone-fill"></i>
                    </div>
                    <div className="channel-content">
                      <div className="channel-label-small">Direct Phone</div>
                      <a href="tel:+917978276217" className="channel-link-text">
                        +91 7978276217
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn Channel */}
                  <div className="contact-channel-item">
                    <div className="channel-icon-emblem">
                      <i className="bi bi-linkedin"></i>
                    </div>
                    <div className="channel-content">
                      <div className="channel-label-small">LinkedIn Network</div>
                      <a
                        href="https://www.linkedin.com/in/chandansahoo7978/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="channel-link-text"
                      >
                        linkedin.com/in/chandansahoo7978
                      </a>
                    </div>
                  </div>

                  {/* GitHub Channel */}
                  <div className="contact-channel-item">
                    <div className="channel-icon-emblem">
                      <i className="bi bi-github"></i>
                    </div>
                    <div className="channel-content">
                      <div className="channel-label-small">GitHub Profile</div>
                      <a
                        href="https://github.com/chandugithubui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="channel-link-text"
                      >
                        github.com/chandugithubui
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume Download Action */}
              <div style={{ marginTop: '2.5rem' }}>
                <a
                  href="/assets/resume/Chandan_Sahoo_Resume.pdf"
                  download="Chandan_Sahoo_Resume.pdf"
                  className="btn-secondary-cinematic"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <i className="bi bi-file-earmark-pdf-fill me-2" style={{ color: 'var(--accent-cyan)' }}></i>
                  <span>Download Full Resume (PDF)</span>
                </a>
              </div>
            </div>

            {/* Right Column: Direct Message Composer */}
            <div className="contact-composer-card">
              <h3 className="composer-title">Send a Direct Message</h3>
              <p className="composer-subtitle">
                Fill in the details below to open a pre-composed email directly in your email client.
              </p>

              {submissionFeedback && (
                <div
                  style={{
                    padding: '0.85rem 1rem',
                    background: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.4)',
                    borderRadius: '10px',
                    fontSize: '0.85rem',
                    color: 'var(--accent-cyan)',
                    marginBottom: '1.25rem'
                  }}
                >
                  <i className="bi bi-info-circle me-2"></i>
                  {submissionFeedback}
                </div>
              )}

              <form onSubmit={handleComposerSubmit}>
                <div className="form-group-cinematic">
                  <label htmlFor="senderName" className="label-cinematic">
                    Your Name
                  </label>
                  <input
                    id="senderName"
                    type="text"
                    required
                    className="input-cinematic"
                    placeholder="e.g. Alex Sharma"
                    value={composerData.senderName}
                    onChange={(e) => setComposerData({ ...composerData, senderName: e.target.value })}
                  />
                </div>

                <div className="form-group-cinematic">
                  <label htmlFor="senderEmail" className="label-cinematic">
                    Your Email Address
                  </label>
                  <input
                    id="senderEmail"
                    type="email"
                    required
                    className="input-cinematic"
                    placeholder="alex@company.com"
                    value={composerData.senderEmail}
                    onChange={(e) => setComposerData({ ...composerData, senderEmail: e.target.value })}
                  />
                </div>

                <div className="form-group-cinematic">
                  <label htmlFor="subject" className="label-cinematic">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    className="input-cinematic"
                    placeholder="e.g. Frontend Developer Role / Project Discussion"
                    value={composerData.subject}
                    onChange={(e) => setComposerData({ ...composerData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group-cinematic">
                  <label htmlFor="message" className="label-cinematic">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    className="input-cinematic"
                    placeholder="Write your note or project specifications here..."
                    value={composerData.message}
                    onChange={(e) => setComposerData({ ...composerData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-submit-cinematic">
                  <i className="bi bi-send-fill" aria-hidden="true"></i>
                  <span>Launch Email Client</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
