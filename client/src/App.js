import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Startapp from './pages/Startapp';
import SelectLoginType from './pages/SelectLoginType';
import Chooseuser from './pages/ChooseUser';
import Agencypage from "./pages/Agencypage";

//admin
import Registeradmin from "./adminregisterpage/Registeradmin";
import Idpasswordgenadmin from "./adminregisterpage/Idpasswordgenadmin";
import Loginadmin from "./loginadmin/Loginadmin";
import Homemanager from "./pages/Homemanager";
//admin user recharge system
import Userrechargesystem from "./admincomponentpages/Userrechargesystem";
import Updateuserrecharge from './admincomponentpages/Updateuserrecharge';
//admin store recharge system
import Storerechargesystem from "./admincomponentpages/Storerechargesystem";
import Updatestorerecharge from './admincomponentpages/Updatestorerecharge';
//admin store sales recharge system
import Marketersalesrechargesystem from "./admincomponentpages/Marketersalesrechargesystem";
import Updatemarketersalesrecharge from './admincomponentpages/Updatemarketersalesrecharge';
//admin marketer sales recharge system
import Storesalesrechargesystem from "./admincomponentpages/Storesalesrechargesystem";
import Updatestoresalesrecharge from './admincomponentpages/Updatestoresalesrecharge';
//admin promotion
import Promotionpage from './admincomponentpages/Promotionpage';
import Updatepromotionrecharge from './admincomponentpages/Updatepromotionrecharge';
//admin salespromotion
import Salesorderpage from './admincomponentpages/Salesorderpage';
import Updatesalespromotionrecharge from "./admincomponentpages/Updatesalespromotionrecharge";
//admin productlist
import Productlist from "./admincomponentpages/Productlist";
//admin supply discount
import Supplydiscount from './admincomponentpages/Supplydiscount';
import Updatesupply from './admincomponentpages/Updatesupply';
//admin details
import Managercashadmin from './admincomponentpages/Managercashadmin';
import Storecashdetailsadmin from './admincomponentpages/Storecashdetailsadmin';
import Promotiondetailsadmin from './admincomponentpages/Promotiondetailsadmin';
import Supplydetailsadmin from './admincomponentpages/Supplydetailsadmin';
//admin print store qr-code
import Printqr from './admincomponentpages/Printqr';
import Printqrstore from './admincomponentpages/Printqrstore';

//admin manager component
import Managerqrcode from './Managercomponentpages/Managerqrcode';
import Promotionandsalespage from './Managercomponentpages/Promotionandsalespage';
import Promotionrecharge from './Managercomponentpages/Promotionrecharge';
import Selectpromotionplan from './Managercomponentpages/Selectpromotionplan';
import Salesrecharge from './Managercomponentpages/Salesrecharge';
import Selectsalespromotionplans from './Managercomponentpages/Selectsalespromotionplans';
import Selectordertype from './Managercomponentpages/Selectordertype';
import Promotionorder from './Managercomponentpages/Promotionorder';
import Salesorder from './Managercomponentpages/Salesorder';
import Promotionandsalehistory from './Managercomponentpages/Promotionandsalehistory';
import Takeorders from "./Managercomponentpages/Takeorders";
import Cartpage from './Managercomponentpages/Cartpage';
import Mycart from './Managercomponentpages/Mycart';
import Editcartquantity from './Managercomponentpages/Editcartquantity';
import Ordercheckoutpage from './Managercomponentpages/Ordercheckoutpage';
import Orderhistory from './Managercomponentpages/Orderhistory';
import Vieworder from './Managercomponentpages/Vieworder';
import Supply from './Managercomponentpages/Supply';
import Supplyhistory from './Managercomponentpages/Supplyhistory';
import Storecashrecieved from './Managercomponentpages/Storecashrecieved';

//user
import Registeruser from './userregisterpage/Registeruser';
import Idpasswordgenuser from './userregisterpage/Idpasswordgenuser';
import Loginuser from "./loginuser/Loginuser";
import Homeuser from "./pages/Homeuser";
//user components
import Qrcode from "./usercomponentpages/Qrcode";
import Purchase from "./usercomponentpages/Purchase";
import Userhistory from "./usercomponentpages/Userhistory";
import Purchasehistory from "./usercomponentpages/Purchasehistory";
import Rechargehistoryuser from "./usercomponentpages/Rechargehistoryuser";

