import Productos from "./components/Productos";
import { Component } from 'react';
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar"

class App extends Component{
  state = {
    productos: [
      {name: "Casco Optimus", precio: 100000,  img: "/productos/opti0.jpg"},
      {name: "Optimus Eléctrica", precio: 2900000,  img: "/productos/opti1.jpg"},
      {name: "Optimus Aquila", precio: 2800000,  img: "/productos/opti3.jpg"},
      {name: "Optimus Corvus", precio: 4800000,  img: "/productos/opti4.jpg"},
      {name: "Optimus Rout", precio: 2800000,  img: "/productos/opti2.jpg"},
    ],
    carro: [],
  }

  agregarAlCarro = (producto) => {
    const {carro} = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1

        })
        : x)
        return  this.setState({ carro : newCarro })
    }
    
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad:1,
      })
    })

  }

  render() {
    console.log(this.state.carro)
    return(
      <div>
        <Navbar carro={this.state.carro} />
        <Layout>
          <Title />
        <Productos
        agregarAlCarro={this.agregarAlCarro}
        productos={this.state.productos}
        />
        </Layout> 
        
      </div>
    )
  }
}


export default App;
