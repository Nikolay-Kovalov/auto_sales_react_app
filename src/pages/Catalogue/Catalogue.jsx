import React, {useState} from "react";
import { motion } from "framer-motion";
import styles from "./Catalogue.module.css";
import { useCar } from "../../CarContext";

const cars = [
    {
        id: 1,
        brand: "Lexus",
        model: "LX570d",
        price: "40000"
    },
      {
        id: 2,
        brand: "BMW",
        model: "X5",
        price: "45000"
    },
        {
        id: 3,
        brand: "Audi",
        model: "RSQ8",
        price: "120000"
    }
]

const Catalog = () => {
    const [selectedCarId, setSelectedCarId] = useState(cars[0].id);
    const [totalPrice, setTotalPrice] = useState(cars[0].price);
    const { selectCar } = useCar();

 

    const handleSelectCar = (evt) => {
        const carId = parseInt(evt.target.value, 10);
        const car = cars.find(car => car.id === carId);

        setSelectedCarId(carId);
        setTotalPrice(car.price)
        selectCar(car)
    }
    return (
        <motion.div
            className={styles.container}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{duration:0.5}}
        >
            <h1 className={styles.title}>Car import calculator</h1>
            <p className={styles.description}>Select a car to see the price of import your car to Ukraine</p>
            <select value={selectedCarId} onChange={handleSelectCar} className={styles.select}>
                {cars.map(car => (
                    <option key={car.id} value={car.id}>{car.brand} {car.model}</option>
                )
              
)}
            </select>
            <div className={styles.price_container}>
                <p>Total import price: <strong>${totalPrice}</strong></p>
            </div>
    </motion.div>
)
}

export default Catalog;
