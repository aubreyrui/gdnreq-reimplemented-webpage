import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './Content.css'

function Content () {
    const writing = [
    // Writing Cluster
    { title: 'News', description: 'This is the description for Item 1', color: '#1B4480' },
    { title: 'Sports', description: 'This is the description for Item 2', color: '#1B4480' },
    { title: 'Inquiry', description: 'This is the description for Item 3', color: 'maroon'},
    { title: 'Beyond Loyola', description: 'This is the description for Item 4', color: '#D4B835' },
    { title: 'Features', description: 'This is the description for Item 5', color: 'green'},
    { title: 'Vantage Magazine', description: 'This is the description for Item 6', color: 'purple'},
    { title: 'Broadcast News', description: 'This is the description for Item 7', color: 'orange' },
    { title: 'Science and Technology', description: 'This is the description for Item 8', color: '#46AFF8' },
  ];

  const organization = [
    { title: 'Social Media', description: 'This is the description for Item 1', color: '#1B4480' },
    { title: 'Human Resources', description: 'This is the description for Item 2', color: 'green' },
    { title: 'Publication Relations', description: 'This is the description for Item 3', color: '#D4B835'},
    { title: 'Research and Development', description: 'This is the description for Item 4', color: 'maroon' },
  ];

  const design = [
    { title: 'Graphic Design', description: 'This is the description for Item 1', color: 'blue' },
    { title: 'Photos', description: 'This is the description for Item 2', color: '#D4B835' },
    { title: 'Video Production', description: 'This is the description for Item 3', color: 'red'},
    { title: 'Digital Development', description: 'This is the description for Item 4', color: 'green' },
  ];

  return (
    
    <div className="container p-5">
<div className="row text-center">
        <div className='row'>
          <div className='col-lg-6'>
            <p>This year, The GUIDON marks its 96th founding anniversary with a mission to remain Grounded in the Truth.</p>
            <h4 style={{alignContent: 'left'}}>As such, the publication stands firm in its commitment to uncovering the realities that shape present times.</h4>
          </div>
          <div className='col-lg-6'>
            <img src="https://picsum.photos/seed/picsum/500/200"/>
          </div>
        </div>

        <h1 className="h1-content">Writing Cluster</h1>
        {writing.map((writing, index) => (
          <div key={index} className="col-xs-12 col-sm-6 col-md-4">
            <a href="#" className="grid-link">
              <div className="grid-item-fixed">
                <h4 style={{color: writing.color, fontWeight: 'bold', textAlign: 'left'}}>{writing.title}</h4>
                <p className='p-stylingapp'>{writing.description}</p>
              </div>
            </a>
          </div>
        ))}
        <h1 className="h1-content">Organizational Cluster</h1>
        {organization.map((writing, index) => (
          <div key={index} className="col-xs-12 col-sm-6 col-md-4">
            <a href="#" className="grid-link">
              <div className="grid-item-fixed">
                <h4 style={{color: writing.color, fontWeight: 'bold', textAlign: 'left'}}>{writing.title}</h4>
                <p className='p-stylingapp'>{writing.description}</p>
              </div>
            </a>
          </div>
        ))}

        <h1 className="h1-content">Design Cluster</h1>
        {design.map((writing, index) => (
          <div key={index} className="col-xs-12 col-sm-6 col-md-4">
            <a href="#" className="grid-link">
              <div className="grid-item-fixed">
                <h4 style={{color: writing.color, fontWeight: 'bold', textAlign: 'left'}}>{writing.title}</h4>
                <p className='p-stylingapp'>{writing.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
      
  );
}

export default Content;