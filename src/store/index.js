import {configureStore} from '@reduxjs/toolkit'

import {
	carsReducer,
	addCar,
	removeCar,
	changeSearchTerm
} from './slices/carsSlice.jsx'
import {
	formReducer,
	changeName,
	changeCost
} from './slices/formSlice.jsx'

const store = configureStore({
	reducer:{
		cars: carsReducer,
		form: formReducer
	}
})

export {
	store,
	changeName,
	changeCost,
	addCar,
	removeCar,
	changeSearchTerm
}