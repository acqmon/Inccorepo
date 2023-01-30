const express = require("express");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const session = require("express-session");
const bodyparser = require("body-parser");

//admin
const registeradmin = require("./admin/admin");
const adminid = require("./admin/adminid");
const adminidinputfield = require("./admin/adminidinputfield");
const adminpassword = require("./admin/adminpassword");
const loginadmin = require("./loginapi/loginadmin");
//admin user recharge system
const userrechargesystem = require("./rechargesystemuser/userrechargesystem");
const userrechargelist = require("./rechargesystemuser/rechargeplanslist");
const selectupdateuserplan = require("./rechargesystemuser/selectupdateuserplan");
const updateuserplan = require("./rechargesystemuser/updateuserplan");
const deleteuserplan = require("./rechargesystemuser/deleteuserplan");
//admin store recharge system
const storerechargesystem = require("./rechargesystemstore/storerechargesystem");
const storerechargelist = require("./rechargesystemstore/rechargeplansliststore");
const selectupdatestoreplan = require("./rechargesystemstore/selectupdatestoreplan");
const updatestoreplan = require("./rechargesystemstore/updatestoreplan");
const deletestoreplan = require("./rechargesystemstore/deletestoreplan");
//admin store sales recharge system
const storesalesrechargesystem = require("./salesrechargesystemstore/storerechargesalessystem");
const storesalesrechargelist = require("./salesrechargesystemstore/salesrechargeplansliststore");
const selectupdatestoresalesplan = require("./salesrechargesystemstore/selectupdatestoresalesplan");
const updatestoresalesplan = require("./salesrechargesystemstore/updatestoresalesplan");
const deletestoresalesplan = require("./salesrechargesystemstore/deletestoresalesplan");
//admin marketer sales recharge system
const marketersalesrechargesystem = require("./salesrechargesystemmarketer/marketerrechargesalessystem");
const marketersalesrechargelist = require("./salesrechargesystemmarketer/salesrechargeplanslistmarketer");
const selectupdatemarketersalesplan = require("./salesrechargesystemmarketer/selectupdatemarketersalesplan");
const updatemarketersalesplan = require("./salesrechargesystemmarketer/updatemarketersalesplan");
const deletemarketersalesplan = require("./salesrechargesystemmarketer/deletemarketersalesplan");
//admin promotion
const addpromotionrechargesystem = require("./promotionrechargesystem/addpromotionrechargesystem");
const updatepromotionrechargesystem = require("./promotionrechargesystem/updatepromotionrechargesystem");
const selectpromotionplan = require("./promotionrechargesystem/selectpromotionplan");
const deletepromotionplan = require("./promotionrechargesystem/deletepromotionplan");
//admin salespromotion
const addsalesrechargesystem = require('./salespromotionrechargesystem/addsalesrechargesystem');
const updatesalesrechargesystem = require('./salespromotionrechargesystem/updatesalesrechargesystem');
const selectsalesrechargeplan = require('./salespromotionrechargesystem/selectsalesrechargeplan');
const deletesalesplan = require('./salespromotionrechargesystem/deletesalesplan');
//admin manager promotion
const renderpromotionplans = require('./managercomponentapi/renderpromotionplans');
const selectpromotionplanmanager = require('./managercomponentapi/selectpromotionplanmanager');
const addpromotionrechargehistory = require('./managercomponentapi/addpromotionrechargehistory');
const addpromotiontocalculate = require('./managercomponentapi/addpromotiontocalculate');
//admin manager salespromotion
const rendersalespromotionplans = require('./managercomponentapi/rendersalespromotionplans');
const selectsalespromotionplanmanager = require('./managercomponentapi/selectsalespromotionplanmanager');
const addsalespromotionrechargehistory = require('./managercomponentapi/addsalespromotionrechargehistory');
const addsalespromotiontocalculate = require('./managercomponentapi/addsalespromotiontocalculate');
//admin manager promotion order
const getpromotionorderdata = require('./managercomponentapi/getpromotionorderdata');
const promotionordercalculate = require('./managercomponentapi/promotionordercalculate');
const promotionorderhistory = require('./managercomponentapi/promotionorderhistory');
const renderpromotionandsalehistory = require('./managercomponentapi/renderpromotionandsalehistory');
const rederpromotionandsalehistorymanager = require('./managercomponentapi/rederpromotionandsalehistorymanager');
//admin manager sales order
const getsalesorderdata = require('./managercomponentapi/getsalesorderdata');
const salesordercalculate = require('./managercomponentapi/salesordercalculate');
const salesorderhistory = require('./managercomponentapi/salesorderhistory');
//admin product
const addproduct = require('./adminproductapi/addproduct');
const updateproduct = require('./adminproductapi/updateproduct');
//admin supply
const addsupplydiscount = require('./adminsupply/addsupplydiscount');
const selectsupplyplan = require('./adminsupply/selectsupplyplan');
//admin manager product component
const getproductlist = require('./managercomponentapi/getproductlist');
const selecttocart = require('./managercomponentapi/selecttocart');
const addtocart = require('./managercomponentapi/addtocart');
const getitemsfromcart = require("./managercomponentapi/getitemsfromcart");
const editquantitycart = require("./managercomponentapi/editquantitycart");
const updateexptaproductquntityinproductlist = require("./managercomponentapi/updateexptaproductquntityinproductlist")
const updatequantitycart = require("./managercomponentapi/updatequantitycart");
const deletecartitem = require("./managercomponentapi/deletecartitem");
const clearcart = require("./managercomponentapi/clearcart");
const migratecarttoorderitems = require("./managercomponentapi/migratecarttoorderitems");
const orders = require("./managercomponentapi/orders");
const ordersid = require("./managercomponentapi/ordersid");
const orderhistory = require("./managercomponentapi/orderhistory");
const vieworder = require("./managercomponentapi/vieworder");
const getbilldate = require("./managercomponentapi/getbilldate");
const getstoreidbill = require("./managercomponentapi/getstoreidbill");
const getstoreaddbill = require("./managercomponentapi/getstoreaddbill");
//admin manager supply
const camparesupply = require("./managercomponentapi/camparesupply");
const addsupplyhistory = require("./managercomponentapi/addsupplyhistory");
const getstorediscounttotal = require("./managercomponentapi/getstorediscounttotal");
const deductfromdiscounttable = require("./managercomponentapi/deductfromdiscounttable");
const supplyhistorymanager = require("./managercomponentapi/supplyhistorymanager");
//admin info
const admintotalusers = require("./admintotalapi/admintotalusers")
const admintotalstores = require("./admintotalapi/admintotalstores")
const admintotalmarketers = require("./admintotalapi/admintotalmarketers")
const admintotalpromotion = require("./admintotalapi/admintotalpromotion")
const admintotalsalespromotion = require("./admintotalapi/admintotalsalespromotion")
const admintotalstorecashreceivable = require("./admintotalapi/admintotalstorecashreceivable")
const admintotalstorecashpayable = require("./admintotalapi/admintotalstorecashpayable")
const admintotalmanagercashrecievable = require("./admintotalapi/admintotalmanagercashrecievable")
//admin manager cash
const getcashbalance = require("./managercomponentapi/getcashbalance")
const cashcalculatemanager = require("./managercomponentapi/cashcalculatemanager")
const cashhistorymanager = require("./managercomponentapi/cashhistorymanager")
const addpromotionandsalespromotioncashtocashcalculatemanager = require("./managercomponentapi/addpromotionandsalespromotioncashtocashcalculatemanager")
//admin cash collection
const getmanagercashdata = require("./adminmanagercash/getmanagercashdata")
//admin details
const getstorecashdetailsdata = require("./admindetails/getstorecashdetailsdata")
const getpromotiondetails = require("./admindetails/getpromotiondetails")
const getsupplydetails = require("./admindetails/getsupplydetails")
//admin store qr code print
const getstoreqrlist = require("./adminprintqr/getstoreqrlist")
const getstoreqrdetails = require("./adminprintqr/getstoreqrdetails")

