import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        phone: '',
        region: '',
        province: '',
        city: '',
        barangay: '',
        age: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [regions, setRegions] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [barangays, setBarangays] = useState([]);

    const [emailStatus, setEmailStatus] = useState('');
    const [passwordMatch, setPasswordMatch] = useState('');
    const [canSubmit, setCanSubmit] = useState(false);

    // Load regions once
    useEffect(() => {
        const fetchRegions = async () => {
            const response = await fetch('https://psgc.gitlab.io/api/regions/');
            const json = await response.json();
            setRegions(json);
        };
        fetchRegions();
    }, []);

    // Load provinces when region changes
    useEffect(() => {
        if (!data.region) {
            setProvinces([]);
            setCities([]);
            setBarangays([]);
            return;
        }

        const fetchProvinces = async () => {
            const response = await fetch(`https://psgc.gitlab.io/api/regions/${data.region}/provinces/`);
            const json = await response.json();
            setProvinces(json);
        };
        fetchProvinces();
    }, [data.region]);

    // Load cities when province changes
    useEffect(() => {
        if (!data.province) {
            setCities([]);
            setBarangays([]);
            return;
        }

        const fetchCities = async () => {
            const response = await fetch(`https://psgc.gitlab.io/api/provinces/${data.province}/cities-municipalities/`);
            const json = await response.json();
            setCities(json);
        };
        fetchCities();
    }, [data.province]);

    // Load barangays when city changes
    useEffect(() => {
        if (!data.city) {
            setBarangays([]);
            return;
        }

        const fetchBarangays = async () => {
            const response = await fetch(`https://psgc.gitlab.io/api/cities-municipalities/${data.city}/barangays/`);
            const json = await response.json();
            setBarangays(json);
        };
        fetchBarangays();
    }, [data.city]);

    // Email availability check
    useEffect(() => {
        if (!data.email) {
            setEmailStatus('');
            return;
        }

        const timeout = setTimeout(async () => {
            try {
                const response = await fetch(`/register/email?email=${encodeURIComponent(data.email)}`);
                const json = await response.json();

                if (json.exists) {
                    setEmailStatus('taken');
                } else {
                    setEmailStatus('available');
                }
            } catch (error) {
                setEmailStatus('error');
            }
        }, 300);

        return () => clearTimeout(timeout);
    }, [data.email]);

    // Password match check
    useEffect(() => {
        if (!data.password_confirmation) {
            setPasswordMatch('');
        } else if (data.password === data.password_confirmation) {
            setPasswordMatch('match');
        } else {
            setPasswordMatch('nomatch');
        }
    }, [data.password, data.password_confirmation]);

    // Control submit enable state
    useEffect(() => {
        if (emailStatus === 'available' && passwordMatch === 'match') {
            setCanSubmit(true);
        } else {
            setCanSubmit(false);
        }
    }, [emailStatus, passwordMatch]);

    const togglePassword = (id) => {
        const input = document.getElementById(id);
        if (input.type === 'password') {
            input.type = 'text';
        } else {
            input.type = 'password';
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
                 <Head title="Register">
                   <link href="/dashboard_data/css/sb-admin-2.min.css" rel="stylesheet" />
                   <link href="/dashboard_data/vendor/fontawesome-free/css/all.min.css" rel="stylesheet" />
                </Head>

            <div className="main-con">
                <a href={route('login')} className="btn btn-dark btn-back mb-3">
                    <i className="fas fa-arrow-left"></i> Back
                </a>

                <div className="card o-hidden mx-auto" style={{ maxWidth: '600px' }}>
                    <div className="card-body p-0">
                        <div className="col-lg-12">
                            <div className="p-5 lala">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                                </div>

                                {Object.keys(errors).length > 0 && (
                                    <div className="alert alert-danger">
                                        <h5><strong>There were some errors with your submission:</strong></h5>
                                        <ul className="mb-0">
                                            {Object.values(errors).map((error, i) => (
                                                <li key={i}>{error}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <form onSubmit={submit} className="user">
                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"
                                                placeholder="First Name"
                                                value={data.firstname}
                                                onChange={(e) => setData('firstname', e.target.value)}
                                            />
                                        </div>
                                        <div className="col-sm-6">
                                            <input
                                                type="text"
                                                className="form-control form-control-user"
                                                placeholder="Last Name"
                                                value={data.lastname}
                                                onChange={(e) => setData('lastname', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            inputMode="numeric"
                                            maxLength="11"
                                            pattern="09[0-9]{9}"
                                            placeholder="e.g., 09123456789"
                                            className="form-control form-control-user"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="region">Region</label>
                                        <select
                                            id="region"
                                            className="form-control"
                                            value={data.region}
                                            onChange={(e) => setData('region', e.target.value)}
                                        >
                                            <option value="">Select Region</option>
                                            {regions.map((r) => (
                                                <option key={r.code} value={r.code}>{r.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="province">Province</label>
                                        <select
                                            id="province"
                                            className="form-control"
                                            value={data.province}
                                            onChange={(e) => setData('province', e.target.value)}
                                            disabled={!provinces.length}
                                        >
                                            <option value="">Select Province</option>
                                            {provinces.map((p) => (
                                                <option key={p.code} value={p.code}>{p.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="city">City/Municipality</label>
                                        <select
                                            id="city"
                                            className="form-control"
                                            value={data.city}
                                            onChange={(e) => setData('city', e.target.value)}
                                            disabled={!cities.length}
                                        >
                                            <option value="">Select City/Municipality</option>
                                            {cities.map((c) => (
                                                <option key={c.code} value={c.code}>{c.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="barangay">Barangay</label>
                                        <select
                                            id="barangay"
                                            className="form-control"
                                            value={data.barangay}
                                            onChange={(e) => setData('barangay', e.target.value)}
                                            disabled={!barangays.length}
                                        >
                                            <option value="">Select Barangay</option>
                                            {barangays.map((b) => (
                                                <option key={b.code} value={b.code}>{b.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="number"
                                            className="form-control form-control-user"
                                            placeholder="Age"
                                            value={data.age}
                                            onChange={(e) => setData('age', e.target.value)}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control form-control-user"
                                            placeholder="Email Address"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                        />
                                        {emailStatus === 'available' && (
                                            <div className="text-success mt-1">Email is available.</div>
                                        )}
                                        {emailStatus === 'taken' && (
                                            <div className="text-danger mt-1">Email is already taken.</div>
                                        )}
                                        {emailStatus === 'error' && (
                                            <div className="text-danger mt-1">Error checking email.</div>
                                        )}
                                    </div>

                                    <div className="form-group row">
                                        <div className="col-sm-6 mb-3 mb-sm-0 position-relative">
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control form-control-user pe-5"
                                                placeholder="Password"
                                                value={data.password}
                                                onChange={(e) => setData('password', e.target.value)}
                                            />
                                            <i
                                                className="fas fa-eye toggle-password position-absolute"
                                                style={{ top: '50%', right: '15px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                                                onClick={() => togglePassword('password')}
                                            ></i>
                                        </div>
                                        <div className="col-sm-6 position-relative">
                                            <input
                                                type="password"
                                                id="password_confirmation"
                                                className="form-control form-control-user pe-5"
                                                placeholder="Repeat Password"
                                                value={data.password_confirmation}
                                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                            />
                                            <i
                                                className="fas fa-eye toggle-password position-absolute"
                                                style={{ top: '50%', right: '15px', transform: 'translateY(-50%)', cursor: 'pointer' }}
                                                onClick={() => togglePassword('password_confirmation')}
                                            ></i>
                                        </div>
                                    </div>

                                    {passwordMatch === 'match' && (
                                        <div className="text-success mb-3 ms-2">Passwords match.</div>
                                    )}
                                    {passwordMatch === 'nomatch' && (
                                        <div className="text-danger mb-3 ms-2">Passwords do not match.</div>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-user btn-block"
                                        disabled={!canSubmit || processing}
                                    >
                                        Register Account
                                    </button>
                                </form>

                                <hr />

                                <div className="text-center">
                                    <Link href={route('login')} className="small">
                                        Already have an account? Login!
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
