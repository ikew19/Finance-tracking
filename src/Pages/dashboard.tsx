import { useState } from "react"
import { Link } from "react-router-dom"

function toCurrency(amount: number) {
    const cad = Intl.NumberFormat('en-IN', {
        style: "currency", 
        currency: 'USD'
    })
    return cad.format(amount)
}


function renderFlux(amountIn: number, amountOut:number) {
    const total = Math.max(amountIn, amountOut)
    return (
        <div className="card card-body bg-white m-5">
            <section className="flex flex-col justify-between mb-3 sm:flex-row">
                <div className="text-left">
                    <p className="card-title">Flux de mai</p>
                    <div className="sm:hidden divider divider-vertical"></div>
                    <span>Vos entrées dépassent vos sorties : la différence,<br/>c'est ce que vous avez mis de côté.</span>
                </div>
                <div className="stat w-50">
                    <p className="pb-2 border-b-2 stat-value">{toCurrency(amountIn - amountOut)}</p>
                    <span>épargné ce mois-ci</span>
                </div>
            </section>

            <section>
                <div className="grid grid-cols-[50px_1fr_100px] gap-5 mb-3 h-8">
                    <p>Entrées</p>
                    <progress className="progress progress-success h-7" value={amountIn} max={total}></progress>
                    <p className="text-base text-left font-bold">{toCurrency(amountIn)}</p>
                </div>
                <div className="grid grid-cols-[50px_1fr_100px] gap-5 h-8">
                    <p>Sorties</p>
                    <progress className="progress progress-error h-7" value={amountOut} max={total}></progress>
                    <p className="text-base font-bold text-left">{toCurrency(amountOut)}</p>
                </div>
            </section>
        </div>
    )
}

type expense = {
    type: string,
    price: number
}
type monthSaving = {
    month: string,
    saving: number
}

type transaction = {
    nom: string,
    categorie: string,
    compte: string,
    amount: number
}

function renderExpense(expense: Array<expense>) {
    return (
        expense.map(el => {
            return (
                <div className="grid grid-cols-1">
                    <div className="grid grid-cols-[1fr_auto] gap-2">
                        <p className="text-left">{el.type}</p>
                        <p>{toCurrency(el.price)}</p>
                    </div>
                    <progress className="progress progress-success bg-gray-100 h-4" value={el.price} max={3260}></progress>
                </div>
            )
        })
    )
}

function renderMonthSaving(saving: Array<monthSaving>) {
    const m = Math.max(...saving.map(el => el.saving))
    return (
        saving.map(el => {
            const h = 100 - (el.saving*100)/m
            return (
                <div className="h-[100%] w-1/8 text-center">
                    <p className="text-[0.5rem]">{toCurrency(el.saving)}</p>
                    <div className="h-[80%] bg-green-100">
                        <div style={{height: `${h}%`}} className="bg-gray-100"></div>
                    </div>
                    <p>{el.month}</p>
                </div>
            )
        })
    )
}

function renderTransactions(transactions: Array<transaction>) {
    return (
        transactions.map(el => {
            return (
                <div className="border-b-[0.5px] border-gray-200 pb-3">
                    <div className="flex items-center">
                        <p className="font-bold">{el.nom}</p>
                        <p className={`text-right text-sm font-bold ${el.amount < 0?'text-red-500':''}`}>{toCurrency(el.amount)}</p>
                    </div>
                    <div className="text-xs flex flex-cols justify-between">
                        <span className="bg-green-100 w-fit h-fit rounded-2xl px-2">{el.categorie}</span>
                        <span>{el.compte}</span>
                    </div>
                    
                </div>
            )
        })
    )
}

function Dashboard() {
    const [user, setUser] = useState('John Doe')
    const [date, setDate] = useState(new Date().toDateString())
    const [amountIn, setAmountIn] = useState(1000)
    const [amountOut, setAmountOut] = useState(800)
    const [expense, setExpense] = useState([
        {type:'logement', price:1400},
        {type:'loisirs', price:690},
        {type:'épicerie', price:612},
        {type:'transport', price:240},
        {type:'restaurant', price:318}
    ])
    const [monthSaving, setMonthSaving] = useState([
        {month:'jan', saving:200},
        {month:'feb', saving:400},
        {month:'mar', saving:100},
        {month:'apr', saving:50},
        {month:'may', saving:80},
        {month:'jun', saving:0},
    ])
    const [transactions, setTransactions] = useState([
        {
            nom: "Loyer",
            categorie: "Logement",
            compte: "courant",
            amount: -1450.00
        },
        {
            nom: "Salaire",
            categorie: "Revenu",
            compte: "courant",
            amount: 2000.00
        },
        {
            nom: "Restaurant Le Local",
            categorie: "Restaurants",
            compte: "Visa",
            amount: -62.50
        },
        {
            nom: "Épicerie IGA",
            categorie: "Épicerie",
            compte: "Visa",
            amount: -84.32
        }
    ])

    return (
        <div className="bg-gray-100 min-h-screen m-0 pt-2">
            
            <div className="flex justify-between items-center m-3 flex-col sm:flex-row m-5">
                <div className="text-left flex-1">
                    <h2>Bonjour, { user }</h2>
                    <span>Voici où en sont vos finances </span>
                </div>
                <div className="flex items-center gap-4 bg-white rounded-3xl p-2 px-5">
                    <button className="rounded-3xl py-2 px-4 hover:bg-gray-200">&lt;</button>
                    <p>{date}</p>
                    <button className="rounded-3xl py-2 px-4 hover:bg-gray-200">&gt;</button>
                </div>
            </div>

            {renderFlux(amountIn, amountOut)}

            <div className="card card-body bg-white m-5">
                <ul className="list w-full md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr] md:text-center">
                    <li className="list-row text-left">
                        <span className="text-xs">Solde total</span>
                        <p className="list-col-wrap font-bold text-2xl">1000$</p>
                    </li>
                    <div className="divider divider-horizontal"></div>

                    <li className="list-row text-left">
                        <span className="text-xs">Entrée du mois</span>
                        <p className="list-col-wrap font-bold text-2xl">1000$</p>
                    </li>
                    <div className="divider divider-horizontal"></div>

                    <li className="list-row text-left">
                        <span className="text-xs">Sorties du mois</span>
                        <p className="list-col-wrap font-bold text-2xl">1000$</p>
                    </li>
                    <span></span>
                </ul>
            </div>

            <div className="grid grid-cols-1 gap-5 m-5 md:grid-cols-2">
                <section className="card bg-white p-5">
                    <p className="card-title">Dépenses par catégorie</p>
                    <div className="divider divider-vertical"></div>
                    <div className="card-body">
                        {renderExpense(expense)}
                    </div>
                </section>
                <section className="card bg-white p-5">
                    <p className="card-title">Épargne, 6 derniers mois</p>
                    <div className="divider divider-vertical"></div>
                    <div className="card-body h-50 flex flex-row flex-wrap justify-center">
                        {renderMonthSaving(monthSaving)}
                    </div>
                </section>
            </div>
            <div className="card bg-white m-5 p-5">
                <div className="flex justify-between">
                    <p className="card-title">Transactions récentes</p>
                    <Link to='/' className="link">Tout voir</Link>
                </div>
                <div className="divider divider-vertical mb-0"></div>
                <div className="card-body list pb-0">
                    {renderTransactions(transactions)}
                </div>
            </div>
        </div>
    )
}

export default Dashboard