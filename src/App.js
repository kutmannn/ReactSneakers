import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {Routes, Route} from 'react-router-dom'
import Layout from "./Layout/Layout";
import {useDispatch} from'react-redux'

function App() {
    const dispatch = useDispatch()


    return(
        <div className="App">
            <div className="wrapper">
                <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Layout/>}>
                            <Route path={'/'} element={<Home />}/>
                            <Route path={'/Cart'} element={<Cart/>}/>
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}
export default App;
//
// const mapDispatchToProps = dispatch =>{
//     return {
//         setPizzas : (items) => dispatch(setPizzasAction(items)),
//     }
// }
// const mapStateToProps = state =>{
//     return{
//         items : state.pizzas.items
//     }
// };
//
// export default connect(mapStateToProps,mapDispatchToProps)(App);