//user
const registeruser = require("./userapi/user");
const userid = require("./userapi/userid");
const useridinputfield = require("./userapi/useridinputfield");
const userpassword = require("./userapi/userpassword");
const loginuser = require("./loginapi/loginuser");
//user component
const qrcode = require("./usercomponentapi/qrcode");
const getuserdata = require("./usercomponentapi/getuserdata");
const getuserhistoryfromcalculate = require("./usercomponentapi/getuserhistoryfromcalculate");
const getstorehistoryfromcalculate = require("./usercomponentapi/getstorehistoryfromcalculate");
const updatecalculatepurchasebalance = require("./usercomponentapi/updatecalculatepurchasebalance");
const updatecalculatesellingbalance = require("./usercomponentapi/updatecalculatesellingbalance");
const updatecalculatepurchasebalanceone = require("./usercomponentapi/updatecalculatepurchasebalanceone");
const updatecalculatesellingbalanceone = require("./usercomponentapi/updatecalculatesellingbalanceone");
const updatecalculateduserpurchaseamount = require("./usercomponentapi/updatecalculateduserpurchaseamount");
const updatecalculateduserpurchaseamountone = require("./usercomponentapi/updatecalculateduserpurchaseamountone");
const discountcalculate = require("./usercomponentapi/discountcalculate");
const discountcalculateone = require("./usercomponentapi/discountcalculateone");
const addstorediscounttodiscounttable = require("./usercomponentapi/addstorediscounttodiscounttable");
const addstorediscounttodiscounttableone = require("./usercomponentapi/addstorediscounttodiscounttableone");
const getuserpurchasehistory = require("./usercomponentapi/getuserpurchasehistory");
const getuserrechargehistory = require("./usercomponentapi/getuserrechargehistory");
const getuserpurchasebalancetotal = require("./usercomponentapi/getuserpurchasebalancetotal");
const getuserdiscountamount = require("./usercomponentapi/getuserdiscountamount");

