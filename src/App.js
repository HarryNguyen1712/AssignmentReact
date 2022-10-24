import logo from './logo.svg';
import './App.css';

function Button({className,title,href,onClick}){
  let Component="button"

  const props={}
  props.className=className
  if(onClick){
    props.onClick=onClick;
  }
  if(href){
    Component="a"
    props.href=href;
  }
  return(
      <Component {...props}>{title}</Component>
  )
}
function App() {

  return (
      <div className="App">
        <header className="App-header">
          <Button className={"btn btn-primary"} title={"Click me"} onClick={()=>console.log(Math.random()) } href={"https://nordiccoder.com/blog/tong-quan-ve-react-router/"}/>
        </header>
      </div>
  )
}

export default App;
