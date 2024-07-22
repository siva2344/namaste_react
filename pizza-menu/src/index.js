import React from 'react'
import ReactDOM from 'react-dom/client'
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
function App(){
    return (<>
    <Header/>
   <Menu/>
   <Footer/>
       </>)
}
function Menu(){
    return <div>
        {pizzaData.map((element,i) => {
            if(0){

            }else{
          return <Pizza key={i} name={element.name} ingredients={element.ingredients} price={element.price}
            photo={element.photoName} soldout={element.soldOut} />
            }
        })
        
        }
    </div>
}
        
function Header(){
    return(
        <header>
            Famous Pizza Shop
        </header>
    )
}
function Footer(){
    return <footer>
        we're open
    </footer>
}

function Pizza(props){
    let{name,ingredients,price,soldout,photo}=props
    console.log(name)
    return <>
    <div>
    <img src={photo} alt={name}/>
    <div>
    <p>{name}</p>
    <p>{ingredients}</p>
    
    <p>{price}</p>
    <p>{soldout}</p>
    </div>
    </div>
    </>
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<React.StrictMode><App/></React.StrictMode>)