//store
const registerstore = require("./storeapi/store");
const storeid = require("./storeapi/storeid");
const storeidinputfield = require("./storeapi/storeidinputfieled");
const storepassword = require("./storeapi/storepassword");
const loginstore = require("./loginapi/loginstore");
//store create discounttable row
const insertstoreidinpurchasediscountstore = require("./storecomponentapi/insertstoreidinpurchasediscountstore");
//store components
const renderpurchaseplansuser = require("./storecomponentapi/renderpurchaseplansuser");
const renderpurchaseplansstore = require("./storecomponentapi/renderpurchaseplansstore");
const rendersalesplansstore = require("./storecomponentapi/rendersalesplansstore");
const rendersalesplansmarketer = require("./storecomponentapi/rendersalesplansmarketer");
//store component select recharge plan
const selectmarketersalesrecharge = require("./storecomponentapi/selectplanmarketersalesrecharge");
const selectstoresalesrecharge = require("./storecomponentapi/selectplanstoresalesrecharge");
const selectstorepurchaserecharge = require("./storecomponentapi/selectplanstorepurchaserecharge");
const selectuserpurchaserecharge = require("./storecomponentapi/selectplanuserpurchaserecharge");
const totalrechargeamount = require("./storecomponentapi/totalrechargeamount");
//store component recharge button
const buttonuserpurchaserecharge = require("./storecomponentapi/buttonuserpurchaserecharge");
const buttonstorepurchaserecharge = require("./storecomponentapi/buttonstorepurchaserecharge");
const buttonstoresalesrecharge = require("./storecomponentapi/buttonstoresalesrecharge");
const buttonmarketersalesrecharge = require("./storecomponentapi/buttonmarketersalesrecharge");
//store recharge history
const rechargehistory = require("./storecomponentapi/rechargehistory");
const adduserpurchaserechargehistory = require("./storecomponentapi/adduserpurchaserechargehistory");
const addstorepurchaserechargehistory = require("./storecomponentapi/addstorepurchaserechargehistory");
const addstoresalesrechargehistory = require("./storecomponentapi/addstoresalesrechargehistory");
const addmarketersalesrechargehistory = require("./storecomponentapi/addmarketersalesrechargehistory");
//store calculate
const adduserpurchasetocalculate = require("./storecomponentapi/adduserpurchasetocalculate");
const addstoresalestocalculate = require("./storecomponentapi/addstoresalestocalculate");
const addstorepurchasetocalculate = require("./storecomponentapi/addstorepurchasetocalculate");
const addmarketersalestocalculate = require("./storecomponentapi/addmarketersalestocalculate");
//store total discount
const userdiscounttotal = require("./storecomponentapi/userdiscounttotal");
//store purchase history
const getstorepurchasehistory = require("./storecomponentapi/getstorepurchasehistory");
//store sales history
const getstoresaleshistory = require("./storecomponentapi/getstoresaleshistory")
//store total info
const getpurchasebalancestore = require("./storecomponentapi/getpurchasebalancestore")
const getsellingbalancestore = require("./storecomponentapi/getsellingbalancestore")
const getdiscountpercentagestore = require("./storecomponentapi/getdiscountpercentagestore")

