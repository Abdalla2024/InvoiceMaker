import invoiceFormImage from '../invoice-form.svg?url'
import invoiceListImage from '../invoice-list.svg?url'
import pdfPreviewImage from '../pdf-preview.svg?url'

const Screenshots = () => {
  const screenshots = [
    {
      title: "Invoice Creation", 
      description: "Intuitive form interface for creating professional invoices with all necessary details",
      image: invoiceFormImage
    },
    {
      title: "Invoice Management",
      description: "Manage all your invoices in one place with easy status tracking and organization",
      image: invoiceListImage
    },
    {
      title: "PDF Preview",
      description: "Preview and share beautiful PDF invoices that look professional on any device",
      image: pdfPreviewImage
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
