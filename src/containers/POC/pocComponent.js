import React, { useEffect , useState} from "react";
import "./poc.scss";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import { pocList } from "../../config/constants";
import { Outlet, Link } from "react-router-dom";

const PocComponent = () => {
  const [selectedPoc, setSelectedPoc] = useState(pocList[0])
  useEffect(()=>{
    navigate(pocList[0].path);
  },[])
  useEffect(() => {
    console.log(pocList);
  });

  const navigate = useNavigate();
  const navigation = (path) => {
    navigate(path);
  };

  return (
    <div className="poc-container">
      <div className="link link-drop">
        <NavDropdown title={selectedPoc.label} id="basic-nav-dropdown">
          {pocList?.length &&
            pocList.map((poc, pIndex) => {
              return (
                <React.Fragment key={pIndex}>
                  <NavDropdown.Item onClick={() => {
                    setSelectedPoc(poc);
                    navigation(poc.path);
                    }}>
                    {poc.label}
                  </NavDropdown.Item>
                </React.Fragment>
              );
            })}
          {/* <NavDropdown.Item onClick={()=> navigation("stock-list")}>{global.label.nav.stockList}</NavDropdown.Item>
                                    <NavDropdown.Item onClick={()=> navigation("stock-entry")}>
                                    {global.label.nav.stockEntry}
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                   
                                    
                                    <NavDropdown.Item onClick={()=> navigation("stock-dashboard")}>
                                    {global.label.nav.dashboard}
                                    </NavDropdown.Item> */}
        </NavDropdown>
      </div>
      <div className="inner-page">
        <Outlet />
      </div>
    </div>
  );
};

export default PocComponent;
