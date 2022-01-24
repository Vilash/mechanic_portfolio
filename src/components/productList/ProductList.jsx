import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data.js";

const ProductList = () => {
  return (<div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Build & Inspire</h1>
        <p className="pl-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vel, vitae ad voluptate possimus dolorum magnam odio, voluptatem,
            nisi veniam fugit totam. Qui placeat rem quia quam. Optio, eligendi?
            Eveniet, perspiciatis.
        </p>
      </div>
      <div className="pl-list">
          {products.map((item) => (
              <Product key={item.id} img={item.img} link={item.link} />
          ))}
      </div>
  </div>)
};

export default ProductList;
