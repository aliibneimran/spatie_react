import { useEffect, useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import LoginLeft from "@/Components/LoginLeft";
import LoginRight from "@/Components/LoginRight";

export default function Login() {
    return (
        <div className="auth-page">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    {/* end col */}
                    <div className="col-xxl-6 col-lg-6 col-md-6 d-none d-md-block">
                      {/* <img src="assets/images/login/hr (6).jpg" alt="" width={'100%'} height={'100%'}/> */}
                       <LoginLeft></LoginLeft>

                    </div>
                    <div className="col-xxl-6 col-lg-6 col-md-6">
                        <LoginRight></LoginRight>
                        {/* end auth full page content */}
                    </div>
                    {/* end col */}
                </div>
                {/* end row */}
            </div>
            {/* end container fluid */}
        </div>
    );
}
