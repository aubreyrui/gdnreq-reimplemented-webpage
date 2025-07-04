import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const items = [
    { title: 'Item 1', description: 'This is the description for Item 1' },
    { title: 'Item 2', description: 'This is the description for Item 2' },
    { title: 'Item 3', description: 'This is the description for Item 3' },
    { title: 'Item 4', description: 'This is the description for Item 4' },
    { title: 'Item 5', description: 'This is the description for Item 5' },
    { title: 'Item 6', description: 'This is the description for Item 6' },
    { title: 'Item 7', description: 'This is the description for Item 7' },
    { title: 'Item 8', description: 'This is the description for Item 8' },
  ];

  return (
    <div className="container">
      <div className="row text-center">
        {items.map((item, index) => (
          <div key={index} className="grid-wrapper">
            <a href="#" className="grid-link">
              <div className="grid-item-fixed">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