//marketer
const registermarketer = require("./marketerapi/marketer");
const marketerid = require("./marketerapi/marketerid");
const marketeridinputfield = require("./marketerapi/marketeridinputfield");
const marketerpassword = require("./marketerapi/marketerpassword");
const loginmarketer = require("./loginapi/loginmarketer");
//marketer component
const getmarketerhistoryfromcalculate = require("./marketercomponentapi/getmarketerhistoryfromcalculate");
const getstoreshistoryfromcalculate = require("./marketercomponentapi/getstoreshistoryfromcalculate");
const updatecalculatepurchasebalancemarketer = require("./marketercomponentapi/updatecalculatepurchasebalancemarketer");
const updatecalculatesellingbalancemarketer = require("./marketercomponentapi/updatecalculatesellingbalancemarketer");
const discountcalculatemarketer = require("./marketercomponentapi/discountcalculatemarketer");
const updatecalculatedstoresalesamountmarketer = require("./marketercomponentapi/updatecalculatedstoresalesamountmarketer");
const updatecalculatepurchasebalanceonemarketer = require("./marketercomponentapi/updatecalculatepurchasebalanceonemarketer");
const updatecalculatedstoresalesamountonemarketer = require("./marketercomponentapi/updatecalculatedstoresalesamountonemarketer");
const updatecalculatesellingbalanceonemarketer = require("./marketercomponentapi/updatecalculatesellingbalanceonemarketer");
const discountcalculateonemarketer = require("./marketercomponentapi/discountcalculateonemarketer");
const adddiscounttodiscounttable = require("./marketercomponentapi/adddiscounttodiscounttable");
const adddiscounttodiscounttableone = require("./marketercomponentapi/adddiscounttodiscounttableone");
const getsaleshistorymarketer = require("./marketercomponentapi/getsaleshistorymarketer");
const getrechargehistorymarketer = require("./marketercomponentapi/getrechargehistorymarketer");
const getsellingbalancemarketer = require("./marketercomponentapi/getsellingbalancemarketer");
const getsalesdiscountmarketer = require("./marketercomponentapi/getsalesdiscountmarketer");
const getpromotionbalance = require("./marketercomponentapi/getpromotionbalance");
const getsalespromotionbalance = require("./marketercomponentapi/getsalespromotionbalance");

//logout
const logout = require("./logoutapi/logout")

const app = express();
app.use(express.json());
app.use(cookieparser());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}));
app.use(session({
    key: "userid",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
}));

