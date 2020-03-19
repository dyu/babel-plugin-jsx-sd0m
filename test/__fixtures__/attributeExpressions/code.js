const welcoming = 'Welcome';
const selected = true;
const color = 'red';
const props = {some: 'stuff', no: 'thing'}

let link;

const template = (
  <div id="main" classList={{ selected: selected }} style={{ color }}>
    <h1
      {...(props)}
      {...results}
      title={( welcoming )}
      style={({ backgroundColor: color })}
      classList={({ selected: selected })}
    >
      <a href={'/'} ref={link} visible={true} draggable={true}>Welcome</a>
      <input $value={ console.log } value={ welcoming } />
    </h1>
  </div>
);
