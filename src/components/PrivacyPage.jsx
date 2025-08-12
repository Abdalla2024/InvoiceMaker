import { useEffect } from 'react'

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="privacy-policy">
      <div className="container">
        <div className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: December 8, 2024</p>
        </div>

        <div className="privacy-content">
          <section className="privacy-section">
            <h2>Overview</h2>
            <p>
              Invoice Maker is designed with privacy by default. We do not collect, process,
              or transmit your personal data to our servers. All invoice data you enter stays
              on your device unless you explicitly choose to share it.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data We Handle</h2>
            <ul>
              <li>
                <strong>Invoice content you create</strong>: Stored locally on your device using Apple
                technologies (SwiftData) and small preferences via <code>UserDefaults</code> for things like
                invoice numbering and company info reuse.
              </li>
              <li>
                <strong>Generated PDF files</strong>: Created entirely on-device. When you share a PDF, it is
                exported to a temporary file and shared via the iOS share sheet. We do not receive a copy.
              </li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>What We Do Not Collect</h2>
            <ul>
              <li>No analytics, advertising identifiers, or tracking technologies</li>
              <li>No third‑party SDK telemetry (e.g., no Firebase, Crashlytics, Sentry, etc.)</li>
              <li>No account system and no server-side storage</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Backups and Sync</h2>
            <p>
              Your device may back up app data (including invoices) as part of your iOS backup settings
              (e.g., iCloud device backup) if enabled at the system level. These backups are managed by Apple
              under your iCloud settings. The app itself does not transmit data to any developer-controlled server.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Permissions</h2>
            <p>
              The app may request access to files you explicitly select for export/sharing. It operates in the
              iOS sandbox and only reads files you choose. The app does not access location, contacts, camera,
              microphone, or photos unless you use the iOS share/save flows to pick a destination.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Control and Deletion</h2>
            <ul>
              <li>You can delete invoices within the app.</li>
              <li>Deleting the app removes all locally stored data from your device.</li>
              <li>To remove data from backups, manage your iCloud/device backups in iOS settings.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Children's Privacy</h2>
            <p>
              Invoice Maker is not directed to children under 13. We do not knowingly collect any personal
              information from children.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will post updates here and revise the
              "Last updated" date above.
            </p>
          </section>

          <section className="privacy-section">
            <div className="contact-info">
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:spareisle@gmail.com">spareisle@gmail.com</a>
              </p>
              <p>
                We will respond to your inquiry within a reasonable timeframe.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPage
