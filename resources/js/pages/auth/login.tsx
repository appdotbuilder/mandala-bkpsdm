import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/layouts/auth-layout';

type LoginForm = {
    nip: string;
    password: string;
    remember: boolean;
};

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

// Simple captcha generator
const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return { num1, num2, answer: num1 + num2 };
};

export default function Login({ status, canResetPassword }: LoginProps) {
    const { data, setData, post, processing, errors, reset } = useForm<Required<LoginForm>>({
        nip: '',
        password: '',
        remember: false,
    });

    const [captcha, setCaptcha] = useState(generateCaptcha());
    const [captchaInput, setCaptchaInput] = useState('');
    const [captchaError, setCaptchaError] = useState('');

    const refreshCaptcha = () => {
        setCaptcha(generateCaptcha());
        setCaptchaInput('');
        setCaptchaError('');
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        
        // Validate captcha
        if (parseInt(captchaInput) !== captcha.answer) {
            setCaptchaError('Jawaban captcha salah');
            refreshCaptcha();
            return;
        }

        setCaptchaError('');
        post(route('login'), {
            onFinish: () => reset('password'),
            onError: () => refreshCaptcha()
        });
    };

    return (
        <AuthLayout 
            title="🏛️ Login MANDALA BKPSDM" 
            description="Masukkan NIP dan password untuk mengakses sistem"
        >
            <Head title="Login" />

            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="nip">NIP (Nomor Induk Pegawai)</Label>
                        <Input
                            id="nip"
                            type="text"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="username"
                            value={data.nip}
                            onChange={(e) => setData('nip', e.target.value)}
                            placeholder="Masukkan NIP Anda"
                            minLength={3}
                        />
                        <InputError message={errors.nip} />
                        <p className="text-xs text-gray-500">NIP minimal 3 karakter</p>
                    </div>

                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            {canResetPassword && (
                                <TextLink href={route('password.request')} className="ml-auto text-sm" tabIndex={6}>
                                    Lupa password?
                                </TextLink>
                            )}
                        </div>
                        <Input
                            id="password"
                            type="password"
                            required
                            tabIndex={2}
                            autoComplete="current-password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Masukkan password"
                        />
                        <InputError message={errors.password} />
                    </div>

                    {/* Captcha */}
                    <div className="grid gap-2">
                        <Label htmlFor="captcha">Captcha Keamanan</Label>
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-100 border rounded px-4 py-2 font-mono text-lg font-bold text-blue-600">
                                {captcha.num1} + {captcha.num2} = ?
                            </div>
                            <Button 
                                type="button" 
                                variant="outline" 
                                size="sm"
                                onClick={refreshCaptcha}
                                tabIndex={5}
                            >
                                🔄 Refresh
                            </Button>
                        </div>
                        <Input
                            id="captcha"
                            type="number"
                            required
                            tabIndex={3}
                            value={captchaInput}
                            onChange={(e) => setCaptchaInput(e.target.value)}
                            placeholder="Masukkan hasil penjumlahan"
                        />
                        {captchaError && <div className="text-sm text-red-600">{captchaError}</div>}
                    </div>

                    <div className="flex items-center space-x-3">
                        <Checkbox
                            id="remember"
                            name="remember"
                            checked={data.remember}
                            onClick={() => setData('remember', !data.remember)}
                            tabIndex={4}
                        />
                        <Label htmlFor="remember">Ingat saya</Label>
                    </div>

                    <Button type="submit" className="mt-4 w-full" tabIndex={5} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        🔐 Masuk
                    </Button>
                </div>

                {/* Default Login Credentials Info */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Akun Default:</h4>
                    <div className="text-sm text-blue-800 space-y-1">
                        <div><strong>Superadmin:</strong> NIP: admin, Password: @Ptx4869</div>
                        <div><strong>Manager:</strong> NIP: manager, Password: @Ptx4869</div>
                        <div><strong>User:</strong> NIP: user, Password: @Ptx4869</div>
                    </div>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                    Belum punya akun?{' '}
                    <TextLink href={route('register')} tabIndex={7}>
                        Daftar sekarang
                    </TextLink>
                </div>
            </form>

            {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>}
        </AuthLayout>
    );
}