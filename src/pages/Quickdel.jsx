import React from 'react'
import {useNavigate} from 'react-router-dom';
import './quick.css';

const Quickdel = () => {
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate('/order'); 
  };
  return (
    <div className="container">
    <div className="item">
        <h5>cake</h5>
        <img src="https://tse1.mm.bing.net/th?id=OIP.gnwM2aC5h00k4sZ3X-I_FwHaE7&pid=Api&P=0&h=180" />
    </div>
    <div className="item">
        <h5>Cold drinks</h5>
        <img src="https://tse2.mm.bing.net/th?id=OIP.3SWvFe2vWkGoDsEzd-nwswHaEK&pid=Api&P=0&h=180"  />
    </div>
    <div className="item">
        <h5>Dosa</h5>
        <img src="https://tse2.mm.bing.net/th?id=OIP.klQZ6ZQwetu5XLKYhbxt3wHaHa&pid=Api&P=0&h=180" />
    </div>
    <div className="item">
        <h5>Idli</h5>
        <img src="https://tse1.mm.bing.net/th?id=OIP.6Dz8Pnyz38XvCpFBSDYVEgHaLL&pid=Api&P=0&h=180" />
    </div>
    <div className="item">
        <h5>Pizza</h5>
        <img src="https://tse2.mm.bing.net/th?id=OIP.qQ9CCtjHHDqs8o-H3j8XCAHaEo&pid=Api&P=0&h=180" />
    </div>
    <div className="item">
        <h5>Ice-Cream</h5>
        <img src="https://tse3.mm.bing.net/th?id=OIP.XmiNhOfrec8qPUgE3wojkQAAAA&pid=Api&P=0&h=180" />
    </div>
    <div className="box">
      <h1>Top Rated Restaurants</h1>
      
      <table >
          <tr>
          <th>S.No</th>
          <th>Restourant Names</th>
          <th>Ratings</th>
          <th colspan='4'>famous food       </th>
         
          </tr>
          <tr>
            <td>1.</td>
          <td>Saptagiri hotel</td>
          <td>⭐⭐⭐⭐</td>
          <td >
            <img src="https://b.zmtcdn.com/data/o2_assets/019409fe8f838312214d9211be010ef31678798444.jpeg" /><br></br>North Indian<br></br>₹200<br></br><button class="button"  onClick={handleOrder} >Order</button></td>
            
           <td> <img src="https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"/><br></br>Dosa<br></br>₹150<br></br><button class="button"  onClick={handleOrder} >Order</button>
            </td>
            
            <td >
            <img src="https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png" /><br></br>Fried rice<br></br>₹180<br></br><button class="button" onClick={handleOrder} >Order</button></td>
            
           <td> <img src="https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png"/><br></br>Paratha<br></br>₹60<br></br><button class="button"  onClick={handleOrder} >Order</button></td>
            
            </tr>
          <tr>
            <td>2.</td>
          <td>Poornanand hotel</td>
          <td>⭐⭐⭐⭐</td>
          <td>
            <img src="https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png" /><br></br>Biriyani<br></br>₹250<br></br><button class="button"  onClick={handleOrder} >Order</button></td>
            
            <td >
            <img src="https://tse4.mm.bing.net/th?id=OIP.k14ICh_56BnTrelydq8OdQHaFC&pid=Api&P=0&h=180" /><br></br>Rolls<br></br>₹150<br></br><button class="button"  onClick={handleOrder} >Order</button></td>
           <td> <img src="https://b.zmtcdn.com/data/pictures/4/20580484/b54fe25a9d1d832fdfedbbccda83df38_o2_featured_v2.jpg"/><br></br>Chicken<br></br>₹300<br></br><button class="button" onClick={handleOrder} >Order</button></td>
            
            <td>
            <img src="https://tse2.mm.bing.net/th?id=OIP.n3U7jFANn0s7SsCi8Vnf_QHaFj&pid=Api&P=0&h=180" /><br></br>Thali<br></br><button class="button"  onClick={handleOrder} >Order</button></td>
            
          </tr>
          <tr>
          <td>3.</td>
          <td>Venkatgiri hotel</td>
          <td>⭐⭐⭐</td>
          <td>
            <img src="https://b.zmtcdn.com/data/o2_assets/94d3d2045e5f75fe2e6f49ba9f72fe641686120346.png" /><br></br>Palav<br></br>₹150<br></br><button class="button"  onClick={handleOrder} >Order</button></td>
            
            <td><img src="https://b.zmtcdn.com/data/dish_photos/bda/9cdab6d5f275b8d2532e3878134ddbda.jpg"/><br></br>Veg meal<br></br>₹300<br></br><button class="button" onClick={handleOrder}>Order</button></td>
            
            <td>
            <img src="https://b.zmtcdn.com/data/pictures/chains/9/19410919/e2f0e806a7b0a064b439a5f8447f3dd3_o2_featured_v2.jpg" /><br></br>Chole Bhature<br></br>₹120<br></br><button class="button" onClick={handleOrder} >Order</button></td>
            
           <td> <img src="https://b.zmtcdn.com/data/pictures/chains/4/19225214/aed6598e604214342deaacc7d985257f_o2_featured_v2.jpg"/><br></br>Veg Biriyani<br></br>₹220<br></br><button class="button"  onClick={handleOrder}>Order</button></td>
            
          </tr>
          <tr>
            <td>4.</td>
          <td>Taj Bakery</td>
          <td>⭐⭐⭐</td>
          <td>
            <img src="https://b.zmtcdn.com/data/pictures/5/19894885/7e343d62059a06eefd673beabf406698_o2_featured_v2.jpg" /><br></br>Cake<br></br>₹220<br></br><button class="button"  onClick={handleOrder} >Order</button></td>
            <td><img src="https://tse4.mm.bing.net/th?id=OIP.T4KDgt416Zs1fma6ZtL1gwHaEK&pid=Api&P=0&h=180"/><br></br>Kaju katli<br></br>₹320<br></br><button class="button"  onClick={handleOrder}>Order</button></td>
            <td >
            <img src="https://tse4.mm.bing.net/th?id=OIP.9s6TNFH8e_ZQkxRDGzhIzgHaE8&pid=Api&P=0&h=180" /><br></br>Ice-Cream<br></br>₹120<br></br><button class="button"  onClick={handleOrder} >Order</button></td>
           <td> <img src="https://tse4.mm.bing.net/th?id=OIP.1vFsCtWhBeYUWASjbFOgXAHaF3&pid=Api&P=0&h=180"/><br></br>Jalebi<br></br>₹100<br></br><button class="button"   onClick={handleOrder}>Order</button></td>
          </tr>
      
        </table>
    </div>

    </div>
  )
}

export default Quickdel