import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomeRoute from "./routes/HomeRoute";
import ButtonRoute from "./routes/ButtonRoute";
import IconRoute from "./routes/IconRoute";
import BadgeRoute from "./routes/BadgeRoute";
import AlertRoute from "./routes/AlertRoute";
import NavLinkRoute from "./routes/NavLinkRoute";
import NavRoute from "./routes/NavRoute";
import DropdownItemRoute from "./routes/DropdownItemRoute";
import DropdownMenuRoute from "./routes/DropdownMenuRoute";
import NavItemRoute from "./routes/NavItemRoute";
import TestLayoutRoute from "./routes/TestLayoutRoute";
import TableRoute from "./routes/TableRoute";

function App() {
  return (
    <div className="app">
      <ul className="nav">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/alert" className="nav-link">
            Alert
          </Link>
        </li>
        <li>
          <Link to="/badge" className="nav-link">
            Badge
          </Link>
        </li>
        <li>
          <Link to="/button" className="nav-link">
            Button
          </Link>
        </li>
        <li>
          <Link to="/dropdownitem" className="nav-link">
            DropdownItem
          </Link>
        </li>
        <li>
          <Link to="/dropdownmenu" className="nav-link">
            DropdownMenu
          </Link>
        </li>
        <li>
          <Link to="/icon" className="nav-link">
            Icon
          </Link>
        </li>
        <li>
          <Link to="/nav" className="nav-link">
            Nav
          </Link>
        </li>
        <li>
          <Link to="/navlink" className="nav-link">
            NavLink
          </Link>
        </li>
        <li>
          <Link to="/navlink" className="nav-link">
            NavItem
          </Link>
        </li>
        <li>
          <Link to="/table" className="nav-link">
            Table
          </Link>
        </li>
        <li>
          <Link to="/testlayout" className="nav-link">
            TestLayout
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<HomeRoute />} />
        <Route path="/alert" element={<AlertRoute />} />
        {/* <Route path="/card" element={<CardRoute />} />
          <Route path="/cardwithimages" element={<CardWithImagesRoute />} />
          <Route path="/cardheader" element={<CardHeaderRoute />} />
          <Route path="/cardbody" element={<CardBodyRoute />} />
          <Route path="/cardfooter" element={<CardFooterRoute />} /> */}
        <Route path="/icon" element={<IconRoute />} />
        <Route path="/badge" element={<BadgeRoute />} />
        <Route path="/dropdownitem" element={<DropdownItemRoute />} />
        <Route path="/dropdownmenu" element={<DropdownMenuRoute />} />
        {/* <Route path="/buttonlink" element={<ButtonLinkRoute />} /> */}
        <Route path="/button" element={<ButtonRoute />} />
        {/* <Route path="/collapse" element={<CollapseRoute />} />
          <Route path="/collapsebutton" element={<CollapseButtonRoute />} />
          <Route path="/accordion" element={<AccordionRoute />} />
          <Route path="/accordionitem" element={<AccordionItemRoute />} />
          <Route
            path="/accordionitemheader"
            element={<AccordionItemHeaderRoute />}
          />
          <Route
            path="/accordionitembody"
            element={<AccordionItemBodyRoute />}
          />
          <Route path="/navbarbrand" element={<NavBarBrandRoute />} />
          <Route path="/navbar" element={<NavBarRoute />} />
          <Route path="/modalbutton" element={<ModalButtonRoute />} /> */}
        <Route path="/navlink" element={<NavLinkRoute />} />
        <Route path="/navitem" element={<NavItemRoute />} />
        <Route path="/nav" element={<NavRoute />} />
        {/* <Route path="/pagination" element={<PaginationRoute />} />
          <Route
            path="/paginationitemsperpage"
            element={<PaginationItemsPerPageRoute />}
          />
          <Route
            path="/paginationpageselector"
            element={<PaginationPageSelectorRoute />}
          />
          <Route path="/paginationbutton" element={<PaginationButtonRoute />} />
          <Route path="/preloader" element={<PreloaderRoute />} />
          <Route path="/tabs" element={<TabsRoute />} />
          <Route path="/navtabs" element={<NavTabsRoute />} />
          <Route path="/navtablink" element={<NavTabLinkRoute />} />
          <Route path="/tabcontent" element={<TabContentRoute />} />
          <Route path="/tabpane" element={<TabPaneRoute />} />
          <Route path="/offcanvasbutton" element={<OffcanvasButtonRoute />} />
          <Route path="/offcanvas" element={<OffcanvasRoute />} />
          <Route path="/offcanvasheader" element={<OffcanvasHeaderRoute />} />
          <Route path="/offcanvasbody" element={<OffcanvasBodyRoute />} />
          <Route path="/header" element={<HeaderRoute />} />
          <Route path="/modal" element={<ModalRoute />} />
          <Route path="/modalheader" element={<ModalHeaderRoute />} />
          <Route path="/modalbody" element={<ModalBodyRoute />} />
          <Route path="/modalfooter" element={<ModalFooterRoute />} /> */}
        <Route path="/table" element={<TableRoute />} />
        {/* <Route path="/tablerow" element={<TableRowRoute />} />
          <Route path="/tablecell" element={<TableCellRoute />} />
          <Route path="/grid" element={<GridRoute />} />
          <Route path="/vars" element={<VarsRoute />} /> */}
        <Route path="/testlayout" element={<TestLayoutRoute />} />
      </Routes>
    </div>
  );
}

export default App;