//store
import Registerstore from './storeregisterpage/Registerstore';
import Idpasswordgenstore from './storeregisterpage/Idpasswordgenstore';
import Loginstore from './loginstore/Loginstore';
import Homestore from "./pages/Homestore";
//store all recharge page
import Storeallrechargepage from './storecomponentpages/Storeallrechargepage'
//store components
import Userrecharge from './storecomponentpages/Userrecharge';
import Storerecharge from './storecomponentpages/Storerecharge';
import Storesalesrecharge from './storecomponentpages/Storesalesrecharge';
import Marketersalesrecharge from './storecomponentpages/Marketersalesrecharge';
//store My QRCode
import Myqrcode from "./storecomponentpages/Myqrcode";
//store recharge pages
import Selectmarketersalesrecharge from './storecomponentpages/Selectmarketersalesrecharge';
import Selectstoresalesrecharge from './storecomponentpages/Selectstoresalesrecharge';
import Selectstorepurchaserecharge from './storecomponentpages/Selectstorepurchaserecharge';
import Selectuserpurchaserecharge from './storecomponentpages/Selectuserpurchaserecharge';
//store history
import Storechoosehistory from "./storecomponentpages/Storechoosehistory";
//store recharge History
import Rechargehistory from './storecomponentpages/Rechargehistory';
//store Purchase History
import Purchasehistorystore from "./storecomponentpages/Purchasehistorystore";
//store sales history
import Saleshistorystore from "./storecomponentpages/Saleshistorystore"

