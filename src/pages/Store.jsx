import Header from '../components/Header';

import getPurchasableItems from '../utils/getPurchasableItems';
import Item from '../components/Item';

function Store(props) {
  // Muodostetaan renderöitävä tuotelista.
  const items = getPurchasableItems(props.storeitems).map(item => (
    <Item key={item.id}
          item={item}
          handlePurchase={props.handlePurchase} 
          disabled={props.stats.balance < item.price} />
  ));


  
  return (
    <div className="container">
      <Header balance={props.stats.balance}>Boosters</Header>
      <div className="scrollbox items">
      {items}

      </div>
    </div>
  );
}

export default Store;
