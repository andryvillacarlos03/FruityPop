import { Head, Link, useForm } from '@inertiajs/react';
import { route } from 'ziggy-js';


export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
                <Head title="Login">
                   <link href="/dashboard_data/css/sb-admin-2.min.css" rel="stylesheet" />
                   <link href="/dashboard_data/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
                </Head>
                <div 
                style={
                    {width:'100vw',
                    height:'100vh',
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems: 'center'
                    }
                    }>
                <div className="container" style={{ maxWidth: '1200px' }}>
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image" style={
                                            {backgroundImage : `url('../../../landing/img/vegetable-item-7.jpg')`}}></div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                </div>

                                                {status && (
                                                    <div className="alert alert-success text-center">
                                                        {status}
                                                    </div>
                                                )}

                                                <form onSubmit={submit} className="user">
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            className={`form-control form-control-user ${errors.email ? 'is-invalid' : ''}`}
                                                            id="email"
                                                            placeholder="Enter Email Address..."
                                                            value={data.email}
                                                            onChange={(e) => setData('email', e.target.value)}
                                                            autoComplete="username"
                                                        />
                                                        {errors.email && (
                                                            <div className="invalid-feedback">
                                                                {errors.email}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            className={`form-control form-control-user ${errors.password ? 'is-invalid' : ''}`}
                                                            id="password"
                                                            placeholder="Password"
                                                            value={data.password}
                                                            onChange={(e) => setData('password', e.target.value)}
                                                            autoComplete="current-password"
                                                        />
                                                        {errors.password && (
                                                            <div className="invalid-feedback">
                                                                {errors.password}
                                                            </div>
                                                        )}
                                                    </div>

                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="remember"
                                                                checked={data.remember}
                                                                onChange={(e) => setData('remember', e.target.checked)}
                                                            />
                                                            <label className="custom-control-label" htmlFor="remember">
                                                                Remember Me
                                                            </label>
                                                        </div>
                                                    </div>

                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary btn-user btn-block"
                                                        disabled={processing}
                                                    >
                                                        Login
                                                    </button>

                                                    <hr />

                                                </form>

                                        

                                                {canResetPassword && (
                                                    <div className="text-center">
                                                        <Link href={route('password.request')} className="small">
                                                            Forgot Password?
                                                        </Link>
                                                    </div>
                                                )}

                                                <div className="text-center">
                                                    <Link href={route('register')} className="small">
                                                        Create an Account!
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
      
        </>
    );
}
