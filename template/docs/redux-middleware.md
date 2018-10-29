

### redux-middleware 

middleware
```
    redux-thunk  redux-observable 
```

example:

redux-thunk async actions:

```
    export const fecthFreqList = () => async (dispatch: Dispatch) => {
        try {
            const response = await fetch() 
            dispatch(receiveProduct(response))
        } catch (e) {
            throw new Error(e)
        }
    }

```

redux-observable eips:

```
    const searchProducts: Epic<Action> = action$ => action$.pipe(
        ofType(GET_ALL_PRODUCTS),
        mergeMap(action => {
            return getProducts().pipe(
                map((response: any) => receiveProduct(response))
            )
        })
    )

```





