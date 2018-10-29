
import * as Cookie from 'js-cookie'
import  * as _ from 'lodash'

export const TOKEN_NAME = 'Sass/Token'

class TokenService<T extends string > {

    private readonly tokenName: T

    constructor(tokenName: T) {
        this.tokenName = tokenName
    }

    public set(v: T): void {
        if (!_.isString(v)) {
            return console.warn(`Token accept string key. but params is ${typeof v}`)
        }
        Cookie.set(this.tokenName, v)
    }

    public get(): T | any {
        const result = Cookie.get(this.tokenName)

        return result || 'go to login'
    }

    public clear(): void {
        return Cookie.remove(this.tokenName)
    } 
}

export default new TokenService<string>(TOKEN_NAME)