import { Link } from "@inertiajs/react";

export default function Leftbar() {
  return (
<div className="deznav">
  <div className="deznav-scroll">
    <ul className="metismenu" id="menu">
      <li><Link to="/" className aria-expanded="false">
        <div className="menu-icon">
        <i className="fa-solid fa-house"></i>
        </div>
        <span className="nav-text">Dashboard</span>
        </Link>
      </li>
      <li><Link to="/about" className aria-expanded="false">
        <div className="menu-icon">
        <i className="fa-solid fa-address-card"></i>
        </div>
        <span className="nav-text">About</span>
        </Link>
      </li>
      <li><Link to="*" className aria-expanded="false">
        <div className="menu-icon">
        <i className="fa-solid fa-ban"></i>
        </div>
        <span className="nav-text">Not Found</span>
        </Link>
      </li>
      <li><Link className="has-arrow " to="javascript:void(0);" aria-expanded="false">
          <div className="menu-icon">
            <i className="fa-solid fa-user-tie"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> */}
          </div>
          <span className="nav-text">HR. Admin</span>
        </Link>
        <ul aria-expanded="false">
          <span id="head">HR. Admin</span>
          <li><Link className="has-arrow" to="javascript:void(0);" aria-expanded="false">Company Profile</Link>
            <ul aria-expanded="false">
              <li><Link to="./email-compose.html">Company Definition</Link></li>
              <li><Link to="./email-inbox.html">Company Hierarchy</Link></li>
              <li><Link to="./email-read.html">Location</Link></li>
              <li><Link to="./email-read.html">Sub Location</Link></li>
              <li><Link to="./email-read.html">Cost Centre</Link></li>
            </ul>
          </li>
          <li><Link to="javascript:void(0);">House Keeping</Link></li>
          <li><Link className="has-arrow" to="javascript:void(0);" aria-expanded="false">Work Structure</Link>
            <ul aria-expanded="false">
              <li><Link to="./email-compose.html">Salary Grade</Link></li>
              <li><Link to="./email-inbox.html">Corporate Title</Link></li>
              <li><Link to="./email-read.html">Designation</Link></li>
              <li><Link to="./email-read.html">Job Description Type</Link></li>
              <li><Link to="./email-read.html">Job Description</Link></li>
            </ul>
          </li>
          <li><Link className="has-arrow" to="javascript:void(0);" aria-expanded="false">Common Control</Link>
            <ul aria-expanded="false">
              <li><Link to="./email-compose.html">Level Configuration</Link></li>
              <li><Link to="./email-inbox.html">Software Theme Option</Link></li>
              <li><Link to="./email-read.html">Menu Customization</Link></li>
              <li><Link to="./email-read.html">Mobile App Theme</Link></li>
              <li><Link to="./email-read.html">Job Description</Link></li>
            </ul>
          </li>
          <li><Link to="./chat.html">Geo Code Info</Link></li>
          <li><Link className="has-arrow" to="javascript:void(0);" aria-expanded="false">Upload Images</Link>
            <ul aria-expanded="false">
              <li><Link to="./email-compose.html">Bulk Image </Link></li>
              <li><Link to="./email-inbox.html">Bulk Attachment</Link></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><Link className="has-arrow " to="javascript:void(0);" aria-expanded="false">
          <div className="menu-icon">
            <i className="fa-solid fa-shield-halved"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> */}
          </div>
          <span className="nav-text">Security</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Security</span>
          <li><Link className="has-arrow" to="javascript:void(0);" aria-expanded="false">User Rights</Link>
          <ul aria-expanded="false">
              <li><Link to="./email-compose.html">Roles</Link></li>
              <li><Link to="./email-inbox.html"> Role Assignment </Link></li>
              <li><Link to="./email-read.html">User Role Rights</Link></li>
          </ul>

          </li>
          <li><Link className="has-arrow" to="javascript:void(0);" aria-expanded="false">Permission</Link>
            <ul aria-expanded="false">
              <li><Link to="./email-compose.html">User Permission</Link></li>
              <li><Link to="./email-inbox.html">Grant Permission</Link></li>
              <li><Link to="./email-read.html">Assign Permission</Link></li>
            </ul>
          </li>
          <li><Link to="./chat.html">Workflow</Link></li>
          <li><Link to="./chat.html">Audit Log</Link></li>
        </ul>
      </li>
      <li><Link className="has-arrow " to="javascript:void(0);" aria-expanded="false">
          <div className="menu-icon">
            <i className="fa-solid fa-user-check"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> */}
          </div>
          <span className="nav-text">Employee Info</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Employee Info</span>
          <li><Link to="./chat.html">Add Employee</Link></li>
          <li><Link to="./chat.html">Employee Profile</Link></li>
          <li><Link to="./chat.html">Team Lead</Link></li>
          <li><Link to="./chat.html">Manager</Link></li>
        </ul>
      </li>
      <li><Link className="has-arrow " to="javascript:void(0);" aria-expanded="false">
          <div className="menu-icon">
            <i className="fa-solid fa-sitemap"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg> */}
          </div>
          <span className="nav-text">Org. Chart</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Org. Chart</span>
          <li><Link to="./chat.html">Company View</Link></li>
          <li><Link to="./chat.html">Reporting Tree</Link></li>
        </ul>
      </li>
      <li><Link className="has-arrow " to="javascript:void(0);" aria-expanded="false">
          <div className="menu-icon">
            <i className="fa-solid fa-arrows-spin"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-life-buoy"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line></svg> */}
          </div>
          <span className="nav-text">Lifecycle</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Lifecycle</span>
          <li><Link to="./chat.html">Movement Type</Link></li>
          <li><Link to="./chat.html">Define Reason</Link></li>
          <li><Link to="./chat.html">Eligibility</Link></li>
          <li><Link to="./chat.html">Application</Link></li>
          <li><Link to="./chat.html">Shortlisting</Link></li>
          <li><Link to="./chat.html">Application History</Link></li>
          <li><Link to="./chat.html">Effective Date</Link></li>
          <li><Link to="./chat.html">Bulk Application</Link></li>
          <li><Link to="./chat.html">Excell Uploader</Link></li>
        </ul>
      </li>
      <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <i className="fa-solid fa-umbrella-beach"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather"><path d="M20.24 4.24a5.5 5.5 0 0 0-7.78 0L3 13.49V21h7.51l9.49-9.49a5.5 5.5 0 0 0 0-7.78z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg> */}

        </div>
        <span className="nav-text">Leave</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Leave</span>
        </ul>
      </li>
      <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <i className="fa-solid fa-clipboard-user"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> */}
        </div>
        <span className="nav-text">Attendance</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Attendance</span>
        </ul>
      </li>
      <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <i className="fa-solid fa-money-check-dollar"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-dollar-sign"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> */}
        </div>
        <span className="nav-text">Payroll</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Payroll</span>
        </ul>
      </li>
      <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <i className="fa-solid fa-circle-exclamation"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-octagon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg> */}
        </div>
        <span className="nav-text">Claim</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Claim</span>
        </ul>
      </li>
      <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <i className="fa-solid fa-file-circle-check"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg> */}
        </div>
        <span className="nav-text">Reports</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Reports</span>
        </ul>
      </li>
      <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <i className="fa-solid fa-eye"></i>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg> */}
        </div>
        <span className="nav-text">Report Viewer</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Report Viewer</span>
        </ul>
      </li>
      <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <i className="fa-solid fa-users-gear"></i>
        </div>
        <span className="nav-text">Workforce</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Workforce</span>
        </ul>
      </li>
      <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
        <i className="fa-solid fa-store"></i>
        </div>
        <span className="nav-text">Recruitment</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Recruitment</span>
        </ul>
      </li>
      <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <i className="fa-solid fa-chart-line"></i>
        </div>
        <span className="nav-text">Performance</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Performance</span>
        </ul>
      </li>
      <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <i className="fa-solid fa-chalkboard-user"></i>
        </div>
        <span className="nav-text">Learning</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Learning</span>
        </ul>
      </li>
      <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <i className="fa-solid fa-graduation-cap"></i>
        </div>
        <span className="nav-text">Probation</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Probation</span>
        </ul>
      </li>
      <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <i className="fa-solid fa-hand"></i>
        </div>
        <span className="nav-text">Request</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Request</span>
        </ul>
      </li>
      <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <i className="fa-solid fa-comments"></i>
        </div>
        <span className="nav-text">Grievance</span>
        </Link>
        <ul aria-expanded="false">
        <span id="head">Grievance</span>
        </ul>
      </li>
      {/* <li><Link to="task.html" className aria-expanded="false">
        <div className="menu-icon">
            <svg fill="#ffffff" height="25px" width="25px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 474.565 474.565" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M255.204,102.3c-0.606-11.321-12.176-9.395-23.465-9.395C240.078,95.126,247.967,98.216,255.204,102.3z"></path> <path d="M134.524,73.928c-43.825,0-63.997,55.471-28.963,83.37c11.943-31.89,35.718-54.788,66.886-63.826 C163.921,81.685,150.146,73.928,134.524,73.928z"></path> <path d="M43.987,148.617c1.786,5.731,4.1,11.229,6.849,16.438L36.44,179.459c-3.866,3.866-3.866,10.141,0,14.015l25.375,25.383 c1.848,1.848,4.38,2.888,7.019,2.888c2.61,0,5.125-1.04,7.005-2.888l14.38-14.404c2.158,1.142,4.55,1.842,6.785,2.827 c0-0.164-0.016-0.334-0.016-0.498c0-11.771,1.352-22.875,3.759-33.302c-17.362-11.174-28.947-30.57-28.947-52.715 c0-34.592,28.139-62.739,62.723-62.739c23.418,0,43.637,13.037,54.43,32.084c11.523-1.429,22.347-1.429,35.376,1.033 c-1.676-5.07-3.648-10.032-6.118-14.683l14.396-14.411c1.878-1.856,2.918-4.38,2.918-7.004c0-2.625-1.04-5.148-2.918-7.004 l-25.361-25.367c-1.94-1.941-4.472-2.904-7.003-2.904c-2.532,0-5.063,0.963-6.989,2.904l-14.442,14.411 c-5.217-2.764-10.699-5.078-16.444-6.825V9.9c0-5.466-4.411-9.9-9.893-9.9h-35.888c-5.451,0-9.909,4.434-9.909,9.9v20.359 c-5.73,1.747-11.213,4.061-16.446,6.825L75.839,22.689c-1.942-1.941-4.473-2.904-7.005-2.904c-2.531,0-5.077,0.963-7.003,2.896 L36.44,48.048c-1.848,1.864-2.888,4.379-2.888,7.012c0,2.632,1.04,5.148,2.888,7.004l14.396,14.403 c-2.75,5.218-5.063,10.708-6.817,16.438H23.675c-5.482,0-9.909,4.441-9.909,9.915v35.889c0,5.458,4.427,9.908,9.909,9.908H43.987z"></path> <path d="M354.871,340.654c15.872-8.705,26.773-25.367,26.773-44.703c0-28.217-22.967-51.168-51.184-51.168 c-9.923,0-19.118,2.966-26.975,7.873c-4.705,18.728-12.113,36.642-21.803,52.202C309.152,310.022,334.357,322.531,354.871,340.654z "></path> <path d="M460.782,276.588c0-5.909-4.799-10.693-10.685-10.693H428.14c-1.896-6.189-4.411-12.121-7.393-17.75l15.544-15.544 c2.02-2.004,3.137-4.721,3.137-7.555c0-2.835-1.118-5.553-3.137-7.563l-27.363-27.371c-2.08-2.09-4.829-3.138-7.561-3.138 c-2.734,0-5.467,1.048-7.547,3.138l-15.576,15.552c-5.623-2.982-11.539-5.481-17.751-7.369v-21.958 c0-5.901-4.768-10.685-10.669-10.685H311.11c-2.594,0-4.877,1.04-6.739,2.578c3.26,11.895,5.046,24.793,5.046,38.552 c0,8.735-0.682,17.604-1.956,26.423c7.205-2.656,14.876-4.324,22.999-4.324c36.99,0,67.086,30.089,67.086,67.07 c0,23.637-12.345,44.353-30.872,56.303c13.48,14.784,24.195,32.324,31.168,51.976c1.148,0.396,2.344,0.684,3.54,0.684 c2.733,0,5.467-1.04,7.563-3.13l27.379-27.371c2.004-2.004,3.106-4.721,3.106-7.555s-1.102-5.551-3.106-7.563l-15.576-15.552 c2.982-5.621,5.497-11.555,7.393-17.75h21.957c2.826,0,5.575-1.118,7.563-3.138c2.004-1.996,3.138-4.72,3.138-7.555 L460.782,276.588z"></path> <path d="M376.038,413.906c-16.602-48.848-60.471-82.445-111.113-87.018c-16.958,17.958-37.954,29.351-61.731,29.351 c-23.759,0-44.771-11.392-61.713-29.351c-50.672,4.573-94.543,38.17-111.145,87.026l-9.177,27.013 c-2.625,7.773-1.368,16.338,3.416,23.007c4.783,6.671,12.486,10.631,20.685,10.631h315.853c8.215,0,15.918-3.96,20.702-10.631 c4.767-6.669,6.041-15.234,3.4-23.007L376.038,413.906z"></path> <path d="M120.842,206.782c0,60.589,36.883,125.603,82.352,125.603c45.487,0,82.368-65.014,82.368-125.603 C285.563,81.188,120.842,80.939,120.842,206.782z"></path> </g> </g></svg>
        </div>
        <span className="nav-text">Tasks</span>
        </Link>
      </li> */}



    </ul>
  </div>
</div>
  )
}