//admin
app.use("/registeradmin", registeradmin);
app.use("/adminid", adminid);
app.use("/adminidinputfield", adminidinputfield);
app.use("/adminpassword", adminpassword);
app.use("/loginadmin", loginadmin);
//admin user recharge plans
app.use("/userrechargesystem", userrechargesystem);
app.use("/userrechargelist", userrechargelist);
app.use("/selectupdateuserplan", selectupdateuserplan);
app.use("/updateuserplan", updateuserplan);
app.use("/deleteuserplan", deleteuserplan);
//admin store recharge plans
app.use("/storerechargesystem", storerechargesystem);
app.use("/storerechargelist", storerechargelist);
app.use("/selectupdatestoreplan", selectupdatestoreplan);
app.use("/updatestoreplan", updatestoreplan);
app.use("/deletestoreplan", deletestoreplan);
//admin store sales recharge plans
app.use("/storesalesrechargesystem", storesalesrechargesystem);
app.use("/storesalesrechargelist", storesalesrechargelist);
app.use("/selectupdatestoresalesplan", selectupdatestoresalesplan);
app.use("/updatestoresalesplan", updatestoresalesplan);
app.use("/deletestoresalesplan", deletestoresalesplan);
//admin marketer sales recharge plans
app.use("/marketersalesrechargesystem", marketersalesrechargesystem);
app.use("/marketersalesrechargelist", marketersalesrechargelist);
app.use("/selectupdatemarketersalesplan", selectupdatemarketersalesplan);
app.use("/updatemarketersalesplan", updatemarketersalesplan);
app.use("/deletemarketersalesplan", deletemarketersalesplan);
//admin promotion
app.use('/addpromotionrechargesystem', addpromotionrechargesystem);
app.use('/updatepromotionrechargesystem', updatepromotionrechargesystem);
app.use('/selectpromotionplan', selectpromotionplan);
app.use('/deletepromotionplan', deletepromotionplan);
//admin salespromotion
app.use('/addsalesrechargesystem', addsalesrechargesystem);
app.use("/updatesalesrechargesystem", updatesalesrechargesystem);
app.use("/selectsalesrechargeplan", selectsalesrechargeplan);
app.use("/deletesalesplan", deletesalesplan);
//admin manager promotion
app.use("/renderpromotionplans", renderpromotionplans);
app.use("/selectpromotionplanmanager", selectpromotionplanmanager);
app.use("/addpromotionrechargehistory", addpromotionrechargehistory);
app.use("/addpromotiontocalculate", addpromotiontocalculate);
//admin manager salespromotion
app.use('/rendersalespromotionplans', rendersalespromotionplans);
app.use('/selectsalespromotionplanmanager', selectsalespromotionplanmanager);
app.use('/addsalespromotionrechargehistory', addsalespromotionrechargehistory);
app.use('/addsalespromotiontocalculate', addsalespromotiontocalculate);
//admin manager promotion order
app.use("/getpromotionorderdata", getpromotionorderdata);
app.use("/promotionordercalculate", promotionordercalculate);
app.use("/promotionorderhistory", promotionorderhistory);
app.use("/renderpromotionandsalehistory", renderpromotionandsalehistory);
app.use("/rederpromotionandsalehistorymanager", rederpromotionandsalehistorymanager);
//admin manager sales order
app.use("/getsalesorderdata", getsalesorderdata);
app.use("/salesordercalculate", salesordercalculate);
app.use("/salesorderhistory", salesorderhistory);
//admin product
app.use('/addproduct', addproduct);
app.use('/updateproduct', updateproduct);
//admin supply
app.use("/addsupplydiscount", addsupplydiscount);
app.use("/selectsupplyplan", selectsupplyplan);
//admin manager product component
app.use("/getproductlist", getproductlist);
app.use("/selecttocart", selecttocart);
app.use("/addtocart", addtocart);
app.use("/getitemsfromcart", getitemsfromcart);
app.use("/editquantitycart", editquantitycart);
app.use("/updateexptaproductquntityinproductlist", updateexptaproductquntityinproductlist);
app.use("/updatequantitycart", updatequantitycart);
app.use("/deletecartitem", deletecartitem);
app.use("/clearcart", clearcart);
app.use("/migratecarttoorderitems", migratecarttoorderitems);
app.use("/orders", orders);
app.use("/ordersid", ordersid);
app.use("/orderhistory", orderhistory);
app.use("/vieworder", vieworder);
app.use("/getbilldate", getbilldate)
app.use("/getstoreidbill", getstoreidbill)
app.use("/getstoreaddbill", getstoreaddbill)
//admin manager supply
app.use("/camparesupply", camparesupply);
app.use("/addsupplyhistory", addsupplyhistory);
app.use("/getstorediscounttotal", getstorediscounttotal);
app.use("/deductfromdiscounttable", deductfromdiscounttable);
app.use("/supplyhistorymanager", supplyhistorymanager);
//admin info
app.use("/admintotalusers", admintotalusers);
app.use("/admintotalstores", admintotalstores);
app.use("/admintotalmarketers", admintotalmarketers);
app.use("/admintotalpromotion", admintotalpromotion);
app.use("/admintotalsalespromotion", admintotalsalespromotion);
app.use("/admintotalstorecashreceivable", admintotalstorecashreceivable);
app.use("/admintotalstorecashpayable", admintotalstorecashpayable);
app.use("/admintotalmanagercashrecievable", admintotalmanagercashrecievable);
//admin manager cash
app.use("/getcashbalance", getcashbalance)
app.use("/cashcalculatemanager", cashcalculatemanager)
app.use("/cashhistorymanager", cashhistorymanager)
app.use("/addpromotionandsalespromotioncashtocashcalculatemanager", addpromotionandsalespromotioncashtocashcalculatemanager)
//admin cash collection
app.use('/getmanagercashdata', getmanagercashdata)
//admin details
app.use("/getstorecashdetailsdata", getstorecashdetailsdata)
app.use("/getpromotiondetails", getpromotiondetails)
app.use("/getsupplydetails", getsupplydetails)
//admin store print qr
app.use("/getstoreqrlist", getstoreqrlist)
app.use("/getstoreqrdetails", getstoreqrdetails)


