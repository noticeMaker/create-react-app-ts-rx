
import 'rxjs'
import { Observable } from "rxjs"
import { map, mergeMap } from 'rxjs/operators'
import { Epic, ofType } from "redux-observable"
import { Action } from 'redux'
import { GET_ALL_PRODUCTS, receiveProduct } from 'src/reducers/product'

const source = [
    { "id": 1, "title": "iPad2 4 Mini", "price": 500.01, "inventory": 2 },
    { "id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10 },
    { "id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5 }
]

const getProducts = () => {
    return new Observable((observer: any) => {
        const timerId = setTimeout(() => {
            observer.next(source)
            observer.complete()
        }, 100)
        return () => clearTimeout(timerId)
    })
}
const searchProducts: Epic<Action> = (action$) => action$.pipe(
    ofType(GET_ALL_PRODUCTS),
    mergeMap(action => {
        return getProducts().pipe(
            map((response: any) => receiveProduct(response))
        )
    })
    
)
        

export default searchProducts
