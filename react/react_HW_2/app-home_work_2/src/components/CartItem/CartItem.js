import {PureComponent} from 'react';
import styles from './CartItem.module.scss';
import Button from '../Button/Button'

class CartItem extends PureComponent {

    render() {

        const { title, img, count, art, incrementCartItem, dicrementCartItem, toggleModal, setModalProps } = this.props

        return (
            <div className={styles.cartItem} key={art}>
                <div className={styles.contentContainer}>
                    <div className={styles.imgWrapper}>
                        <img className={styles.itemAvatar} key={art} src={img}
                             alt={title}/>
                    </div>
                </div>

                <span className={styles.quantity}>{count}</span>
                <div className={styles.btnContainer}>
                    <Button onClick={() => incrementCartItem(art)} className={styles.btn}>+</Button>
                    <Button onClick={() => dicrementCartItem(art)} className={styles.btn}>-</Button>
                    <Button onClick={() => {
                        setModalProps({ art, title});
                        toggleModal(true);
                    }} color="red" className={styles.btn}>DEL</Button>
                </div>

            </div>
        )
    }
}


export default CartItem;