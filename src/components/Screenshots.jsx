// Swap to use the provided PNG screenshots
const fillOutPng = '/images/fillOut.png'
const generatePng = '/images/generate.png'
const invoicesPng = '/images/invoices.png'

const Screenshots = () => {
  const screenshots = [
    {
      title: "Fill out details",
      description: "Enter company and client info, items, tax, and notes in a clean SwiftUI form.",
      image: fillOutPng
    },
    {
      title: "Generate PDF",
      description: "Create a beautiful, paginated PDF ready to share or save to Files.",
      image: generatePng
    },
    {
      title: "Invoices list",
      description: "Browse, search, filter by status, duplicate, and manage invoices in one place.",
      image: invoicesPng
    }
  ]

  return (
    <section id="screenshots" className="screenshots">
      <div className="container">
        <div className="section-header">
          <h2>See Invoice Maker in Action</h2>
          <p>
            Clean, professional design that makes creating and managing invoices effortless
          </p>
        </div>
        <div className="screenshots-grid">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="screenshot-card">
              <div className="screenshot-phone">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    borderRadius: '20px'
                  }}
                />
              </div>
              <h3>{screenshot.title}</h3>
              <p>{screenshot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Screenshots
