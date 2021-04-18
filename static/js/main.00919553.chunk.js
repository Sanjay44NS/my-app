(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(t,e,s){},13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var n=s(1),c=s.n(n),i=s(3),a=s.n(i),l=(s(12),s(13),s(4)),r=s(5),j=s(7),d=s(6),h=s(0),o=function(t){Object(j.a)(s,t);var e=Object(d.a)(s);function s(t){var n;return Object(l.a)(this,s),(n=e.call(this,t)).state={message:"",items:[{Description:"",Quantity:"",UnitCost:"",Total:""}],sum:0,cGST:0,sGST:0,totalSum:0},n}return Object(r.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"tableWrapper",children:Object(h.jsxs)("table",{className:"tableClass",children:[Object(h.jsx)("caption",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"textOnLeft largeFont inLineClass",style:{float:"left",paddingBottom:"10px"},children:"Invoice Breakup"}),Object(h.jsx)("div",{className:"noPrint textOnRight inLineClass",style:{verticalAlign:"middle",float:"right",paddingBottom:"10px"},children:Object(h.jsx)("button",{onClick:this.handleClick.bind(this),children:"Add Item"})})]})}),Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"S. No"}),Object(h.jsx)("th",{children:"Description"}),Object(h.jsx)("th",{children:"Quantity (KG)"}),Object(h.jsx)("th",{children:"Unit Cost"}),Object(h.jsx)("th",{children:"Total"})]})}),Object(h.jsx)("tbody",{children:this.renderRows()}),Object(h.jsxs)("tfoot",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{colSpan:"4",className:"textOnRight",children:["CGST @6% on ",this.state.sum,"(+)"]}),Object(h.jsx)("td",{children:this.state.cGST})]}),Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{colSpan:"4",className:"textOnRight",children:["SGST @6% on ",this.state.sum,"(+)"]}),Object(h.jsx)("td",{children:this.state.sGST})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{colSpan:"4",className:"textOnRight",children:"Grand Total:"}),Object(h.jsx)("td",{children:this.state.totalSum})]})]})]})})}},{key:"renderRows",value:function(){var t=this;return t.state.sum=0,this.state.items.map((function(e,s){var n=e.UnitCost*e.Quantity;t.state.items[s].Total=n.toFixed(2),t.state.sum=parseFloat(t.state.items[s].Total)+parseFloat(isNaN(t.state.sum)?0:t.state.sum),t.state.cGST=t.getTax(6,t.state.sum),t.state.sGST=t.getTax(6,t.state.sum);var c=t.state.sum+t.state.cGST+t.state.sGST;return t.state.totalSum=parseFloat(c.toFixed(2)),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:s+1},"cell-0-"+s),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",value:e.Description,onChange:t.handleItemChanged.bind(t,s,"Description")})},"cell-1-"+s),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"number",value:e.Quantity,onChange:t.handleItemChangedAndTotal.bind(t,s,"Quantity")})},"cell-2-"+s),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",value:e.UnitCost,onChange:t.handleItemChangedAndTotal.bind(t,s,"UnitCost")})},"cell-3-"+s),Object(h.jsx)("td",{children:Object(h.jsxs)("div",{children:[" ",e.Total,Object(h.jsx)("div",{className:"noPrint inLineClass",children:Object(h.jsx)("button",{onClick:t.handleRemoveRow.bind(t,s),children:"Remove Row"})})]})},"cell-4-"+s)]},"row-"+s)}))}},{key:"handleItemChanged",value:function(t,e,s){var n=this.updateItems(t,s.target.value,e);this.setState({items:n})}},{key:"handleItemChangedAndTotal",value:function(t,e,s){var n=this.updateItems(t,s.target.value,e),c=this.getTotal(n[t].UnitCost,n[t].Quantity);c=null!=c?c:0,n[t].Total=c,this.setState({items:n})}},{key:"handleClick",value:function(){var t=this.state.items;t.push({Description:"",Quantity:"",UnitCost:"",Total:0}),this.setState({items:t,sum:this.state.sum,cGST:this.state.cGST,sGST:this.state.sGST,totalSum:this.state.totalSum})}},{key:"handleRemoveRow",value:function(t){var e=this.state.items;e.splice(t,1),this.setState({items:e,sum:this.state.sum,cGST:this.state.cGST,sGST:this.state.sGST,totalSum:this.state.totalSum})}},{key:"updateItems",value:function(t,e,s){var n=this.state.items;return n[t][s]=e,n}},{key:"resetSums",value:function(){this.state.sum=0,this.state.totalTax=0}},{key:"getTax",value:function(t,e){var s=e*t/100;return s=s.toFixed(2),parseFloat(s)}},{key:"getGrandTotal",value:function(){return this.state.tax+this.state.sum}},{key:"getTotal",value:function(t,e){if(""!=t&&""!=e)return parseFloat(t)*e}}]),s}(c.a.Component);var b=Object(h.jsxs)("div",{className:"tableWrapper",children:[Object(h.jsx)("div",{className:"noPrint",children:Object(h.jsx)("button",{onClick:function(){window.print()},children:"print"})}),Object(h.jsx)("h1",{children:"Nature Fabric Enterprises"}),Object(h.jsxs)("table",{className:"tableClass",children:[Object(h.jsx)("caption",{className:"xlargeFont",children:Object(h.jsx)("strong",{children:"Tax Invoice"})}),Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Invoice From"}),Object(h.jsx)("th",{children:"Invoice To"}),Object(h.jsx)("th",{children:"Customer Information"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[Object(h.jsx)("strong",{children:"Nature Fabric Enterprises"}),Object(h.jsx)("p",{children:"H.no 3-158,"}),Object(h.jsx)("p",{children:"Opp Goshala, Ponnari Road,"}),Object(h.jsx)("p",{children:"Adilabad-500 401,"}),Object(h.jsx)("p",{children:"State: Telangana."})]}),Object(h.jsx)("td",{children:Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsx)("tr",{children:Object(h.jsx)("td",{children:Object(h.jsx)("strong",{children:Object(h.jsx)("input",{placeholder:"Company Name"})})})}),Object(h.jsx)("tr",{children:Object(h.jsx)("td",{children:Object(h.jsx)("textarea",{style:{width:"100%",minHeight:"90px"}})})}),Object(h.jsx)("tr",{children:Object(h.jsxs)("td",{children:[Object(h.jsx)("label",{htmlFor:"mobileNum",children:"Reg. Mobile:"}),Object(h.jsx)("input",{id:"mobileNum"})]})})]})})}),Object(h.jsx)("td",{rowSpan:"2",children:Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Customer"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Order No."}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Invoice"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text"})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Billing Date:"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"date"})})]})]})})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("table",{children:Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"GSTIN:"}),Object(h.jsx)("td",{children:"36CIVPS1288P3ZX"})]})})})}),Object(h.jsx)("td",{children:Object(h.jsx)("table",{children:Object(h.jsx)("tbody",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"GSTIN:"}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text"})})]})})})})]})]})]})]}),x=Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Terms And Conditions"}),Object(h.jsxs)("ol",{children:[Object(h.jsx)("li",{children:'Cheques to be in favour of "Nature fabric enterprieses.'}),Object(h.jsx)("li",{children:"For any change in service or service address etc..,please inform at the time of upcoming order."}),Object(h.jsx)("li",{children:"All the Amounts and Taxes shown are in Indian Rupees."})]})]}),O=function(){return Object(h.jsxs)("div",{className:"outerDiv",children:[b,Object(h.jsx)(o,{}),x]})};var u=function(){return Object(h.jsx)(O,{})},m=function(t){t&&t instanceof Function&&s.e(3).then(s.bind(null,16)).then((function(e){var s=e.getCLS,n=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;s(t),n(t),c(t),i(t),a(t)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.00919553.chunk.js.map