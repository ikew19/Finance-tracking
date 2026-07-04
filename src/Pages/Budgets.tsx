import { useState } from "react"

function toCurrency(amount: number) {
    const cad = Intl.NumberFormat('en-IN', {
        style: "currency", 
        currency: 'USD'
    })
    return cad.format(amount)
}

function Budgets() {
    const user = 'John Doe'
    const date = new Date().toDateString()
    const budget = [
        {type:'logement', spent:1450, expected:1500},
        {type:'loisirs', spent:612, expected:600},
        {type:'épicerie', spent:319, expected:300},
        {type:'transport', spent:240, expected:250},
        {type:'restaurant', spent:690, expected:500}
    ]
    return (
        <div>
            <div className="flex justify-between items-center m-3 flex-col sm:flex-row m-5">
                <div className="text-left flex-1">
                    <h2>Bonjour, { user }</h2>
                    <span>Voici où en sont vos finances </span>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-3xl p-2 px-5">
                    <button className="rounded-3xl py-2 px-4 hover:bg-gray-200">&lt;</button>
                    <p>{date}</p>
                    <button className="rounded-3xl py-2 px-4 hover:bg-gray-200 hover:">&gt;</button>
                </div>
            </div>
            <div className="card card-body bg-white m-5">
                <div className="flex justify-between mb-2">
                    <p className="card-title">Budget du mois</p>
                    <span className="text-gray-400">DÉPENSÉ/PRÉVU</span>
                </div>
                <div className="list">
                    {budget.map(el => {
                        const exceed = el.spent > el.expected
                        return (
                            <div className="grid grid-rows-2 gap-1">
                                <div className="flex justify-between">
                                    <p className="text-base">{el.type}</p>
                                    <span className="text-xs font-medium text-gray-600">{toCurrency(el.spent)} / {toCurrency(el.expected)}</span>
                                    
                                </div>
                                <progress className={`progress ${exceed? 'progress-error':'progress-success'}`} value={el.spent} max={el.expected}/>
                                <span className={`text-xs text-right italic hidden text-red-600 ${exceed? 'inline-block':''}`}>dépassé</span>
                                <div className="divider my-0"></div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Budgets;