//marketer
import Registermarketer from './marketerregisterpage/Registermarketer';
import Idpasswordgenmarketer from './marketerregisterpage/Idpasswordgenmarketer';
import Loginmarketer from "./loginmarketer/Loginmarketer";
import Homemarketer from "./pages/Homemarketer";
//marketer component
import Marketerqrcode from "./marketercomponentpages/Marketerqrcode";
import Sellingpage from "./marketercomponentpages/Sellingpage";
import Updateproductdetails from './admincomponentpages/Updateproductdetails';
import Choosehistorymarketer from './marketercomponentpages/Choosehistorymarketer';
import Marketersaleshistory from './marketercomponentpages/Marketersaleshistory';
import Marketerrechargehistory from './marketercomponentpages/Marketerrechargehistory';
import Promotionsaleshistorymarketer from './marketercomponentpages/Promotionsaleshistorymarketer';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Startapp />} />
          <Route path='/chooseuser' element={<Chooseuser />} />
          <Route path='/selectlogintype' element={<SelectLoginType />} />
          <Route path='/agencypage' element={<Agencypage />} />

          <Route path='/registeradmin' element={<Registeradmin />} />
          <Route path='/idpasswordgenadmin' element={<Idpasswordgenadmin />} />
          <Route path='/loginadmin' element={<Loginadmin />} />
          <Route path='/homemanager' element={<Homemanager />} />
          <Route path='/userrechargesystem' element={<Userrechargesystem />} />
          <Route path='/updateuserrecharge/:id' element={<Updateuserrecharge />} />
          <Route path='/storerechargesystem' element={<Storerechargesystem />} />
          <Route path='/updatestorerecharge/:id' element={<Updatestorerecharge />} />
          <Route path='/storesalesrechargesystem' element={<Storesalesrechargesystem />} />
          <Route path='/updatestoresalesrecharge/:id' element={<Updatestoresalesrecharge />} />
          <Route path='/marketersalesrechargesystem' element={<Marketersalesrechargesystem />} />
          <Route path='/updatemarketersalesrecharge/:id' element={<Updatemarketersalesrecharge />} />
          <Route path='/promotionpage' element={<Promotionpage />} />
          <Route path='/updatepromotionrecharge/:id' element={<Updatepromotionrecharge />} />
          <Route path='/salesorderpage' element={<Salesorderpage />} />
          <Route path='/updatesalespromotionrecharge/:id' element={<Updatesalespromotionrecharge />} />
          <Route path='/productlist' element={<Productlist />} />
          <Route path='/updateproductdetails/:id' element={<Updateproductdetails />} />
          <Route path='/supplydiscount' element={<Supplydiscount />} />
          <Route path='/updatesupply/:id' element={<Updatesupply />} />
          <Route path='/managercashadmin' element={<Managercashadmin />} />
          <Route path='/storecashdetailsadmin' element={<Storecashdetailsadmin />} />
          <Route path='/promotiondetailsadmin' element={<Promotiondetailsadmin />} />
          <Route path='/supplydetailsadmin' element={<Supplydetailsadmin />} />
          <Route path='/printqr' element={<Printqr />} />
          <Route path='/printqrstore/:id' element={<Printqrstore />} />


          <Route path='/Managerqrcode' element={<Managerqrcode />} />
          <Route path='/promotionandsalespage' element={<Promotionandsalespage />} />
          <Route path='/promotionrecharge' element={<Promotionrecharge />} />
          <Route path='/selectpromotionplan/:id' element={<Selectpromotionplan />} />
          <Route path='/salesrecharge' element={<Salesrecharge />} />
          <Route path='/selectsalespromotionplans/:id' element={<Selectsalespromotionplans />} />
          <Route path='/selectordertype' element={<Selectordertype />} />
          <Route path='/promotionorder' element={<Promotionorder />} />
          <Route path='/salesorder' element={<Salesorder />} />
          <Route path='/promotionandsalehistory' element={<Promotionandsalehistory />} />
          <Route path='/takeorders' element={<Takeorders />} />
          <Route path='/cartpage/:id' element={<Cartpage />} />
          <Route path='/mycart' element={<Mycart />} />
          <Route path='/editcartquantity/:id' element={<Editcartquantity />} />
          <Route path='/ordercheckoutpage' element={<Ordercheckoutpage />} />
          <Route path='/orderhistory' element={<Orderhistory />} />
          <Route path='/vieworder/:id' element={<Vieworder />} />
          <Route path='/supply' element={<Supply />} />
          <Route path='/supplyhistory' element={<Supplyhistory />} />
          <Route path='/storecashrecieved' element={<Storecashrecieved />} />

          <Route path='/registeruser' element={<Registeruser />} />
          <Route path='/generateuserid' element={<Idpasswordgenuser />} />
          <Route path='/loginuser' element={<Loginuser />} />
          <Route path='/homeuser' element={<Homeuser />} />
          <Route path='/qrcode' element={<Qrcode />} />
          <Route path='/purchase' element={<Purchase />} />
          <Route path='/userhistory' element={<Userhistory />} />
          <Route path='/purchasehistoryuser' element={<Purchasehistory />} />
          <Route path='/rechargehistoryuser' element={<Rechargehistoryuser />} />

          <Route path='/registerstore' element={<Registerstore />} />
          <Route path='/idpasswordgenstore' element={<Idpasswordgenstore />} />
          <Route path='/loginstore' element={<Loginstore />} />
          <Route path='/homestore' element={<Homestore />} />
          <Route path='/storeallrechargepage' element={<Storeallrechargepage />} />
          <Route path='/userrecharge' element={<Userrecharge />} />
          <Route path='/storerecharge' element={<Storerecharge />} />
          <Route path='/storesalesrecharge' element={<Storesalesrecharge />} />
          <Route path='/marketersalesrecharge' element={<Marketersalesrecharge />} />
          <Route path='/myqrcode' element={<Myqrcode />} />
          <Route path='/selectmarketersalesrecharge/:id' element={<Selectmarketersalesrecharge />} />
          <Route path='/selectstoresalesrecharge/:id' element={<Selectstoresalesrecharge />} />
          <Route path='/selectstorepurchaserecharge/:id' element={<Selectstorepurchaserecharge />} />
          <Route path='/selectuserpurchaserecharge/:id' element={<Selectuserpurchaserecharge />} />
          <Route path='/storechoosehistory' element={<Storechoosehistory />} />
          <Route path='/rechargehistory' element={<Rechargehistory />} />
          <Route path='/purchasehistorystore' element={<Purchasehistorystore />} />
          <Route path='/saleshistorystore' element={<Saleshistorystore />} />

          <Route path='/registermarketer' element={<Registermarketer />} />
          <Route path='/idpasswordgenmarketer' element={<Idpasswordgenmarketer />} />
          <Route path='/loginmarketer' element={<Loginmarketer />} />
          <Route path='/homemarketer' element={<Homemarketer />} />
          <Route path='/marketerqrcode' element={<Marketerqrcode />} />
          <Route path='/sellingpage' element={< Sellingpage />} />
          <Route path='/choosehistorymarketer' element={< Choosehistorymarketer />} />
          <Route path='/marketersaleshistory' element={< Marketersaleshistory />} />
          <Route path='/marketerrechargehistory' element={< Marketerrechargehistory />} />
          <Route path='/promotionsaleshistorymarketer' element={< Promotionsaleshistorymarketer />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
