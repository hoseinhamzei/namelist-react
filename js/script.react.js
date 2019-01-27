// JSX Document
const container = document.getElementById('react-container');



class Fulllist extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

    this.state = {list:[],value:''}
    this.textInput = React.createRef();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    if(this.state.value.length > 2){
      const newlist = this.state.list.slice();
      newlist.push(this.state.value);
      this.setState({list:newlist,value:''});
      this.textInput.current.focus();
      
    } else {
      alert('the name must be at least 3 charachters!');
    }
    event.preventDefault();
  }

  deleteItem = (ids) => {
      let wholelist = this.state.list.slice();
      wholelist.splice(ids,1);
      this.setState({list:wholelist});
      
      
  }

  
render(){

  const mylist = this.state.list;
  const mymap = mylist.map((item,index) => <li key={index} onClick={() =>{this.deleteItem(index)}}>{item}</li>);

  return(
    <div>

    <form onSubmit={this.handleSubmit}>
        
          <div className='row ml-3 mt-3'>
          <input placeholder='name' type="text" className='form-control w-50' ref={this.textInput} onChange={this.handleChange} id='myform' value={this.state.value} />
        
        <input className='btn btn-primary ml-2' type="submit" value="Submit" />
        </div>
      </form>
      
    <ul className='my-5'>
      {mymap}
    </ul>

    </div>
  );
}
  
}



  //////////////////////////////////////////////////////////////////////




function renderList(){
    ReactDOM.render(<Fulllist/>,container)
}

function renderForm(){
  ReactDOM.render(<NameForm/>,container)
}

renderList();