//user
app.use("/registeruser", registeruser);
app.use("/userid", userid);
app.use("/useridinputfield", useridinputfield);
app.use("/userpassword", userpassword);
app.use("/loginuser", loginuser);
//user component
app.use("/qrcode", qrcode);
app.use("/getuserdata", getuserdata);
app.use("/getuserhistoryfromcalculate", getuserhistoryfromcalculate);
app.use("/getstorehistoryfromcalculate", getstorehistoryfromcalculate);
app.use("/updatecalculatepurchasebalance", updatecalculatepurchasebalance);
app.use("/updatecalculatesellingbalance", updatecalculatesellingbalance);
app.use("/updatecalculatepurchasebalanceone", updatecalculatepurchasebalanceone);
app.use("/updatecalculatesellingbalanceone", updatecalculatesellingbalanceone);
app.use("/updatecalculateduserpurchaseamount", updatecalculateduserpurchaseamount);
app.use("/updatecalculateduserpurchaseamountone", updatecalculateduserpurchaseamountone);
app.use("/discountcalculate", discountcalculate);
app.use("/discountcalculateone", discountcalculateone);
app.use("/addstorediscounttodiscounttable", addstorediscounttodiscounttable);
app.use("/addstorediscounttodiscounttableone", addstorediscounttodiscounttableone);
app.use("/getuserpurchasehistory", getuserpurchasehistory);
app.use("/getuserrechargehistory", getuserrechargehistory);
app.use("/getuserpurchasebalancetotal", getuserpurchasebalancetotal);
app.use("/getuserdiscountamount", getuserdiscountamount);


