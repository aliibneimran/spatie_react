import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import { Link, usePage } from "@inertiajs/react";

export default function Layout({ children}) {
  const { user,notifications,permissions } = usePage().props;
    return (
       <div>
  <div className="wrapper">
    <Header user={user} permissions={permissions} notifications={notifications}></Header>
    <Sidebar user={user} permissions={permissions} notifications={notifications}></Sidebar>

    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          {children}
        </div>

        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                © HR LOUNGE - Developed by <b>A & A Consulting Limited</b>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
  <div className="offcanvas offcanvas-end" tabIndex={-1} id="theme-settings-offcanvas">
    <div className="d-flex align-items-center bg-primary p-3 offcanvas-header">
      <h5 className="text-white m-0">Theme Settings</h5>
      <button type="button" className="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div className="offcanvas-body p-0">
      <div data-simplebar className="h-100">
        <div className="p-3">
          <h5 className="mb-3 fs-16 fw-semibold">Color Scheme</h5>
          <div className="row">
            <div className="col-6">
              <div className="form-check mb-1">
                <input className="form-check-input border-secondary" type="radio" name="data-bs-theme" id="layout-color-light" defaultValue="light" />
                <label className="form-check-label" htmlFor="layout-color-light">Light</label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-check mb-1">
                <input className="form-check-input border-secondary" type="radio" name="data-bs-theme" id="layout-color-dark" defaultValue="dark" />
                <label className="form-check-label" htmlFor="layout-color-dark">Dark</label>
              </div>
            </div>
          </div>
          <div id="layout-width">
            <h5 className="my-3 fs-16 fw-semibold">Layout Mode</h5>
            <div className="row">
              <div className="col-6">
                <div className="form-check mb-1">
                  <input className="form-check-input border-secondary" type="radio" name="data-layout-mode" id="layout-mode-fluid" defaultValue="fluid" />
                  <label className="form-check-label" htmlFor="layout-mode-fluid">Fluid</label>
                </div>
              </div>
              <div className="col-6">
                <div id="layout-boxed">
                  <div className="form-check mb-1">
                    <input className="form-check-input border-secondary" type="radio" name="data-layout-mode" id="layout-mode-boxed" defaultValue="boxed" />
                    <label className="form-check-label" htmlFor="layout-mode-boxed">Boxed</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h5 className="my-3 fs-16 fw-semibold">Topbar Color</h5>
          <div className="row">
            <div className="col-6">
              <div className="form-check mb-1">
                <input className="form-check-input border-secondary" type="radio" name="data-topbar-color" id="topbar-color-light" defaultValue="light" />
                <label className="form-check-label" htmlFor="topbar-color-light">Light</label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-check mb-1">
                <input className="form-check-input border-secondary" type="radio" name="data-topbar-color" id="topbar-color-dark" defaultValue="dark" />
                <label className="form-check-label" htmlFor="topbar-color-dark">Dark</label>
              </div>
            </div>
          </div>
          <div>
            <h5 className="my-3 fs-16 fw-semibold">Menu Color</h5>
            <div className="row">
              <div className="col-6">
                <div className="form-check mb-1">
                  <input className="form-check-input border-secondary" type="radio" name="data-menu-color" id="leftbar-color-light" defaultValue="light" />
                  <label className="form-check-label" htmlFor="leftbar-color-light">Light</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-check mb-1">
                  <input className="form-check-input border-secondary" type="radio" name="data-menu-color" id="leftbar-color-dark" defaultValue="dark" />
                  <label className="form-check-label" htmlFor="leftbar-color-dark">Dark</label>
                </div>
              </div>
            </div>
          </div>
          <div id="sidebar-size">
            <h5 className="my-3 fs-16 fw-semibold">Sidebar Size</h5>
            <div className="row gap-2">
              <div className="col-12">
                <div className="form-check mb-1">
                  <input className="form-check-input border-secondary" type="radio" name="data-sidenav-size" id="leftbar-size-default" defaultValue="default" />
                  <label className="form-check-label" htmlFor="leftbar-size-default">Default</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check mb-1">
                  <input className="form-check-input border-secondary" type="radio" name="data-sidenav-size" id="leftbar-size-compact" defaultValue="compact" />
                  <label className="form-check-label" htmlFor="leftbar-size-compact">Compact</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check mb-1">
                  <input className="form-check-input border-secondary" type="radio" name="data-sidenav-size" id="leftbar-size-small" defaultValue="condensed" />
                  <label className="form-check-label" htmlFor="leftbar-size-small">Condensed</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-check mb-1">
                  <input className="form-check-input border-secondary" type="radio" name="data-sidenav-size" id="leftbar-size-full" defaultValue="full" />
                  <label className="form-check-label" htmlFor="leftbar-size-full">Full Layout</label>
                </div>
              </div>
            </div>
          </div>
          <div id="layout-position">
            <h5 className="my-3 fs-16 fw-semibold">
              Layout Position
            </h5>
            <div className="row">
              <div className="col-6">
                <div className="form-check">
                  <input type="radio" className="form-check-input" name="data-layout-position" id="layout-position-fixed" defaultValue="fixed" />
                  <label className="form-check-label" htmlFor="layout-position-fixed">Fixed</label>
                </div>
              </div>
              <div className="col-6">
                <div className="form-check">
                  <input type="radio" className="form-check-input" name="data-layout-position" id="layout-position-scrollable" defaultValue="scrollable" />
                  <label className="form-check-label" htmlFor="layout-position-scrollable">Scrollable</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="offcanvas-footer border-top p-3 text-center">
      <div className="row">
        <div className="col-6">
          <button type="button" className="btn btn-light w-100" id="reset-layout">
            Reset
          </button>
        </div>
        <div className="col-6">
          <a href="#" role="button" className="btn btn-primary w-100">Buy Now</a>
        </div>
      </div>
    </div>
  </div>
</div>

    );
}
