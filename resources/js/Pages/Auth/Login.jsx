import { Head, Link, useForm } from '@inertiajs/react';
import {route} from 'ziggy-js';
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
            <Head title="Log in" />

            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <div className="card shadow-sm border-0 rounded p-4">
                            <h1 className="mb-4 text-center text-primary">Log in</h1>

                            {status && (
                                <div className="alert alert-success mb-4 text-center">
                                    {status}
                                </div>
                            )}

                            <form onSubmit={submit}>

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                        autoComplete="username"
                                        onChange={(e) => setData('email', e.target.value)}
                                    />
                                    {errors.email && (
                                        <div className="invalid-feedback">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                        autoComplete="current-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback">
                                            {errors.password}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="remember"
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) => setData('remember', e.target.checked)}
                                    />
                                    <label className="form-check-label ms-2" htmlFor="remember">
                                        Remember me
                                    </label>
                                </div>

                                {canResetPassword && (
                                    <div className="mb-3 d-flex justify-content-end">
                                        <Link
                                            href={route('password.request')}
                                            className="text-decoration-underline text-primary small"
                                        >
                                            Forgot your password?
                                        </Link>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                    disabled={processing}
                                >
                                    Log in
                                </button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
