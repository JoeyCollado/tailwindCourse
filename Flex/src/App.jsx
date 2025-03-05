//flex = use to put elements either next to each other and pick and order
//       also used to work with columns and rows

const App = () => {
  return (
    <div className="parent">
      <div className="bg-gray-200">Header</div>
      <div className="flex items-center justify-evenly">
        <div className=" bg-gray-500">Sidebar</div>
        <div>
          <h1>Main Content</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            eligendi labore molestias error, placeat vel quidem, doloremque
            assumenda eum quasi debitis. Aut quia consectetur repellendus
            possimus voluptatibus beatae tempore at.
          </p>
        </div>
        <div className="bg-gray-600">Sidebar2</div>
      </div>
    </div>
  );
};

export default App;
