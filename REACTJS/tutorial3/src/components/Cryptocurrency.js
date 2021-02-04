/*

apikey: 46cb6a30-7b16-428c-833a-0f1a4642c3dc


*/

import React, { Component } from 'react'
import fetch from 'node-fetch'
import { Button } from 'reactstrap'
import '../currency.css'
export default class Cryptocurrency extends Component {
    state = {
        currencies: [],
        url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        qString: '?CMC_PRO_API_KEY=46cb6a30-7b16-428c-833a-0f1a4642c3dc&sort=market_cap&start=1&limit=10&cryptocurrency_type=tokens&convert=USD'

    }

    componentDidMount() {

        // fetch(this.state.url + this.state.qString,{mode:'cors',timeout:1000})
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        this.fetchData()
    }


    


    fetchData = ()=> {
        fetch(this.state.url + this.state.qString)
        .then( res => res.json() )
        .then( res => {
           console.log(res)
        } )
        .catch( err => {
           console.log(err);
        })
        .finally( () => {
           setTimeout( this.fetchData, 1000 );
        })
    }


    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <legend>CryptoCurrency Prices Live monitor</legend>


                        <Button>Test</Button>


                    </fieldset>
                </form>

            </div>
        )
    }
}
