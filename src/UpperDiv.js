import React from "react";
import StateDropDown from "./stateDropDown";
class UpperDiv extends React.Component{
    constructor(props){
        super(props);
        this.windowPrint = props.windowPrint;
        this.stateChangeHandler = props.stateChangeHandler;
    }
    render(){
        
        return (<div className="tableWrapper">
        <div className="noPrint"><button onClick={this.windowPrint}>
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
                                        <td><StateDropDown onChangeHandler={this.stateChangeHandler}/></td>
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
    }
}
export default UpperDiv;