//store
app.use("/registerstore", registerstore);
app.use("/storeid", storeid);
app.use("/storeidinputfield", storeidinputfield);
app.use("/storepassword", storepassword);
app.use("/loginstore", loginstore);
//store create discounttable  
app.use("/insertstoreidinpurchasediscountstore", insertstoreidinpurchasediscountstore);
// store component
app.use("/renderpurchaseplansuser", renderpurchaseplansuser);
app.use("/renderpurchaseplansstore", renderpurchaseplansstore);
app.use("/rendersalesplansstore", rendersalesplansstore);
app.use("/rendersalesplansmarketer", rendersalesplansmarketer);
//store component select recharge
app.use("/selectmarketersalesrecharge", selectmarketersalesrecharge);
app.use("/selectstoresalesrecharge", selectstoresalesrecharge);
app.use("/selectstorepurchaserecharge", selectstorepurchaserecharge);
app.use("/selectuserpurchaserecharge", selectuserpurchaserecharge);
app.use("/totalrechargeamount", totalrechargeamount);
//store component recharge button
app.use("/buttonuserpurchaserecharge", buttonuserpurchaserecharge);
app.use("/buttonstorepurchaserecharge", buttonstorepurchaserecharge);
app.use("/buttonstoresalesrecharge", buttonstoresalesrecharge);
app.use("/buttonmarketersalesrecharge", buttonmarketersalesrecharge);
//store recharge history
app.use("/rechargehistory", rechargehistory);
app.use("/adduserpurchaserechargehistory", adduserpurchaserechargehistory);
app.use("/addstorepurchaserechargehistory", addstorepurchaserechargehistory);
app.use("/addstoresalesrechargehistory", addstoresalesrechargehistory);
app.use("/addmarketersalesrechargehistory", addmarketersalesrechargehistory);
//store calculate
app.use("/adduserpurchasetocalculate", adduserpurchasetocalculate);
app.use("/addstoresalestocalculate", addstoresalestocalculate);
app.use("/addstorepurchasetocalculate", addstorepurchasetocalculate);
app.use("/addmarketersalestocalculate", addmarketersalestocalculate);
//store total discount
app.use("/userdiscounttotal", userdiscounttotal);
//store purchase history
app.use("/getstorepurchasehistory", getstorepurchasehistory);
//store sales hisory
app.use("/getstoresaleshistory", getstoresaleshistory)
//store total info
app.use("/getpurchasebalancestore", getpurchasebalancestore)
app.use("/getsellingbalancestore", getsellingbalancestore)
app.use("/getdiscountpercentagestore", getdiscountpercentagestore)


//marketer
app.use("/registermarketer", registermarketer);
app.use("/marketerid", marketerid);
app.use("/marketeridinputfield", marketeridinputfield);
app.use("/marketerpassword", marketerpassword);
app.use("/loginmarketer", loginmarketer);
//marketer component
app.use("/getmarketerhistoryfromcalculate", getmarketerhistoryfromcalculate);
app.use("/getstoreshistoryfromcalculate", getstoreshistoryfromcalculate);
app.use("/updatecalculatepurchasebalancemarketer", updatecalculatepurchasebalancemarketer);
app.use("/updatecalculatesellingbalancemarketer", updatecalculatesellingbalancemarketer);
app.use("/discountcalculatemarketer", discountcalculatemarketer);
app.use("/updatecalculatedstoresalesamountmarketer", updatecalculatedstoresalesamountmarketer);
app.use("/updatecalculatepurchasebalanceonemarketer", updatecalculatepurchasebalanceonemarketer);
app.use("/updatecalculatedstoresalesamountonemarketer", updatecalculatedstoresalesamountonemarketer);
app.use("/updatecalculatesellingbalanceonemarketer", updatecalculatesellingbalanceonemarketer);
app.use("/discountcalculateonemarketer", discountcalculateonemarketer);
app.use("/adddiscounttodiscounttable", adddiscounttodiscounttable);
app.use("/adddiscounttodiscounttableone", adddiscounttodiscounttableone);
app.use("/getsaleshistorymarketer", getsaleshistorymarketer);
app.use("/getrechargehistorymarketer", getrechargehistorymarketer);
app.use("/getsellingbalancemarketer", getsellingbalancemarketer);
app.use("/getsalesdiscountmarketer", getsalesdiscountmarketer);
app.use("/getpromotionbalance", getpromotionbalance);
app.use("/getsalespromotionbalance", getsalespromotionbalance);


//logout
app.use("/logout", logout)

app.listen(5000, () => {
    console.log("server is on port: 5000");
})

