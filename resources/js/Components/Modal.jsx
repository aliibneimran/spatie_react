import { usePage } from "@inertiajs/inertia-react";

export default function Modal({permissions}) {
    const permissionNames = permissions;
// console.log(permissions)
  return (
    <>
      <div className="cart" id="modalMenu">
        <div className="d-flex">
            {permissionNames.includes('HR Admin') && (
            <div className="col-lg-2 box text-center">
                <a href="">
                <i className="fa-solid fa-user-tie"></i>
                {/* <img
                    src="/assets/images/menu_img/task.png"
                    alt=""
                    id="dashboardImg"
                /> */}
                <p>HR. Admin</p>
                </a>
            </div>
            )}{permissionNames.includes('Security') && (
            <div className="col-lg-2 box text-center">
                <a href="">
                <i className="fa-solid fa-shield-halved"></i>
                <p>Security</p>
                </a>
            </div>
            )}{permissionNames.includes('Employee Info') && (
            <div className="col-lg-2 box text-center">
                <a href="">
                <i className="fa-solid fa-user-check"></i>
                <p>Employee Info</p>
                </a>
            </div>
            )}{permissionNames.includes('Org Chart') && (
            <div className="col-lg-2 box text-center">
                <a href="">
                <i className="fa-solid fa-sitemap"></i>
                <p>Org. Chart</p>
                </a>
            </div>
            )}{permissionNames.includes('Lifecycle') && (
            <div className="col-lg-2 box text-center">
                <a href="">
                <i className="fa-solid fa-arrows-spin"></i>
                <p>Lifecycle</p>
                </a>
            </div>
            )}{permissionNames.includes('Leave') && (
            <div className="col-lg-2 box text-center">
                <a href="">
                <i className="fa-solid fa-umbrella-beach"></i>
                <p>Leave</p>
                </a>
            </div>
            )}
        </div>
        <div className="d-flex">
            {permissionNames.includes('Attendance') && (
            <div className="col-lg-2 box text-center">
                <a href="">
                <i className="fa-solid fa-clipboard-user"></i>
                <p>Attendance</p>
                </a>
            </div>
            )}{permissionNames.includes('Payroll') && (
            <div className="col-lg-2 box text-center">
                <a href="">
                <i className="fa-solid fa-money-check-dollar"></i>
                <p>Payroll</p>
                </a>
            </div>
            )}{permissionNames.includes('Claim') && (
            <div className="col-lg-2 box text-center">
                <a href="">
                <i className="fa-solid fa-circle-exclamation"></i>
                <p>Claim</p>
                </a>
            </div>
            )}{permissionNames.includes('Reports') && (
            <div className="col-lg-2 box text-center">
                <a href="">
                <i className="fa-solid fa-file-circle-check"></i>
                <p>Reports</p>
                </a>
            </div>
            )}{permissionNames.includes('Report Viewer') && (
            <div className="col-lg-2 box text-center">
                <a href="">
                <i className="fa-solid fa-eye"></i>
                <p>Report Viewer</p>
                </a>
            </div>
            )}{permissionNames.includes('Workforce') && (
            <div className="col-lg-2 box text-center">
                <a href="">
                <i className="fa-solid fa-users-gear"></i>
                <p>Workforce</p>
                </a>
            </div>
            )}
        </div>
        <div className="d-flex">
        {permissionNames.includes('Recruitment') && (
          <div className="col-lg-2 box text-center">
            <a href="">
            <i className="fa-solid fa-store"></i>
              <p>Recruitment</p>
            </a>
          </div>
        )}{permissionNames.includes('Performance') && (
          <div className="col-lg-2 box text-center">
            <a href="">
            <i className="fa-solid fa-chart-line"></i>
              <p>Performance</p>
            </a>
          </div>
        )}{permissionNames.includes('Learning') && (
          <div className="col-lg-2 box text-center">
            <a href="">
            <i className="fa-solid fa-chalkboard-user"></i>
              <p>Learning</p>
            </a>
          </div>
        )}{permissionNames.includes('Probation') && (
          <div className="col-lg-2 box text-center">
            <a href="">
            <i className="fa-solid fa-graduation-cap"></i>
              <p>Probation</p>
            </a>
          </div>
        )}{permissionNames.includes('Request') && (
          <div className="col-lg-2 box text-center">
            <a href="">
            <i className="fa-solid fa-hand"></i>
              <p>Request</p>
            </a>
          </div>
        )}{permissionNames.includes('Grievance') && (
          <div className="col-lg-2 box text-center">
            <a href="">
            <i className="fa-solid fa-comments"></i>
              <p>Grievance</p>
            </a>
          </div>
        )}
        </div>
      </div>

    </>
  );
}
