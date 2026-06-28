const Transactions = () => {
    return ( 
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <p>Transaction</p>
                <p>Amount</p>
            </div>
            <div className="flex flex-row items-center justify-between">
                <p>Sample Transaction</p>
                <p>$100.00</p>
            </div>
        </div>
     );
}
 
export default Transactions;