import React from 'react';
class MyTable extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
        message: "",
        items: [
            {
                Description:'',
                Quantity: '',
                UnitCost: '',
                Total: ''
            }
            
        ],
        sum: 0.00,
        cGST: 0.00,
        sGST: 0.00,
        totalSum: 0.00
        }
    }
    render(){
        return(<div className="tableWrapper">
            <table className ="tableClass">
                <caption >
                    <div>
                    <div className="textOnLeft largeFont inLineClass" style={{float:"left",paddingBottom:"10px"}}>Invoice Breakup</div><div className="noPrint textOnRight inLineClass" style={{verticalAlign:"middle",float:"right",paddingBottom:"10px"}}>
                            <button onClick={this.handleClick.bind(this)}>
                                Add Item
                            </button>
                             </div>
                    </div>
                    </caption>
            <thead>
                <tr>
                <th>S. No</th>
                <th>Description</th>
                <th>Quantity (KG)</th>
                <th>Unit Cost</th>
                <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {this.renderRows()}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="4" className="textOnRight">CGST @6% on {this.state.sum}(+)</td>
                    <td>{this.state.cGST}</td>
                </tr>
                <tr>
                    <td colSpan="4" className="textOnRight">SGST @6% on {this.state.sum}(+)</td>
                    <td>{this.state.sGST}</td>
                </tr>
                <tr>
                    <td colSpan="4" className="textOnRight">Grand Total:</td>
                    <td>{this.state.totalSum}</td>
                </tr>
                
            </tfoot>
            </table>
        </div>);
    }
    renderRows(){
        var context = this;
        context.state.sum = 0.00;
        return this.state.items.map(function(o,i){
            var total = o.UnitCost * o.Quantity;
            context.state.items[i].Total = total.toFixed(2);
            context.state.sum = parseFloat(context.state.items[i].Total) + parseFloat(isNaN(context.state.sum)?0.00:context.state.sum);
            context.state.cGST = context.getTax(6, context.state.sum);
            context.state.sGST = context.getTax(6, context.state.sum);
            var totalSum = context.state.sum + context.state.cGST + context.state.sGST;
            context.state.totalSum = parseFloat(totalSum.toFixed(2));
            return (
            <tr key={"row-"+i}>
                <td key={"cell-0-"+i}>
                {i+1}
                </td>
                <td key={"cell-1-"+i}>
                <input
                    type="text"
                    value={o.Description}
                    onChange={context.handleItemChanged.bind(context, i, "Description")}
                    />
                </td>
                <td key={"cell-2-"+i}>
                    <input
                    type="number"
                    value={o.Quantity}
                    onChange={context.handleItemChangedAndTotal.bind(context, i, "Quantity")}
                    />
                </td>
                <td key={"cell-3-"+i}>
                    <input
                    type="text"
                    value={o.UnitCost}
                    onChange={context.handleItemChangedAndTotal.bind(context, i, "UnitCost")}
                    />
                </td>
                <td key={"cell-4-"+i}>
                <div> {o.Total}<div className="noPrint inLineClass"><button onClick={context.handleRemoveRow.bind(context, i)}>Remove Row</button></div></div>
                </td>
            </tr>
        )
        });
    }
    handleItemChanged(i, key, event){
        var items = this.updateItems(i,event.target.value, key);

        this.setState({
            items: items,
        });
        
    }
    handleItemChangedAndTotal(i, key, event){
        var items = this.updateItems(i,event.target.value, key);
        var total = this.getTotal(items[i].UnitCost,items[i].Quantity);
        total = total!=null?total:0.00;
        items[i].Total = total;
        this.setState({
            items: items
        });
        
    }
    handleClick(){
        var items = this.state.items;
        var item = {
                Description:'',
                Quantity: '',
                UnitCost: '',
                Total: 0
            }
        items.push(item);
        this.setState({
            items: items,
            sum: this.state.sum,
            cGST: this.state.cGST,
            sGST: this.state.sGST,
            totalSum: this.state.totalSum
        });
    }
    handleRemoveRow(i){
        var items = this.state.items;

        items.splice(i, 1);
        this.setState({
            items: items,
            sum: this.state.sum,
            cGST: this.state.cGST,
            sGST: this.state.sGST,
            totalSum: this.state.totalSum
        });
    }
    updateItems(i, value, key){
        var items = this.state.items;
        items[i][key] = value;
        return items;
    }
    resetSums(){
        this.state.sum = 0.00;
        this.state.totalTax = 0.00;
    }
    getTax(percent, sum){
        var tax = sum*percent/100;
        tax = tax.toFixed(2);
        return parseFloat(tax);
    }
    getGrandTotal(){
        return (this.state.tax + this.state.sum);
    }
    getTotal(unitCost, Quantity){
        if(unitCost!='' && Quantity!=''){
            return parseFloat(unitCost)*Quantity;
        }
    }
}
function windowPrint(){
    window.print();
}
var upperDiv = (<div className="tableWrapper">
        <div className="noPrint"><button onClick={windowPrint}>
                print
            </button></div>
        <h1>Nature Fabric Enterprises</h1>
            <table className="tableClass">
                <caption className="xlargeFont"><strong>Tax Invoice</strong></caption>
                <thead>
                    <tr>
                        <th>
                            Invoice From
                        </th>
                        <th>
                            Invoice To
                        </th>
                        <th>
                            Customer Information
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <strong>Nature Fabric Enterprises</strong>
                            <p>
                                H.no 3-158,
                            </p>
                            <p>
                                Opp Goshala, Ponnari Road, 
                            </p>
                            <p>
                                Adilabad-500 401, 
                            </p>
                            <p>
                                State: Telangana.
                            </p>
                        </td>
                        <td>                           
                            <table>
                                <tbody>
                                    <tr>
                                        <td><strong><input placeholder="Company Name"/></strong></td>
                                    </tr>
                                    <tr>
                                        <td><textarea style={{"width":"100%","minHeight":"90px"}}>
                                        </textarea></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="mobileNum">Reg. Mobile:</label>
                            <input id="mobileNum"></input></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td rowSpan = "2">
                            <table>
                                <tbody>
                                    <tr>
                                        <th>Customer</th>
                                        <td><input type="text"/></td>
                                    </tr>
                                    <tr>
                                        <th>Order No.</th>
                                        <td><input type="text"/></td>
                                    </tr>
                                    <tr>
                                        <th>Invoice</th>
                                        <td><input type="text"/></td>
                                    </tr>
                                    <tr>
                                        <th>Billing Date:</th>
                                        <td><input type="date"/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>
                                            GSTIN:
                                        </th>
                                        <td>
                                            36CIVPS1288P3ZX
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        <td>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>
                                            GSTIN:
                                        </th>
                                        <td>
                                            <input type="text"/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        
                    </tr>
                </tbody>
            </table>
            </div>);
var termAndCond = (
    <div>
        <h3>Terms And Conditions
        </h3>
        <ol>
            <li>
                Cheques to be in favour of "Nature fabric enterprieses.
            </li>
            <li>
                For any change in service or service address etc..,please inform at the time of upcoming order.
            </li>
            <li>
                All the Amounts and Taxes shown are in Indian Rupees.
            </li>
        </ol>
    </div>
);
var OuterDiv = function(){
    return (<div className="outerDiv">
    {upperDiv}
    <MyTable/>
    {termAndCond}
    </div>
);
}
export default OuterDiv;