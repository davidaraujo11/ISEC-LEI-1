
const divStyle = {
     margin: '40px',
     padding: '10px',
     border: '5px solid red'
};
const styleH1 = {
     fontFamily: 'sans-serif',
     textDecoration: 'underline',
     color: 'brown'
};
const LinguagensScript = props => <h1 style={styleH1}>Bem vindo '{props.name}' à UC de Linguagens Script!</h1>;

const InfoComponent = props => <div className="container">
     <div className="wrapper">
          <div className="logo">
               <img src={'images/' + props.src} alt={props.title} />
          </div>
          <div className="text">
               <h2>{props.title}</h2>
               <p>{props.children}</p>
               <a href={props.url} target="_blank">Ler mais</a>
          </div>
     </div>
</div>
const Exemplo4 = () => (
     <div style={divStyle}>
          <p> Aplicação de CSS Inline - LS</p>
     </div>
);

const containerRoot = document.getElementById("root");
const root = ReactDOM.createRoot(containerRoot);
root.render(
     <React.StrictMode>
          <InfoComponent title="React" src="react.png" url=" https://reactjs.dev/"> React is a
declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you
compose complex UIs from small and isolated pieces of code called "components". We use components
to tell React what we want to see on the screen. When our data changes, React will efficiently
update and re-render our components. A component takes in parameters, called props (short for
“properties”), and returns a hierarchy of views to display via the render method.
</InfoComponent>
          <InfoComponent title="Javascript" src="javascript.png"
               url="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
               JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with
               first-class functions. While it is most well-known as the scripting language for Web pages,
               many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.
               JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting
               object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about
               JavaScript.
</InfoComponent>
          <InfoComponent title="Vue" src="vue.png"
               url="https://vuejs.org/">
                Vue is a JavaScript framework for building user interfaces. It builds on top of standard 
HTML, CSS and JavaScript, and provides a declarative and component-based programming 
model that helps you efficiently develop user interfaces, be it simple or complex.
</InfoComponent>
          <InfoComponent title="Ember" src="ember.png"
               url="https://emberjs.com/">
                Ember.js is a productive, battle-tested JavaScript framework for building modern web 
applications. It includes everything you need to build rich UIs that work on any device.
</InfoComponent>
          {/* <LinguagensScript name="Pedro" />
          <LinguagensScript name="Cris" />
          <LinguagensScript name="Alex" />
          <Exemplo4 /> */}
     </React.StrictMode >
);


